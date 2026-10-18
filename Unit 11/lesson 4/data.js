export default {
    format: "v2",
    unit: 11,
    lesson: 4,
    unitLessons: 8,
    unitTitle: "Imports",
    title: "from import",
    readTime: 22,
    goal: "In this lesson you will learn from module import name so you can call a tool without the module prefix.",

    learn: [
        "Write from math import sqrt",
        "Call sqrt() directly",
        "Know when the short name is handy",
    ],

    idea: `<code>from math import sqrt</code> pulls one tool into your file. Then you can write <code>sqrt(16)</code> without <code>math.</code> in front.

Useful for a few favorites. If you need many tools, plain <code>import math</code> can stay clearer.`,

    code: {
        filename: "from_import.py",
        lines: [
            `from math import sqrt, floor`,
            `print(sqrt(16))`,
            `print(floor(3.9))`,
        ],
        output: [
            "4.0",
            "3",
        ],
    },

    changeOneLine: `In the editor above, change <code>sqrt(16)</code> to <code>sqrt(100)</code>. Press <strong>Run</strong>. First line should be 10.0.`,

    code2: {
        filename: "from_random.py",
        lines: [
            `from random import randint, seed`,
            `seed(1)`,
            `print(randint(1, 6))`,
            `print(randint(1, 6))`,
        ],
        output: [
            "2",
            "5",
        ],
    },

    practice: [
        {
            text: `from math import sqrt. Print sqrt(64).`,
            hint: `You already imported sqrt, so call it without math. in front. Put sqrt(64) inside print().`,
            starterTip: `Try print(sqrt(64)). The answer should be 8.0.`,
            starter: [
                "from math import sqrt",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if 8.0 prints using imported sqrt.`,
        },
        {
            text: `from random import seed, randint. seed(1), print one roll 1 to 6.`,
            hint: `seed(1) is already there. Fill print() with randint(1, 6). That picks a dice roll from 1 to 6.`,
            starterTip: `Try print(randint(1, 6)). With seed(1), you should see 2.`,
            starter: [
                "from random import seed, randint",
                "seed(1)",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if seed(1) used and 2 prints from randint(1,6).`,
        },
    ],

    quiz: [
        {
            question: `What does from math import sqrt allow?`,
            options: [
                { text: `Deleting math`, correct: false },
                { text: `Calling sqrt() without math.`, correct: true },
                { text: `Only printing modules`, correct: false },
                { text: `Skipping parentheses forever`, correct: false },
            ],
            correct: `The name is imported directly.`,
            wrong: `sqrt(16) works after from import.`,
        },
        {
            question: `Which is valid?`,
            options: [
                { text: `from import math sqrt`, correct: false },
                { text: `from math import sqrt`, correct: true },
                { text: `math from import sqrt`, correct: false },
                { text: `import from math`, correct: false },
            ],
            correct: `from module import name.`,
            wrong: `Remember the order.`,
        },
        {
            question: `If you from-import sqrt, does math.sqrt still work?`,
            options: [
                { text: `Always yes with no import`, correct: false },
                { text: `Not unless you also import math`, correct: true },
                { text: `It deletes sqrt`, correct: false },
                { text: `It becomes random`, correct: false },
            ],
            correct: `You only got the names you imported.`,
            wrong: `from import is selective.`,
        },
    ],

    project: {
        title: "Short Names",
        desc: "from math import sqrt, ceil. Print sqrt(9) and ceil(2.1).",
        starter: [
            "from math import sqrt, ceil",
            "print()",
            "print()"
        ].join("\n"),
    },

    prev: { unit: 11, lesson: 3, title: "module.name" },
    next: { unit: 11, lesson: 5, title: "random" },
};
