export default {
    format: "v2",
    unit: 8,
    lesson: 5,
    unitLessons: 10,
    unitTitle: "Dictionaries",
    title: "Updating Values",
    readTime: 22,
    goal: "In this lesson you will learn how to update a value that is already stored under a key.",

    learn: [
        "Change a value with the same assignment syntax",
        "See that the key stays and the value changes",
        "Update more than once",
    ],

    idea: `To <strong>update</strong> a value, assign to a key that already exists:

<code>scores["Ava"] = 95</code>

Same syntax as adding! If the key exists, Python replaces the old value.`,

    code: {
        filename: "update.py",
        lines: [
            `scores = {"Ava": 80, "Leo": 90}`,
            `print("Start:", scores["Ava"])`,
            ``,
            `# Update Ava's score`,
            `scores["Ava"] = 95`,
            `print("Now:", scores["Ava"])`,
            `print(scores)`,
        ],
        output: [
            "Start: 80",
            "Now: 95",
            "{'Ava': 95, 'Leo': 90}",
        ],
    },

    changeOneLine: `In the editor above, change the update to <code>scores["Ava"] = 100</code>. Press <strong>Run</strong>. Ava should be 100.`,

    code2: {
        filename: "coins.py",
        lines: [
            `bag = {"coins": 10, "keys": 1}`,
            `bag["coins"] = 25`,
            `print("Coins:", bag["coins"])`,
            `bag["coins"] = bag["coins"] + 5`,
            `print("Coins:", bag["coins"])`,
        ],
        output: [
            "Coins: 25",
            "Coins: 30",
        ],
    },

    practice: [
        {
            text: `Update Sam's score from 50 to 80. Print Sam's new score.`,
            hint: `Sam's key already exists, so assign a new number to board["Sam"]. That replaces 50 with 80.`,
            starterTip: `Write board["Sam"] = 80 under the comment. The last print should show 80.`,
            starter: [
                "board = {\"Sam\": 50, \"Riley\": 70}",
                "# Update Sam",
                "",
                "print(board[\"Sam\"])"
            ].join("\n"),
            gradingNote: `Pass if Sam's value becomes 80 and is printed.`,
        },
        {
            text: `Add 10 coins to the bag using the current value, then print coins.`,
            hint: `Read the old value with bag["coins"], add 10, and store it back: bag["coins"] = bag["coins"] + 10.`,
            starterTip: `On the blank line: bag["coins"] = bag["coins"] + 10. print(bag["coins"]) should show 30.`,
            starter: [
                "bag = {\"coins\": 20}",
                "# Increase coins by 10",
                "",
                "print(bag[\"coins\"])"
            ].join("\n"),
            gradingNote: `Pass if coins become 30 using an update.`,
        },
    ],

    quiz: [
        {
            question: `scores["Ava"] = 95 when Ava already exists…`,
            options: [
                { text: `Adds a second Ava key`, correct: false },
                { text: `Updates Ava's value to 95`, correct: true },
                { text: `Deletes Leo`, correct: false },
                { text: `Causes an error always`, correct: false },
            ],
            correct: `Existing keys get their value replaced.`,
            wrong: `Assignment updates the value for that key.`,
        },
        {
            question: `Is the syntax for update different from add?`,
            options: [
                { text: `Yes — you must use .update only`, correct: false },
                { text: `No — same dict[key] = value syntax`, correct: true },
                { text: `Yes — you need a special keyword change`, correct: false },
                { text: `Updates are impossible`, correct: false },
            ],
            correct: `Add and update use the same assignment form.`,
            wrong: `Whether the key is new or old, assignment works.`,
        },
        {
            question: `After bag["coins"] = bag["coins"] + 5, if coins was 25…`,
            options: [
                { text: `coins is 25`, correct: false },
                { text: `coins is 30`, correct: true },
                { text: `coins is 5`, correct: false },
                { text: `coins is deleted`, correct: false },
            ],
            correct: `You read the old value, add 5, store 30.`,
            wrong: `25 + 5 becomes 30.`,
        },
    ],

    project: {
        title: "Level Up",
        desc: "Player starts at level 3. Update to 4 and print, then to 5 and print.",
        starter: [
            "player = {\"name\": \"Sam\", \"level\": 3}",
            "# Level up to 4, print level",
            "",
            "# Level up to 5, print level",
            ""
        ].join("\n"),
    },

    prev: { unit: 8, lesson: 4, title: "Adding Keys" },
    next: { unit: 8, lesson: 6, title: "Removing Keys" },
};
