const LESSON = {
    unit: 2,
    lesson: 4,
    unitLessons: 4,
    unitTitle: "Number Calculations & Data",
    title: "Math Library Basics",
    readTime: 5,

    goal: "In this lesson you will learn how to import Python's built-in math library and use it to do more advanced calculations like square roots, powers, and rounding.",

    learn: [
        "Import a module with import",
        "Use math.sqrt() and math.pow()",
        "Use math.pi and math.floor() / math.ceil()",
    ],

    idea: "Python comes with a math library full of useful tools that are not available by default. You unlock them by writing import math at the top of your program. After that you can call any of the library's functions using math.function_name(). Think of it like opening a maths toolbox that was sitting in a drawer.",

    code: {
        filename: "lesson_2_4.py",
        lines: [
            `import math`,
            ``,
            `# Square root`,
            `print(math.sqrt(16))`,
            ``,
            `# Power`,
            `print(math.pow(2, 8))`,
            ``,
            `# The constant pi`,
            `radius = 5`,
            `area = math.pi * radius ** 2`,
            `print("Circle area:", round(area, 2))`,
            ``,
            `# Floor and ceiling`,
            `print(math.floor(4.9))`,
            `print(math.ceil(4.1))`,
        ],
        output: [
            "4.0",
            "256.0",
            "Circle area: 78.54",
            "4",
            "5",
        ],
    },

    practice: [
        `Ask the user for the two shorter sides of a right-angled triangle. Use <code>math.sqrt()</code> and <code>math.pow()</code> to calculate and print the hypotenuse.`,
        `Print the area of a circle for three different radii: 3, 7, and 10. Use a variable for each.`,
    ],

    quiz: {
        question: `What must you write before you can use <code>math.sqrt()</code>?`,
        options: [
            {text: "include math", correct: false},
            {text: "import math", correct: true},
            {text: "use math", correct: false},
            {text: "Nothing, math functions are always available", correct: false},
        ],
        correct: "Correct! import math loads the library so all its functions become available.",
        wrong: "Not quite. You need to write import math at the top of your file first.",
    },

    project: {
        title: "Triangle Solver",
        desc: "Ask the user for the two shorter sides of a right-angled triangle. Use the math library to calculate the hypotenuse and the area. Print both answers rounded to 2 decimal places.",
    },

    prev: {unit: 2, lesson: 3, title: "Numbers from Input", href: "../lesson 3/lesson 3.html"},
    next: {unit: 3, lesson: 1, title: "Comparisons & Booleans", href: "../../Unit 3/lesson 1/lesson 1.html"},
};
