export default {
    format: "v2",
    unit: 2,
    lesson: 4,
    unitLessons: 10,
    unitTitle: "Number Calculations & Data",
    title: "Float Division",
    readTime: 20,

    goal: "In this lesson you will learn that the / operator always does float division and often returns a decimal.",

    learn: [
        "Use / for float division",
        "See that / can return decimals like 2.5",
        "Know that even 8 / 2 gives 4.0",
    ],

    idea: `The slash <code>/</code> is called <strong>float division</strong>. It divides and keeps decimal parts.

<code>5 / 2</code> is <code>2.5</code>. <code>8 / 2</code> is <code>4.0</code>. Still a float, even though there is no leftover.

A float is a number that can have a decimal point.`,

    code: {
        filename: "float_div.py",
        lines: [
            `# Float division keeps decimals`,
            `print(5 / 2)`,
            `print(9 / 4)`,
            ``,
            `# Even when it divides evenly`,
            `print(8 / 2)`,
            `print(100 / 10)`,
            ``,
            `pizza = 3`,
            `slices = 8`,
            `each = slices / pizza`,
            `print("Slices each:", each)`,
        ],
        output: [
            "2.5",
            "2.25",
            "4.0",
            "10.0",
            "Slices each: 2.6666666666666665",
        ],
    },

    changeOneLine: `In the editor above, change <code>pizza = 3</code> to <code>pizza = 4</code>. Press <strong>Run</strong>. The last line should say <code>Slices each: 2.0</code>.`,

    code2: {
        filename: "half.py",
        lines: [
            `meters = 15`,
            `half = meters / 2`,
            `print("Half:", half)`,
            `print(type(half))`,
        ],
        output: [
            "Half: 7.5",
            "<class 'float'>",
        ],
    },

    practice: [
        {
            text: `Divide 17 by 2 and print the result. It should show a decimal.`,
            hint: `Use the / operator inside print() so Python does float division. You should see 8.5, not a whole number.`,
            starterTip: `Try print(17 / 2) on the blank line.`,
            starter: [
                `# Print 17 / 2`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if output is 8.5 using /.`,
        },
        {
            text: `A ribbon is 25 cm long. Split it into 4 equal pieces. Print how long each piece is.`,
            hint: `Equal pieces means divide the ribbon length by how many pieces. Use / so the answer can be a decimal.`,
            starterTip: `Try each = ribbon / pieces on the blank line. That gives 6.25.`,
            starter: [
                `ribbon = 25`,
                `pieces = 4`,
                `each = `,
                `print("Each piece:", each)`,
            ].join("\n"),
            gradingNote: `Pass if each is 6.25 (25/4) and printed.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>7 / 2</code> equal?`,
            options: [
                { text: "3", correct: false },
                { text: "3.5", correct: true },
                { text: "4", correct: false },
                { text: "72", correct: false },
            ],
            correct: "/ keeps the decimal part: 7 ÷ 2 = 3.5.",
            wrong: "Float division does not drop the leftover. 7 / 2 is 3.5.",
        },
        {
            question: `What type of value does <code>/</code> usually give?`,
            options: [
                { text: "A string", correct: false },
                { text: "An int", correct: false },
                { text: "A float", correct: true },
                { text: "True or False", correct: false },
            ],
            correct: "/ returns a float (decimal number).",
            wrong: "Even 4 / 2 gives 2.0, which is a float.",
        },
        {
            question: `What does <code>print(6 / 3)</code> show?`,
            options: [
                { text: "2", correct: false },
                { text: "2.0", correct: true },
                { text: "63", correct: false },
                { text: "1", correct: false },
            ],
            correct: "Even when exact, / shows 2.0.",
            wrong: "Float division keeps the .0 when the answer is whole.",
        },
    ],

    project: {
        title: "Race Average",
        desc: "Three lap times are 42, 38, and 40 seconds. Add them, divide by 3, and print the average as a float.",
        starter: [
            `lap1 = 42`,
            `lap2 = 38`,
            `lap3 = 40`,
            `total = lap1 + lap2 + lap3`,
            `average = `,
            `print("Average:", average)`,
        ].join("\n"),
    },

    prev: { unit: 2, lesson: 3, title: "Order of Operations" },
    next: { unit: 2, lesson: 5, title: "Integer Division" },
};
