export default {
    format: "v2",
    unit: 11,
    lesson: 3,
    unitLessons: 3,
    unitTitle: "Imports",
    title: "Useful Standard Modules",
    readTime: 30,

    goal: "In this lesson you will tour handy tools from math and random so you can mix square roots, rounding, and chance in one small program.",

    learn: [
        "Reuse math tools: sqrt, pi, floor, ceil, pow",
        "Reuse random tools: randint, choice, seed",
        "Combine both modules in one mini toolkit",
    ],

    idea: `Python’s <strong>standard library</strong> is a set of modules that ship with Python. You do not install them — you just import them.

Two favorites for games and school math:

<ul>
<li><code>math</code> — <code>sqrt</code>, <code>pi</code>, <code>floor</code>, <code>ceil</code>, <code>pow</code></li>
<li><code>random</code> — <code>randint</code>, <code>choice</code>, and <code>seed</code> for practice</li>
</ul>

You can mix styles: <code>import math</code> for several math tools, and <code>from random import randint, seed</code> when you only need a few random names.`,

    code: {
        filename: "toolkit_tour.py",
        lines: [
            `import math`,
            `import random`,
            ``,
            `random.seed(1)`,
            ``,
            `print("Pi:", round(math.pi, 2))`,
            `print("Floor:", math.floor(7.8))`,
            `print("Ceil:", math.ceil(7.2))`,
            `print("Power:", math.pow(2, 5))`,
            `print("Chance:", random.randint(1, 100))`,
            `print("Pick:", random.choice(["rock", "paper", "scissors"]))`,
        ],
        output: [
            "Pi: 3.14",
            "Floor: 7",
            "Ceil: 8",
            "Power: 32.0",
            "Chance: 18",
            "Pick: scissors",
        ],
    },

    changeOneLine: `In the editor above, change <code>math.pow(2, 5)</code> to <code>math.pow(2, 8)</code>. Press <strong>Run</strong>. The Power line should say <code>256.0</code>.`,

    code2: {
        filename: "party_kit.py",
        lines: [
            `from math import sqrt`,
            `from random import choice, seed`,
            ``,
            `seed(1)`,
            ``,
            `print("Root:", sqrt(81))`,
            `print("Snack:", choice(["chips", "fruit", "cookie"]))`,
        ],
        output: [
            "Root: 9.0",
            "Snack: chips",
        ],
    },

    practice: [
        {
            text: `Import math. Print pi rounded to 2 decimals, then the floor of 9.9.`,
            starter: [
                `import math`,
                ``,
                `# Print round(math.pi, 2)`,
                `print()`,
                `# Print math.floor(9.9)`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if math.pi rounded to 2 decimals prints 3.14 and math.floor(9.9) prints 9.`,
        },
        {
            text: `Import random, seed with 1, print a randint from 1 to 100, then a choice from the colors list.`,
            starter: [
                `import random`,
                ``,
                `random.seed(1)`,
                `colors = ["red", "green", "blue"]`,
                `# Print randint 1–100, then choice(colors)`,
                `print()`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if seed(1) is used, then random.randint(1, 100) prints 18 and random.choice(colors) prints blue (second random call after that seed).`,
        },
    ],

    quiz: [
        {
            question: `What is the standard library?`,
            options: [
                { text: "Modules that come with Python that you can import", correct: true },
                { text: "A bookstore for coding novels", correct: false },
                { text: "Only games you download from the internet", correct: false },
                { text: "A list of errors Python prints", correct: false },
            ],
            correct: "The standard library is built in — import math or import random when you need those tools.",
            wrong: "Standard modules ship with Python. You import them; you do not install them for this course.",
        },
        {
            question: `Which module is best for <code>sqrt</code> and <code>pi</code>?`,
            options: [
                { text: "random", correct: false },
                { text: "math", correct: true },
                { text: "print", correct: false },
                { text: "list", correct: false },
            ],
            correct: "math holds number tools like sqrt and pi.",
            wrong: "Use the math module for square roots and pi.",
        },
        {
            question: `You want one random item from a list. Which tool fits?`,
            options: [
                { text: "math.floor", correct: false },
                { text: "math.pi", correct: false },
                { text: "random.choice", correct: true },
                { text: "math.pow", correct: false },
            ],
            correct: "random.choice picks one item from a list or other sequence.",
            wrong: "choice lives in random — it picks one value from the list you give it.",
        },
    ],

    project: {
        title: "Mini Toolkit",
        desc: "Finish a mini toolkit that uses both modules. Keep seed at 1. Print a square root, a rounded pi, a dice roll (1–6), and a random team name from a short list.",
        starter: [
            `import math`,
            `import random`,
            ``,
            `random.seed(1)`,
            ``,
            `teams = ["Comets", "Rockets", "Stars"]`,
            ``,
            `# Square root of 64`,
            `print("Root:", )`,
            `# Pi rounded to 2 decimals`,
            `print("Pi:", )`,
            `# Dice 1–6`,
            `print("Dice:", )`,
            `# Random team`,
            `print("Team:", )`,
        ].join("\n"),
    },

    prev: { unit: 11, lesson: 2, title: "from … import" },
    next: { unit: 12, lesson: 1, title: "Classes & Objects" },
};
