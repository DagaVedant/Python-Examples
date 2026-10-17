export default {
    format: "v2",
    unit: 1,
    lesson: 2,
    unitLessons: 5,
    unitTitle: "Getting Started with Python",
    title: "Output & Formatting",
    readTime: 30,

    goal: "In this lesson you will learn how to control exactly what gets printed on the screen, including combining values, blank lines, and quotes inside text.",

    learn: [
        "Print multiple values in one line",
        "Use blank lines with print()",
        "Put apostrophes and quotes inside strings",
    ],

    idea: `You can give <code>print()</code> several things separated by commas. Python puts a space between them automatically.

Text lives inside quotes. If you need an apostrophe inside the text, use double quotes on the outside. If you need double quotes inside the text, use single quotes on the outside.

An empty <code>print()</code> prints a blank line.`,

    code: {
        filename: "scoreboard.py",
        lines: [
            `# Printing multiple values at once`,
            `print("Score:", 10, "points")`,
            ``,
            `# Single quotes outside so double quotes can be inside`,
            `print('She said "Python is great!"')`,
            ``,
            `# Double quotes outside so an apostrophe can be inside`,
            `print("It's a great day to code.")`,
            ``,
            `# Blank line`,
            `print("Line one")`,
            `print()`,
            `print("Line three")`,
        ],
        output: [
            "Score: 10 points",
            'She said "Python is great!"',
            "It's a great day to code.",
            "Line one",
            "",
            "Line three",
        ],
    },

    changeOneLine: `In the editor above, change <code>10</code> to <code>25</code> in the first print. Press <strong>Run</strong>. The first line of output should say <code>Score: 25 points</code>.`,

    code2: {
        filename: "quotes.py",
        lines: [
            `print("Player:", "Ava")`,
            `print('Coach said "Nice shot!"')`,
            `print("That's the spirit.")`,
            `print()`,
            `print("Game over")`,
        ],
        output: [
            "Player: Ava",
            'Coach said "Nice shot!"',
            "That's the spirit.",
            "",
            "Game over",
        ],
    },

    practice: [
        {
            text: `Finish the mini scoreboard. Each player should print on one line like <code>Alice: 42 points</code>. Fill in the blank prints.`,
            starter: [
                `# Player 1`,
                `print("Alice:", 42, "points")`,
                ``,
                `# Player 2 — finish this line`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if there are two print lines that each show a player name, a number, and the word points (commas between values is fine). Empty print() fails.`,
        },
        {
            text: `Write one print that contains both an apostrophe (like It's) and a word in double quotes. Use the starter and finish the blank.`,
            starter: [
                `# Need an apostrophe AND double quotes in the same sentence`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if one print() outputs text that includes both an apostrophe (') and a double-quote character ("). Mixing quote styles is expected.`,
        },
    ],

    quiz: [
        {
            question: `Which line prints <code>It's fun</code> without an error?`,
            options: [
                { text: `print('It's fun')`, correct: false },
                { text: `print("It's fun")`, correct: true },
                { text: `print(It's fun)`, correct: false },
                { text: `print("It"s fun")`, correct: false },
            ],
            correct: "Double quotes on the outside let the apostrophe sit inside safely.",
            wrong: "Use the opposite quote on the outside so Python does not end the string early.",
        },
        {
            question: `What does an empty <code>print()</code> do?`,
            options: [
                { text: "It causes an error", correct: false },
                { text: "It prints the word None", correct: false },
                { text: "It prints a blank line", correct: true },
                { text: "It deletes the last line", correct: false },
            ],
            correct: "Yes — empty print() makes a blank line.",
            wrong: "Empty print() does not error. It prints a blank line.",
        },
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
    ],

    project: {
        title: "Receipt Printer",
        desc: "Finish the fake store receipt. Keep three items with prices, a blank line, then a total.",
        starter: [
            `print("=== RECEIPT ===")`,
            `print("Apple:", 1)`,
            `print("Bread:", 2)`,
            `# Add one more item`,
            `print()`,
            ``,
            `# Blank line then total`,
            `print()`,
            `print("Total:", 5)`,
        ].join("\n"),
    },

    prev: { unit: 1, lesson: 1, title: "Your First Program" },
    next: { unit: 1, lesson: 3, title: "Variables" },
};
