export default {
    unit: 7,
    lesson: 3,
    unitLessons: 3,
    unitTitle: "2D Lists",
    title: "Looping Over a Grid",
    readTime: 6,

    goal: "In this lesson you will learn how to visit every cell in a 2D list using nested loops, so you can process entire grids with just a few lines of code.",

    learn: [
        "Write a loop inside another loop",
        "Visit every cell in a 2D list",
        "Calculate totals and search across a whole grid",
    ],

    idea: "To visit every cell in a 2D list you need two loops nested inside each other. The outer loop picks each row one at a time. The inner loop then goes through every item in that row. Together they reach every single cell like reading a table left to right and up to down.",

    code: {
        filename: "lesson_7_3.py",
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
            `# Sum all values in the grid`,
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

    practice: [
        `Create a 3x3 grid of random numbers between 1 and 20. Use nested loops to find and print the largest value in the entire grid.`,
        `Use nested loops to print a multiplication table as a 2D grid (rows and columns 1 through 5).`,
    ],

    quiz: {
        question: `In a nested loop over a 2D list, what does the inner loop do?`,
        options: [
            {text: "It picks the next row", correct: false},
            {text: "It goes through every item within the current row", correct: true},
            {text: "It runs once for every row in the outer list", correct: false},
            {text: "It only runs if the outer loop condition is True", correct: false},
        ],
        correct: "Correct! The inner loop processes all items in whichever row the outer loop is currently on.",
        wrong: "Not quite. The outer loop picks rows; the inner loop goes through every item in that row.",
    },

    project: {
        title: "Tic-Tac-Toe Board",
        desc: "Build a full tic-tac-toe game. Represent the board as a 3x3 2D list. Use nested loops to print it after each turn. Let two players take turns entering a row and column. After each move check all rows, columns, and diagonals for a winner.",
    },

    prev: {unit: 7, lesson: 2, title: "Accessing Rows & Columns"},
    next: null,
};
