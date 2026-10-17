export default {
    format: "v2",
    unit: 11,
    lesson: 8,
    unitLessons: 8,
    unitTitle: "Imports",
    title: "Mini Toolkit",
    readTime: 25,
    goal: "In this lesson you will build a tiny toolkit that mixes import styles and useful tools.",

    learn: [
        "Choose import vs from import",
        "Seed random in toolkit demos",
        "Ship a small multi-tool script",
    ],

    idea: `Mini toolkit time! Combine <code>import math</code>, <code>import random</code>, and maybe <code>from math import sqrt</code> for a favorite.

Always <code>random.seed(1)</code> in lesson demos. Print a short menu of results so it feels like a pocket utility.`,

    code: {
        filename: "toolkit.py",
        lines: [
            `import math`,
            `import random`,
            `from math import sqrt`,
            `random.seed(1)`,
            `print("=== Mini Toolkit ===")`,
            `print("sqrt(36):", sqrt(36))`,
            `print("floor(4.8):", math.floor(4.8))`,
            `print("dice:", random.randint(1, 6))`,
            `print("dice:", random.randint(1, 6))`,
        ],
        output: [
            "=== Mini Toolkit ===",
            "sqrt(36): 6.0",
            "floor(4.8): 4",
            "dice: 2",
            "dice: 5",
        ],
    },

    changeOneLine: `In the editor above, change <code>sqrt(36)</code> to <code>sqrt(49)</code>. Press <strong>Run</strong>. That line should show 7.0.`,

    code2: {
        filename: "kit2.py",
        lines: [
            `import random`,
            `from math import ceil`,
            `random.seed(1)`,
            `n = random.randint(1, 10)`,
            `print("n:", n)`,
            `print("ceil(n/3):", ceil(n / 3))`,
        ],
        output: [
            "n: 3",
            "ceil(n/3): 1",
        ],
    },

    practice: [
        {
            text: `Build a 3-line toolkit printout: sqrt(16), a seeded dice roll, and math.pi rounded to 2 decimals.`,
            hint: `Line 1: print(sqrt(16)). Line 2: print(random.randint(1, 6)) after seed(1). Line 3: print(round(math.pi, 2)).`,
            starterTip: `Expect 4.0, then dice 2, then 3.14 when you Run with the starter imports and seed(1).`,
            starter: [
                "import math",
                "import random",
                "from math import sqrt",
                "random.seed(1)",
                "print()",
                "print()",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if 4.0, dice 2, and 3.14 style pi appear with seed(1).`,
        },
        {
            text: `from math import floor. import random; seed(1); print floor of a random.randint(5,15)/2.`,
            hint: `Inside print(), use floor(...) around random.randint(5, 15) / 2. floor rounds down to a whole number.`,
            starterTip: `Try print(floor(random.randint(5, 15) / 2)). seed(1) keeps the roll predictable for checking.`,
            starter: [
                "from math import floor",
                "import random",
                "random.seed(1)",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if seed(1) used and floor of roll/2 prints a number.`,
        },
    ],

    quiz: [
        {
            question: `What belongs in a mini toolkit lesson?`,
            options: [
                { text: `Only errors`, correct: false },
                { text: `A few imported tools working together`, correct: true },
                { text: `Only empty files`, correct: false },
                { text: `No prints`, correct: false },
            ],
            correct: `Show a small useful combo.`,
            wrong: `math + random is enough.`,
        },
        {
            question: `Must every tool use from import?`,
            options: [
                { text: `Yes, always`, correct: false },
                { text: `No — mix styles as needed`, correct: true },
                { text: `from import bans math`, correct: false },
                { text: `import is illegal now`, correct: false },
            ],
            correct: `Both styles are fine.`,
            wrong: `Pick clear code.`,
        },
        {
            question: `What should you do before practice rolls?`,
            options: [
                { text: `Delete random`, correct: false },
                { text: `random.seed(1)`, correct: true },
                { text: `import only math`, correct: false },
                { text: `Skip seeding always`, correct: false },
            ],
            correct: `Seed keeps checks fair.`,
            wrong: `Lesson rule: seed(1).`,
        },
    ],

    project: {
        title: "Pocket Toolkit",
        desc: "Print a banner, then: sqrt(81), ceil(2.2), two seeded dice rolls, and round(pi, 2). Use seed(1).",
        starter: [
            "import math",
            "import random",
            "from math import sqrt, ceil",
            "random.seed(1)",
            "print(\"=== Pocket Toolkit ===\")",
            "print()",
            "print()",
            "print()",
            "print()",
            "print()"
        ].join("\n"),
    },

    prev: { unit: 11, lesson: 7, title: "Combining Modules" },
    next: { unit: 12, lesson: 1, title: "Why Classes" },
};
