export default {
    format: "v2",
    unit: 1,
    lesson: 9,
    unitLessons: 10,
    unitTitle: "Getting Started with Python",
    title: "Using Answers",
    readTime: 22,

    goal: "In this lesson you will learn how programs use answers stored in variables to personalise output.",

    learn: [
        "Store an answer in a variable",
        "Reuse that answer in print()",
        "Pretend answers when live typing is not available",
    ],

    idea: `Programs often use an <strong>answer</strong> — something a person chose — later in the program. You store that answer in a variable, then print with it.

On a real computer, a program might ask a question and wait for typing. In this website, we <strong>pretend</strong> the answer by putting it in a variable. The idea is the same: the answer lives in a variable, then you use it.`,

    code: {
        filename: "hello_answer.py",
        lines: [
            `# Pretend the user answered with this name:`,
            `name = "Vedant"`,
            `print("Hello,", name)`,
            ``,
            `# Pretend another answer:`,
            `city = "Princeton"`,
            `print(name, "is from", city)`,
        ],
        output: [
            "Hello, Vedant",
            "Vedant is from Princeton",
        ],
    },

    changeOneLine: `In the editor above, change <code>name = "Vedant"</code> to your own name (keep the quotes). Press <strong>Run</strong>. Both lines that use <code>name</code> should update.`,

    code2: {
        filename: "favorites.py",
        lines: [
            `# Pretend answers from the user`,
            `colour = "blue"`,
            `animal = "panda"`,
            `print("Favourite colour:", colour)`,
            `print("Favourite animal:", animal)`,
            `print(colour, "is great for a", animal)`,
        ],
        output: [
            "Favourite colour: blue",
            "Favourite animal: panda",
            "blue is great for a panda",
        ],
    },

    practice: [
        {
            text: `Pretend the user answered with a favourite colour. Store it in a variable and print a sentence like <code>Your favourite colour is blue.</code>`,
            starter: [
                `# Pretend the user typed a colour`,
                `colour = "green"`,
                `# Print a full sentence using colour`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if a colour variable is set to a non-empty string and print uses that variable in a sentence about favourite colour.`,
        },
        {
            text: `Pretend the user gave a noun and a verb. Store both, then print them in one sentence.`,
            starter: [
                `noun = "dragon"`,
                `verb = "flies"`,
                `# One print that uses both variables`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if noun and verb variables exist and one print uses both variable names in a sentence.`,
        },
    ],

    quiz: [
        {
            question: `Why do we store an answer in a variable?`,
            options: [
                { text: "So we can use the answer later in the program", correct: true },
                { text: "So Python runs faster", correct: false },
                { text: "So comments work", correct: false },
                { text: "Variables are required for every print", correct: false },
            ],
            correct: "Storing the answer lets you reuse it in print and other lines.",
            wrong: "The point of the variable is to keep the answer so later lines can use it.",
        },
        {
            question: `In this website lesson, why do we write <code>name = "Sam"</code> instead of waiting for typing?`,
            options: [
                { text: "Variables cannot hold text", correct: false },
                { text: "We pretend the typed answer, because live typing is not available here yet", correct: true },
                { text: "print() cannot use variables", correct: false },
                { text: "Answers must always be numbers", correct: false },
            ],
            correct: "We simulate the answer with a variable. The idea matches a real program that waits for typing.",
            wrong: "Here we pretend the answer because the page cannot pause for typing yet.",
        },
        {
            question: `If colour = "red" and you print("I like", colour), what shows?`,
            options: [
                { text: "I like colour", correct: false },
                { text: "I like red", correct: true },
                { text: "An error", correct: false },
                { text: "Only red with no other words", correct: false },
            ],
            correct: "print uses the value inside the variable: red.",
            wrong: "The variable name is not printed as the word colour — its value is.",
        },
    ],

    project: {
        title: "Greeting Card",
        desc: "Pretend answers for name, age, and favourite animal. Print a personalised greeting that uses all three.",
        starter: [
            `name = "Riley"`,
            `age = "11"`,
            `animal = "otter"`,
            `print("===== GREETING CARD =====")`,
            `# Use all three variables in your message`,
            `print()`,
            `print()`,
        ].join("\n"),
    },

    prev: { unit: 1, lesson: 8, title: "Changing Variables" },
    next: { unit: 1, lesson: 10, title: "Data Types & Casting" },
};
