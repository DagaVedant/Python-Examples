export default {
    format: "v2",
    unit: 2,
    lesson: 2,
    unitLessons: 4,
    unitTitle: "Number Calculations & Data",
    title: "Integer vs Float Division",
    readTime: 30,

    goal: "In this lesson you will learn three ways to divide: regular division, whole-number division, and finding the leftover remainder.",

    learn: [
        "Use / for a decimal answer",
        "Use // for a whole-number answer",
        "Use % to find the remainder",
    ],

    idea: `Python has three division tools.

<code>/</code> always gives a decimal answer (a float). Example: <code>7 / 2</code> is <code>3.5</code>.

<code>//</code> keeps only the whole number and throws away the decimal. Example: <code>7 // 2</code> is <code>3</code>.

<code>%</code> gives what is left over after dividing. That leftover is called the <strong>remainder</strong>. Example: <code>7 % 2</code> is <code>1</code>.`,

    code: {
        filename: "share.py",
        lines: [
            `# Regular division — decimal answer`,
            `print(7 / 2)`,
            ``,
            `# Integer division — whole number only`,
            `print(7 // 2)`,
            ``,
            `# Remainder (what is left over)`,
            `print(7 % 2)`,
            ``,
            `# Splitting sweets`,
            `total = 25`,
            `people = 4`,
            `each = total // people`,
            `left = total % people`,
            `print("Each person gets:", each)`,
            `print("Leftover:", left)`,
        ],
        output: [
            "3.5",
            "3",
            "1",
            "Each person gets: 6",
            "Leftover: 1",
        ],
    },

    changeOneLine: `In the editor above, change <code>people = 4</code> to <code>people = 5</code>. Press <strong>Run</strong>. You should see each person gets 5 and leftover 0.`,

    code2: {
        filename: "minutes.py",
        lines: [
            `minutes = 130`,
            `hours = minutes // 60`,
            `left = minutes % 60`,
            `print(minutes, "minutes is")`,
            `print(hours, "hours and", left, "minutes")`,
        ],
        output: [
            "130 minutes is",
            "2 hours and 10 minutes",
        ],
    },

    practice: [
        {
            text: `You have 100 sweets to share equally among 7 people. Print how many each person gets (use <code>//</code>) and how many are left over (use <code>%</code>).`,
            starter: [
                `sweets = 100`,
                `people = 7`,
                `# How many each person gets`,
                `each = 0`,
                `# How many left over`,
                `left = 0`,
                `print("Each:", each)`,
                `print("Left:", left)`,
            ].join("\n"),
            gradingNote: `Pass if each is 100 // 7 (14) and left is 100 % 7 (2), and both are printed.`,
        },
        {
            text: `Pick a number. Print <code>number % 2</code>. If the answer is 0 the number is even; if it is 1 the number is odd. Finish the blank.`,
            starter: [
                `number = 18`,
                `# Print the remainder when dividing by 2`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if print shows number % 2 (0 for even numbers like 18). Using a different even/odd number is fine if % 2 is used.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>print(17 // 5)</code> output?`,
            options: [
                { text: "3.4", correct: false },
                { text: "3", correct: true },
                { text: "2", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "// keeps only the whole number, so 17 // 5 is 3.",
            wrong: "// is whole-number division. It throws away the decimal part.",
        },
        {
            question: `What does <code>7 % 2</code> equal?`,
            options: [
                { text: "3.5", correct: false },
                { text: "3", correct: false },
                { text: "1", correct: true },
                { text: "0", correct: false },
            ],
            correct: "2 goes into 7 three times with 1 left over, so 7 % 2 is 1.",
            wrong: "% gives the leftover after dividing, not the quotient.",
        },
        {
            question: `Which operator always gives a decimal answer?`,
            options: [
                { text: "/", correct: true },
                { text: "//", correct: false },
                { text: "%", correct: false },
                { text: "*", correct: false },
            ],
            correct: "A single / always gives a float (decimal) result.",
            wrong: "Use / when you want a decimal. // and % give whole numbers.",
        },
    ],

    project: {
        title: "Bill Splitter",
        desc: "Finish the bill splitter. Use // for how much each person pays as a whole number, and % for leftover cents (or leftover money).",
        starter: [
            `total = 47`,
            `people = 4`,
            `# Whole amount each person pays`,
            `each = 0`,
            `# Leftover after splitting`,
            `left = 0`,
            `print("Each pays:", each)`,
            `print("Leftover:", left)`,
        ].join("\n"),
    },

    prev: { unit: 2, lesson: 1, title: "Arithmetic Operators" },
    next: { unit: 2, lesson: 3, title: "Numbers from Input" },
};
