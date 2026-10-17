export default {
    format: "v2",
    unit: 7,
    lesson: 3,
    unitLessons: 3,
    unitTitle: "2D Lists",
    title: "Looping Over a Grid",
    readTime: 30,

    goal: "In this lesson you will learn how to visit every cell in a 2D list with nested loops so you can print grids, add totals, and search the whole board.",

    learn: [
        "Write a loop inside another loop",
        "Visit every cell in a 2D list",
        "Calculate totals across a whole grid",
    ],

    idea: `To visit every cell you need two loops: an <strong>outer</strong> loop picks each row, and an <strong>inner</strong> loop goes through every item in that row.

Together they reach every cell — like reading a table left to right, then down to the next row.`,

    code: {
        filename: "nested.py",
        lines: [
            `grid = [`,
            `    [1, 2, 3],`,
            `    [4, 5, 6],`,
            `    [7, 8, 9],`,
            `]`,
            ``,
            `# Print every cell`,
            `for row in grid:`,
            `    for cell in row:`,
            `        print(cell, end=" ")`,
            `    print()`,
            ``,
            `# Sum all values`,
            `total = 0`,
            `for row in grid:`,
            `    for cell in row:`,
            `        total = total + cell`,
            `print("Total:", total)`,
        ],
        output: [
            "1 2 3 ",
            "4 5 6 ",
            "7 8 9 ",
            "Total: 45",
        ],
    },

    changeOneLine: `In the editor above, change the center value <code>5</code> to <code>10</code>. Press <strong>Run</strong>. The total should become <code>50</code>.`,

    code2: {
        filename: "times.py",
        lines: [
            `board = [`,
            `    [2, 4, 6],`,
            `    [8, 10, 12],`,
            `]`,
            `for row in board:`,
            `    for n in row:`,
            `        print(n, end=" ")`,
            `    print()`,
            ``,
            `biggest = board[0][0]`,
            `for row in board:`,
            `    for n in row:`,
            `        if n > biggest:`,
            `            biggest = n`,
            `print("Biggest:", biggest)`,
        ],
        output: [
            "2 4 6 ",
            "8 10 12 ",
            "Biggest: 12",
        ],
    },

    practice: [
        {
            text: `Use nested loops to find and print the largest value in a small 3x3 grid. Fill in the blanks.`,
            starter: [
                `grid = [`,
                `    [3, 8, 2],`,
                `    [14, 5, 9],`,
                `    [7, 11, 4],`,
                `]`,
                `biggest = grid[0][0]`,
                `for row in grid:`,
                `    for cell in row:`,
                `        if cell > biggest:`,
                `            `,
                `print("Biggest:", biggest)`,
            ].join("\n"),
            gradingNote: `Pass if nested loops update biggest so the printed value is 14.`,
        },
        {
            text: `Print a tiny 1–3 multiplication table using nested loops (rows and columns 1 through 3). Fill in the inner print.`,
            starter: [
                `for row in range(1, 4):`,
                `    for col in range(1, 4):`,
                `        # Print row * col on the same line`,
                `        print()`,
                `    print()`,
            ].join("\n"),
            gradingNote: `Pass if nested loops print a 3x3 multiplication table (1 2 3 / 2 4 6 / 3 6 9), typically with print(row * col, end=" ").`,
        },
    ],

    quiz: [
        {
            question: `In a nested loop over a 2D list, what does the inner loop do?`,
            options: [
                { text: "It picks the next row", correct: false },
                { text: "It goes through every item in the current row", correct: true },
                { text: "It runs once for every row only", correct: false },
                { text: "It only runs when a condition is True", correct: false },
            ],
            correct: "The inner loop processes all items in the row the outer loop is on.",
            wrong: "Outer loop = rows; inner loop = items inside that row.",
        },
        {
            question: `How many times does the inner loop body run for a 3x3 grid?`,
            options: [
                { text: "3 times", correct: false },
                { text: "6 times", correct: false },
                { text: "9 times", correct: true },
                { text: "1 time", correct: false },
            ],
            correct: "Three rows times three cells = 9 visits.",
            wrong: "Every cell is visited once: 3 × 3 = 9.",
        },
        {
            question: `What is a good way to total every number in a grid?`,
            options: [
                { text: "Print only grid[0]", correct: false },
                { text: "Nested loops adding each cell into total", correct: true },
                { text: "Use append on the outer list", correct: false },
                { text: "Sort the grid first", correct: false },
            ],
            correct: "Loop rows, loop cells, add each cell into total.",
            wrong: "Visit every cell with nested loops and keep a running total.",
        },
    ],

    project: {
        title: "Tic-Tac-Toe Board",
        desc: "Finish a 3x3 tic-tac-toe board printer. Use nested loops to print the board, place two more marks by updating cells, then print again. No live two-player input — just code the moves.",
        starter: [
            `board = [`,
            `    [" ", " ", " "],`,
            `    [" ", " ", " "],`,
            `    [" ", " ", " "],`,
            `]`,
            ``,
            `def print_board(b):`,
            `    for row in b:`,
            `        for cell in row:`,
            `            print(cell, end=" | ")`,
            `        print()`,
            `        print("---------")`,
            ``,
            `print("Empty:")`,
            `print_board(board)`,
            ``,
            `# Place X at center and O at top-left`,
            `board[1][1] = "X"`,
            `# Place O at [0][0]`,
            ``,
            ``,
            `print("After moves:")`,
            `print_board(board)`,
        ].join("\n"),
    },

    prev: { unit: 7, lesson: 2, title: "Accessing Rows & Columns" },
    next: { unit: 8, lesson: 1, title: "Creating & Looking Up" },
};
