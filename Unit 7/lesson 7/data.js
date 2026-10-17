export default {
    format: "v2",
    unit: 7,
    lesson: 7,
    unitLessons: 8,
    unitTitle: "2D Lists",
    title: "Searching a Grid",
    readTime: 24,

    goal: "In this lesson you will learn how to search a 2D list for a value and report whether it was found.",

    learn: [
        "Scan every cell with nested loops",
        "Compare each cell to the target",
        "Use a flag variable like found",
    ],

    idea: `To <strong>search</strong> a grid, visit every cell. If a cell matches what you want, remember that you found it.

    A common pattern: start with <code>found = False</code>, set it to <code>True</code> when you see a match, then print the result after the loops.`,

    code: {
        filename: "search.py",
        lines: [
            `grid = [`,
            `    [1, 2, 3],`,
            `    [4, 5, 6],`,
            `    [7, 8, 9],`,
            `]`,
            ``,
            `target = 5`,
            `found = False`,
            `for row in grid:`,
            `    for cell in row:`,
            `        if cell == target:`,
            `            found = True`,
            ``,
            `print("Looking for", target)`,
            `print("Found:", found)`,
        ],
        output: [
            "Looking for 5",
            "Found: True",
        ],
    },

    changeOneLine: `In the editor above, change <code>target = 5</code> to <code>target = 10</code>. Press <strong>Run</strong>. The output should say <code>Found: False</code>.`,

    code2: {
        filename: "find_x.py",
        lines: [
            `board = [`,
            `    [".", "O", "."],`,
            `    [".", "X", "."],`,
            `    ["O", ".", "."],`,
            `]`,
            `found = False`,
            `for row in board:`,
            `    for cell in row:`,
            `        if cell == "X":`,
            `            found = True`,
            `print("X on board:", found)`,
        ],
        output: [
            "X on board: True",
        ],
    },

    practice: [
        {
            text: `Search for <code>8</code> in the grid. Print whether it was found.`,
            hint: `Visit every cell with nested loops. When a cell equals 8, set found = True.`,
            starterTip: `Add for row in grid: and for cell in row:, then if cell == 8: found = True before print(found).`,
            starter: [
                `grid = [`,
                `    [1, 2, 3],`,
                `    [4, 5, 6],`,
                `    [7, 8, 9],`,
                `]`,
                `found = False`,
                `# nested loops; set found = True if cell == 8`,
                ``,
                `print(found)`,
            ].join("\n"),
            gradingNote: `Pass if nested search sets found True for 8 and prints True.`,
        },
        {
            text: `Search the board for <code>"O"</code>. Print <code>Found O</code> or <code>No O</code> based on a found flag.`,
            hint: `Search like before, but compare each cell to the string "O". After the loops, use if found to pick your message.`,
            starterTip: `Set found = True when cell == "O". Then if found: print("Found O") else: print("No O").`,
            starter: [
                `board = [`,
                `    ["X", ".", "X"],`,
                `    [".", "X", "."],`,
                `    [".", ".", "X"],`,
                `]`,
                `found = False`,
                ``,
                `# print message using found`,
                ``,
            ].join("\n"),
            gradingNote: `Pass if search finds no O and prints a clear No O style message (found stays False).`,
        },
    ],

    quiz: [
        {
            question: `Why use nested loops to search a grid?`,
            options: [
                { text: "So every cell can be checked", correct: true },
                { text: "Because grids have only one cell", correct: false },
                { text: "To sort the grid automatically", correct: false },
                { text: "Searching does not need loops", correct: false },
            ],
            correct: "You must visit each cell to look for a match.",
            wrong: "Outer and inner loops cover the whole board.",
        },
        {
            question: `What is a good starting value for found?`,
            options: [
                { text: "True", correct: false },
                { text: "False", correct: true },
                { text: "0 only if the grid is strings", correct: false },
                { text: "The word maybe", correct: false },
            ],
            correct: "Start False, then flip to True when you find a match.",
            wrong: "Assume not found until a cell proves otherwise.",
        },
        {
            question: `If the target is missing, what should found be at the end?`,
            options: [
                { text: "True", correct: false },
                { text: "False", correct: true },
                { text: "None forever", correct: false },
                { text: "The grid itself", correct: false },
            ],
            correct: "No match means found stays False.",
            wrong: "Only a matching cell sets found to True.",
        },
    ],

    project: {
        title: "Find the Treasure",
        desc: "Hide a \"*\" in a 3x3 map of dots. Search the grid and print whether the treasure was found.",
        starter: [
            `mapa = [`,
            `    [".", ".", "."],`,
            `    [".", "*", "."],`,
            `    [".", ".", "."],`,
            `]`,
            `found = False`,
            `# search for "*"`,
            ``,
            `print("Treasure found:", found)`,
        ].join("\n"),
    },

    prev: { unit: 7, lesson: 6, title: "Printing a Grid" },
    next: { unit: 7, lesson: 8, title: "Grid Mini Project" },
};
