export default {
    format: "v2",
    unit: 1,
    lesson: 6,
    unitLessons: 10,
    unitTitle: "Getting Started with Python",
    title: "Fancy print()",
    readTime: 22,

    goal: "In this lesson you will learn how to print several values in one line and how to make a blank line.",

    learn: [
        "Pass several values to print() with commas",
        "Python puts a space between those values",
        "Empty print() makes a blank line",
    ],

    idea: `You can give <code>print()</code> several things separated by commas. Python puts a space between them automatically.

An empty <code>print()</code> with nothing inside the parentheses prints a blank line. Useful for spacing your output.`,

    code: {
        filename: "scoreboard.py",
        lines: [
            `print("Score:", 10, "points")`,
            `print("Player:", "Ava")`,
            ``,
            `# Blank line for spacing`,
            `print()`,
            `print("Game over")`,
        ],
        output: [
            "Score: 10 points",
            "Player: Ava",
            "",
            "Game over",
        ],
    },

    changeOneLine: `In the editor above, change <code>10</code> to <code>25</code> in the first print. Press <strong>Run</strong>. The first line should say <code>Score: 25 points</code>.`,

    code2: {
        filename: "ticket.py",
        lines: [
            `print("Seat:", 12)`,
            `print()`,
            `print("Row:", "B", "Gate:", 3)`,
        ],
        output: [
            "Seat: 12",
            "",
            "Row: B Gate: 3",
        ],
    },

    practice: [
        {
            text: `Finish the mini scoreboard. Each player should print on one line like <code>Alice: 42 points</code>. Fill in the blank print.`,
            hint: `Copy the Alice line’s pattern: a name in quotes, a number, and the word points, all inside one print() with commas between them.`,
            starterTip: `Fill the blank print like: print("Bob:", 30, "points"). Change the name and number to your second player.`,
            starter: [
                `print("Alice:", 42, "points")`,
                `# Player 2. Finish this line`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if there are two print lines that each show a player name, a number, and the word points (commas between values is fine). Empty print() fails.`,
        },
        {
            text: `Print a title, then a blank line, then a message. Use one empty print() for the blank line.`,
            hint: `You already have the title and the empty print() for spacing. Only the last print() needs text inside quotes.`,
            starterTip: `Leave print("NEWS") and print() as they are. Fill the bottom blank with something like print("Breaking story here").`,
            starter: [
                `print("NEWS")`,
                `# Blank line`,
                `print()`,
                `# Message after the blank line`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if output has a title print, one empty print() for a blank line, and another print with non-empty text after it.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>print("Hi", "Sam")</code> show?`,
            options: [
                { text: "HiSam", correct: false },
                { text: "Hi Sam", correct: true },
                { text: "Hi, Sam", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "Commas in print() put a space between the values.",
            wrong: "print() with commas inserts a space between each value. It does not add a comma.",
        },
        {
            question: `What does an empty <code>print()</code> do?`,
            options: [
                { text: "It causes an error", correct: false },
                { text: "It prints the word None", correct: false },
                { text: "It prints a blank line", correct: true },
                { text: "It deletes the last line", correct: false },
            ],
            correct: "Yes. Empty print() makes a blank line.",
            wrong: "Empty print() does not error. It prints a blank line.",
        },
        {
            question: `How many values can you pass to one print()?`,
            options: [
                { text: "Only one, ever", correct: false },
                { text: "Several, separated by commas", correct: true },
                { text: "Only numbers, never text", correct: false },
                { text: "Only comments", correct: false },
            ],
            correct: "You can list several values separated by commas.",
            wrong: "One print() can take many values separated by commas.",
        },
    ],

    project: {
        title: "Receipt Printer",
        desc: "Finish the fake store receipt. Keep two items with prices, a blank line, then a total that uses commas in print().",
        starter: [
            `print("=== RECEIPT ===")`,
            `print("Apple:", 1)`,
            `# Add one more item with commas`,
            `print()`,
            ``,
            `# Blank line then total`,
            `print()`,
            `print("Total:", 3)`,
        ].join("\n"),
    },

    prev: { unit: 1, lesson: 5, title: "Strings and Quotes" },
    next: { unit: 1, lesson: 7, title: "Variables" },
};
