export default {
    unit: 7,
    lesson: 2,
    unitLessons: 3,
    unitTitle: "2D Lists",
    title: "Accessing Rows & Columns",
    readTime: 5,

    goal: "In this lesson you will learn how to reach any single cell in a 2D list using two indexes, and how to change values inside the grid.",

    learn: [
        "Use two indexes to access one cell",
        "Update a cell's value",
        "Read a specific column across all rows",
    ],

    idea: "To get to a single cell you use two indexes in a row: the first picks the row, the second picks the position within that row. grid[1][2] means row 1, column 2. You can use the same syntax on the left of an = sign to change a value.",

    code: {
        filename: "Unit_7_Lesson_2.py",
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
            "1", "4", "7",
        ],
    },

    practice: [
        `Create a 4x4 grid of zeros. Update four specific cells with different values. Print the full grid row by row.`,
        `Given a 2D list of student scores, print the score of the second student in the third column.`,
    ],

    quiz: {
        question: `What does <code>grid[2][0]</code> access?`,
        options: [
            {text: "The first item in the first row", correct: false},
            {text: "The first item in the third row", correct: true},
            {text: "The third item in the first row", correct: false},
            {text: "The entire second column", correct: false},
        ],
        correct: "Correct! grid[2] picks the third row (index 2), then [0] picks the first item in that row.",
        wrong: "Not quite. The first index selects the row, the second selects the position within that row.",
    },

    project: {
        title: "Seating Plan Editor",
        desc: "Create a 5x6 seating plan grid filled with names or empty strings. Write a function that prints the plan neatly. Then write a function that lets the user move a person to a new seat by specifying their current and new row and column.",
    },

    prev: {unit: 7, lesson: 1, title: "Lists Inside Lists"},
    next: {unit: 7, lesson: 3, title: "Looping Over a Grid"},
};
