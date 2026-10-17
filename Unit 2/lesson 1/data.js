export default {
    format: "v2",
    unit: 2,
    lesson: 1,
    unitLessons: 4,
    unitTitle: "Number Calculations & Data",
    title: "Arithmetic Operators",
    readTime: 30,

    goal: "In this lesson you will learn how Python does math with +, -, *, and /, and how parentheses change the order.",

    learn: [
        "Add, subtract, multiply, and divide",
        "Follow order of operations",
        "Store a calculation in a variable",
    ],

    idea: `Python can work like a calculator. You write numbers and operators, and Python works out the answer.

Use <code>+</code> to add, <code>-</code> to subtract, <code>*</code> to multiply, and <code>/</code> to divide.

Python follows the same order as maths class: multiply and divide before add and subtract. Put parentheses <code>()</code> around the part you want done first.`,

    code: {
        filename: "calculator.py",
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
            `# Store a calculation`,
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

    changeOneLine: `In the editor above, change <code>width = 5</code> to <code>width = 6</code>. Press <strong>Run</strong>. The last line should say <code>Area: 48</code>.`,

    code2: {
        filename: "perimeter.py",
        lines: [
            `length = 12`,
            `width = 7`,
            `perimeter = 2 * (length + width)`,
            `print("Perimeter:", perimeter)`,
            `print("Half length:", length / 2)`,
        ],
        output: [
            "Perimeter: 38",
            "Half length: 6.0",
        ],
    },

    practice: [
        {
            text: `A rectangle is length 12 and width 7. Store both in variables. Print the perimeter using <code>2 * (length + width)</code>.`,
            starter: [
                `length = 12`,
                `width = 7`,
                `# Calculate perimeter, then print it`,
                `perimeter = 0`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if length and width are used and the printed perimeter is 38 (formula 2*(length+width) or equivalent).`,
        },
        {
            text: `Write one print that uses at least three different operators (+, -, *, or /) and parentheses. The expression must run without an error.`,
            starter: [
                `# Use +, -, *, or / and parentheses`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if one print contains a math expression with at least three different operators from + - * / and uses parentheses, and it runs.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>print(3 + 4 * 2)</code> output?`,
            options: [
                { text: "14, because Python always goes left to right", correct: false },
                { text: "11, because multiply happens before add", correct: true },
                { text: "10", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "Multiply first: 4 * 2 = 8, then 3 + 8 = 11.",
            wrong: "Python multiplies before it adds, unless you use parentheses.",
        },
        {
            question: `What does <code>(3 + 4) * 2</code> equal?`,
            options: [
                { text: "11", correct: false },
                { text: "14", correct: true },
                { text: "24", correct: false },
                { text: "3", correct: false },
            ],
            correct: "Parentheses go first: 3 + 4 = 7, then 7 * 2 = 14.",
            wrong: "Do the part inside parentheses first, then multiply.",
        },
        {
            question: `Which symbol multiplies in Python?`,
            options: [
                { text: "x", correct: false },
                { text: "*", correct: true },
                { text: "×", correct: false },
                { text: "mul", correct: false },
            ],
            correct: "Use * for multiply in Python.",
            wrong: "Python uses * (asterisk) for multiplication, not x.",
        },
    ],

    project: {
        title: "Area Calculator",
        desc: "Finish the rectangle calculator. Use variables for length and width. Print the area and the perimeter.",
        starter: [
            `length = 10`,
            `width = 4`,
            `# Area = length * width`,
            `area = 0`,
            `print("Area:", area)`,
            ``,
            `# Perimeter = 2 * (length + width)`,
            `perimeter = 0`,
            `print("Perimeter:", perimeter)`,
        ].join("\n"),
    },

    prev: { unit: 1, lesson: 5, title: "Data Types & Casting" },
    next: { unit: 2, lesson: 2, title: "Integer vs Float Division" },
};
