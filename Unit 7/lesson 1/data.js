export default {
    format: "v2",
    unit: 7,
    lesson: 1,
    unitLessons: 3,
    unitTitle: "2D Lists",
    title: "Lists Inside Lists",
    readTime: 30,

    goal: "In this lesson you will learn how to make a 2D list — a list where each item is another list — and think of it as rows in a table.",

    learn: [
        "Create a list of lists",
        "Picture a 2D list as rows and columns",
        "Access a whole row with one index",
    ],

    idea: `A <strong>2D list</strong> is a list where every item is itself another list. Think of it as a table: the outer list holds the <strong>rows</strong>, and each inner list holds the values in that row.

This is great for small grids, game boards, and seating charts.`,

    code: {
        filename: "grid.py",
        lines: [
            `# A 3x3 grid`,
            `grid = [`,
            `    [1, 2, 3],`,
            `    [4, 5, 6],`,
            `    [7, 8, 9],`,
            `]`,
            ``,
            `# Access a whole row`,
            `print(grid[0])`,
            `print(grid[1])`,
            `print(grid[2])`,
            ``,
            `# A tiny seating chart`,
            `seats = [`,
            `    ["Alice", "Bob", "Charlie"],`,
            `    ["Diana", "Eve", "Frank"],`,
            `]`,
            `print(seats[0])`,
        ],
        output: [
            "[1, 2, 3]",
            "[4, 5, 6]",
            "[7, 8, 9]",
            "['Alice', 'Bob', 'Charlie']",
        ],
    },

    changeOneLine: `In the editor above, change <code>print(grid[0])</code> to <code>print(grid[2])</code>. Press <strong>Run</strong>. The first line of output should be <code>[7, 8, 9]</code>.`,

    code2: {
        filename: "board.py",
        lines: [
            `board = [`,
            `    ["X", "O", "X"],`,
            `    [" ", "X", "O"],`,
            `    ["O", " ", " "],`,
            `]`,
            `print(board[0])`,
            `print(board[1])`,
            `print(board[2])`,
        ],
        output: [
            "['X', 'O', 'X']",
            "[' ', 'X', 'O']",
            "['O', ' ', ' ']",
        ],
    },

    practice: [
        {
            text: `Create a 3x3 tic-tac-toe board with X, O, and spaces. Print each row on its own line. Fill in the blanks.`,
            starter: [
                `board = [`,
                `    ["X", "O", " "],`,
                `    [" ", "X", "O"],`,
                `    ["O", " ", "X"],`,
                `]`,
                `# Print each row`,
                `print()`,
                `print()`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if a 3x3 list-of-lists is printed one row per line (three prints of board[0], board[1], board[2]).`,
        },
        {
            text: `Make a 2D list where each inner list is a student name plus two scores. Print the whole first student row.`,
            starter: [
                `students = [`,
                `    ["Ava", 90, 85],`,
                `    ["Leo", 88, 92],`,
                `]`,
                `# Print the first student's row`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if students is a list of lists and the first inner list is printed (name plus scores).`,
        },
    ],

    quiz: [
        {
            question: `How many rows and columns does <code>[[1,2],[3,4],[5,6]]</code> have?`,
            options: [
                { text: "2 rows and 3 columns", correct: false },
                { text: "3 rows and 2 columns", correct: true },
                { text: "6 rows and 1 column", correct: false },
                { text: "1 row and 6 columns", correct: false },
            ],
            correct: "Three inner lists means 3 rows; each has 2 items means 2 columns.",
            wrong: "Count inner lists for rows, and items inside one inner list for columns.",
        },
        {
            question: `What does <code>grid[0]</code> give you for a 2D list?`,
            options: [
                { text: "Only the first cell", correct: false },
                { text: "The entire first row", correct: true },
                { text: "The entire first column", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "One index picks a whole row (an inner list).",
            wrong: "grid[0] is the first inner list — the whole first row.",
        },
        {
            question: `Which best describes a 2D list?`,
            options: [
                { text: "A list that can only hold numbers", correct: false },
                { text: "A list where each item is another list", correct: true },
                { text: "Two separate lists that never connect", correct: false },
                { text: "A list that is always 2 items long", correct: false },
            ],
            correct: "A 2D list is a list of lists — rows made of inner lists.",
            wrong: "Think table: outer list = rows, each row is its own list.",
        },
    ],

    project: {
        title: "Noughts & Crosses Board",
        desc: "Finish a 3x3 board. Fill a few cells with X and O, then print the board one row per line with simple dividers.",
        starter: [
            `board = [`,
            `    ["X", " ", "O"],`,
            `    [" ", "X", " "],`,
            `    ["O", " ", "X"],`,
            `]`,
            `print(board[0])`,
            `print("---------")`,
            `# Print the other rows with dividers`,
            `print()`,
            `print("---------")`,
            `print()`,
        ].join("\n"),
    },

    prev: { unit: 6, lesson: 4, title: "Useful List Methods" },
    next: { unit: 7, lesson: 2, title: "Accessing Rows & Columns" },
};
