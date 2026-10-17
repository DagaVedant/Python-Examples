export default {
    format: "v2",
    unit: 1,
    lesson: 3,
    unitLessons: 5,
    unitTitle: "Getting Started with Python",
    title: "Variables",
    readTime: 30,

    goal: "In this lesson you will learn what a variable is, how to store a value in one, and how to update that value later.",

    learn: [
        "Create and name a variable",
        "Reuse a value without retyping it",
        "Update a variable's value",
    ],

    idea: `A <strong>variable</strong> is a named box that holds a value. You put something in the box with <code>=</code>, then use the name later instead of typing the value again.

You can change what is in the box. When you assign a new value, the old one is replaced. The next <code>print</code> shows the new value.`,

    code: {
        filename: "scoreboard.py",
        lines: [
            `# Store values in variables`,
            `player = "Messi"`,
            `goals = 2`,
            ``,
            `print(player, "scored", goals, "goals")`,
            ``,
            `# Update the variable`,
            `goals = 3`,
            `print(player, "now has", goals, "goals")`,
        ],
        output: [
            "Messi scored 2 goals",
            "Messi now has 3 goals",
        ],
    },

    changeOneLine: `In the editor above, change the first <code>goals = 2</code> to <code>goals = 5</code>. Press <strong>Run</strong>. The first line should say Messi scored 5 goals (the second line still updates goals to 3).`,

    code2: {
        filename: "name_tag.py",
        lines: [
            `name = "Ava"`,
            `age = 11`,
            `print("Hi,", name)`,
            `print(name, "is", age)`,
            `age = 12`,
            `print(name, "will be", age)`,
        ],
        output: [
            "Hi, Ava",
            "Ava is 11",
            "Ava will be 12",
        ],
    },

    practice: [
        {
            text: `Store your name and age in variables. Use ONE print to show them in a sentence. Fill in the blanks.`,
            starter: [
                `name = "Sam"`,
                `age = 11`,
                `# One print that uses both variables`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if name and age are assigned to variables and a single print uses both variable names (not only hardcoded text for both).`,
        },
        {
            text: `Start a variable at 0, print it, update it to 10, and print it again. Finish the blanks.`,
            starter: [
                `score = 0`,
                `print(score)`,
                `# Update score to 10`,
                ``,
                `# Print score again`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if score starts at 0, is printed, is then assigned 10, and is printed again so output shows 0 then 10.`,
        },
    ],

    quiz: [
        {
            question: `What does this print? <code>x = 5</code> then <code>x = 10</code> then <code>print(x)</code>`,
            options: [
                { text: "5 because the first value is permanent", correct: false },
                { text: "10 because the variable was updated", correct: true },
                { text: "Both 5 and 10", correct: false },
                { text: "An error, because you cannot change a variable", correct: false },
            ],
            correct: "The last value stored in x is 10, so that is what prints.",
            wrong: "Variables can be updated. The newest value replaces the old one.",
        },
        {
            question: `Which line correctly stores the text Maya in a variable called name?`,
            options: [
                { text: `name = Maya`, correct: false },
                { text: `name = "Maya"`, correct: true },
                { text: `"Maya" = name`, correct: false },
                { text: `print(name = "Maya")`, correct: false },
            ],
            correct: "Text needs quotes, and the variable name goes on the left of =.",
            wrong: "Put the variable name on the left, and put quotes around text values.",
        },
        {
            question: `Why use a variable instead of typing the same value many times?`,
            options: [
                { text: "Python requires every value to be in a variable", correct: false },
                { text: "So you can reuse and update the value in one place", correct: true },
                { text: "Variables make print() run faster", correct: false },
                { text: "Comments only work with variables", correct: false },
            ],
            correct: "Variables let you reuse and change a value without rewriting it everywhere.",
            wrong: "The main reason is reuse and easy updates — not speed or a Python rule.",
        },
    ],

    project: {
        title: "Scoreboard",
        desc: "Finish the scoreboard. Use variables for two players and their scores. Print one line, update the scores, then print again.",
        starter: [
            `player1 = "Alex"`,
            `player2 = "Sam"`,
            `score1 = 3`,
            `score2 = 5`,
            `print(player1, score1, "-", player2, score2)`,
            `# Update both scores, then print again`,
            ``,
            ``,
            `print()`,
        ].join("\n"),
    },

    prev: { unit: 1, lesson: 2, title: "Output & Formatting" },
    next: { unit: 1, lesson: 4, title: "Input" },
};
