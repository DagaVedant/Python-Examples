export default {
    format: "v2",
    unit: 10,
    lesson: 2,
    unitLessons: 8,
    unitTitle: "Errors",
    title: "Reading Error Messages",
    readTime: 22,
    goal: "In this lesson you will learn how to read the parts of an error message to find what went wrong.",

    learn: [
        "Find the error type name",
        "Read the short description",
        "Look for the line that failed",
    ],

    idea: `An error message usually has: the <strong>type</strong> (like <code>NameError</code>), a short <strong>description</strong>, and often a <strong>line number</strong>.

Read top to bottom. The last part often points at the bad line. Fix that line first.`,

    code: {
        filename: "read_msg.py",
        lines: [
            `print("Reading an error message:")`,
            `print("1) Type: NameError")`,
            `print("2) Description: name is not defined")`,
            `print("3) Check the line with the typo")`,
        ],
        output: [
            "Reading an error message:",
            "1) Type: NameError",
            "2) Description: name is not defined",
            "3) Check the line with the typo",
        ],
    },

    changeOneLine: `In the editor above, change the example type to <code>ZeroDivisionError</code>. Press <strong>Run</strong>.`,

    code2: {
        filename: "spot.py",
        lines: [
            `n = 8`,
            `print(n)`,
            `# If we printed m instead, NameError would mention m`,
        ],
        output: [
            "8",
        ],
    },

    practice: [
        {
            text: `Print the three parts of an error message: type, description, line tip.`,
            starter: [
                "print(\"Type:\", )",
                "print()",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if three informative lines about reading errors print.`,
        },
        {
            text: `Fix the typo so the program prints 42.`,
            starter: [
                "answer = 42",
                "print(anser)"
            ].join("\n"),
            gradingNote: `Pass if 42 prints with no NameError.`,
        },
    ],

    quiz: [
        {
            question: `Which part names the kind of problem?`,
            options: [
                { text: `Only the blank lines`, correct: false },
                { text: `The error type (like NameError)`, correct: true },
                { text: `The file wallpaper`, correct: false },
                { text: `The mouse color`, correct: false },
            ],
            correct: `The type is the big clue word.`,
            wrong: `NameError, TypeError, etc.`,
        },
        {
            question: `Where do you often look to fix the bug?`,
            options: [
                { text: `A random other file`, correct: false },
                { text: `The line the message points to`, correct: true },
                { text: `Only comments`, correct: false },
                { text: `The internet cafe`, correct: false },
            ],
            correct: `Start at the reported line.`,
            wrong: `Line numbers guide you.`,
        },
        {
            question: `What does 'is not defined' usually hint?`,
            options: [
                { text: `A perfect program`, correct: false },
                { text: `A name typo or missing assignment`, correct: true },
                { text: `A full disk only`, correct: false },
                { text: `A sorted list`, correct: false },
            ],
            correct: `NameError descriptions often mean a bad name.`,
            wrong: `Check spelling of variables.`,
        },
    ],

    project: {
        title: "Message Decoder",
        desc: "Write a mini guide that prints how to read an error: type, description, line. Use clear labels.",
        starter: [
            "print(\"=== How to Read Errors ===\")",
            "print()",
            "print()",
            "print()"
        ].join("\n"),
    },

    prev: { unit: 10, lesson: 1, title: "What is an Error" },
    next: { unit: 10, lesson: 3, title: "Common Errors" },
};
