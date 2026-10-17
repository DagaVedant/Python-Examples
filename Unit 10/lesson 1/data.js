export default {
    format: "v2",
    unit: 10,
    lesson: 1,
    unitLessons: 3,
    unitTitle: "Errors",
    title: "When Code Breaks",
    readTime: 30,

    goal: "In this lesson you will learn what happens when Python cannot run a line of code, how to read the error message, and how to fix common mistakes.",

    learn: [
        "Recognize when Python stops with an error",
        "Read NameError, ZeroDivisionError, and TypeError messages",
        "Fix the mistake so the program runs again",
    ],

    idea: `Sometimes Python cannot finish a line. It stops and shows an <strong>error</strong> — a message that names the problem and where it happened.

A <code>NameError</code> means you used a name Python does not know yet (often a typo). A <code>ZeroDivisionError</code> means you tried to divide by zero. A <code>TypeError</code> means you mixed types that do not go together, like adding a number to text.

Errors are not “you failed.” They are clues. Read the message, find the bad line, and fix it.`,

    code: {
        filename: "oops.py",
        lines: [
            `# This line has a typo — score is misspelled`,
            `score = 10`,
            `print(scor)`,
            ``,
            `# Python stops here with a NameError`,
            `# NameError: name 'scor' is not defined`,
        ],
        output: [
            "NameError: name 'scor' is not defined",
        ],
    },

    changeOneLine: `In the editor above, change <code>print(scor)</code> to <code>print(score)</code>. Press <strong>Run</strong>. The output should show <code>10</code> instead of a NameError.`,

    code2: {
        filename: "fixed.py",
        lines: [
            `# Fixed NameError — use the real name`,
            `score = 10`,
            `print(score)`,
            ``,
            `# Fixed ZeroDivisionError — do not divide by 0`,
            `cookies = 12`,
            `friends = 3`,
            `print(cookies / friends)`,
            ``,
            `# Fixed TypeError — convert text to a number first`,
            `age_text = "11"`,
            `age = int(age_text)`,
            `print(age + 1)`,
        ],
        output: [
            "10",
            "4.0",
            "12",
        ],
    },

    practice: [
        {
            text: `This code has a NameError. Fix the typo so it prints the player's points.`,
            starter: [
                `points = 50`,
                `# Fix the name so this prints 50`,
                `print(point)`,
            ].join("\n"),
            gradingNote: `Pass if print uses points (the correct variable name) and the program prints 50 with no NameError.`,
        },
        {
            text: `This code tries to divide by zero. Change the bottom number so the program prints a real answer (not an error).`,
            starter: [
                `apples = 20`,
                `baskets = 0`,
                `# Change baskets so this works`,
                `print(apples / baskets)`,
            ].join("\n"),
            gradingNote: `Pass if baskets is a non-zero number and the program prints a division result with no ZeroDivisionError.`,
        },
    ],

    quiz: [
        {
            question: `What does a <code>NameError</code> usually mean?`,
            options: [
                { text: "You divided by zero", correct: false },
                { text: "You used a name Python does not know", correct: true },
                { text: "You forgot a colon after if", correct: false },
                { text: "Your computer ran out of memory", correct: false },
            ],
            correct: "NameError means that name was never created — often a typo.",
            wrong: "NameError is about an unknown name, not dividing by zero or missing colons.",
        },
        {
            question: `Which line causes a <code>ZeroDivisionError</code>?`,
            options: [
                { text: `print(10 / 2)`, correct: false },
                { text: `print(10 / 0)`, correct: true },
                { text: `print(0 / 10)`, correct: false },
                { text: `print(10 + 0)`, correct: false },
            ],
            correct: "Dividing by zero is not allowed, so 10 / 0 raises ZeroDivisionError.",
            wrong: "Only dividing by zero causes ZeroDivisionError. 0 / 10 is fine (it is 0).",
        },
        {
            question: `Why does <code>print(5 + "hi")</code> cause a <code>TypeError</code>?`,
            options: [
                { text: "Because hi is misspelled", correct: false },
                { text: "Because you cannot add a number and text together", correct: true },
                { text: "Because print cannot show text", correct: false },
                { text: "Because 5 is too small", correct: false },
            ],
            correct: "Numbers and text are different types, so + cannot mix them that way.",
            wrong: "TypeError here means the types do not work together with +.",
        },
    ],

    project: {
        title: "Error Detective",
        desc: "Three bugs hide below. Fix each one so the program prints three friendly lines and never crashes.",
        starter: [
            `# Bug 1: NameError — fix the typo`,
            `lives = 3`,
            `print("Lives:", live)`,
            ``,
            `# Bug 2: ZeroDivisionError — change the 0`,
            `total = 100`,
            `teams = 0`,
            `print("Each team:", total / teams)`,
            ``,
            `# Bug 3: TypeError — turn the text into a number first`,
            `level_text = "5"`,
            `print("Next level:", level_text + 1)`,
        ].join("\n"),
    },

    prev: { unit: 9, lesson: 3, title: "Working with File Contents" },
    next: { unit: 10, lesson: 2, title: "try / except" },
};
