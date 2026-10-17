export default {
    format: "v2",
    unit: 2,
    lesson: 3,
    unitLessons: 10,
    unitTitle: "Number Calculations & Data",
    title: "Order of Operations",
    readTime: 22,

    goal: "In this lesson you will learn that Python multiplies and divides before it adds and subtracts, and how parentheses change the order.",

    learn: [
        "Know * and / happen before + and -",
        "Use parentheses () to force an order",
        "Compare expressions with and without ()",
    ],

    idea: `Python follows the same order as math class: multiply and divide first, then add and subtract.

So <code>3 + 4 * 2</code> is 3 + 8, which is 11 — not 14.

Put parentheses <code>()</code> around the part you want done first. <code>(3 + 4) * 2</code> adds first, then multiplies.`,

    code: {
        filename: "order.py",
        lines: [
            `# Multiply first`,
            `print(3 + 4 * 2)`,
            ``,
            `# Parentheses first`,
            `print((3 + 4) * 2)`,
            ``,
            `# Another pair`,
            `print(10 - 6 / 2)`,
            `print((10 - 6) / 2)`,
            ``,
            `score = (5 + 3) * 10`,
            `print("Score:", score)`,
        ],
        output: [
            "11",
            "14",
            "7.0",
            "2.0",
            "Score: 80",
        ],
    },

    changeOneLine: `In the editor above, change <code>(5 + 3) * 10</code> to <code>5 + 3 * 10</code>. Press <strong>Run</strong>. The last line should say <code>Score: 35</code>.`,

    code2: {
        filename: "parens.py",
        lines: [
            `print(2 + 3 * 4)`,
            `print((2 + 3) * 4)`,
            `print(100 / 5 + 5)`,
            `print(100 / (5 + 5))`,
        ],
        output: [
            "14",
            "20",
            "25.0",
            "10.0",
        ],
    },

    practice: [
        {
            text: `Write an expression that adds 8 and 2 first, then multiplies by 5. Print the result (should be 50).`,
            hint: `Without parentheses, Python would multiply first. Wrap 8 + 2 in () so that sum happens before the * 5.`,
            starterTip: `Try print((8 + 2) * 5) inside the empty print().`,
            starter: [
                `# Use parentheses so add happens first`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if output is 50 and code uses (8 + 2) * 5 or similar with parentheses around the add.`,
        },
        {
            text: `Without changing the numbers, add parentheses so this prints 4.0 instead of 8.0.`,
            hint: `Right now 12 / 2 runs before 20 - 6. Group the subtraction so 20 - 12 happens first, then divide by 2.`,
            starterTip: `Change the line to print((20 - 12) / 2) — parentheses around 20 - 12 only.`,
            starter: [
                `# Should print 4.0`,
                `print(20 - 12 / 2)`,
            ].join("\n"),
            gradingNote: `Pass if expression uses (20 - 12) / 2 and output is 4.0.`,
        },
    ],

    quiz: [
        {
            question: `What is <code>3 + 4 * 2</code>?`,
            options: [
                { text: "14", correct: false },
                { text: "11", correct: true },
                { text: "10", correct: false },
                { text: "24", correct: false },
            ],
            correct: "Multiply first: 4 * 2 = 8, then 3 + 8 = 11.",
            wrong: "* happens before +. So it is 3 + 8, not (3 + 4) * 2.",
        },
        {
            question: `What do parentheses do?`,
            options: [
                { text: "They slow Python down", correct: false },
                { text: "They make text bold", correct: false },
                { text: "They force that part to run first", correct: true },
                { text: "They delete the answer", correct: false },
            ],
            correct: "Whatever is inside () is calculated first.",
            wrong: "Parentheses change order: the inside runs before the outside.",
        },
        {
            question: `What is <code>(10 - 2) / 2</code>?`,
            options: [
                { text: "9.0", correct: false },
                { text: "4.0", correct: true },
                { text: "8", correct: false },
                { text: "6.0", correct: false },
            ],
            correct: "Subtract first: 10 − 2 = 8, then 8 / 2 = 4.0.",
            wrong: "Parentheses mean subtract first, then divide.",
        },
    ],

    project: {
        title: "Level Score",
        desc: "A level score is (wins + bonus) times points. Set wins to 4, bonus to 1, points to 100. Use parentheses and print the score.",
        starter: [
            `wins = 4`,
            `bonus = 1`,
            `points = 100`,
            `# Score = (wins + bonus) * points`,
            `score = `,
            `print("Level score:", score)`,
        ].join("\n"),
    },

    prev: { unit: 2, lesson: 2, title: "Multiply and Divide" },
    next: { unit: 2, lesson: 4, title: "Float Division" },
};
