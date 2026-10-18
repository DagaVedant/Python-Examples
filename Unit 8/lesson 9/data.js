export default {
    format: "v2",
    unit: 8,
    lesson: 9,
    unitLessons: 10,
    unitTitle: "Dictionaries",
    title: "Safe Lookup with get",
    readTime: 22,
    goal: "In this lesson you will learn how .get() looks up a key safely without crashing when it is missing.",

    learn: [
        "Use .get(key) for a safe lookup",
        "See None when a key is missing",
        "Pass a default like .get(key, 0)",
    ],

    idea: `<code>bag["sword"]</code> crashes if sword is missing. <code>bag.get("sword")</code> returns <code>None</code> instead.

You can give a default: <code>bag.get("sword", 0)</code> returns <code>0</code> when the key is not there.`,

    code: {
        filename: "safe_get.py",
        lines: [
            `bag = {"coins": 10, "keys": 2}`,
            ``,
            `print(bag.get("keys"))`,
            `print(bag.get("sword"))`,
            `print(bag.get("sword", 0))`,
            `print(bag.get("coins", 0))`,
        ],
        output: [
            "2",
            "None",
            "0",
            "10",
        ],
    },

    changeOneLine: `In the editor above, change the default from <code>0</code> to <code>5</code> in <code>bag.get("sword", 0)</code>. Press <strong>Run</strong>. That print should show 5.`,

    code2: {
        filename: "stock_get.py",
        lines: [
            `stock = {"apple": 4, "milk": 1}`,
            `print(stock.get("milk", 0))`,
            `print(stock.get("eggs", 0))`,
        ],
        output: [
            "1",
            "0",
        ],
    },

    practice: [
        {
            text: `Use .get() to print gems, defaulting to 0 if missing.`,
            hint: `gems is not in the bag, so bag["gems"] would crash. .get("gems", 0) safely returns 0 when the key is missing.`,
            starterTip: `Fill print() with: print(bag.get("gems", 0)). Output should be 0.`,
            starter: [
                "bag = {\"coins\": 10, \"keys\": 2}",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if bag.get("gems", 0) prints 0. Direct bag["gems"] that errors fails.`,
        },
        {
            text: `Print potion count with get default 0. Print keys with get.`,
            hint: `Potions are missing. Use bag.get("potion", 0) or bag.get("potions", 0). Keys exist, so bag.get("keys") works too.`,
            starterTip: `First line: print("Potions:", bag.get("potion", 0)). Second: print("Keys:", bag.get("keys", 0)).`,
            starter: [
                "bag = {\"keys\": 3}",
                "print(\"Potions:\", )",
                "print(\"Keys:\", )"
            ].join("\n"),
            gradingNote: `Pass if potions print 0 via get default and keys print 3 via get.`,
        },
    ],

    quiz: [
        {
            question: `What does bag.get("sword") return if sword is missing?`,
            options: [
                { text: `0 always`, correct: false },
                { text: `None`, correct: true },
                { text: `A KeyError`, correct: false },
                { text: `"sword"`, correct: false },
            ],
            correct: `get returns None when the key is missing (no default).`,
            wrong: `Without a default, missing keys yield None.`,
        },
        {
            question: `What does bag.get("sword", 0) return if missing?`,
            options: [
                { text: `None`, correct: false },
                { text: `0`, correct: true },
                { text: `An error`, correct: false },
                { text: `True`, correct: false },
            ],
            correct: `The second argument is the default.`,
            wrong: `Defaults replace None when the key is absent.`,
        },
        {
            question: `Why prefer get over [ ] for optional keys?`,
            options: [
                { text: `It makes files`, correct: false },
                { text: `It avoids a KeyError crash`, correct: true },
                { text: `It is slower on purpose`, correct: false },
                { text: `It deletes keys`, correct: false },
            ],
            correct: `get is safe when a key might not exist.`,
            wrong: `Safe lookup is the point of get.`,
        },
    ],

    project: {
        title: "Inventory Check",
        desc: "Check coins, keys, and gems with .get and default 0. Print three lines.",
        starter: [
            "bag = {\"coins\": 12, \"keys\": 1}",
            "print(\"Coins:\", bag.get(\"coins\", 0))",
            "print(\"Keys:\", )",
            "print(\"Gems:\", )"
        ].join("\n"),
    },

    prev: { unit: 8, lesson: 8, title: "Looping Items" },
    next: { unit: 8, lesson: 10, title: "Dictionary Methods" },
};
