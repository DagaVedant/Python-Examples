export default {
    format: "v2",
    unit: 3,
    lesson: 1,
    unitLessons: 4,
    unitTitle: "Making Decisions",
    title: "Comparisons & Booleans",
    readTime: 30,

    goal: "In this lesson you will learn how to ask yes-or-no questions in Python using comparison operators, and see how True and False work.",

    learn: [
        "Use ==, !=, <, >, <=, >= to compare values",
        "Understand True and False (booleans)",
        "Predict what a comparison will print",
    ],

    idea: `A <strong>comparison</strong> is a question with a yes or no answer. Python answers with <code>True</code> or <code>False</code>. These two values are called <strong>booleans</strong>.

You can compare numbers, strings, or variables. Comparisons are the building blocks for decisions in a program.

Remember: <code>==</code> means "is equal to." A single <code>=</code> is for storing a value in a variable.`,

    code: {
        filename: "comparisons.py",
        lines: [
            `# Comparing numbers`,
            `print(5 > 3)`,
            `print(5 < 3)`,
            `print(5 == 5)`,
            `print(5 != 3)`,
            ``,
            `# Comparing variables`,
            `age = 12`,
            `print(age >= 13)`,
            `print(age <= 12)`,
            ``,
            `# Comparing strings`,
            `name = "Maya"`,
            `print(name == "Maya")`,
            `print(name == "Sam")`,
        ],
        output: [
            "True",
            "False",
            "True",
            "True",
            "False",
            "True",
            "True",
            "False",
        ],
    },

    changeOneLine: `In the editor above, change <code>age = 12</code> to <code>age = 15</code>. Press <strong>Run</strong>. The line for <code>age >= 13</code> should now print <code>True</code>.`,

    code2: {
        filename: "score_check.py",
        lines: [
            `score = 80`,
            `high_score = 100`,
            `print(score > 50)`,
            `print(score == high_score)`,
            `print(score != high_score)`,
            `print(score <= 80)`,
        ],
        output: [
            "True",
            "False",
            "True",
            "True",
        ],
    },

    practice: [
        {
            text: `Finish five comparisons. Use a different operator in each blank print so Python shows True or False.`,
            starter: [
                `# Fill each print with a comparison`,
                `print(10 > 5)`,
                `print()`,
                `print()`,
                `print()`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if there are at least five print() calls that each contain a comparison using ==, !=, <, >, <=, or >=, and the program runs without errors.`,
        },
        {
            text: `Store a number in a variable. Print whether it is greater than 100. Fill in the blanks.`,
            starter: [
                `number = 75`,
                `# Print whether number is greater than 100`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if a variable holds a number and a print compares that variable to 100 with > (output True or False is fine).`,
        },
    ],

    quiz: [
        {
            question: `What does <code>print(10 == 10)</code> output?`,
            options: [
                { text: "10", correct: false },
                { text: "True", correct: true },
                { text: "False", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "Yes — equal values make the comparison True.",
            wrong: "== checks if two values are equal. When they match, Python prints True.",
        },
        {
            question: `Which symbol means "not equal to"?`,
            options: [
                { text: "==", correct: false },
                { text: "!=", correct: true },
                { text: "<>", correct: false },
                { text: "/=", correct: false },
            ],
            correct: "!= means not equal to.",
            wrong: "Use != when you want to check that two values are different.",
        },
        {
            question: `What does this print? <code>age = 11</code> then <code>print(age >= 13)</code>`,
            options: [
                { text: "True", correct: false },
                { text: "False", correct: true },
                { text: "11", correct: false },
                { text: "13", correct: false },
            ],
            correct: "11 is not greater than or equal to 13, so the answer is False.",
            wrong: "age is 11, which is less than 13, so age >= 13 is False.",
        },
    ],

    project: {
        title: "Number Checker",
        desc: "Store two numbers in variables. Print three comparisons: whether the first is greater than, less than, and equal to the second.",
        starter: [
            `a = 8`,
            `b = 12`,
            `# Is a greater than b?`,
            `print()`,
            `# Is a less than b?`,
            `print()`,
            `# Is a equal to b?`,
            `print()`,
        ].join("\n"),
    },

    prev: { unit: 2, lesson: 4, title: "Math Library Basics" },
    next: { unit: 3, lesson: 2, title: "if / else" },
};
