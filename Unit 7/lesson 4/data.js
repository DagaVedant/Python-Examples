export default {
    format: "v2",
    unit: 7,
    lesson: 4,
    unitLessons: 8,
    unitTitle: "2D Lists",
    title: "Changing a Cell",
    readTime: 22,

    goal: "In this lesson you will learn how to update one cell in a 2D list by assigning to grid[row][col].",

    learn: [
        "Assign with grid[row][col] = value",
        "Only that cell changes",
        "Print the grid to confirm",
    ],

    idea: `To change one cell, put two indexes on the left of <code>=</code>:

    <code>grid[1][1] = 0</code>

    That updates only that spot — like placing a piece on a board. Other cells stay the same.`,

    code: {
        filename: "update_cell.py",
        lines: [
            `grid = [`,
            `    [1, 2, 3],`,
            `    [4, 5, 6],`,
            `    [7, 8, 9],`,
            `]`,
            `print("Before:", grid)`,
            ``,
            `# Change the center`,
            `grid[1][1] = 0`,
            `print("After:", grid)`,
            ``,
            `# Place a mark`,
            `board = [`,
            `    [".", ".", "."],`,
            `    [".", ".", "."],`,
            `    [".", ".", "."],`,
            `]`,
            `board[0][0] = "X"`,
            `board[1][1] = "O"`,
            `print(board)`,
        ],
        output: [
            "Before: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
            "After: [[1, 2, 3], [4, 0, 6], [7, 8, 9]]",
            "[['X', '.', '.'], ['.', 'O', '.'], ['.', '.', '.']]",
        ],
    },

    changeOneLine: `In the editor above, change <code>grid[1][1] = 0</code> to <code>grid[1][1] = 99</code>. Press <strong>Run</strong>. The center of the number grid should become <code>99</code>.`,

    code2: {
        filename: "tic.py",
        lines: [
            `board = [`,
            `    [".", ".", "."],`,
            `    [".", ".", "."],`,
            `    [".", ".", "."],`,
            `]`,
            `board[2][2] = "X"`,
            `print(board[2])`,
        ],
        output: [
            "['.', '.', 'X']",
        ],
    },

    practice: [
        {
            text: `Change the top-left cell to <code>100</code> and print the grid.`,
            hint: `Top-left is row 0, column 0. Assign with grid[0][0] = 100 on a line before you print the whole grid.`,
            starterTip: `Add grid[0][0] = 100 on the blank line above print(grid).`,
            starter: [
                `grid = [`,
                `    [1, 2, 3],`,
                `    [4, 5, 6],`,
                `    [7, 8, 9],`,
                `]`,
                ``,
                `print(grid)`,
            ].join("\n"),
            gradingNote: `Pass if grid[0][0] is set to 100 and the grid is printed.`,
        },
        {
            text: `On a blank 3x3 board of dots, place <code>"X"</code> in the center. Print the middle row.`,
            hint: `The center is board[1][1]. Set it to "X" with quotes before you print the middle row at index 1.`,
            starterTip: `Add board[1][1] = "X" on the blank line. When you print(board[1]), the middle should show an X.`,
            starter: [
                `board = [`,
                `    [".", ".", "."],`,
                `    [".", ".", "."],`,
                `    [".", ".", "."],`,
                `]`,
                ``,
                `print(board[1])`,
            ].join("\n"),
            gradingNote: `Pass if board[1][1] = "X" and the middle row prints with X in the center.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>grid[0][2] = 9</code> do?`,
            options: [
                { text: "Deletes row 0", correct: false },
                { text: "Sets the top-right cell to 9", correct: true },
                { text: "Adds a fourth row", correct: false },
                { text: "Prints 9", correct: false },
            ],
            correct: "Assignment updates that one cell.",
            wrong: "Row 0, column 2 is the top-right cell on a 3x3.",
        },
        {
            question: `After changing one cell, do other cells change?`,
            options: [
                { text: "Yes, the whole grid resets", correct: false },
                { text: "No, only that cell updates", correct: true },
                { text: "Only the same column resets", correct: false },
                { text: "Python forbids cell changes", correct: false },
            ],
            correct: "Only the assigned cell is replaced.",
            wrong: "Other positions keep their old values.",
        },
        {
            question: `Which line places O in the bottom-left of a 3x3 board?`,
            options: [
                { text: `board[0][0] = "O"`, correct: false },
                { text: `board[2][0] = "O"`, correct: true },
                { text: `board[2][2] = "O"`, correct: false },
                { text: `board[0][2] = "O"`, correct: false },
            ],
            correct: "Bottom row is index 2; left column is index 0.",
            wrong: "Last row is 2; first column is 0.",
        },
    ],

    project: {
        title: "Place Three Marks",
        desc: "Start with a 3x3 board of dots. Place X in three different cells, then print the whole board.",
        starter: [
            `board = [`,
            `    [".", ".", "."],`,
            `    [".", ".", "."],`,
            `    [".", ".", "."],`,
            `]`,
            `# place three X marks`,
            ``,
            ``,
            ``,
            `print(board)`,
        ].join("\n"),
    },

    prev: { unit: 7, lesson: 3, title: "Cells and Columns" },
    next: { unit: 7, lesson: 5, title: "Nested Loops" },
};
