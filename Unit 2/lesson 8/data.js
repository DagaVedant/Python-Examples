export default {
    format: "v2",
    unit: 2,
    lesson: 8,
    unitLessons: 10,
    unitTitle: "Number Calculations & Data",
    title: "Multi-step Math",
    readTime: 23,

    goal: "In this lesson you will learn to break a bigger calculation into clear steps using variables.",

    learn: [
        "Store middle results in variables",
        "Build a final answer in steps",
        "Print labels so each step is clear",
    ],

    idea: `Big math is easier when you do it in steps. Save each middle answer in a variable, then use those variables later.

This is clearer than one giant line. You can also print each step to check your work.

Think: first find the subtotal, then tax or discount, then the final total.`,

    code: {
        filename: "steps.py",
        lines: [
            `# Game shop purchase in steps`,
            `item1 = 12`,
            `item2 = 8`,
            `item3 = 5`,
            ``,
            `subtotal = item1 + item2 + item3`,
            `print("Subtotal:", subtotal)`,
            ``,
            `discount = 3`,
            `total = subtotal - discount`,
            `print("Total:", total)`,
        ],
        output: [
            "Subtotal: 25",
            "Total: 22",
        ],
    },

    changeOneLine: `In the editor above, change <code>discount = 3</code> to <code>discount = 5</code>. Press <strong>Run</strong>. Total should say <code>20</code>.`,

    code2: {
        filename: "trip.py",
        lines: [
            `hours = 3`,
            `speed = 40`,
            `distance = hours * speed`,
            `print("Km traveled:", distance)`,
            ``,
            `stops = 2`,
            `extra = stops * 5`,
            `final = distance + extra`,
            `print("With side trips:", final)`,
        ],
        output: [
            "Km traveled: 120",
            "With side trips: 130",
        ],
    },

    practice: [
        {
            text: `Tickets cost 9 each. Buy 4. Then add a snack of 6. Use step variables and print the final cost.`,
            hint: `First find the ticket total in tickets, then add snack in final. Do not skip the middle variable.`,
            starterTip: `Try tickets = price * count (9 times 4), then final = tickets + snack so final is 42.`,
            starter: [
                `price = 9`,
                `count = 4`,
                `tickets = `,
                `snack = 6`,
                `final = `,
                `print("Final:", final)`,
            ].join("\n"),
            gradingNote: `Pass if tickets is 36 and final is 42, built with step variables.`,
        },
        {
            text: `Start with 100 points. Multiply by 2 for a bonus round, then subtract 25 for a miss. Print the end score.`,
            hint: `Update points twice: first double it for the bonus, then take away 25 for the miss.`,
            starterTip: `Under Bonus round try points = points * 2. Under Miss try points = points - 25.`,
            starter: [
                `points = 100`,
                `# Bonus round`,
                `points = `,
                `# Miss`,
                `points = `,
                `print("End score:", points)`,
            ].join("\n"),
            gradingNote: `Pass if end score is 175 (100*2 - 25).`,
        },
    ],

    quiz: [
        {
            question: `Why store middle results in variables?`,
            options: [
                { text: "Python requires it", correct: false },
                { text: "It makes multi-step math clearer", correct: true },
                { text: "It makes numbers bigger", correct: false },
                { text: "It turns ints into floats", correct: false },
            ],
            correct: "Steps are easier to read and check.",
            wrong: "Variables help you build and check a calculation piece by piece.",
        },
        {
            question: `After <code>a = 10</code> and <code>b = a * 2</code>, what is <code>b</code>?`,
            options: [
                { text: "10", correct: false },
                { text: "12", correct: false },
                { text: "20", correct: true },
                { text: "102", correct: false },
            ],
            correct: "b stores 10 * 2, which is 20.",
            wrong: "a is 10, then b becomes 20.",
        },
        {
            question: `What should you print while building steps?`,
            options: [
                { text: "Nothing. Only the final answer", correct: false },
                { text: "Middle results with labels to check work", correct: true },
                { text: "Only errors", correct: false },
                { text: "Random numbers", correct: false },
            ],
            correct: "Printing steps helps you catch mistakes early.",
            wrong: "Labeled prints of middle results make debugging easier.",
        },
    ],

    project: {
        title: "Party Budget",
        desc: "Cups cost 2 each (buy 20). Juice costs 15. Decorations cost 10. Compute cups cost, then add juice and decorations in steps. Print each stage.",
        starter: [
            `cup_price = 2`,
            `cup_count = 20`,
            `cups = `,
            `print("Cups:", cups)`,
            `juice = 15`,
            `decor = 10`,
            `total = `,
            `print("Party total:", total)`,
        ].join("\n"),
    },

    prev: { unit: 2, lesson: 7, title: "Text into Numbers" },
    next: { unit: 2, lesson: 9, title: "The math Module" },
};
