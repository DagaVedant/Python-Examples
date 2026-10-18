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

function countPrintCalls(code: string): number {
  return (stripComments(code).match(/\bprint\s*\(/g) ?? []).length;
}

function hasEmptyPrint(code: string): boolean {
  return /\bprint\s*\(\s*\)/.test(stripComments(code));
}

function nonEmptyPrintCount(code: string): number {
  const body = stripComments(code);
  const calls = body.match(/\bprint\s*\((?:[^()]*|\([^()]*\))*\)/g) ?? [];
  return calls.filter((c) => !/\bprint\s*\(\s*\)$/.test(c.trim())).length;
}

function starterHasBlanks(starter: string): boolean {
  return (
    /\bprint\s*\(\s*\)/.test(starter) ||
    /___/.test(starter) ||
    /(^|\n)\s*\.\.\.\s*($|\n)/.test(starter) ||
    /=\s*$/m.test(starter)
  );
}

function codeStillIncomplete(code: string, starter: string): boolean {
  if (/\bprint\s*\(\s*\)/.test(starter) && hasEmptyPrint(code)) return true;
  if (/___/.test(starter) && /___/.test(code)) return true;
  if (/(^|\n)\s*\.\.\.\s*($|\n)/.test(starter) && /(^|\n)\s*\.\.\.\s*($|\n)/.test(code)) {
    return true;
  }
  if (/=\s*$/m.test(starter) && /=\s*$/m.test(code)) return true;
  return false;
}

/** Pull expected output snippets from gradingNote (numbers and short phrases). */
function expectedOutputTokens(note: string): string[] {
  const tokens: string[] = [];
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
  return [...new Set(tokens.filter((t) => t.length > 0))];
}

function requiredConstructs(note: string): string[] {
  const needed: string[] = [];
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
  return needed;
}

function requiredPrintCount(note: string): number | null {
  const m =
    note.match(/\b(one|two|three|four|1|2|3|4)\s+print(?:\(\))?\s*(?:calls?|lines?)?/i) ??
    note.match(/\bat least (two|three|four|2|3|4)\b/i);
  if (!m) return null;
  const word = m[1].toLowerCase();
  const map: Record<string, number> = { one: 1, two: 2, three: 3, four: 4 };
  return map[word] ?? Number(word);
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

function codeHasConstruct(code: string, construct: string): boolean {
  const body = stripComments(code);
  switch (construct) {
    case 'for':
      return /\bfor\b/.test(body);
    case 'while':
      return /\bwhile\b/.test(body);
    case 'def':
      return /\bdef\b/.test(body);
    case 'import':
      return /\bimport\b/.test(body);
    case 'return':
      return /\breturn\b/.test(body);
    case 'or':
      return /\bor\b/.test(body);
    case 'and':
      return /\band\b/.test(body);
    case 'not':
      return /\bnot\b/.test(body);
    case 'append':
      return /\.append\s*\(/.test(body);
    case '.items()':
      return /\.items\s*\(/.test(body);
    case 'split':
      return /\.split\s*\(/.test(body);
    case 'seed':
      return /\bseed\s*\(/.test(body);
    case 'range':
      return /\brange\s*\(/.test(body);
    case 'elif':
      return /\belif\b/.test(body);
    case 'except':
      return /\bexcept\b/.test(body);
    case 'try':
      return /\btry\b/.test(body);
    case 'with open':
      return /\bwith\s+open\s*\(/.test(body);
    case 'in':
      return /\bin\b/.test(body);
    case '/':
      return /(?<![=!<>])\/(?![=/])/.test(body);
    default:
      return body.includes(construct);
  }
}

/**
 * Local heuristic grade from gradingNote + starter expectations.
 * Does not call AI.
 */
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

  if (starterHasBlanks(starter) && codeStillIncomplete(src, starter)) {
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

  const printsNeeded = requiredPrintCount(note);
  if (printsNeeded != null) {
    const got = /non-empty|display|show/i.test(note)
      ? nonEmptyPrintCount(src)
      : countPrintCalls(src);
    if (got < printsNeeded) {
      failures.push(`need at least ${printsNeeded} print() call${printsNeeded === 1 ? '' : 's'}`);
    }
  }

  for (const c of requiredConstructs(note)) {
    if (c === 'in' && !/\b'[^']+'\s+in\b|"[^"]+"\s+in\b|\bin (list|bag|dict|for)\b/i.test(note)) {
      continue;
    }
    if (!codeHasConstruct(src, c)) {
      failures.push(`missing ${c}`);
    }
  }

  const tokens = expectedOutputTokens(note);
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
