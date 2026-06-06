const LESSON = {
    unit: 1,
    lesson: 4,
    unitTitle: "Getting Started with Python",
    title: "Input",
    readTime: 5,

    goal: "In this lesson you will learn how to ask the user a question while the program is running and then use their answer inside your code.",

    learn: [
        "Use input() to ask the user a question",
        "Store the user's answer in a variable",
        "Use the answer in your output",
    ],

    idea: "input() pauses the program and waits for the user to type something. Whatever they type comes back as text, which you can store in a variable and use later. The string you put inside input() is the prompt.",

    code: {
        filename: "lesson_1_4.py",
        lines: [
            `# Ask the user for their name`,
            `name = input("What is your name? ")`,
            `print("Hello,", name)`,
            ``,
            `# Ask a second question`,
            `city = input("What city are you from? ")`,
            `print(name, "is from", city)`,
        ],
        output: [
            "What is your name? Vedant",
            "Hello, Vedant",
            "What city are you from? Princeton",
            "Vedant is from Princeton",
        ],
    },

    practice: [
        `Ask the user for their favourite colour and print a sentence like: <code>Your favourite colour is blue.</code>`,
        `Ask the user for a noun and a verb, then print them in one sentence sentence.`,
    ],

    quiz: {
        question: `What type of value does <code>input()</code> always return?`,
        options: [
            {text: "An integer", correct: false},
            {text: "A decimal number", correct: false},
            {text: "A string (text)", correct: true},
            {text: "Whatever type the user types", correct: false},
        ],
        correct: "Correct! input() always returns a string, even if the user types a number.",
        wrong: "Not quite. input() always gives back a string no matter what the user types.",
    },

    project: {
        title: "Greeting Card",
        desc: "Ask the user for their name, age, and favourite animal. Then print a personalised greeting card that uses all three answers in a fun sentence.",
    },

    prev: {unit: 1, lesson: 3, title: "Variables", href: "../lesson 3/lesson 3.html"},
    next: {unit: 1, lesson: 5, title: "Data Types & Casting", href: "../lesson 5/lesson 5.html"},
};
