export default {
    format: "v2",
    unit: 1,
    lesson: 9,
    unitLessons: 10,
    unitTitle: "Getting Started with Python",
    title: "Using Answers",
    readTime: 22,

    goal: "In this lesson you will learn how to ask a question with input(), store the answer, and use it in your program.",

    learn: [
        "Ask a question with input()",
        "Store the answer in a variable",
        "Use that answer in print()",
    ],

    idea: `<code>input()</code> pauses the program and asks the person to type something. Whatever they type comes back as text (a string). You store it in a variable, then use it later.

When you press <strong>Run</strong> here, a box will pop up for your answer. Type something and press OK. The prompt text from <code>input("...")</code> also shows in the output.`,

    code: {
        filename: "hello_input.py",
        lines: [
            `name = input("What is your name? ")`,
            `print("Hello,", name)`,
            ``,
            `city = input("What city are you from? ")`,
            `print(name, "is from", city)`,
        ],
        output: [
            "What is your name? ",
            "Vedant",
            "Hello, Vedant",
            "What city are you from? ",
            "Princeton",
            "Vedant is from Princeton",
        ],
    },

    changeOneLine: `Press <strong>Run</strong>. When the box appears, type your own name, then your city. Check that the greeting uses what you typed.`,

    code2: {
        filename: "favorites.py",
        lines: [
            `colour = input("Favourite colour? ")`,
            `animal = input("Favourite animal? ")`,
            `print("Favourite colour:", colour)`,
            `print("Favourite animal:", animal)`,
            `print(colour, "is great for a", animal)`,
        ],
        output: [
            "Favourite colour? ",
            "blue",
            "Favourite animal? ",
            "panda",
            "Favourite colour: blue",
            "Favourite animal: panda",
            "blue is great for a panda",
        ],
    },

    practice: [
        {
            text: `Ask for a favourite colour with input(), then print a sentence like <code>Your favourite colour is blue.</code>`,
            hint: `input() already saves the answer in colour. Build a full sentence in print that includes the colour variable.`,
            starterTip: `Try: print("Your favourite colour is", colour, ".") — or put words and colour together with commas in one print().`,
            starter: [
                `colour = input("Favourite colour? ")`,
                `# Print a full sentence using colour`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if input() is used to get a colour (or colour is clearly from input) and print builds a sentence about favourite colour using that variable. Empty answers from grading stdin are OK if the code structure is correct.`,
        },
        {
            text: `Ask for a noun and a verb with two input() calls, then print them in one sentence.`,
            hint: `Both answers are stored in noun and verb. One print() should use both names so the sentence mentions what the user typed.`,
            starterTip: `Example: print("The", noun, verb, "quickly.") — swap in your own words, but keep noun and verb in the print.`,
            starter: [
                `noun = input("Noun? ")`,
                `verb = input("Verb? ")`,
                `# One print that uses both variables`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if two input() calls store noun and verb and one print uses both variables in a sentence.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>input()</code> do?`,
            options: [
                { text: "It pauses and lets the user type an answer", correct: true },
                { text: "It always prints Hello", correct: false },
                { text: "It only works with numbers", correct: false },
                { text: "It deletes variables", correct: false },
            ],
            correct: "input() waits for the person to type, then gives that text back.",
            wrong: "input() is for asking the user to type an answer.",
        },
        {
            question: `What type of value does <code>input()</code> always return?`,
            options: [
                { text: "An integer", correct: false },
                { text: "A decimal number", correct: false },
                { text: "A string (text)", correct: true },
                { text: "Whatever type you want", correct: false },
            ],
            correct: "input() always returns a string, even if the user typed digits.",
            wrong: "input() always gives back a string.",
        },
        {
            question: `Why store the result of input() in a variable?`,
            options: [
                { text: "So you can use the answer later in the program", correct: true },
                { text: "So Python runs faster", correct: false },
                { text: "So comments work", correct: false },
                { text: "Variables are required for every print", correct: false },
            ],
            correct: "Storing the answer lets later lines reuse it.",
            wrong: "The variable keeps the typed answer for later lines.",
        },
    ],

    project: {
        title: "Greeting Card",
        desc: "Ask for name, age, and favourite animal with input(). Print a personalised greeting that uses all three answers.",
        starter: [
            `name = input("Name? ")`,
            `age = input("Age? ")`,
            `animal = input("Favourite animal? ")`,
            `print("===== GREETING CARD =====")`,
            `# Use all three variables in your message`,
            `print()`,
            `print()`,
        ].join("\n"),
    },

    prev: { unit: 1, lesson: 8, title: "Changing Variables" },
    next: { unit: 1, lesson: 10, title: "Data Types & Casting" },
};
