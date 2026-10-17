export default {
    format: "v2",
    unit: 8,
    lesson: 2,
    unitLessons: 4,
    unitTitle: "Dictionaries",
    title: "Adding & Updating",
    readTime: 30,

    goal: "In this lesson you will learn how to add new keys to a dictionary and change values that are already stored.",

    learn: [
        "Add a new key–value pair",
        "Update an existing value",
        "See that dictionaries can change after you create them",
    ],

    idea: `Dictionaries can change. To <strong>add</strong> or <strong>update</strong> a value, assign with square brackets:

<code>scores["Sam"] = 100</code>

If the key is new, Python adds it. If the key already exists, Python replaces the old value. Same syntax for both!`,

    code: {
        filename: "scores.py",
        lines: [
            `scores = {`,
            `    "Ava": 80,`,
            `    "Leo": 90,`,
            `}`,
            `print(scores)`,
            ``,
            `# Add a new player`,
            `scores["Mia"] = 85`,
            `print(scores)`,
            ``,
            `# Update Ava's score`,
            `scores["Ava"] = 95`,
            `print(scores)`,
            ``,
            `# Check one value`,
            `print("Ava:", scores["Ava"])`,
        ],
        output: [
            "{'Ava': 80, 'Leo': 90}",
            "{'Ava': 80, 'Leo': 90, 'Mia': 85}",
            "{'Ava': 95, 'Leo': 90, 'Mia': 85}",
            "Ava: 95",
        ],
    },

    changeOneLine: `In the editor above, change <code>scores["Mia"] = 85</code> to <code>scores["Mia"] = 99</code>. Press <strong>Run</strong>. Mia's score in the second printed dictionary should be <code>99</code>.`,

    code2: {
        filename: "inventory.py",
        lines: [
            `bag = {"coins": 10, "keys": 1}`,
            `print(bag)`,
            ``,
            `# Pick up a potion`,
            `bag["potion"] = 2`,
            `print(bag)`,
            ``,
            `# Find more coins`,
            `bag["coins"] = 25`,
            `print("Coins:", bag["coins"])`,
        ],
        output: [
            "{'coins': 10, 'keys': 1}",
            "{'coins': 10, 'keys': 1, 'potion': 2}",
            "Coins: 25",
        ],
    },

    practice: [
        {
            text: `Start with a high score board of one player. Add a second player and update the first player's score. Fill in the blanks.`,
            starter: [
                `board = {"Sam": 50}`,
                `# Add Riley with score 70`,
                ``,
                `# Update Sam to 80`,
                ``,
                `print(board)`,
            ].join("\n"),
            gradingNote: `Pass if board ends with Sam at 80 and Riley at 70 (order of keys may vary). Must use assignment into the dictionary.`,
        },
        {
            text: `Add a new key <code>color</code> to the pet dictionary, then print it.`,
            starter: [
                `pet = {"name": "Mochi", "type": "cat"}`,
                `# Add color: orange`,
                ``,
                `print(pet["color"])`,
            ].join("\n"),
            gradingNote: `Pass if pet gets a "color" key with value orange (or similar) and the print shows that color via key lookup.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>scores["Sam"] = 100</code> do if Sam is not in the dictionary yet?`,
            options: [
                { text: "It causes an error", correct: false },
                { text: "It adds Sam with value 100", correct: true },
                { text: "It deletes Sam", correct: false },
                { text: "It does nothing", correct: false },
            ],
            correct: "Assigning to a new key adds that key–value pair.",
            wrong: "New keys are added when you assign to them. No error.",
        },
        {
            question: `If <code>bag["coins"]</code> is already 10, what does <code>bag["coins"] = 25</code> do?`,
            options: [
                { text: "Adds a second coins key", correct: false },
                { text: "Changes the value to 25", correct: true },
                { text: "Prints 25", correct: false },
                { text: "Keeps coins at 10", correct: false },
            ],
            correct: "Assigning to an existing key updates (replaces) its value.",
            wrong: "Each key appears once. Assigning again replaces the old value.",
        },
        {
            question: `Which line adds a new key <code>"lives"</code> with value <code>3</code>?`,
            options: [
                { text: `player.append("lives", 3)`, correct: false },
                { text: `player["lives"] = 3`, correct: true },
                { text: `player.add("lives": 3)`, correct: false },
                { text: `player = "lives": 3`, correct: false },
            ],
            correct: "Use square-bracket assignment: player[\"lives\"] = 3.",
            wrong: "Dictionaries use key assignment with [], not list append.",
        },
    ],

    project: {
        title: "High Score Board",
        desc: "Build a three-player high score board. Start with two players, add a third, then update one score after a rematch. Print the board at the end.",
        starter: [
            `board = {`,
            `    "Ava": 120,`,
            `    "Leo": 95,`,
            `}`,
            `# Add Mia with score 110`,
            ``,
            `# Ava plays again — update to 140`,
            ``,
            `print(board)`,
            `print("Ava:", board["Ava"])`,
        ].join("\n"),
    },

    prev: { unit: 8, lesson: 1, title: "Creating & Looking Up" },
    next: { unit: 8, lesson: 3, title: "Looping over Dictionaries" },
};
