export default {
    format: "v2",
    unit: 2,
    lesson: 9,
    unitLessons: 10,
    unitTitle: "Number Calculations & Data",
    title: "The math Module",
    readTime: 23,

    goal: "In this lesson you will learn how to import the math module and use a few of its tools.",

    learn: [
        "Import math with import math",
        "Call tools like math.sqrt()",
        "Use math.pi for circle math",
    ],

    idea: `A <strong>module</strong> is a ready-made toolkit. The <code>math</code> module has extra number tools.

Write <code>import math</code> at the top. Then use a name like <code>math.sqrt(16)</code> for square root, or <code>math.pi</code> for the number π.

You must import before you use it.`,

    code: {
        filename: "math_intro.py",
        lines: [
            `import math`,
            ``,
            `# Square root`,
            `print(math.sqrt(16))`,
            `print(math.sqrt(25))`,
            ``,
            `# Pi`,
            `print(math.pi)`,
            ``,
            `# Circle area ≈ pi * r * r`,
            `r = 3`,
            `area = math.pi * r * r`,
            `print("Area:", area)`,
        ],
        output: [
            "4.0",
            "5.0",
            "3.141592653589793",
            "Area: 28.274333882308138",
        ],
    },

    changeOneLine: `In the editor above, change <code>r = 3</code> to <code>r = 2</code>. Press <strong>Run</strong>. Area should be about <code>12.566...</code>.`,

    code2: {
        filename: "powers.py",
        lines: [
            `import math`,
            `print(math.pow(2, 3))`,
            `print(math.sqrt(9))`,
            `print("Pi is about", round(math.pi, 2))`,
        ],
        output: [
            "8.0",
            "3.0",
            "Pi is about 3.14",
        ],
    },

    practice: [
        {
            text: `Import math and print the square root of 81.`,
            starter: [
                `# Import then print sqrt of 81`,
                ``,
            ].join("\n"),
            gradingNote: `Pass if import math is present and math.sqrt(81) prints 9.0.`,
        },
        {
            text: `Use math.pi and radius 5 to print a circle's circumference: 2 * pi * r.`,
            starter: [
                `import math`,
                `r = 5`,
                `circ = `,
                `print("Circumference:", circ)`,
            ].join("\n"),
            gradingNote: `Pass if circ uses 2 * math.pi * r (or equivalent) and prints a float near 31.4.`,
        },
    ],

    quiz: [
        {
            question: `What must you write before using math.sqrt?`,
            options: [
                { text: "open math", correct: false },
                { text: "import math", correct: true },
                { text: "load numbers", correct: false },
                { text: "Nothing", correct: false },
            ],
            correct: "Import the module first: import math.",
            wrong: "Without import math, math.sqrt will fail.",
        },
        {
            question: `What does <code>math.sqrt(36)</code> return?`,
            options: [
                { text: "6.0", correct: true },
                { text: "36", correct: false },
                { text: "18", correct: false },
                { text: "1296", correct: false },
            ],
            correct: "Square root of 36 is 6.0.",
            wrong: "sqrt finds the number that times itself makes 36.",
        },
        {
            question: `What is <code>math.pi</code>?`,
            options: [
                { text: "A string of text", correct: false },
                { text: "The number π (about 3.14159…)", correct: true },
                { text: "A print command", correct: false },
                { text: "Always exactly 3", correct: false },
            ],
            correct: "math.pi stores a precise value of π.",
            wrong: "pi is the circle constant, roughly 3.14.",
        },
    ],

    project: {
        title: "Square Garden",
        desc: "A square garden has area 49. Import math, use math.sqrt to find the side length, and print it.",
        starter: [
            `import math`,
            `area = 49`,
            `side = `,
            `print("Side length:", side)`,
        ].join("\n"),
    },

    prev: { unit: 2, lesson: 8, title: "Multi-step Math" },
    next: { unit: 2, lesson: 10, title: "Useful math Tools" },
};
