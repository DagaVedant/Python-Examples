const LESSON = {
    unit: 2,
    lesson: 2,
    unitTitle: "Number Calculations & Data",
    title: "Integer vs Float Division",
    readTime: 5,

    goal: "In this lesson you will learn the difference between regular division, integer division, and the remainder operator, and when to use each one.",

    learn: [
        "Use / for a decimal result",
        "Use // to get a whole number result",
        "Use % to find the remainder",
    ],

    idea: "Python has three division operators. A single slash / always gives you a decimal answer. A double slash // throws away the decimal and gives you only the whole number. The percent sign % gives you what is left over after dividing (the remainder or modulus).",

    code: {
        filename: "lesson_2_2.py",
        lines: [
            `# Regular division — always gives a float`,
            `print(7 / 2)`,
            ``,
            `# Integer division — drops the decimal`,
            `print(7 // 2)`,
            ``,
            `# Remainder / modulo`,
            `print(7 % 2)`,
            ``,
            `# Practical example: splitting a bill`,
            `total = 25`,
            `people = 4`,
            `each = total // people`,
            `left = total % people`,
            `print("Each person pays:", each)`,
            `print("Leftover:", left)`,
        ],
        output: [
            "3.5",
            "3",
            "1",
            "Each person pays: 6",
            "Leftover: 1",
        ],
    },

    practice: [
        `You have 100 sweets to share equally among 7 people. Print how many each person gets and how many are left over.`,
        `Use the % operator to check whether a number the user types is even or odd. Print <code>Even</code> or <code>Odd</code>.`,
    ],

    quiz: {
        question: `What does <code>print(17 // 5)</code> output?`,
        options: [
            {text: "3.4, because 17 divided by 5 is 3.4", correct: false},
            {text: "3, because // keeps only the whole number", correct: true},
            {text: "2, because it rounds down to the nearest even", correct: false},
            {text: "It causes an error because // is not valid", correct: false},
        ],
        correct: "Correct! &nbsp; // is integer division so it discards the decimal, so 17 // 5 = 3.",
        wrong: "Not quite. &nbsp; // gives the whole-number part of the division result only.",
    },

    project: {
        title: "Bill Splitter",
        desc: "Ask the user for a total restaurant bill and the number of people splitting it. Print how much each person owes as a whole number and how much change is left over.",
    },

    prev: {lesson: 1, title: "Arithmetic Operators", href: "../lesson 1/lesson 1.html"},
    next: {lesson: 3, title: "Numbers from Input", href: "../lesson 3/lesson 3.html"},
};
