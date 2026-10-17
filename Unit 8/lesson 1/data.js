export default {
    format: "v2",
    unit: 8,
    lesson: 1,
    unitLessons: 4,
    unitTitle: "Dictionaries",
    title: "Creating & Looking Up",
    readTime: 30,

    goal: "In this lesson you will learn how to store labeled information in a dictionary and look up any value by its key.",

    learn: [
        "Create a dictionary with curly braces",
        "Store data as key–value pairs",
        "Look up a value with square brackets",
    ],

    idea: `A <strong>dictionary</strong> holds labeled data. Each piece has a <strong>key</strong> (the label) and a <strong>value</strong> (what you store). You write them inside curly braces: <code>{"name": "Sam"}</code>.

To get a value, use the key in square brackets: <code>pet["name"]</code>. Keys are often strings. Values can be strings, numbers, or True/False.`,

    code: {
        filename: "pet.py",
        lines: [
            `# A dictionary of pet facts`,
            `pet = {`,
            `    "name": "Mochi",`,
            `    "type": "cat",`,
            `    "age": 3,`,
            `}`,
            ``,
            `# Look up by key`,
            `print(pet["name"])`,
            `print(pet["type"])`,
            `print(pet["age"])`,
            ``,
            `# Mix keys in one print`,
            `print(pet["name"], "is a", pet["type"])`,
        ],
        output: [
            "Mochi",
            "cat",
            "3",
            "Mochi is a cat",
        ],
    },

    changeOneLine: `In the editor above, change <code>pet["name"]</code> to <code>pet["type"]</code> in the first print. Press <strong>Run</strong>. The first line of output should say <code>cat</code>.`,

    code2: {
        filename: "player.py",
        lines: [
            `player = {`,
            `    "name": "Ava",`,
            `    "level": 12,`,
            `    "lives": 3,`,
            `}`,
            `print("Name:", player["name"])`,
            `print("Level:", player["level"])`,
            `print("Lives:", player["lives"])`,
        ],
        output: [
            "Name: Ava",
            "Level: 12",
            "Lives: 3",
        ],
    },

    practice: [
        {
            text: `Make a book dictionary with title and pages. Print both values using keys. Fill in the blanks.`,
            starter: [
                `book = {`,
                `    "title": "Wonder",`,
                `    "pages": 310,`,
                `}`,
                `# Print the title`,
                `print()`,
                `# Print the pages`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if two prints look up book["title"] and book["pages"] (or equivalent key access) and show Wonder and 310.`,
        },
        {
            text: `Finish the snack dictionary. Print a sentence like <code>Cookie costs 2</code> using the keys.`,
            starter: [
                `snack = {`,
                `    "name": "Cookie",`,
                `    "cost": 2,`,
                `}`,
                `# Print: name costs cost`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if one print uses snack keys to show Cookie and 2 (e.g. Cookie costs 2). Hardcoded text with no dict lookup fails.`,
        },
    ],

    quiz: [
        {
            question: `Which line correctly creates a dictionary?`,
            options: [
                { text: `info = ["name", "Sam"]`, correct: false },
                { text: `info = {"name": "Sam"}`, correct: true },
                { text: `info = ("name", "Sam")`, correct: false },
                { text: `info = "name": "Sam"`, correct: false },
            ],
            correct: "Curly braces with key: value pairs create a dictionary.",
            wrong: "Use curly braces and a colon between key and value: {\"name\": \"Sam\"}.",
        },
        {
            question: `If <code>pet = {"name": "Mochi"}</code>, what does <code>pet["name"]</code> give you?`,
            options: [
                { text: "The key name", correct: false },
                { text: "The value Mochi", correct: true },
                { text: "An error", correct: false },
                { text: "The whole dictionary", correct: false },
            ],
            correct: "Square brackets with a key look up that key's value.",
            wrong: "pet[\"name\"] returns the value stored under \"name\", which is Mochi.",
        },
        {
            question: `What is the key in <code>{"age": 10}</code>?`,
            options: [
                { text: "10", correct: false },
                { text: "age", correct: true },
                { text: "{ }", correct: false },
                { text: "There is no key", correct: false },
            ],
            correct: "The key is the label on the left of the colon: \"age\".",
            wrong: "Keys are labels. Here the key is \"age\" and the value is 10.",
        },
    ],

    project: {
        title: "Pet Profile",
        desc: "Finish a pet profile dictionary. Print the name, type, and age on separate lines, then one friendly sentence that uses all three.",
        starter: [
            `pet = {`,
            `    "name": "Buddy",`,
            `    "type": "dog",`,
            `    "age": 5,`,
            `}`,
            `print("Name:", pet["name"])`,
            `# Print type and age`,
            `print()`,
            `print()`,
            ``,
            `# One sentence using all three keys`,
            `print()`,
        ].join("\n"),
    },

    prev: { unit: 7, lesson: 3, title: "Looping Over a Grid" },
    next: { unit: 8, lesson: 2, title: "Adding & Updating" },
};
