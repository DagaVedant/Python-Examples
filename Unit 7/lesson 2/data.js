export default {
    format: "v2",
    unit: 7,
    lesson: 2,
    unitLessons: 8,
    unitTitle: "2D Lists",
    title: "Reading Rows",
    readTime: 20,

    goal: "In this lesson you will learn how to read one whole row from a 2D list using a single index.",

    learn: [
        "grid[0] is the first row",
        "One index gives you an entire inner list",
        "You can print or loop that row",
    ],

    idea: `To get a whole row, use <strong>one</strong> index on the outer list: <code>grid[0]</code> is the first row, <code>grid[1]</code> is the second, and <code>grid[2]</code> is the third.

    That value is itself a list, so you can print it or loop through it.`,

    code: {
        filename: "rows.py",
        lines: [
            `grid = [`,
            `    [1, 2, 3],`,
            `    [4, 5, 6],`,
            `    [7, 8, 9],`,
            `]`,
            ``,
            `print("Row 0:", grid[0])`,
            `print("Row 1:", grid[1])`,
            `print("Row 2:", grid[2])`,
            ``,
            `print("First of row 1:", grid[1][0])`,
        ],
        output: [
            "Row 0: [1, 2, 3]",
            "Row 1: [4, 5, 6]",
            "Row 2: [7, 8, 9]",
            "First of row 1: 4",
        ],
    },

    changeOneLine: `In the editor above, change the last print to use <code>grid[2][0]</code>. Press <strong>Run</strong>. The last line should show <code>7</code>.`,

    code2: {
        filename: "front.py",
        lines: [
            `seats = [`,
            `    ["Ava", "Ben", "Cara"],`,
            `    ["Diego", "Eve", "Finn"],`,
            `    ["Gia", "Hugo", "Ivy"],`,
            `]`,
            `print(seats[0])`,
            `for name in seats[0]:`,
            `    print("Front:", name)`,
        ],
        output: [
            "['Ava', 'Ben', 'Cara']",
            "Front: Ava",
            "Front: Ben",
            "Front: Cara",
        ],
    },

    practice: [
        {
            text: `Print the middle row of the grid (index 1).`,
            starter: [
                `grid = [`,
                `    [1, 2, 3],`,
                `    [4, 5, 6],`,
                `    [7, 8, 9],`,
                `]`,
                `# Print row 1`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if grid[1] is printed.`,
        },
        {
            text: `Loop over the last row and print each value.`,
            starter: [
                `grid = [`,
                `    [1, 2, 3],`,
                `    [4, 5, 6],`,
                `    [7, 8, 9],`,
                `]`,
                `# for value in grid[2]:`,
                ``,
            ].join("\n"),
            gradingNote: `Pass if a for loop prints 7, 8, and 9 from grid[2].`,
        },
    ],

    quiz: [
        {
            question: `What is <code>grid[0]</code> for a 2D list?`,
            options: [
                { text: "Only the first number in the whole grid", correct: false },
                { text: "The entire first row (an inner list)", correct: true },
                { text: "Always an error", correct: false },
                { text: "The number of rows", correct: false },
            ],
            correct: "One outer index returns a whole row list.",
            wrong: "grid[0] is the first inner list.",
        },
        {
            question: `In a 3-row grid, which index is the last row?`,
            options: [
                { text: "3", correct: false },
                { text: "2", correct: true },
                { text: "0", correct: false },
                { text: "-3 only", correct: false },
            ],
            correct: "Rows are indexed 0, 1, 2 — so the last is 2.",
            wrong: "Indexing still starts at 0.",
        },
        {
            question: `Can you loop over <code>grid[1]</code>?`,
            options: [
                { text: "No — rows are not lists", correct: false },
                { text: "Yes — a row is a normal list", correct: true },
                { text: "Only with input()", correct: false },
                { text: "Only if the grid is empty", correct: false },
            ],
            correct: "Each row is a list, so for works on it.",
            wrong: "Treat the row like any other list.",
        },
    ],

    project: {
        title: "Front Row Roll Call",
        desc: "Print the front row of a 3x3 seating chart, then loop to greet each person in that row.",
        starter: [
            `seats = [`,
            `    ["Ava", "Ben", "Cara"],`,
            `    ["Diego", "Eve", "Finn"],`,
            `    ["Gia", "Hugo", "Ivy"],`,
            `]`,
            `print("Front row:", )`,
            `# greet each name in seats[0]`,
            ``,
        ].join("\n"),
    },

    prev: { unit: 7, lesson: 1, title: "Lists Inside Lists" },
    next: { unit: 7, lesson: 3, title: "Cells and Columns" },
};
