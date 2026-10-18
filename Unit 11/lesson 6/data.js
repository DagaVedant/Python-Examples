export default {
    format: "v2",
    unit: 11,
    lesson: 6,
    unitLessons: 8,
    unitTitle: "Imports",
    title: "math Tools",
    readTime: 22,
    goal: "In this lesson you will practice useful math module tools: sqrt, floor, ceil, and pi.",

    learn: [
        "math.sqrt for square roots",
        "floor and ceil for rounding direction",
        "math.pi for circle math",
    ],

    idea: `<code>math.sqrt(x)</code> square root. <code>math.floor(x)</code> rounds down. <code>math.ceil(x)</code> rounds up. <code>math.pi</code> is the pi constant.

These tools shine in games, geometry, and score displays.`,

    code: {
        filename: "math_tools.py",
        lines: [
            `import math`,
            `print(math.sqrt(49))`,
            `print(math.floor(3.7))`,
            `print(math.ceil(3.2))`,
            `print(round(math.pi, 2))`,
        ],
        output: [
            "7.0",
            "3",
            "4",
            "3.14",
        ],
    },

    changeOneLine: `In the editor above, change <code>math.sqrt(49)</code> to <code>math.sqrt(9)</code>. Press <strong>Run</strong>. First line should be 3.0.`,

    code2: {
        filename: "circle.py",
        lines: [
            `import math`,
            `r = 2`,
            `area = math.pi * r * r`,
            `print("Area:", round(area, 2))`,
        ],
        output: [
            "Area: 12.57",
        ],
    },

    practice: [
        {
            text: `Import math. Print ceil(2.1) and floor(2.9).`,
            hint: `First print math.ceil(2.1). Rounds up to 3. Second print math.floor(2.9). Rounds down to 2.`,
            starterTip: `Try print(math.ceil(2.1)) then print(math.floor(2.9)).`,
            starter: [
                "import math",
                "print()",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if 3 and 2 print.`,
        },
        {
            text: `Print a circle area for r=3 using math.pi, rounded to 2 decimals.`,
            hint: `Finish area = math.pi * r * r (r is already 3). In print(), use round(area, 2) so you get two decimal places.`,
            starterTip: `area = math.pi * r * r then print(round(area, 2)), about 28.27.`,
            starter: [
                "import math",
                "r = 3",
                "area = ",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if area uses pi*r*r and prints about 28.27.`,
        },
    ],

    quiz: [
        {
            question: `What does math.floor(3.7) return?`,
            options: [
                { text: `4`, correct: false },
                { text: `3`, correct: true },
                { text: `3.7`, correct: false },
                { text: `37`, correct: false },
            ],
            correct: `floor rounds down.`,
            wrong: `Toward smaller integer.`,
        },
        {
            question: `What does math.ceil(3.2) return?`,
            options: [
                { text: `3`, correct: false },
                { text: `4`, correct: true },
                { text: `3.2`, correct: false },
                { text: `0`, correct: false },
            ],
            correct: `ceil rounds up.`,
            wrong: `Toward larger integer.`,
        },
        {
            question: `Which gives a square root?`,
            options: [
                { text: `math.pi`, correct: false },
                { text: `math.sqrt`, correct: true },
                { text: `random.seed`, correct: false },
                { text: `math.floor only`, correct: false },
            ],
            correct: `sqrt is square root.`,
            wrong: `math.sqrt(25) is 5.0.`,
        },
    ],

    project: {
        title: "Math Pocket Card",
        desc: "Print sqrt(121), floor(8.9), ceil(8.1), and round(math.pi, 3) with labels.",
        starter: [
            "import math",
            "print(\"sqrt:\", )",
            "print()",
            "print()",
            "print()"
        ].join("\n"),
    },

    prev: { unit: 11, lesson: 5, title: "random" },
    next: { unit: 11, lesson: 7, title: "Combining Modules" },
};
