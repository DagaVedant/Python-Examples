export default {
    format: "v2",
    unit: 8,
    lesson: 6,
    unitLessons: 10,
    unitTitle: "Dictionaries",
    title: "Removing Keys",
    readTime: 22,
    goal: "In this lesson you will learn how to remove a key with pop and see the dictionary shrink.",

    learn: [
        "Remove a key with .pop(key)",
        "Capture the removed value",
        "Confirm the key is gone",
    ],

    idea: `<code>.pop(key)</code> removes that key from the dictionary and <strong>gives you the value back</strong>.

<code>removed = bag.pop("map")</code>

After that, the key is gone.`,

    code: {
        filename: "remove.py",
        lines: [
            `bag = {"coins": 10, "keys": 2, "map": 1}`,
            `print(bag)`,
            ``,
            `removed = bag.pop("map")`,
            `print("Removed:", removed)`,
            `print(bag)`,
        ],
        output: [
            "{'coins': 10, 'keys': 2, 'map': 1}",
            "Removed: 1",
            "{'coins': 10, 'keys': 2}",
        ],
    },

    changeOneLine: `In the editor above, change <code>bag.pop("map")</code> to <code>bag.pop("keys")</code>. Press <strong>Run</strong>. Removed should be 2.`,

    code2: {
        filename: "shop.py",
        lines: [
            `stock = {"apple": 4, "bread": 2, "milk": 1}`,
            `sold = stock.pop("bread")`,
            `print("Sold loaves:", sold)`,
            `print(stock)`,
        ],
        output: [
            "Sold loaves: 2",
            "{'apple': 4, 'milk': 1}",
        ],
    },

    practice: [
        {
            text: `Pop the "sword" key. Print what was removed, then print the bag.`,
            hint: `Use bag.pop("sword") on the right side of gone =. Pop takes the key out and hands you the value (1).`,
            starterTip: `Try gone = bag.pop("sword") on the line after the bag = ... line. The print lines below already show gone and bag.`,
            starter: [
                "bag = {\"coins\": 5, \"sword\": 1, \"keys\": 2}",
                "gone = ",
                "print(\"Removed:\", gone)",
                "print(bag)"
            ].join("\n"),
            gradingNote: `Pass if sword is popped, value 1 printed, and bag no longer has sword.`,
        },
        {
            text: `Remove "milk" from stock with pop and print the updated stock.`,
            hint: `Call stock.pop("milk") before you print. You can store the result in a variable or just call pop on its own line.`,
            starterTip: `Add a line like stock.pop("milk") in the blank space, then run. print(stock) should show only eggs.`,
            starter: [
                "stock = {\"eggs\": 6, \"milk\": 1}",
                "",
                "print(stock)"
            ].join("\n"),
            gradingNote: `Pass if milk is removed via pop and stock is printed without milk.`,
        },
    ],

    quiz: [
        {
            question: `What does bag.pop("map") do?`,
            options: [
                { text: `Only prints map`, correct: false },
                { text: `Removes map and returns its value`, correct: true },
                { text: `Adds a new map`, correct: false },
                { text: `Locks the dictionary forever`, correct: false },
            ],
            correct: `pop removes the key and returns the value.`,
            wrong: `pop takes the key out and gives the value back.`,
        },
        {
            question: `After popping a key, looking it up with [ ] usually…`,
            options: [
                { text: `Returns 0`, correct: false },
                { text: `Causes a KeyError`, correct: true },
                { text: `Recreates the key`, correct: false },
                { text: `Prints None quietly`, correct: false },
            ],
            correct: `The key is gone, so [ ] lookup fails.`,
            wrong: `Missing keys error with square-bracket lookup.`,
        },
        {
            question: `If stock.pop("bread") returns 2, what was stored under bread?`,
            options: [
                { text: `0`, correct: false },
                { text: `2`, correct: true },
                { text: `"bread"`, correct: false },
                { text: `True`, correct: false },
            ],
            correct: `pop returns the value that was stored.`,
            wrong: `The return value is the old value for that key.`,
        },
    ],

    project: {
        title: "Cleanup Crew",
        desc: "Pop two keys one at a time. Print each removed value, then the final bag.",
        starter: [
            "bag = {\"coins\": 10, \"rocks\": 4, \"keys\": 1, \"dust\": 99}",
            "# Pop rocks, print it",
            "",
            "# Pop dust, print it",
            "",
            "print(\"Left:\", bag)"
        ].join("\n"),
    },

    prev: { unit: 8, lesson: 5, title: "Updating Values" },
    next: { unit: 8, lesson: 7, title: "Looping Keys" },
};
