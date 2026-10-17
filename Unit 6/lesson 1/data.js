export default {
    format: "v2",
    unit: 6,
    lesson: 1,
    unitLessons: 4,
    unitTitle: "Lists",
    title: "Creating & Indexing Lists",
    readTime: 30,

    goal: "In this lesson you will learn how to store several values in one list and pick out any item using its index number.",

    learn: [
        "Create a list with square brackets",
        "Access items with an index number",
        "Remember that indexing starts at 0",
    ],

    idea: `A <strong>list</strong> holds many values in order inside one variable. You write them inside square brackets, separated by commas.

Each item has an <strong>index</strong> (its position). Python counts from <code>0</code>, so the first item is <code>list[0]</code>, the second is <code>list[1]</code>, and so on. You can also use <code>-1</code> to get the last item.`,

    code: {
        filename: "snacks.py",
        lines: [
            `# A list of snacks`,
            `snacks = ["apple", "chips", "cookie"]`,
            ``,
            `# Indexes start at 0`,
            `print(snacks[0])`,
            `print(snacks[1])`,
            `print(snacks[2])`,
            ``,
            `# -1 means the last item`,
            `print(snacks[-1])`,
            ``,
            `# Lists can mix types`,
            `player = ["Sam", 11, True]`,
            `print(player[0], "is", player[1])`,
        ],
        output: [
            "apple",
            "chips",
            "cookie",
            "cookie",
            "Sam is 11",
        ],
    },

    changeOneLine: `In the editor above, change <code>snacks[0]</code> to <code>snacks[2]</code> in the first print. Press <strong>Run</strong>. The first line of output should say <code>cookie</code>.`,

    code2: {
        filename: "games.py",
        lines: [
            `games = ["Mario", "Zelda", "Minecraft"]`,
            `print("First:", games[0])`,
            `print("Middle:", games[1])`,
            `print("Last:", games[-1])`,
        ],
        output: [
            "First: Mario",
            "Middle: Zelda",
            "Last: Minecraft",
        ],
    },

    practice: [
        {
            text: `Make a list of three favorite movies. Print the first and the last using indexes. Fill in the blanks.`,
            starter: [
                `movies = ["Up", "Coco", "Moana"]`,
                `# Print the first movie`,
                `print()`,
                `# Print the last movie (use -1)`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if movies is a list and two prints use indexes to show the first item and the last item (index 0 and -1 or 2).`,
        },
        {
            text: `Create a short list of numbers. Print the sum of the first and last items using indexes.`,
            starter: [
                `nums = [10, 20, 30, 40]`,
                `# Print first + last`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if the program prints 50 (first + last of the list) using list indexes, not only a hardcoded 50 with no list access.`,
        },
    ],

    quiz: [
        {
            question: `A list has 4 items. What index does the last item have?`,
            options: [
                { text: "4, because there are 4 items", correct: false },
                { text: "3, because indexing starts at 0", correct: true },
                { text: "0, because Python counts from 0", correct: false },
                { text: "-1 is the only possible answer", correct: false },
            ],
            correct: "With 4 items the indexes are 0, 1, 2, 3 — so the last is at index 3 (or you can use -1).",
            wrong: "Indexes start at 0, so four items use indexes 0 through 3.",
        },
        {
            question: `What does <code>pets[-1]</code> give you?`,
            options: [
                { text: "The first item", correct: false },
                { text: "The last item", correct: true },
                { text: "An error", correct: false },
                { text: "The number -1", correct: false },
            ],
            correct: "Negative indexes count from the end, so -1 is the last item.",
            wrong: "-1 means the last item in the list, not the first.",
        },
        {
            question: `Which line correctly creates a list of three colors?`,
            options: [
                { text: `colors = "red", "blue", "green"`, correct: false },
                { text: `colors = ["red", "blue", "green"]`, correct: true },
                { text: `colors = (red blue green)`, correct: false },
                { text: `colors = {"red", "blue", "green"}`, correct: false },
            ],
            correct: "Square brackets create a list, with commas between items.",
            wrong: "Use square brackets and commas: [\"red\", \"blue\", \"green\"].",
        },
    ],

    project: {
        title: "Top 5 List",
        desc: "Finish a top-5 list of songs, books, or games. Print them numbered 1 to 5 using indexes, then print your top pick at the bottom.",
        starter: [
            `top = ["Song A", "Song B", "Song C", "Song D", "Song E"]`,
            `print("1.", top[0])`,
            `print("2.", top[1])`,
            `# Finish 3, 4, and 5`,
            `print()`,
            `print()`,
            `print()`,
            ``,
            `# Print your favorite from the list`,
            `print("My pick:", )`,
        ].join("\n"),
    },

    prev: { unit: 5, lesson: 4, title: "Designing with Functions" },
    next: { unit: 6, lesson: 2, title: "Adding & Removing Items" },
};
