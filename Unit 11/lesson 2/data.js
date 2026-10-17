export default {
    format: "v2",
    unit: 11,
    lesson: 2,
    unitLessons: 3,
    unitTitle: "Imports",
    title: "from … import",
    readTime: 30,

    goal: "In this lesson you will learn how to import just the names you need with from … import, so you can call sqrt or choice without writing the module name each time.",

    learn: [
        "Use from module import name",
        "Call imported names without a module prefix",
        "Import more than one name in one line",
    ],

    idea: `Sometimes you only need one tool. Instead of <code>import math</code> and then <code>math.sqrt</code>, you can write:

<code>from math import sqrt</code>

Then you call <code>sqrt(16)</code> with no <code>math.</code> in front.

You can pull several names at once: <code>from random import choice, seed</code>. Remember: if you use <code>from random import choice</code>, you still need <code>seed</code> (or <code>import random</code>) if you want a fixed practice seed.`,

    code: {
        filename: "from_import.py",
        lines: [
            `from math import sqrt`,
            `from random import choice, seed`,
            ``,
            `seed(1)`,
            ``,
            `print(sqrt(36))`,
            `print(choice(["red", "blue", "green"]))`,
        ],
        output: [
            "6.0",
            "red",
        ],
    },

    changeOneLine: `In the editor above, change <code>sqrt(36)</code> to <code>sqrt(49)</code>. Press <strong>Run</strong>. The first line of output should say <code>7.0</code>.`,

    code2: {
        filename: "pick_one.py",
        lines: [
            `from random import randint, seed`,
            ``,
            `seed(1)`,
            ``,
            `print("Lucky:", randint(1, 10))`,
            `print("Lucky:", randint(1, 10))`,
        ],
        output: [
            "Lucky: 3",
            "Lucky: 10",
        ],
    },

    practice: [
        {
            text: `Import <code>sqrt</code> from math. Print the square root of 100.`,
            starter: [
                `from math import sqrt`,
                ``,
                `# Print sqrt of 100`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if from math import sqrt is used and the program prints 10.0 via sqrt(100), without requiring math.sqrt.`,
        },
        {
            text: `Import <code>choice</code> and <code>seed</code> from random. Seed with 1, then print a random pet from the list.`,
            starter: [
                `from random import choice, seed`,
                ``,
                `seed(1)`,
                `pets = ["cat", "dog", "fish"]`,
                `# Print one random pet`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if from random import choice, seed (or equivalent) is used, seed(1) runs, and choice(pets) prints cat.`,
        },
    ],

    quiz: [
        {
            question: `After <code>from math import sqrt</code>, which call is correct?`,
            options: [
                { text: "math.sqrt(9)", correct: false },
                { text: "sqrt(9)", correct: true },
                { text: "import.sqrt(9)", correct: false },
                { text: "from.sqrt(9)", correct: false },
            ],
            correct: "from import brings the name in directly, so you call sqrt(9).",
            wrong: "You imported the name sqrt itself — call sqrt(9), not math.sqrt(9).",
        },
        {
            question: `What does <code>from random import choice, seed</code> do?`,
            options: [
                { text: "Imports only choice; seed is ignored", correct: false },
                { text: "Imports both choice and seed so you can use both names", correct: true },
                { text: "Imports the whole random module as choice", correct: false },
                { text: "Deletes choice and seed", correct: false },
            ],
            correct: "A comma lets you import several names from the same module in one line.",
            wrong: "You can list multiple names after import, separated by commas.",
        },
        {
            question: `Which line imports only <code>pi</code> from math?`,
            options: [
                { text: "import math.pi", correct: false },
                { text: "from math import pi", correct: true },
                { text: "import pi from math", correct: false },
                { text: "math = pi", correct: false },
            ],
            correct: "from math import pi pulls just that name into your program.",
            wrong: "The pattern is from module import name — so from math import pi.",
        },
    ],

    project: {
        title: "Lucky Numbers",
        desc: "Build a lucky-number picker. Import randint and seed from random. Seed with 1. Print five lucky numbers from 1 to 40.",
        starter: [
            `from random import randint, seed`,
            ``,
            `seed(1)`,
            ``,
            `print("Your lucky numbers:")`,
            `# Print five numbers from 1 to 40`,
            `print()`,
            `print()`,
            `print()`,
            `print()`,
            `print()`,
        ].join("\n"),
    },

    prev: { unit: 11, lesson: 1, title: "Using import" },
    next: { unit: 11, lesson: 3, title: "Useful Standard Modules" },
};
