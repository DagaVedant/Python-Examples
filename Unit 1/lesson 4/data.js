export default {
    format: "v2",
    unit: 1,
    lesson: 4,
    unitLessons: 5,
    unitTitle: "Getting Started with Python",
    title: "Input",
    readTime: 30,

    goal: "In this lesson you will learn how programs ask a question, store the answer, and use that answer later.",

    learn: [
        "What input() does in a real Python program",
        "Store an answer in a variable",
        "Use the answer in your output",
    ],

    idea: `In a real Python program on a computer, <code>input()</code> pauses and waits for the person to type. Whatever they type comes back as text (a string), and you store it in a variable.

In this website, typing into a popup is not available yet. So we <strong>pretend</strong> the user typed an answer by putting it in a variable. The idea is the same: the answer lives in a variable, then you print with it.`,

    code: {
        filename: "hello_input.py",
        lines: [
            `# On a real computer this would be:`,
            `# name = input("What is your name? ")`,
            `# Here we pretend the user typed Vedant:`,
            `name = "Vedant"`,
            `print("Hello,", name)`,
            ``,
            `# Pretend the user typed Princeton:`,
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
        filename: "favorite.py",
        lines: [
            `# Pretend answers from the user`,
            `colour = "blue"`,
            `animal = "panda"`,
            `print("Favourite colour:", colour)`,
            `print("Favourite animal:", animal)`,
            `print(colour, "is a great colour for a", animal)`,
        ],
        output: [
            "Favourite colour: blue",
            "Favourite animal: panda",
            "blue is a great colour for a panda",
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
            question: `What type of value does <code>input()</code> always return?`,
            options: [
                { text: "An integer", correct: false },
                { text: "A decimal number", correct: false },
                { text: "A string (text)", correct: true },
                { text: "Whatever type the user types", correct: false },
            ],
            correct: "input() always returns a string, even if the user typed digits.",
            wrong: "input() always gives back a string, no matter what was typed.",
        },
        {
            question: `Why do we store the answer in a variable?`,
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
            question: `In this website lesson, why do we write <code>name = "Sam"</code> instead of <code>input()</code>?`,
            options: [
                { text: "input() is not real Python", correct: false },
                { text: "We pretend the typed answer, because live typing is not available here yet", correct: true },
                { text: "Variables cannot hold text from input()", correct: false },
                { text: "print() cannot use input()", correct: false },
            ],
            correct: "We simulate the typed answer with a variable. On a real computer you would use input().",
            wrong: "input() is real Python. Here we pretend the answer because the page cannot pause for typing yet.",
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

    prev: { unit: 1, lesson: 3, title: "Variables" },
    next: { unit: 1, lesson: 5, title: "Data Types & Casting" },
};
