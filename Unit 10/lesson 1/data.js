export default {
    format: "v2",
    unit: 10,
    lesson: 1,
    unitLessons: 8,
    unitTitle: "Errors",
    title: "What is an Error",
    readTime: 20,
    goal: "In this lesson you will learn what an error is and that it is a clue, not a failure.",

    learn: [
        "An error means Python stopped on a problem",
        "Error messages name the kind of problem",
        "Errors help you fix the line",
    ],

    idea: `Sometimes Python cannot finish a line. It stops and shows an <strong>error</strong> — a message that names the problem.

Errors are not “you failed.” They are clues. Read the name, find the bad line, and fix it.`,

    code: {
        filename: "oops.py",
        lines: [
            `# This line has a typo — score is misspelled`,
            `score = 10`,
            `print(scor)`,
            ``,
            `# Python stops with a NameError`,
            `# NameError: name 'scor' is not defined`,
        ],
        output: [
            "NameError: name 'scor' is not defined",
        ],
    },

    changeOneLine: `In the editor above, change <code>print(scor)</code> to <code>print(score)</code>. Press <strong>Run</strong>. Output should show <code>10</code>.`,

    code2: {
        filename: "fixed.py",
        lines: [
            `score = 10`,
            `print(score)`,
            `print("Fixed!")`,
        ],
        output: [
            "10",
            "Fixed!",
        ],
    },

    practice: [
        {
            text: `Fix the NameError by printing the real variable name.`,
            hint: `Python stored the value in points, but print() uses a different spelling. Match the name exactly — same letters, same order.`,
            starterTip: `Change print(point) to print(points) so it matches the line above.`,
            starter: [
                "points = 5",
                "print(point)"
            ].join("\n"),
            gradingNote: `Pass if points prints 5 with no NameError.`,
        },
        {
            text: `Write a tiny program that runs with no error and prints Ready.`,
            hint: `The task wants one word in the output: Ready. Put it inside quotes inside print() — empty print() will not pass.`,
            starterTip: `Replace print() with print("Ready") and press Run. No red error text means success.`,
            starter: [
                "# No errors please",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if Ready (or similar) prints with no crash.`,
        },
    ],

    quiz: [
        {
            question: `What is an error in Python?`,
            options: [
                { text: `A gold sticker`, correct: false },
                { text: `A stop with a message about a problem`, correct: true },
                { text: `A faster computer`, correct: false },
                { text: `A new dictionary key`, correct: false },
            ],
            correct: `Errors pause the program and explain the issue.`,
            wrong: `Read the message — it is a clue.`,
        },
        {
            question: `Are errors only for 'bad' programmers?`,
            options: [
                { text: `Yes, only beginners`, correct: false },
                { text: `No — everyone sees errors while learning`, correct: true },
                { text: `Yes, forever`, correct: false },
                { text: `Errors mean quit coding`, correct: false },
            ],
            correct: `Errors are normal and useful.`,
            wrong: `Pros read errors too.`,
        },
        {
            question: `What should you do first when you see an error?`,
            options: [
                { text: `Delete all your code`, correct: false },
                { text: `Read the message and find the line`, correct: true },
                { text: `Close your eyes`, correct: false },
                { text: `Buy a new laptop`, correct: false },
            ],
            correct: `The message points you to the fix.`,
            wrong: `Start by reading carefully.`,
        },
    ],

    project: {
        title: "Error Mindset",
        desc: "Print three short lines: what an error is, that it is a clue, and one tip for fixing.",
        starter: [
            "print(\"An error is ___\")",
            "print()",
            "print()"
        ].join("\n"),
    },

    prev: { unit: 9, lesson: 8, title: "File Mini Project" },
    next: { unit: 10, lesson: 2, title: "Reading Error Messages" },
};
