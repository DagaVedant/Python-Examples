export default {
    format: "v2",
    unit: 7,
    lesson: 8,
    unitLessons: 8,
    unitTitle: "2D Lists",
    title: "Grid Mini Project",
    readTime: 25,

    goal: "In this lesson you will combine 2D list skills: build a small grid, change cells, print it, and total or search the values.",

    learn: [
        "Build and update a 3x3 grid",
        "Print the grid neatly",
        "Total numbers or search for a mark",
    ],

    idea: `Now put the pieces together. A mini project might: create a 3x3 board, change a few cells, print each row, then either add up all numbers or search for a special mark.

    Keep the grid small so every step stays easy to check.`,

    code: {
        filename: "mini.py",
        lines: [
            `grid = [`,
            `    [1, 1, 1],`,
            `    [1, 1, 1],`,
            `    [1, 1, 1],`,
            `]`,
            ``,
            `# Upgrade some cells`,
            `grid[0][0] = 5`,
            `grid[1][1] = 5`,
            `grid[2][2] = 5`,
            ``,
            `# Print neatly`,
            `for row in grid:`,
            `    print(row[0], row[1], row[2])`,
            ``,
            `# Total every cell`,
            `total = 0`,
            `for row in grid:`,
            `    for cell in row:`,
            `        total = total + cell`,
            `print("Total:", total)`,
        ],
        output: [
            "5 1 1",
            "1 5 1",
            "1 1 5",
            "Total: 21",
        ],
    },

    changeOneLine: `In the editor above, change <code>grid[1][1] = 5</code> to <code>grid[1][1] = 9</code>. Press <strong>Run</strong>. The center should show <code>9</code> and the total should become <code>25</code>.`,

    code2: {
        filename: "marks.py",
        lines: [
            `board = [`,
            `    [".", ".", "."],`,
            `    [".", ".", "."],`,
            `    [".", ".", "."],`,
            `]`,
            `board[0][1] = "X"`,
            `board[2][0] = "O"`,
            `for row in board:`,
            `    print(row[0], row[1], row[2])`,
            `found = False`,
            `for row in board:`,
            `    for cell in row:`,
            `        if cell == "X":`,
            `            found = True`,
            `print("Has X:", found)`,
        ],
        output: [
            ". X .",
            ". . .",
            "O . .",
            "Has X: True",
        ],
    },

    practice: [
        {
            text: `Build a 3x3 grid of zeros. Set the center to 1. Print each row, then print the sum of all cells.`,
            hint: `The center is row 1, column 1 — use grid[1][1] = 1. Print rows with a loop, then add every cell into total.`,
            starterTip: `After grid[1][1] = 1, print with for row in grid: print(row[0], row[1], row[2]). Use nested loops to add each cell to total and print it.`,
            starter: [
                `grid = [`,
                `    [0, 0, 0],`,
                `    [0, 0, 0],`,
                `    [0, 0, 0],`,
                `]`,
                `# set center, print rows, total cells`,
                ``,
            ].join("\n"),
            gradingNote: `Pass if center is 1, rows are printed, and total of all cells is 1.`,
        },
        {
            text: `On a 3x3 board of dots, place two X marks. Print the board, then search and print whether X was found.`,
            hint: `Pick two spots like board[0][0] = "X" and board[2][2] = "X". Print rows, then search with found and nested loops.`,
            starterTip: `Set two cells to "X", print each row with commas, then if cell == "X": found = True and print something like print("Has X:", found).`,
            starter: [
                `board = [`,
                `    [".", ".", "."],`,
                `    [".", ".", "."],`,
                `    [".", ".", "."],`,
                `]`,
                ``,
            ].join("\n"),
            gradingNote: `Pass if two cells are set to X, board is printed, and a search reports found True.`,
        },
    ],

    quiz: [
        {
            question: `Which skills belong in a grid mini project?`,
            options: [
                { text: "Only comments, never code", correct: false },
                { text: "Update cells, print rows, total or search", correct: true },
                { text: "Only dictionaries", correct: false },
                { text: "input() is required", correct: false },
            ],
            correct: "Mini projects combine the 2D list tools you learned.",
            wrong: "Change, display, and analyze — those are the usual pieces.",
        },
        {
            question: `Why keep the project on a 3x3 grid?`,
            options: [
                { text: "So every cell is easy to check by hand", correct: true },
                { text: "3x3 is the only size Python allows", correct: false },
                { text: "Larger grids cannot use nested loops", correct: false },
                { text: "Totals only work on 3x3", correct: false },
            ],
            correct: "Small boards are easier to verify while learning.",
            wrong: "Tiny grids keep debugging simple.",
        },
        {
            question: `How do you total every cell in a grid?`,
            options: [
                { text: "Add only grid[0][0]", correct: false },
                { text: "Nested loops with a running total", correct: true },
                { text: "Call grid.sum() only", correct: false },
                { text: "Totals are impossible for 2D lists", correct: false },
            ],
            correct: "Visit each cell and add it into total.",
            wrong: "Same running-total idea as 1D lists, with two loops.",
        },
    ],

    project: {
        title: "Score Board",
        desc: "Create a 3x3 score grid. Change three cells to higher scores. Print the board neatly, then print the total of all nine scores.",
        starter: [
            `scores = [`,
            `    [1, 1, 1],`,
            `    [1, 1, 1],`,
            `    [1, 1, 1],`,
            `]`,
            `# boost three cells`,
            ``,
            ``,
            ``,
            `# print each row neatly`,
            ``,
            `# total all cells`,
            `total = 0`,
            ``,
            `print("Total:", total)`,
        ].join("\n"),
    },

    prev: { unit: 7, lesson: 7, title: "Searching a Grid" },
    next: { unit: 8, lesson: 1, title: "What is a Dictionary" },
};
