export default {
    format: "v2",
    unit: 10,
    lesson: 3,
    unitLessons: 8,
    unitTitle: "Errors",
    title: "Common Errors",
    readTime: 22,
    goal: "In this lesson you will recognize common errors: NameError, ZeroDivisionError, and TypeError.",

    learn: [
        "NameError: unknown name",
        "ZeroDivisionError: divide by zero",
        "TypeError: wrong types mixed",
    ],

    idea: `Three common errors:

<strong>NameError</strong> — you used a name Python does not know (often a typo).
<strong>ZeroDivisionError</strong> — you divided by zero.
<strong>TypeError</strong> — you mixed types that do not go together, like adding a number to text.`,

    code: {
        filename: "common.py",
        lines: [
            `print("NameError example: print(scor) when score exists")`,
            `print("ZeroDivisionError example: 10 / 0")`,
            `print("TypeError example: 5 + \\"pts\\"")`,
            `print("Fix the cause, then rerun")`,
        ],
        output: [
            "NameError example: print(scor) when score exists",
            "ZeroDivisionError example: 10 / 0",
            "TypeError example: 5 + \"pts\"",
            "Fix the cause, then rerun",
        ],
    },

    changeOneLine: `In the editor above, add a fifth print that says <code>"You can fix these!"</code>. Press <strong>Run</strong>.`,

    code2: {
        filename: "safe_math.py",
        lines: [
            `cookies = 12`,
            `friends = 3`,
            `print(cookies / friends)`,
            `print("Score: " + str(10))`,
        ],
        output: [
            "4.0",
            "Score: 10",
        ],
    },

    practice: [
        {
            text: `Fix the ZeroDivisionError by changing friends so the division works. Print the result.`,
            starter: [
                "cookies = 12",
                "friends = 0",
                "print(cookies / friends)"
            ].join("\n"),
            gradingNote: `Pass if division runs with non-zero friends and prints a number.`,
        },
        {
            text: `Fix the TypeError by casting the number with str before adding text.`,
            starter: [
                "print(5 + \" points\")"
            ].join("\n"),
            gradingNote: `Pass if output mixes 5 and points without TypeError (use str).`,
        },
    ],

    quiz: [
        {
            question: `Which error is a typo in a variable name?`,
            options: [
                { text: `ZeroDivisionError`, correct: false },
                { text: `NameError`, correct: true },
                { text: `HappyError`, correct: false },
                { text: `FileSmile`, correct: false },
            ],
            correct: `Unknown names raise NameError.`,
            wrong: `Check spelling.`,
        },
        {
            question: `Which error is 10 / 0?`,
            options: [
                { text: `NameError`, correct: false },
                { text: `ZeroDivisionError`, correct: true },
                { text: `TypeError`, correct: false },
                { text: `KeyError only`, correct: false },
            ],
            correct: `Division by zero is ZeroDivisionError.`,
            wrong: `Do not divide by zero.`,
        },
        {
            question: `Which error is 5 + "pts"?`,
            options: [
                { text: `NameError`, correct: false },
                { text: `TypeError`, correct: true },
                { text: `ZeroDivisionError`, correct: false },
                { text: `Syntax success`, correct: false },
            ],
            correct: `Mixing int and str with + causes TypeError.`,
            wrong: `Cast with str() or use commas in print.`,
        },
    ],

    project: {
        title: "Error Zoo",
        desc: "Print a one-line tip for NameError, ZeroDivisionError, and TypeError (three tips total).",
        starter: [
            "print(\"NameError tip:\", )",
            "print()",
            "print()"
        ].join("\n"),
    },

    prev: { unit: 10, lesson: 2, title: "Reading Error Messages" },
    next: { unit: 10, lesson: 4, title: "try" },
};
