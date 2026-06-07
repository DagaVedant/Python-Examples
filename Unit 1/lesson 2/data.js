const LESSON = {
    unit: 1,
    lesson: 2,
    unitLessons: 5,
    unitTitle: "Getting Started with Python",
    title: "Output & Formatting",
    readTime: 5,

    goal: "In this lesson you will learn how to control exactly what gets printed on the screen, including combining values, spacing, and how to add quotes and apostrophes into the string.",

    learn: [
        "Print multiple values in one line",
        "Use a newline and blank lines",
        "Handle apostrophes and quotes inside strings",
    ],

    idea: "You can pass several things to print() separated by commas and it will put a space between them automatically. If you need a quote character inside your text, you can mix single and double quotes. A backslash lets you add special characters like a new line.",

    code: {
        filename: "lesson_1_2.py",
        lines: [
            `# Printing multiple values at once`,
            `print("Score:", 10, "points")`,
            ``,
            `# Using single quotes to include double quotes in text`,
            `print('She said "Python is great!"')`,
            ``,
            `# Apostrophe inside double quotes`,
            `print("It's a great day to code.")`,
            ``,
            `# Blank line using an empty print`,
            `print("Line one")`,
            `print()`,
            `print("Line three")`,
        ],
        output: [
            "Score: 10 points",
            'She said "Python is great!"',
            "It's a great day to code.",
            "Line one",
            "",
            "Line three",
        ],
    },

    practice: [
        `Print a mini scoreboard that shows two players and their scores on one line each, like: <code>Alice: 42 points</code>`,
        `Write a sentence that contains both an apostrophe and a word in double quotes.`,
    ],

    quiz: {
        question: `Which line prints <code>It's fun</code> without an error?`,
        options: [
            {text: `print('It's fun')`, correct: false},
            {text: `print("It's fun")`, correct: true},
            {text: `print(It's fun)`, correct: false},
            {text: `print("It"s fun")`, correct: false},
        ],
        correct: "Correct! Using double quotes on the outside lets you put an apostrophe inside without any problem.",
        wrong: "Not quite. You need to use the opposite type of quote on the outside so Python doesn't get confused.",
    },

    project: {
        title: "Receipt Printer",
        desc: "Write a program that prints a fake store receipt. Show at least three items with their prices, a blank line, and then a total at the bottom. Make it look neat using spacing.",
    },

    prev: {unit: 1, lesson: 1, title: "Your First Program", href: "../lesson 1/lesson 1.html"},
    next: {unit: 1, lesson: 3, title: "Variables", href: "../lesson 3/lesson 3.html"},
};
