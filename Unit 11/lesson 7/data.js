export default {
    format: "v2",
    unit: 11,
    lesson: 7,
    unitLessons: 8,
    unitTitle: "Imports",
    title: "Combining Modules",
    readTime: 25,
    goal: "In this lesson you will learn how to use math and random together in one small program.",

    learn: [
        "Import more than one module",
        "Seed random for practice",
        "Combine tools in one idea",
    ],

    idea: `Real programs often need more than one toolbox. Import both, seed random for practice, then mix tools — like a random radius and a math area.

Keep imports at the top. Keep <code>random.seed(1)</code> before rolls.`,

    code: {
        filename: "combine.py",
        lines: [
            `import math`,
            `import random`,
            `random.seed(1)`,
            `r = random.randint(1, 5)`,
            `area = math.pi * r * r`,
            `print("r:", r)`,
            `print("area:", round(area, 2))`,
        ],
        output: [
            "r: 2",
            "area: 12.57",
        ],
    },

    changeOneLine: `In the editor above, change <code>randint(1, 5)</code> to <code>randint(2, 2)</code>. Press <strong>Run</strong>. r should be 2 still, area about 12.57.`,

    code2: {
        filename: "loot.py",
        lines: [
            `import math`,
            `import random`,
            `random.seed(1)`,
            `damage = random.randint(1, 6)`,
            `bonus = math.floor(damage / 2)`,
            `print("Damage:", damage)`,
            `print("Bonus:", bonus)`,
        ],
        output: [
            "Damage: 2",
            "Bonus: 1",
        ],
    },

    practice: [
        {
            text: `Import math and random. seed(1). Roll randint(1,6), print sqrt of that roll (may be float).`,
            hint: `Set n = random.randint(1, 6) after seed(1). Then print math.sqrt(n) — sqrt of the roll.`,
            starterTip: `n = random.randint(1, 6) then print(math.sqrt(n)). With seed(1), n is 2 and sqrt is about 1.41.`,
            starter: [
                "import math",
                "import random",
                "random.seed(1)",
                "n = ",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if seed(1), n is 2 from randint, sqrt prints about 1.41.`,
        },
        {
            text: `seed(1). Pick r with randint(1,5). Print round(math.pi*r*r, 2).`,
            hint: `r is already set with randint. Fill print() with round(math.pi * r * r, 2) — circle area formula.`,
            starterTip: `Try print(round(math.pi * r * r, 2)). With seed(1), r is 2 and area is about 12.57.`,
            starter: [
                "import math",
                "import random",
                "random.seed(1)",
                "r = random.randint(1, 5)",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if area 12.57 prints for r=2.`,
        },
    ],

    quiz: [
        {
            question: `Can you import math and random in one program?`,
            options: [
                { text: `No, only one module ever`, correct: false },
                { text: `Yes`, correct: true },
                { text: `Only if you delete print`, correct: false },
                { text: `Only inside except`, correct: false },
            ],
            correct: `Many programs use multiple modules.`,
            wrong: `Import both at the top.`,
        },
        {
            question: `Where should random.seed(1) go?`,
            options: [
                { text: `After the program ends`, correct: false },
                { text: `After import random, before rolls`, correct: true },
                { text: `Inside a comment only`, correct: false },
                { text: `Instead of import`, correct: false },
            ],
            correct: `Seed before you draw numbers.`,
            wrong: `Order matters.`,
        },
        {
            question: `Why combine modules?`,
            options: [
                { text: `To cause more TypeErrors`, correct: false },
                { text: `Each toolbox solves a different job`, correct: true },
                { text: `To avoid functions`, correct: false },
                { text: `To skip practice`, correct: false },
            ],
            correct: `math + random is a common pair.`,
            wrong: `Mix tools for richer programs.`,
        },
    ],

    project: {
        title: "Random Circle",
        desc: "seed(1). Roll r from 1–4. Print r and the area using math.pi rounded to 2 decimals.",
        starter: [
            "import math",
            "import random",
            "random.seed(1)",
            "r = ",
            "print()",
            "print()"
        ].join("\n"),
    },

    prev: { unit: 11, lesson: 6, title: "math Tools" },
    next: { unit: 11, lesson: 8, title: "Mini Toolkit" },
};
