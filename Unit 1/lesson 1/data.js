const LESSON = {
    unit: 1,
    lesson: 1,
    unitLessons: 5,
    unitTitle: "Getting Started with Python",
    title: "Your First Program",
    readTime: 4,

    goal: "In this lesson you will run your very first Python program, learn how to display text on the screen, and write comments to explain your code.",

    learn: [
        "Run a Python program",
        "Use print() to display text",
        "Write comments using #",
    ],

    idea: "A program is just a list of instructions the computer follows from top to bottom. print() is how you make Python show something on the screen. A comment is a note you write for yourself. In Python, a comment is written using a #.",

    code: {
        filename: "lesson_1_1.py",
        lines: [
            `# This is my first program`,
            `print("Hello, world!")`,
            ``,
            `# You can print as many lines as you want`,
            `print("My name is Vedant.")`,
            `print("I am learning Python.")`,
        ],
        output: [
            "Hello, world!",
            "My name is Vedant.",
            "I am learning Python.",
        ],
    },

    practice: [
        `Write a Python program that prints three lines: your name, your age, and your favorite hobby.`,
        `Add comments to explain what each print() statement does.`
    ],

    quiz: {
        question: `What does <code>print("Hello World!")</code> do?`,
        options: [
            {text: "It saves the word Hello World! into the computer's memory", correct: false},
            {text: "It displays the word Hello World! on the screen", correct: true},
            {text: "It creates a variable called Hello World!", correct: false},
            {text: "It causes an error because Hello World! has no quotes", correct: false},
        ],
        correct: "Correct! print() displays whatever is inside the parentheses.",
        wrong: "Not quite. print() is used to display output on the screen.",
    },

    project: {
        title: "About Me Card",
        desc: "Write a program that prints a small 'About Me' card. Include your name, age, favourite subject, and one fun fact. Use comments to explain what each lines does.",
    },

    prev: null,
    next: {unit: 1, lesson: 2, title: "Output & Formatting", href: "../lesson 2/lesson 2.html"},
};