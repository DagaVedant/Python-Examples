export default {
    unit: 7,
    lesson: 1,
    unitLessons: 3,
    unitTitle: "2D Lists",
    title: "Lists Inside Lists",
    readTime: 5,

    goal: "In this lesson you will learn how to create a 2D list, basically just a list where each of those items is itself a list.",

    learn: [
        "Create a list of lists",
        "Picture a 2D list as rows and columns",
        "Access a whole row using one index",
    ],

    idea: "A 2D list is just a list where every item is itself another list. You can think of it as a table, where the outer list holds the rows, and each inner list holds the values in that row. This is perfect for grids, game boards, spreadsheets, or any data that naturally has rows and columns.",

    code: {
        filename: "Unit_7_Lesson_1.py",
        lines: [
            `# A 2D list as a grid`,
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
            `# A seating chart example`,
            `seats = [`,
            `    ["Alice", "Bob", "Charlie"],`,
            `    ["Diana", "Eve",  "Frank"],`,
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

    practice: [
        `Create a 3x3 2D list representing a noughts and crosses board (use "X", "O", and " "). Print each row on its own line.`,
        `Create a 2D list where each inner list holds a student's name and their three test scores. Print the whole structure.`,
    ],

    quiz: {
        question: `How many rows and columns does this 2D list have? <code>[[1,2],[3,4],[5,6]]</code>`,
        options: [
            {text: "2 rows and 3 columns", correct: false},
            {text: "3 rows and 2 columns", correct: true},
            {text: "6 rows and 1 column", correct: false},
            {text: "1 row and 6 columns", correct: false},
        ],
        correct: "Correct! There are 3 inner lists (rows) and each has 2 items (columns).",
        wrong: "Not quite. Count the inner lists for rows and the items inside one inner list for columns.",
    },

    project: {
        title: "Noughts & Crosses Board",
        desc: "Create a 3x3 2D list to represent a noughts and crosses board. Fill some cells with X and O. Write a function that prints the board neatly with dividing lines between cells.",
    },

    prev: {unit: 6, lesson: 4, title: "Useful List Methods"},
    next: {unit: 7, lesson: 2, title: "Accessing Rows & Columns"},
};
