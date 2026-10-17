export default {
    format: "v2",
    unit: 2,
    lesson: 1,
    unitLessons: 10,
    unitTitle: "Number Calculations & Data",
    title: "Plus and Minus",
    readTime: 20,

    goal: "In this lesson you will learn how Python adds and subtracts numbers with + and -.",

    learn: [
        "Add numbers with +",
        "Subtract numbers with -",
        "Store a sum or difference in a variable",
    ],

    idea: `Python can add and subtract just like a calculator.

Use <code>+</code> to add two numbers. Use <code>-</code> to subtract.

You can print the answer right away, or save it in a variable and use it later.`,

    code: {
        filename: "plus_minus.py",
        lines: [
            `# Adding`,
            `print(7 + 5)`,
            `print(100 + 25)`,
            ``,
            `# Subtracting`,
            `print(20 - 8)`,
            `print(50 - 12)`,
            ``,
            `# Save a result`,
            `coins = 15 + 10`,
            `spent = coins - 4`,
            `print("Coins left:", spent)`,
        ],
        output: [
            "12",
            "125",
            "12",
            "38",
            "Coins left: 21",
        ],
    },

    changeOneLine: `In the editor above, change <code>15 + 10</code> to <code>15 + 20</code>. Press <strong>Run</strong>. The last line should say <code>Coins left: 31</code>.`,

    code2: {
        filename: "score.py",
        lines: [
            `points = 40 + 15`,
            `print("Total:", points)`,
            `points = points - 5`,
            `print("After penalty:", points)`,
        ],
        output: [
            "Total: 55",
            "After penalty: 50",
        ],
    },

    practice: [
        {
            text: `A game starts with 30 stars. You earn 12 more, then lose 7. Finish the code so it prints the final number of stars.`,
            hint: `After earning 12, stars is 42. On the blank line, subtract 7 from stars and store the answer back in stars.`,
            starterTip: `Try stars = stars - 7 on the line after the comment about losing 7.`,
            starter: [
                `stars = 30`,
                `# Earn 12`,
                `stars = stars + 12`,
                `# Lose 7 — finish this line`,
                `stars = `,
                `print("Stars:", stars)`,
            ].join("\n"),
            gradingNote: `Pass if stars ends up as 35 (30+12-7) and is printed. Must use subtraction.`,
        },
        {
            text: `Print the sum of 18 and 27 on one line, labeled like <code>Sum: 45</code>.`,
            hint: `Use one print() with a label in quotes, a comma, then 18 + 27 so Python adds the numbers.`,
            starterTip: `Try print("Sum:", 18 + 27) inside the empty print().`,
            starter: [
                `# Print Sum: then the answer`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if output includes Sum: and 45 (18+27). print("Sum:", 18 + 27) is fine.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>print(9 + 4)</code> show?`,
            options: [
                { text: "94", correct: false },
                { text: "13", correct: true },
                { text: "9 + 4", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "Plus adds the numbers, so 9 + 4 is 13.",
            wrong: "With numbers (no quotes), + does math. 9 + 4 equals 13.",
        },
        {
            question: `What does <code>print(10 - 3)</code> show?`,
            options: [
                { text: "7", correct: true },
                { text: "13", correct: false },
                { text: "103", correct: false },
                { text: "-7", correct: false },
            ],
            correct: "Minus subtracts: 10 − 3 = 7.",
            wrong: "The - operator subtracts the second number from the first.",
        },
        {
            question: `After <code>n = 5 + 2</code>, what is in <code>n</code>?`,
            options: [
                { text: `"5 + 2"`, correct: false },
                { text: "52", correct: false },
                { text: "7", correct: true },
                { text: "Nothing", correct: false },
            ],
            correct: "Python works out 5 + 2 first, then stores 7 in n.",
            wrong: "The expression is calculated before it is stored. n holds 7.",
        },
    ],

    project: {
        title: "Piggy Bank",
        desc: "Start with 50 coins. Add a gift of 20. Subtract a purchase of 15. Print how many coins are left.",
        starter: [
            `bank = 50`,
            `# Add gift of 20`,
            `bank = `,
            `# Subtract purchase of 15`,
            `bank = `,
            `print("Coins left:", bank)`,
        ].join("\n"),
    },

    prev: { unit: 1, lesson: 10, title: "Data Types & Casting" },
    next: { unit: 2, lesson: 2, title: "Multiply and Divide" },
};
