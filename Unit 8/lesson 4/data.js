export default {
    format: "v2",
    unit: 8,
    lesson: 4,
    unitLessons: 4,
    unitTitle: "Dictionaries",
    title: "Dictionary Methods",
    readTime: 30,

    goal: "In this lesson you will learn handy dictionary tools: checking if a key exists, safe lookups with .get(), and removing a key with .pop().",

    learn: [
        "Check for a key with the in keyword",
        "Look up safely with .get()",
        "Remove a key with .pop()",
    ],

    idea: `Dictionaries have helpful tools. The word <code>in</code> checks whether a <strong>key</strong> exists (True or False).

<code>.get(key)</code> returns the value if the key is there, or <code>None</code> if it is missing — without crashing. You can also give a default: <code>.get(key, 0)</code>.

<code>.pop(key)</code> removes that key and gives you its value back.`,

    code: {
        filename: "toolbox.py",
        lines: [
            `bag = {"coins": 10, "keys": 2, "map": 1}`,
            ``,
            `# Check if a key exists`,
            `print("coins" in bag)`,
            `print("sword" in bag)`,
            ``,
            `# Safe lookup with get`,
            `print(bag.get("keys"))`,
            `print(bag.get("sword"))`,
            `print(bag.get("sword", 0))`,
            ``,
            `# Remove a key`,
            `removed = bag.pop("map")`,
            `print("Removed:", removed)`,
            `print(bag)`,
        ],
        output: [
            "True",
            "False",
            "2",
            "None",
            "0",
            "Removed: 1",
            "{'coins': 10, 'keys': 2}",
        ],
    },

    changeOneLine: `In the editor above, change <code>bag.get("sword", 0)</code> to <code>bag.get("sword", 5)</code>. Press <strong>Run</strong>. That print should show <code>5</code>.`,

    code2: {
        filename: "shop.py",
        lines: [
            `stock = {"apple": 4, "bread": 2, "milk": 1}`,
            `print("bread" in stock)`,
            `print(stock.get("milk", 0))`,
            `print(stock.get("eggs", 0))`,
            ``,
            `sold = stock.pop("bread")`,
            `print("Sold loaves:", sold)`,
            `print(stock)`,
        ],
        output: [
            "True",
            "1",
            "0",
            "Sold loaves: 2",
            "{'apple': 4, 'milk': 1}",
        ],
    },

    practice: [
        {
            text: `Check whether <code>"potion"</code> is in the bag. Print the result of the <code>in</code> check. Fill in the blank.`,
            starter: [
                `bag = {"coins": 5, "keys": 1}`,
                `# Print whether "potion" is a key`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if the program prints False using 'potion' in bag (or equivalent key check). Hardcoded False with no in-check fails.`,
        },
        {
            text: `Use <code>.get()</code> to print the number of gems, defaulting to 0 if missing.`,
            starter: [
                `bag = {"coins": 10, "keys": 2}`,
                `# Print gems count, default 0`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if bag.get("gems", 0) (or similar) prints 0. Direct bag["gems"] that errors fails.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>"coins" in bag</code> check?`,
            options: [
                { text: "Whether coins is a value", correct: false },
                { text: "Whether coins is a key", correct: true },
                { text: "How many coins there are", correct: false },
                { text: "Whether the bag is empty", correct: false },
            ],
            correct: "in on a dictionary checks keys, not values.",
            wrong: "For dictionaries, in tests whether that key exists.",
        },
        {
            question: `What does <code>bag.get("sword", 0)</code> return if sword is missing?`,
            options: [
                { text: "An error", correct: false },
                { text: "0", correct: true },
                { text: "None always", correct: false },
                { text: "True", correct: false },
            ],
            correct: "The second argument to .get() is the default when the key is missing.",
            wrong: ".get(key, default) returns the default instead of crashing.",
        },
        {
            question: `What does <code>bag.pop("keys")</code> do?`,
            options: [
                { text: "Only prints the value", correct: false },
                { text: "Removes the key and returns its value", correct: true },
                { text: "Adds a new key", correct: false },
                { text: "Sorts the dictionary", correct: false },
            ],
            correct: ".pop(key) removes that key and gives you the value back.",
            wrong: "pop removes the key from the dictionary and returns its value.",
        },
    ],

    project: {
        title: "Inventory Checker",
        desc: "Finish an inventory checker. Print whether each item is in the bag, use .get() for a safe gem count, then pop the map and show what is left.",
        starter: [
            `bag = {"coins": 15, "keys": 2, "map": 1}`,
            ``,
            `print("Has keys?", "keys" in bag)`,
            `# Check for sword`,
            `print("Has sword?", )`,
            ``,
            `# Safe gem count (default 0)`,
            `print("Gems:", )`,
            ``,
            `# Remove the map and print what you got`,
            `removed = `,
            `print("Removed:", removed)`,
            `print("Left:", bag)`,
        ].join("\n"),
    },

    prev: { unit: 8, lesson: 3, title: "Looping over Dictionaries" },
    next: { unit: 9, lesson: 1, title: "Reading Files" },
};
