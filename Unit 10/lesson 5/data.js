export default {
    format: "v2",
    unit: 10,
    lesson: 5,
    unitLessons: 8,
    unitTitle: "Errors",
    title: "except",
    readTime: 22,
    goal: "In this lesson you will learn how except catches an error from try so the program can continue.",

    learn: [
        "Pair except with try",
        "Run except when try fails",
        "Continue after the pair",
    ],

    idea: `After <code>try</code>, write <code>except:</code>. If the <code>try</code> block errors, Python jumps to <code>except</code> and runs that code instead of crashing.

After the pair finishes, the rest of the program can still run.`,

    code: {
        filename: "safe_divide.py",
        lines: [
            `cookies = 12`,
            `friends = 0`,
            `try:`,
            `    each = cookies / friends`,
            `    print("Each friend gets", each)`,
            `except:`,
            `    print("Oops — cannot divide by zero!")`,
            `print("Game continues...")`,
        ],
        output: [
            "Oops — cannot divide by zero!",
            "Game continues...",
        ],
    },

    changeOneLine: `In the editor above, change <code>friends = 0</code> to <code>friends = 3</code>. Press <strong>Run</strong>. The try path should succeed.`,

    code2: {
        filename: "score_check.py",
        lines: [
            `score_text = "fifty"`,
            `try:`,
            `    score = int(score_text)`,
            `    print("Score:", score)`,
            `except:`,
            `    print("That score is not a number — using 0.")`,
            `    score = 0`,
            `print("Ready with score", score)`,
        ],
        output: [
            "That score is not a number — using 0.",
            "Ready with score 0",
        ],
    },

    practice: [
        {
            text: `Wrap the division in try/except. If it fails, print a friendly message. Always print Done at the end.`,
            starter: [
                "a = 10",
                "b = 0",
                "print(a / b)",
                "print(\"Done\")"
            ].join("\n"),
            gradingNote: `Pass if except catches the error, friendly message prints, and Done still prints.`,
        },
        {
            text: `Try int("hello"). On failure set number to 0 and print a short message. Then print number.`,
            starter: [
                "text = \"hello\"",
                "number = None",
                "# try/except",
                "",
                "print(number)"
            ].join("\n"),
            gradingNote: `Pass if number becomes 0 via except and is printed.`,
        },
    ],

    quiz: [
        {
            question: `When does except run?`,
            options: [
                { text: `Always before try`, correct: false },
                { text: `When the try block hits an error`, correct: true },
                { text: `Only if try succeeds`, correct: false },
                { text: `Never`, correct: false },
            ],
            correct: `except handles the failure path.`,
            wrong: `Errors jump to except.`,
        },
        {
            question: `Can code after try/except still run?`,
            options: [
                { text: `Never`, correct: false },
                { text: `Yes, if the error was caught`, correct: true },
                { text: `Only with files`, correct: false },
                { text: `Only with classes`, correct: false },
            ],
            correct: `Catching lets the program continue.`,
            wrong: `That is why try/except helps.`,
        },
        {
            question: `What if you omit except after try?`,
            options: [
                { text: `It becomes faster`, correct: false },
                { text: `Python will not accept incomplete try`, correct: true },
                { text: `It deletes errors`, correct: false },
                { text: `It auto-fixes bugs`, correct: false },
            ],
            correct: `try needs a matching except (or finally).`,
            wrong: `Pair them.`,
        },
    ],

    project: {
        title: "Safe Divider",
        desc: "Ask no input — set a and b in code. try divide; except print a message; then print Finished.",
        starter: [
            "a = 20",
            "b = 0",
            "try:",
            "    print(a / b)",
            "except:",
            "    print()",
            "print(\"Finished\")"
        ].join("\n"),
    },

    prev: { unit: 10, lesson: 4, title: "try" },
    next: { unit: 10, lesson: 6, title: "Friendly Messages" },
};
