export default {
    format: "v2",
    unit: 1,
    lesson: 8,
    unitLessons: 10,
    unitTitle: "Getting Started with Python",
    title: "Changing Variables",
    readTime: 22,

    goal: "In this lesson you will learn how to update a variable so it holds a new value.",

    learn: [
        "Assign a new value with = again",
        "The new value replaces the old one",
        "Later print() calls show the new value",
    ],

    idea: `Variables can change. When you assign a new value with <code>=</code>, the old value is replaced.

The next time you print that variable, you see the new value — not the old one.`,

    code: {
        filename: "score.py",
        lines: [
            `goals = 2`,
            `print("Goals:", goals)`,
            ``,
            `# Update the variable`,
            `goals = 3`,
            `print("Now:", goals)`,
        ],
        output: [
            "Goals: 2",
            "Now: 3",
        ],
    },

    changeOneLine: `In the editor above, change the first <code>goals = 2</code> to <code>goals = 5</code>. Press <strong>Run</strong>. The first line should say Goals: 5 (the second line still updates goals to 3).`,

    code2: {
        filename: "level.py",
        lines: [
            `level = 1`,
            `print("Level", level)`,
            `level = 2`,
            `print("Level", level)`,
            `level = 3`,
            `print("Level", level)`,
        ],
        output: [
            "Level 1",
            "Level 2",
            "Level 3",
        ],
    },

    practice: [
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
        {
            text: `Store a name, print it, change the name to a different friend, and print again.`,
            starter: [
                `friend = "Sam"`,
                `print(friend)`,
                `# Change friend to a new name`,
                ``,
                `print(friend)`,
            ].join("\n"),
            gradingNote: `Pass if friend is assigned twice to different non-empty strings and both values are printed in order.`,
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
            question: `After <code>n = 1</code> then <code>n = 2</code>, what is in n?`,
            options: [
                { text: "1", correct: false },
                { text: "2", correct: true },
                { text: "1 and 2 at the same time", correct: false },
                { text: "Nothing — the variable is deleted", correct: false },
            ],
            correct: "The newest assignment wins: n holds 2.",
            wrong: "A new assignment replaces the old value.",
        },
        {
            question: `When do you see the new value after changing a variable?`,
            options: [
                { text: "Only in comments", correct: false },
                { text: "In print() calls that run after the update", correct: true },
                { text: "Never — print always shows the first value", correct: false },
                { text: "Only if you restart the computer", correct: false },
            ],
            correct: "Prints that run after the new assignment show the new value.",
            wrong: "Order matters: update first, then print to see the change.",
        },
    ],

    project: {
        title: "Live Scoreboard",
        desc: "Use variables for two players and their scores. Print one line, update both scores, then print again.",
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

    prev: { unit: 1, lesson: 7, title: "Variables" },
    next: { unit: 1, lesson: 9, title: "Using Answers" },
};
