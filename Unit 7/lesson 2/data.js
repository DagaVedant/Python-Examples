export default {
    format: "v2",
    unit: 7,
    lesson: 2,
    unitLessons: 3,
    unitTitle: "2D Lists",
    title: "Accessing Rows & Columns",
    readTime: 30,

    goal: "In this lesson you will learn how to reach any single cell in a 2D list with two indexes, update that cell, and read one column down the grid.",

    learn: [
        "Use two indexes to access one cell",
        "Update a cell's value",
        "Read a column across all rows",
    ],

    idea: `To get one cell you use two indexes: first the <strong>row</strong>, then the <strong>column</strong>. <code>grid[1][2]</code> means row 1, column 2.

Put the same pattern on the left of <code>=</code> to change a value. To read a column, loop through each row and print the same column index.`,

    code: {
        filename: "cells.py",
        lines: [
            `grid = [`,
            `    [1, 2, 3],`,
            `    [4, 5, 6],`,
            `    [7, 8, 9],`,
            `]`,
            ``,
            `# Access one cell`,
            `print(grid[0][0])`,
            `print(grid[1][2])`,
            `print(grid[2][1])`,
            ``,
            `# Update a cell`,
            `grid[1][1] = 99`,
            `print(grid[1])`,
            ``,
            `# Print the first column`,
            `for row in grid:`,
            `    print(row[0])`,
        ],
        output: [
            "1",
            "6",
            "8",
            "[4, 99, 6]",
            "1",
            "4",
            "7",
        ],
    },

    changeOneLine: `In the editor above, change <code>grid[1][1] = 99</code> to <code>grid[1][1] = 50</code>. Press <strong>Run</strong>. The middle row should print as <code>[4, 50, 6]</code>.`,

    code2: {
        filename: "seats.py",
        lines: [
            `seats = [`,
            `    ["Ava", "Leo", "Mia"],`,
            `    ["Sam", "Rio", "Kai"],`,
            `]`,
            `print(seats[0][1])`,
            `seats[1][0] = "Jamie"`,
            `print(seats[1])`,
            `for row in seats:`,
            `    print(row[2])`,
        ],
        output: [
            "Leo",
            "['Jamie', 'Rio', 'Kai']",
            "Mia",
            "Kai",
        ],
    },

    practice: [
        {
            text: `Start with a 3x3 grid of zeros. Change four cells to different numbers, then print each row. Fill in the blanks.`,
            starter: [
                `grid = [`,
                `    [0, 0, 0],`,
                `    [0, 0, 0],`,
                `    [0, 0, 0],`,
                `]`,
                `# Update four cells`,
                `grid[0][0] = 1`,
                `grid[0][2] = 2`,
                `# Set two more cells`,
                ``,
                ``,
                `print(grid[0])`,
                `print(grid[1])`,
                `print(grid[2])`,
            ].join("\n"),
            gradingNote: `Pass if at least four cells are assigned with two-index notation and all three rows are printed.`,
        },
        {
            text: `Given student score rows, print the second student's third score (row index 1, column index 2).`,
            starter: [
                `scores = [`,
                `    [80, 85, 90],`,
                `    [70, 75, 88],`,
                `    [92, 91, 89],`,
                `]`,
                `# Print second student, third score`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if the program prints 88 using scores[1][2] (or equivalent two-index access).`,
        },
    ],

    quiz: [
        {
            question: `What does <code>grid[2][0]</code> access?`,
            options: [
                { text: "The first item in the first row", correct: false },
                { text: "The first item in the third row", correct: true },
                { text: "The third item in the first row", correct: false },
                { text: "The entire second column", correct: false },
            ],
            correct: "grid[2] is the third row; [0] is the first item in that row.",
            wrong: "First index = row, second index = position in that row.",
        },
        {
            question: `How do you change the center cell of a 3x3 grid to 5?`,
            options: [
                { text: `grid[1][1] = 5`, correct: true },
                { text: `grid[0][0] = 5`, correct: false },
                { text: `grid[2][2] = 5`, correct: false },
                { text: `grid = 5`, correct: false },
            ],
            correct: "The center is row 1, column 1: grid[1][1] = 5.",
            wrong: "In a 3x3 grid the middle cell is index [1][1].",
        },
        {
            question: `To print the first column, what goes inside <code>for row in grid:</code>?`,
            options: [
                { text: `print(row)`, correct: false },
                { text: `print(row[0])`, correct: true },
                { text: `print(grid[0])`, correct: false },
                { text: `print(column)`, correct: false },
            ],
            correct: "Each row's first item is row[0] — that builds the first column.",
            wrong: "Loop rows, then take the same column index from each row.",
        },
    ],

    project: {
        title: "Seating Plan Editor",
        desc: "Finish a small 3x3 seating plan. Print it, move one person to a new seat by updating two cells, then print again. No input needed.",
        starter: [
            `seats = [`,
            `    ["Ava", "Leo", "Mia"],`,
            `    ["Sam", "Rio", "Kai"],`,
            `    [" ", "Jay", " "],`,
            `]`,
            `print("Before:")`,
            `print(seats[0])`,
            `print(seats[1])`,
            `print(seats[2])`,
            ``,
            `# Move Ava to the empty seat at [2][0]`,
            `# Clear her old seat at [0][0]`,
            ``,
            ``,
            `print("After:")`,
            `print(seats[0])`,
            `print(seats[1])`,
            `print(seats[2])`,
        ].join("\n"),
    },

    prev: { unit: 7, lesson: 1, title: "Lists Inside Lists" },
    next: { unit: 7, lesson: 3, title: "Looping Over a Grid" },
};
