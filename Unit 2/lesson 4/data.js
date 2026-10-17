export default {
    format: "v2",
    unit: 2,
    lesson: 4,
    unitLessons: 4,
    unitTitle: "Number Calculations & Data",
    title: "Math Library Basics",
    readTime: 35,

    goal: "In this lesson you will learn how to import Python's math toolbox and use it for square roots, powers, pi, and rounding up or down.",

    learn: [
        "Import the math module",
        "Use math.sqrt() and math.pow()",
        "Use math.pi, math.floor(), and math.ceil()",
    ],

    idea: `Python has a built-in <strong>math library</strong> with extra tools. You unlock it by writing <code>import math</code> at the top.

After that, call tools with a dot, like <code>math.sqrt(16)</code> for square root.

<code>math.pi</code> is the number pi. <code>math.floor()</code> rounds down to a whole number. <code>math.ceil()</code> rounds up.`,

    code: {
        filename: "math_tools.py",
        lines: [
            `import math`,
            ``,
            `# Square root`,
            `print(math.sqrt(16))`,
            ``,
            `# Power: 2 to the power of 8`,
            `print(math.pow(2, 8))`,
            ``,
            `# Circle area using pi`,
            `radius = 5`,
            `area = math.pi * radius ** 2`,
            `print("Circle area:", round(area, 2))`,
            ``,
            `# Floor (down) and ceil (up)`,
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

    changeOneLine: `In the editor above, change <code>radius = 5</code> to <code>radius = 10</code>. Press <strong>Run</strong>. Circle area should become about 314.16.`,

    code2: {
        filename: "triangle.py",
        lines: [
            `import math`,
            ``,
            `# Right triangle sides a and b`,
            `a = 3`,
            `b = 4`,
            `hyp = math.sqrt(math.pow(a, 2) + math.pow(b, 2))`,
            `print("Hypotenuse:", hyp)`,
            `print("Area:", (a * b) / 2)`,
        ],
        output: [
            "Hypotenuse: 5.0",
            "Area: 6.0",
        ],
    },

    practice: [
        {
            text: `A right triangle has shorter sides 6 and 8. Import math. Use <code>math.sqrt</code> and <code>math.pow</code> to print the hypotenuse.`,
            starter: [
                `import math`,
                ``,
                `a = 6`,
                `b = 8`,
                `# Hypotenuse = sqrt(a^2 + b^2)`,
                `hyp = 0`,
                `print("Hypotenuse:", hyp)`,
            ].join("\n"),
            gradingNote: `Pass if import math is present and hyp is computed with math.sqrt / math.pow (or ** 2) so the printed hypotenuse is 10.0.`,
        },
        {
            text: `Print the area of a circle for radius 3. Use <code>math.pi</code> and round to 2 decimals.`,
            starter: [
                `import math`,
                ``,
                `radius = 3`,
                `# area = pi * radius ** 2`,
                `area = 0`,
                `print(round(area, 2))`,
            ].join("\n"),
            gradingNote: `Pass if math.pi is used with radius 3 and printed area rounds to about 28.27.`,
        },
    ],

    quiz: [
        {
            question: `What must you write before you can use <code>math.sqrt()</code>?`,
            options: [
                { text: "include math", correct: false },
                { text: "import math", correct: true },
                { text: "use math", correct: false },
                { text: "Nothing — it always works", correct: false },
            ],
            correct: "import math loads the library so its tools are ready.",
            wrong: "Write import math at the top before calling math.sqrt().",
        },
        {
            question: `What does <code>math.floor(4.9)</code> return?`,
            options: [
                { text: "5", correct: false },
                { text: "4", correct: true },
                { text: "4.9", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "floor rounds down, so 4.9 becomes 4.",
            wrong: "floor goes down. ceil would go up to 5.",
        },
        {
            question: `What is <code>math.pow(2, 3)</code>?`,
            options: [
                { text: "5", correct: false },
                { text: "6", correct: false },
                { text: "8.0", correct: true },
                { text: "23", correct: false },
            ],
            correct: "pow(2, 3) means 2 × 2 × 2, which is 8.0.",
            wrong: "math.pow(base, power) multiplies the base by itself that many times.",
        },
    ],

    project: {
        title: "Triangle Solver",
        desc: "Finish the right-triangle solver. Use the math library to find the hypotenuse and the area. Print both rounded to 2 decimal places.",
        starter: [
            `import math`,
            ``,
            `a = 5`,
            `b = 12`,
            `# Hypotenuse from a and b`,
            `hyp = 0`,
            `# Triangle area = (a * b) / 2`,
            `area = 0`,
            `print("Hypotenuse:", round(hyp, 2))`,
            `print("Area:", round(area, 2))`,
        ].join("\n"),
    },

    prev: { unit: 2, lesson: 3, title: "Numbers from Input" },
    next: { unit: 3, lesson: 1, title: "Comparisons & Booleans" },
};
