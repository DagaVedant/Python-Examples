export default {
    format: "v2",
    unit: 8,
    lesson: 10,
    unitLessons: 10,
    unitTitle: "Dictionaries",
    title: "Dictionary Methods",
    readTime: 25,
    goal: "In this lesson you will practice handy dictionary tools: in, get, keys, values, and pop together.",

    learn: [
        "Check for a key with in",
        "List keys and values",
        "Combine get and pop safely",
    ],

    idea: `Handy tools: <code>"coins" in bag</code> is True or False. <code>bag.keys()</code> and <code>bag.values()</code> show the labels and the data.

Combine skills: check with <code>in</code>, read with <code>get</code>, remove with <code>pop</code>.`,

    code: {
        filename: "methods.py",
        lines: [
            `bag = {"coins": 10, "keys": 2, "map": 1}`,
            ``,
            `print("coins" in bag)`,
            `print("sword" in bag)`,
            `print(list(bag.keys()))`,
            `print(list(bag.values()))`,
            ``,
            `if "map" in bag:`,
            `    print("Popped map:", bag.pop("map"))`,
            `print(bag)`,
        ],
        output: [
            "True",
            "False",
            "['coins', 'keys', 'map']",
            "[10, 2, 1]",
            "Popped map: 1",
            "{'coins': 10, 'keys': 2}",
        ],
    },

    changeOneLine: `In the editor above, change the check to <code>if "keys" in bag:</code> and pop keys instead. Press <strong>Run</strong>. You should pop 2.`,

    code2: {
        filename: "toolbox.py",
        lines: [
            `stock = {"apple": 4, "bread": 2}`,
            `print("bread" in stock)`,
            `print(stock.get("eggs", 0))`,
            `print("Total kinds:", len(stock))`,
        ],
        output: [
            "True",
            "0",
            "Total kinds: 2",
        ],
    },

    practice: [
        {
            text: `Print whether "potion" is in the bag using in.`,
            starter: [
                "bag = {\"coins\": 5, \"keys\": 1}",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if the program prints False using 'potion' in bag.`,
        },
        {
            text: `If "keys" is in bag, pop it and print the removed value. Then print bag.`,
            starter: [
                "bag = {\"coins\": 8, \"keys\": 2}",
                "# Check, pop, print",
                "",
                "print(bag)"
            ].join("\n"),
            gradingNote: `Pass if keys is popped when present and bag no longer has keys.`,
        },
    ],

    quiz: [
        {
            question: `What does "coins" in bag check?`,
            options: [
                { text: `Whether coins is a value`, correct: false },
                { text: `Whether coins is a key`, correct: true },
                { text: `Whether the bag is empty`, correct: false },
                { text: `Whether Python is installed`, correct: false },
            ],
            correct: `in on a dict checks keys.`,
            wrong: `Membership tests keys, not values (by default).`,
        },
        {
            question: `What does len(stock) tell you?`,
            options: [
                { text: `The sum of all values`, correct: false },
                { text: `How many keys (pairs) are stored`, correct: true },
                { text: `The file size`, correct: false },
                { text: `Always 0`, correct: false },
            ],
            correct: `len on a dict is the number of keys.`,
            wrong: `Each key–value pair counts as one.`,
        },
        {
            question: `Which tool removes a key and returns its value?`,
            options: [
                { text: `get`, correct: false },
                { text: `pop`, correct: true },
                { text: `in`, correct: false },
                { text: `keys`, correct: false },
            ],
            correct: `pop removes and returns.`,
            wrong: `get reads; pop removes.`,
        },
    ],

    project: {
        title: "Inventory Checker",
        desc: "Report which items are in the bag, use get for sword count, pop map if present, print final bag.",
        starter: [
            "bag = {\"coins\": 10, \"keys\": 1, \"map\": 1}",
            "for item in [\"coins\", \"keys\", \"sword\"]:",
            "    print(item, \"in bag?\", )",
            "",
            "print(\"Sword count:\", bag.get(\"sword\", 0))",
            "# Pop map if present",
            "",
            "print(\"Final:\", bag)"
        ].join("\n"),
    },

    prev: { unit: 8, lesson: 9, title: "Safe Lookup with get" },
    next: { unit: 9, lesson: 1, title: "What is a File" },
};
