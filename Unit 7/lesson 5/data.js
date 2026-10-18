export default {
    format: "v2",
    unit: 7,
    lesson: 5,
    unitLessons: 8,
    unitTitle: "2D Lists",
    title: "Nested Loops",
    readTime: 24,

    goal: "In this lesson you will learn how to visit every cell in a 2D list with a loop inside another loop.",

    learn: [
        "Outer loop picks each row",
        "Inner loop visits each item in that row",
        "Together they reach every cell",
    ],

    idea: `To visit every cell you need <strong>nested loops</strong>: an outer loop picks each row, and an inner loop goes through every item in that row.

    Together they reach every cell. Left to right, then down to the next row. Like reading a tiny table.`,

    code: {
        filename: "nested.py",
        lines: [
            `grid = [`,
            `    [1, 2, 3],`,
            `    [4, 5, 6],`,
            `    [7, 8, 9],`,
            `]`,
            ``,
            `for row in grid:`,
            `    for cell in row:`,
            `        print(cell)`,
        ],
        output: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
        ],
    },

    changeOneLine: `In the editor above, change <code>print(cell)</code> to <code>print("cell:", cell)</code>. Press <strong>Run</strong>. Each line should start with <code>cell:</code>.`,

    code2: {
        filename: "labels.py",
        lines: [
            `board = [`,
            `    ["A", "B", "C"],`,
            `    ["D", "E", "F"],`,
            `    ["G", "H", "I"],`,
            `]`,
            `for row in board:`,
            `    for letter in row:`,
            `        print("Saw", letter)`,
        ],
        output: [
            "Saw A",
            "Saw B",
            "Saw C",
            "Saw D",
            "Saw E",
            "Saw F",
            "Saw G",
            "Saw H",
            "Saw I",
        ],
    },

    practice: [
        {
            text: `Use nested loops to print every number in the grid.`,
            hint: `The outer loop picks each row. The inner loop visits every cell in that row and prints it.`,
            starterTip: `Try: for row in grid: then inside it, for cell in row: and print(cell).`,
            starter: [
                `grid = [`,
                `    [1, 2, 3],`,
                `    [4, 5, 6],`,
                `    [7, 8, 9],`,
                `]`,
                `# nested for loops`,
                ``,
            ].join("\n"),
            gradingNote: `Pass if nested loops print all nine numbers.`,
        },
        {
            text: `Visit every cell and print only the ones that are greater than 5.`,
            hint: `Keep your nested loops, but only print when the cell is bigger than 5. Use if cell > 5:`,
            starterTip: `Inside for cell in row:, add if cell > 5: then print(cell) indented under the if.`,
            starter: [
                `grid = [`,
                `    [1, 2, 3],`,
                `    [4, 5, 6],`,
                `    [7, 8, 9],`,
                `]`,
                `for row in grid:`,
                `    for cell in row:`,
                `        # print if cell > 5`,
                `        `,
            ].join("\n"),
            gradingNote: `Pass if nested loops print 6, 7, 8, and 9 only.`,
        },
    ],

    quiz: [
        {
            question: `What does the outer loop usually loop over?`,
            options: [
                { text: "Each column index only", correct: false },
                { text: "Each row (each inner list)", correct: true },
                { text: "Only the center cell", correct: false },
                { text: "The filename", correct: false },
            ],
            correct: "Outer loop walks through the rows.",
            wrong: "for row in grid picks each inner list.",
        },
        {
            question: `What does the inner loop do?`,
            options: [
                { text: "Visits each cell in the current row", correct: true },
                { text: "Deletes the row", correct: false },
                { text: "Skips every other row", correct: false },
                { text: "Creates a new grid", correct: false },
            ],
            correct: "Inner loop walks left to right across one row.",
            wrong: "for cell in row visits every value in that row.",
        },
        {
            question: `How many times does the inner body run on a 3x3 grid?`,
            options: [
                { text: "3", correct: false },
                { text: "6", correct: false },
                { text: "9", correct: true },
                { text: "1", correct: false },
            ],
            correct: "3 rows × 3 cells = 9 visits.",
            wrong: "Every cell is visited once. Nine times total.",
        },
    ],

    project: {
        title: "Visit Every Seat",
        desc: "Use nested loops to print every name in a 3x3 seating chart with the word Hello.",
        starter: [
            `seats = [`,
            `    ["Ava", "Ben", "Cara"],`,
            `    ["Diego", "Eve", "Finn"],`,
            `    ["Gia", "Hugo", "Ivy"],`,
            `]`,
            `# Hello Ava, Hello Ben, ...`,
            ``,
        ].join("\n"),
    },

    prev: { unit: 7, lesson: 4, title: "Changing a Cell" },
    next: { unit: 7, lesson: 6, title: "Printing a Grid" },
};
