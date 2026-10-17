export default {
    format: "v2",
    unit: 2,
    lesson: 6,
    unitLessons: 10,
    unitTitle: "Number Calculations & Data",
    title: "Remainder",
    readTime: 22,

    goal: "In this lesson you will learn how % finds the leftover after dividing into whole pieces.",

    learn: [
        "Use % to get a remainder",
        "See leftover after // packs",
        "Pair // and % to split a total",
    ],

    idea: `The percent sign <code>%</code> is the <strong>remainder</strong> (modulo) operator. It tells you what is left after dividing into whole groups.

<code>17 % 5</code> is <code>2</code>, because 5 goes into 17 three times (15), and 2 are left over.

Together, <code>//</code> gives full groups and <code>%</code> gives leftovers.`,

    code: {
        filename: "remainder.py",
        lines: [
            `# Remainder examples`,
            `print(17 % 5)`,
            `print(20 % 6)`,
            `print(10 % 2)`,
            ``,
            `# Full packs and leftover`,
            `stickers = 23`,
            `pack = 10`,
            `full = stickers // pack`,
            `left = stickers % pack`,
            `print("Full packs:", full)`,
            `print("Left over:", left)`,
        ],
        output: [
            "2",
            "2",
            "0",
            "Full packs: 2",
            "Left over: 3",
        ],
    },

    changeOneLine: `In the editor above, change <code>stickers = 23</code> to <code>stickers = 30</code>. Press <strong>Run</strong>. You should see <code>Full packs: 3</code> and <code>Left over: 0</code>.`,

    code2: {
        filename: "even_check.py",
        lines: [
            `n = 14`,
            `print("Remainder when divided by 2:", n % 2)`,
            `n = 15`,
            `print("Remainder when divided by 2:", n % 2)`,
        ],
        output: [
            "Remainder when divided by 2: 0",
            "Remainder when divided by 2: 1",
        ],
    },

    practice: [
        {
            text: `There are 29 beads. Bracelets need 8 beads each. Print how many beads are left over using %.`,
            starter: [
                `beads = 29`,
                `needed = 8`,
                `left = `,
                `print("Left over:", left)`,
            ].join("\n"),
            gradingNote: `Pass if left is 5 (29 % 8) and printed. Must use %.`,
        },
        {
            text: `Print both <code>25 // 4</code> and <code>25 % 4</code> with labels like <code>Full: 6</code> and <code>Left: 1</code>.`,
            starter: [
                `print()`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if output shows 6 from // and 1 from %.`,
        },
    ],

    quiz: [
        {
            question: `What is <code>14 % 5</code>?`,
            options: [
                { text: "2", correct: false },
                { text: "4", correct: true },
                { text: "2.8", correct: false },
                { text: "19", correct: false },
            ],
            correct: "5 goes into 14 twice (10), leftover 4.",
            wrong: "% is the leftover after whole division. 14 − 10 = 4.",
        },
        {
            question: `If <code>n % 2</code> is 0, what does that mean?`,
            options: [
                { text: "n is odd", correct: false },
                { text: "n is even", correct: true },
                { text: "n is zero", correct: false },
                { text: "n is negative", correct: false },
            ],
            correct: "Even numbers divide by 2 with remainder 0.",
            wrong: "Remainder 0 when dividing by 2 means the number is even.",
        },
        {
            question: `What is <code>9 % 3</code>?`,
            options: [
                { text: "3", correct: false },
                { text: "0", correct: true },
                { text: "1", correct: false },
                { text: "9", correct: false },
            ],
            correct: "3 goes into 9 exactly, so leftover is 0.",
            wrong: "No leftover means remainder 0.",
        },
    ],

    project: {
        title: "Egg Cartons",
        desc: "You have 40 eggs. Cartons hold 12. Print full cartons with // and leftover eggs with %.",
        starter: [
            `eggs = 40`,
            `carton = 12`,
            `full = `,
            `left = `,
            `print("Full cartons:", full)`,
            `print("Loose eggs:", left)`,
        ].join("\n"),
    },

    prev: { unit: 2, lesson: 5, title: "Integer Division" },
    next: { unit: 2, lesson: 7, title: "Text into Numbers" },
};
