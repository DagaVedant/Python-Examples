import type { PracticeTask } from '../types/lesson';

export type LocalGradeResult = {
  passed: boolean;
  feedback: string;
};

function stripComments(code: string): string {
  return code.replace(/#.*$/gm, '');
}

function normalize(s: string): string {
  return s.replace(/\r\n/g, '\n').trim();
}

function hasEmptyPrint(code: string): boolean {
  return /\bprint\s*\(\s*\)/.test(stripComments(code));
}

function outputContains(output: string, token: string): boolean {
  const out = output.trim();
  if (!out) return false;
  if (/^\d+\.\d+$/.test(token)) {
    const n = Number(token);
    if (!Number.isNaN(n)) {
      const lines = out.split(/\n/);
      return lines.some((line) => {
        const found = line.match(/-?\d+\.\d+|-?\d+/g) ?? [];
        return found.some((x) => Math.abs(Number(x) - n) < 1e-9);
      });
    }
  }
  if (/^\d+$/.test(token)) {
    return new RegExp(`(^|[^\\d.])${token}([^\\d.]|$)`).test(out);
  }
  return out.toLowerCase().includes(token.toLowerCase());
}

export function gradePracticeLocally(
  task: PracticeTask,
  code: string,
  output: string,
  runError: string | null,
): LocalGradeResult {
  const starter = task.starter ?? '';
  const note = (task.gradingNote ?? '').trim();
  const src = normalize(code);

  if (runError) {
    return {
      passed: false,
      feedback: 'Your code hit an error. Fix the message above, then press Run again.',
    };
  }

  if (
    (/\bprint\s*\(\s*\)/.test(starter) ||
      /___/.test(starter) ||
      /(^|\n)\s*\.\.\.\s*($|\n)/.test(starter) ||
      /=\s*$/m.test(starter)) &&
    ((/\bprint\s*\(\s*\)/.test(starter) && hasEmptyPrint(src)) ||
      (/___/.test(starter) && /___/.test(src)) ||
      (/(^|\n)\s*\.\.\.\s*($|\n)/.test(starter) && /(^|\n)\s*\.\.\.\s*($|\n)/.test(src)) ||
      (/=\s*$/m.test(starter) && /=\s*$/m.test(src)))
  ) {
    return {
      passed: false,
      feedback: 'Finish the starter blanks first, then press Run.',
    };
  }

  if (!note) {
    const changed = normalize(src) !== normalize(starter);
    if (!changed) {
      return { passed: false, feedback: 'Change the starter code to solve the task, then press Run.' };
    }
    if (hasEmptyPrint(src)) {
      return { passed: false, feedback: 'Fill in every empty print() before finishing.' };
    }
    return { passed: true, feedback: 'Looks good so far. Nice work!' };
  }

  const failures: string[] = [];

  if (/empty print\(\) fails/i.test(note) && hasEmptyPrint(src)) {
    failures.push('empty print() is not allowed');
  }

  let printsNeeded: number | null = null;
  {
    const m =
      note.match(/\b(one|two|three|four|1|2|3|4)\s+print(?:\(\))?\s*(?:calls?|lines?)?/i) ??
      note.match(/\bat least (two|three|four|2|3|4)\b/i);
    if (m) {
      const word = m[1].toLowerCase();
      const map: Record<string, number> = { one: 1, two: 2, three: 3, four: 4 };
      printsNeeded = map[word] ?? Number(word);
    }
  }
  if (printsNeeded != null) {
    let got: number;
    if (/non-empty|display|show/i.test(note)) {
      const body = stripComments(src);
      const calls = body.match(/\bprint\s*\((?:[^()]*|\([^()]*\))*\)/g) ?? [];
      got = calls.filter((c) => !/\bprint\s*\(\s*\)$/.test(c.trim())).length;
    } else {
      got = (stripComments(src).match(/\bprint\s*\(/g) ?? []).length;
    }
    if (got < printsNeeded) {
      failures.push(`need at least ${printsNeeded} print() call${printsNeeded === 1 ? '' : 's'}`);
    }
  }

  const needed: string[] = [];
  {
    const checks: Array<[RegExp, string]> = [
      [/\bfor\b/i, 'for'],
      [/\bwhile\b/i, 'while'],
      [/\bdef\b/i, 'def'],
      [/\bimport\b/i, 'import'],
      [/\breturn\b/i, 'return'],
      [/\bor\b/i, 'or'],
      [/\band\b/i, 'and'],
      [/\bnot\b/i, 'not'],
      [/\bappend\b/i, 'append'],
      [/\bitems\s*\(\s*\)/i, '.items()'],
      [/\bsplit\b/i, 'split'],
      [/\bseed\s*\(/i, 'seed'],
      [/\brange\b/i, 'range'],
      [/\belif\b/i, 'elif'],
      [/\bexcept\b/i, 'except'],
      [/\btry\b/i, 'try'],
      [/\bwith\s+open\b/i, 'with open'],
      [/\bin\b/i, 'in'],
    ];
    for (const [re, label] of checks) {
      if (re.test(note)) needed.push(label);
    }
    if (/(?:using|with)\s+\/|\/\s*(?:operator|so|for)/i.test(note) || /\busing \/\./i.test(note)) {
      needed.push('/');
    }
  }
  for (const c of needed) {
    if (c === 'in' && !/\b'[^']+'\s+in\b|"[^"]+"\s+in\b|\bin (list|bag|dict|for)\b/i.test(note)) {
      continue;
    }
    const body = stripComments(src);
    let has: boolean;
    switch (c) {
      case 'for':
        has = /\bfor\b/.test(body);
        break;
      case 'while':
        has = /\bwhile\b/.test(body);
        break;
      case 'def':
        has = /\bdef\b/.test(body);
        break;
      case 'import':
        has = /\bimport\b/.test(body);
        break;
      case 'return':
        has = /\breturn\b/.test(body);
        break;
      case 'or':
        has = /\bor\b/.test(body);
        break;
      case 'and':
        has = /\band\b/.test(body);
        break;
      case 'not':
        has = /\bnot\b/.test(body);
        break;
      case 'append':
        has = /\.append\s*\(/.test(body);
        break;
      case '.items()':
        has = /\.items\s*\(/.test(body);
        break;
      case 'split':
        has = /\.split\s*\(/.test(body);
        break;
      case 'seed':
        has = /\bseed\s*\(/.test(body);
        break;
      case 'range':
        has = /\brange\s*\(/.test(body);
        break;
      case 'elif':
        has = /\belif\b/.test(body);
        break;
      case 'except':
        has = /\bexcept\b/.test(body);
        break;
      case 'try':
        has = /\btry\b/.test(body);
        break;
      case 'with open':
        has = /\bwith\s+open\s*\(/.test(body);
        break;
      case 'in':
        has = /\bin\b/.test(body);
        break;
      case '/':
        has = /(?<![=!<>])\/(?![=/])/.test(body);
        break;
      default:
        has = body.includes(c);
    }
    if (!has) {
      failures.push(`missing ${c}`);
    }
  }

  const tokens: string[] = [];
  {
    const quoted = note.match(/"([^"]{1,40})"|'([^']{1,40})'/g) ?? [];
    for (const q of quoted) {
      tokens.push(q.slice(1, -1));
    }
    const nums = note.match(/(?<![\w.])\d+\.\d+|(?<![\w.])\d+(?![\w.])/g) ?? [];
    for (const n of nums) {
      if (/^(1|2|3|4)$/.test(n) && /\b(print|call|time|loop|item)/i.test(note)) {
        continue;
      }
      tokens.push(n);
    }
    const phrase =
      note.match(
        /\b(?:prints?|shows?|output is|becomes?)\s+([A-Za-z][A-Za-z0-9 _!.-]{1,40}?)(?:\.|$|,|;| and | then )/i,
      ) ?? null;
    if (phrase?.[1]) {
      const cleaned = phrase[1].replace(/\s+/g, ' ').trim();
      if (cleaned && !/^(a |the |using |with |from )/i.test(cleaned)) {
        tokens.push(cleaned);
      }
    }
    const unique = [...new Set(tokens.filter((t) => t.length > 0))];
    tokens.length = 0;
    tokens.push(...unique);
  }
  const outputFocused = /\b(print|output|shows?|becomes?)\b/i.test(note);
  if (tokens.length && outputFocused) {
    const missing = tokens.filter((t) => !outputContains(output, t));
    const allowMiss = tokens.length >= 4 ? Math.floor(tokens.length / 3) : 0;
    if (missing.length > allowMiss) {
      failures.push('output does not match what the task asks for');
    }
  } else if (tokens.length && !outputFocused) {
    const anyHit = tokens.some((t) => outputContains(output, t) || src.includes(t));
    if (!anyHit) {
      failures.push('expected result not found yet');
    }
  }

  const twice = note.match(/called at least (twice|two times)|at least twice/i);
  if (twice) {
    const defs = (src.match(/\bdef\s+(\w+)\s*\(/g) ?? []).map((d) =>
      d.replace(/\bdef\s+/, '').replace(/\s*\($/, ''),
    );
    const name = defs[0];
    if (name) {
      const callRe = new RegExp(`\\b${name}\\s*\\(`, 'g');
      const calls = (src.match(callRe) ?? []).length;
      if (calls < 3) {
        failures.push(`call ${name}() at least twice`);
      }
    }
  }

  if (failures.length) {
    return {
      passed: false,
      feedback: `Not quite yet: ${failures[0]}. Check the task and try again.`,
    };
  }

  return { passed: true, feedback: 'Pass. Your practice looks correct.' };
}
