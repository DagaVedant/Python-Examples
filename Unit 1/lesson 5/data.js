const LESSON = {
    unit: 1,
    lesson: 5,
    unitTitle: "Getting Started with Python",
    title: "Data Types & Casting",
    readTime: 6,

    goal: "In this lesson you will learn about the three main data types in Python and how to convert between them.",

    learn: [
        "How to differentiate between str, int, and float",
        "Understand why input() always returns a string",
        "Convert types using int() and float()",
    ],

    idea: "Every value in Python has a type. Text is a string (str), whole numbers are integers (int), and decimal numbers are floats (float). Because input() always returns a string, you have to convert it before you can do math, or otherwise known as casting.",

    code: {
        filename: "lesson_1_5.py",
        lines: [
            `# input() gives back a string — we cast it to do math`,
            `age_text = input("How old are you? ")`,
            `age = int(age_text)`,
            ``,
            `print("Next year you will be", age + 1)`,
            ``,
            `# Float casting for decimal numbers`,
            `price = float(input("Price per item: "))`,
            `qty = int(input("How many? "))`,
            `print("Total:", price * qty)`,
        ],
        output: [
            "How old are you? 14",
            "Next year you will be 15",
            "Price per item: 2.50",
            "How many? 3",
            "Total: 7.5",
        ],
    },

    practice: [
        `Ask the user for two numbers and print their sum. Make sure to cast both inputs so the + operator adds them instead of joining them as text.`,
        `Ask for a price and a quantity, then print the total cost rounded to 2 decimal places using <code>round()</code>.`,
    ],

    quiz: {
        question: `A user types <code>7</code> when asked by input(). What type is the result?`,
        options: [
            {text: "int, because they typed a whole number", correct: false},
            {text: "float, because all input is decimal", correct: false},
            {text: "str, because input() always returns text", correct: true},
            {text: "It depends on what the user types", correct: false},
        ],
        correct: "Correct! input() always returns a string — you must cast it to int or float before doing math.",
        wrong: "Not quite. input() always returns a string regardless of what the user types.",
    },

    project: {
        title: "Tip Calculator",
        desc: "Ask the user for a meal price and the tip percentage they want to leave. Calculate the tip amount and the total bill, then print both values.",
    },

    prev: {lesson: 4, title: "Input", href: "../lesson 4/lesson 4.html"},
    next: {lesson: 1, title: "Arithmetic Operators", href: "../../Unit 2/lesson 1/lesson 1.html"},
};
