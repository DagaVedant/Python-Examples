export default {
    format: "v2",
    unit: 11,
    lesson: 1,
    unitLessons: 3,
    unitTitle: "Imports",
    title: "Using import",
    readTime: 30,

    goal: "In this lesson you will learn how to import a built-in module and call its tools with a dot, like math.sqrt or random.randint.",

    learn: [
        "Write import to load a module",
        "Call tools with module.name()",
        "Use import random with a seed for practice rolls",
    ],

    idea: `Python comes with ready-made toolboxes called <strong>modules</strong>. You unlock one by writing <code>import</code> at the top, like <code>import math</code> or <code>import random</code>.

After that, use a <strong>dot</strong> to reach a tool: <code>math.sqrt(16)</code> or <code>random.randint(1, 6)</code>.

<code>random</code> picks numbers for games. In lessons we call <code>random.seed(1)</code> first so the “random” numbers stay the same every Run — that makes checking answers fair.`,

    code: {
        filename: "import_demo.py",
        lines: [
            `import math`,
            `import random`,
            ``,
            `# Same “random” numbers every time in this lesson`,
            `random.seed(1)`,
            ``,
            `print(math.sqrt(16))`,
            `print("Dice:", random.randint(1, 6))`,
            `print("Dice:", random.randint(1, 6))`,
        ],
        output: [
            "4.0",
            "Dice: 2",
            "Dice: 5",
        ],
    },

    changeOneLine: `In the editor above, change <code>math.sqrt(16)</code> to <code>math.sqrt(25)</code>. Press <strong>Run</strong>. The first line of output should say <code>5.0</code>.`,

    code2: {
        filename: "three_rolls.py",
        lines: [
            `import random`,
            ``,
            `random.seed(1)`,
            ``,
            `print("Roll 1:", random.randint(1, 6))`,
            `print("Roll 2:", random.randint(1, 6))`,
            `print("Roll 3:", random.randint(1, 6))`,
        ],
        output: [
            "Roll 1: 2",
            "Roll 2: 5",
            "Roll 3: 1",
        ],
    },

    practice: [
        {
            text: `Import math. Print the square root of 81 using <code>math.sqrt</code>.`,
            starter: [
                `import math`,
                ``,
                `# Print the square root of 81`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if import math is present and the program prints 9.0 using math.sqrt(81) (or equivalent).`,
        },
        {
            text: `Import random, set the seed to 1, then print two dice rolls from 1 to 6.`,
            starter: [
                `import random`,
                ``,
                `random.seed(1)`,
                `# Print two randint rolls (1 to 6)`,
                `print()`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if import random and random.seed(1) are used, and two random.randint(1, 6) calls print 2 then 5.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>import math</code> do?`,
            options: [
                { text: "Deletes the math module", correct: false },
                { text: "Loads the math module so you can use its tools", correct: true },
                { text: "Prints every math answer", correct: false },
                { text: "Creates a new empty file", correct: false },
            ],
            correct: "import loads the module. After that you can call tools like math.sqrt().",
            wrong: "import unlocks a module’s tools — it does not print answers by itself.",
        },
        {
            question: `After <code>import random</code>, which call rolls a number from 1 to 6?`,
            options: [
                { text: "random(1, 6)", correct: false },
                { text: "randint.random(1, 6)", correct: false },
                { text: "random.randint(1, 6)", correct: true },
                { text: "import.randint(1, 6)", correct: false },
            ],
            correct: "Use the module name, a dot, then the tool: random.randint(1, 6).",
            wrong: "The pattern is module.tool — so random.randint(1, 6).",
        },
        {
            question: `Why do these lessons often call <code>random.seed(1)</code>?`,
            options: [
                { text: "So the random numbers stay the same each Run for practice", correct: true },
                { text: "So Python runs twice as fast", correct: false },
                { text: "So import is no longer needed", correct: false },
                { text: "So math.sqrt stops working", correct: false },
            ],
            correct: "A seed makes the sequence of random numbers repeatable, which helps when checking answers.",
            wrong: "seed fixes the starting point so “random” output matches every time.",
        },
    ],

    project: {
        title: "Dice Roller",
        desc: "Finish a tiny dice roller. Keep the seed at 1. Roll two six-sided dice, print each roll, then print their sum.",
        starter: [
            `import random`,
            ``,
            `random.seed(1)`,
            ``,
            `# Roll two dice (1 to 6)`,
            `d1 = 0`,
            `d2 = 0`,
            `print("Die 1:", d1)`,
            `print("Die 2:", d2)`,
            `print("Sum:", d1 + d2)`,
        ].join("\n"),
    },

    prev: { unit: 10, lesson: 3, title: "Catching Specific Errors" },
    next: { unit: 11, lesson: 2, title: "from … import" },
};
