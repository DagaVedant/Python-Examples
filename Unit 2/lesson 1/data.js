const LESSON = {
    unit: 2,
    lesson: 1,
    unitTitle: "Number Calculations & Data",
    title: "Arithmetic Operators",
    readTime: 5,

    goal: "In this lesson you will learn how to do math in Python using operators, and the order of operations.",

    learn: [
        "Use +, -, *, and / to do math",
        "Understand order of operations",
        "Print calculated results",
    ],

    idea: "Python works like a calculator. You can write math expressions directly in your code and Python will compute them. The order of operations is the same as in maths class (PEMDAS): Parentheses, Exponents, Multiplication and Division (left to right), Addition and Subtraction (left to right).",

    code: {
        filename: "lesson_2_1.py",
        lines: [
            `# Basic arithmetic`,
            `print(10 + 3)`,
            `print(10 - 3)`,
            `print(10 * 3)`,
            `print(10 / 3)`,
            ``,
            `# Order of operations`,
            `print(3 + 4 * 2)`,
            `print((3 + 4) * 2)`,
            ``,
            `# Using variables in math`,
            `length = 8`,
            `width = 5`,
            `area = length * width`,
            `print("Area:", area)`,
        ],
        output: [
            "13",
            "7",
            "30",
            "3.3333333333333335",
            "11",
            "14",
            "Area: 40",
        ],
    },

    practice: [
        `Calculate and print the perimeter of a rectangle with length 12 and width 7. Store the values in variables first.`,
        `Write one expression that uses at least three different operators and parentheses to control the order, then print the result.`,
    ],

    quiz: {
        question: `What does <code>print(3 + 4 * 2)</code> output?`,
        options: [
            {text: "14, because Python reads left to right", correct: false},
            {text: "11, because multiplication happens before addition", correct: true},
            {text: "10, because + and * cancel each other out", correct: false},
            {text: "It causes an error", correct: false},
        ],
        correct: "Correct! Multiplication comes before addition, so 4 * 2 = 8 first, then 3 + 8 = 11.",
        wrong: "Not quite. Python follows order of operations so multiplication runs before addition.",
    },

    project: {
        title: "Area Calculator",
        desc: "Ask the user for the length and width of a rectangle. Calculate and print the area and the perimeter. Store everything in clearly named variables.",
    },

    prev: {lesson: 5, title: "Data Types & Casting", href: "../../Unit 1/lesson 5/lesson 5.html"},
    next: {lesson: 2, title: "Integer vs Float Division", href: "../lesson 2/lesson 2.html"},
};
