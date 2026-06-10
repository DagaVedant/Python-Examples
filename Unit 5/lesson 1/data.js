export default {
    unit: 5,
    lesson: 1,
    unitLessons: 4,
    unitTitle: "Functions",
    title: "Defining & Calling Functions",
    readTime: 5,

    goal: "In this lesson you will learn how to write your own reusable functions so you can run the same block of code whenever you need it without repeating yourself.",

    learn: [
        "Define a function with def",
        "Call a function by name",
        "Reuse the same code multiple times",
    ],

    idea: "A function is a named block of code that you define once and can run as many times as you like just by calling its name. This keeps your code organised and avoids copying the same lines over and over. Everything inside the function must be indented.",

    code: {
        filename: "lesson_5_1.py",
        lines: [
            `# Define a function`,
            `def greet():`,
            `    print("Hello!")`,
            `    print("Welcome to Python.")`,
            ``,
            `# Call it as many times as you want`,
            `greet()`,
            `greet()`,
            ``,
            `# Functions keep your code organised`,
            `def print_divider():`,
            `    print("-" * 30)`,
            ``,
            `print_divider()`,
            `print("Some content here")`,
            `print_divider()`,
        ],
        output: [
            "Hello!",
            "Welcome to Python.",
            "Hello!",
            "Welcome to Python.",
            "------------------------------",
            "Some content here",
            "------------------------------",
        ],
    },

    practice: [
        `Write a function called <code>print_banner()</code> that prints your name surrounded by a row of asterisks above and below it.`,
        `Write a function that prints a simple menu of three options. Call it twice to show how reuse works.`,
    ],

    quiz: {
        question: `When does the code inside a function actually run?`,
        options: [
            {text: "As soon as the def line is read", correct: false},
            {text: "Only when the function is called by name", correct: true},
            {text: "At the very end of the program automatically", correct: false},
            {text: "Every time Python reads through the file", correct: false},
        ],
        correct: "Correct! Defining a function just saves it, to run it you have to call it.",
        wrong: "Not quite. def stores the function. The code inside only runs when you call the function.",
    },

    project: {
        title: "Recipe Card",
        desc: "Write three functions: one that prints the recipe title, one that prints the list of ingredients, and one that prints the steps. Call all three in order to display a full recipe card.",
    },

    prev: {unit: 4, lesson: 4, title: "Loops & Decisions"},
    next: {unit: 5, lesson: 2, title: "Arguments & Parameters"},
};
