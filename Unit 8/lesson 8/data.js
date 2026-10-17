export default {
    format: "v2",
    unit: 8,
    lesson: 8,
    unitLessons: 10,
    unitTitle: "Dictionaries",
    title: "Looping Items",
    readTime: 22,
    goal: "In this lesson you will learn how .items() gives you each key and value together in a loop.",

    learn: [
        "Use .items() in a for loop",
        "Unpack key and value each turn",
        "Print pairs without a second lookup",
    ],

    idea: `Want both key and value at once? Use <code>.items()</code>:

<code>for name, score in scores.items():</code>

Each turn unpacks a pair. You already have <code>score</code> — no second lookup needed.`,

    code: {
        filename: "items.py",
        lines: [
            `scores = {"Ava": 90, "Leo": 85, "Mia": 92}`,
            ``,
            `for name, score in scores.items():`,
            `    print(name, "scored", score)`,
        ],
        output: [
            "Ava scored 90",
            "Leo scored 85",
            "Mia scored 92",
        ],
    },

    changeOneLine: `In the editor above, change the print to <code>print(name + ":", score)</code>. Press <strong>Run</strong>. Lines should look like <code>Ava: 90</code>.`,

    code2: {
        filename: "pets_items.py",
        lines: [
            `pets = {"Mochi": "cat", "Buddy": "dog"}`,
            `for name, kind in pets.items():`,
            `    print(name + ":", kind)`,
        ],
        output: [
            "Mochi: cat",
            "Buddy: dog",
        ],
    },

    practice: [
        {
            text: `Use .items() to print each snack and price like cookie: 2.`,
            starter: [
                "prices = {\"cookie\": 2, \"apple\": 1, \"juice\": 3}",
                "for name, price in prices.items():",
                "    print()"
            ].join("\n"),
            gradingNote: `Pass if .items() loop prints each snack name and price.`,
        },
        {
            text: `Loop with .items() over ages and print Name is age years.`,
            starter: [
                "ages = {\"Sam\": 11, \"Riley\": 12}",
                "for name, age in ages.items():",
                "    print()"
            ].join("\n"),
            gradingNote: `Pass if both people print with their ages using the loop variables.`,
        },
    ],

    quiz: [
        {
            question: `What does .items() give you in a loop?`,
            options: [
                { text: `Only keys`, correct: false },
                { text: `Key and value pairs`, correct: true },
                { text: `Only file names`, correct: false },
                { text: `Random numbers`, correct: false },
            ],
            correct: `items() yields each key with its value.`,
            wrong: `for k, v in d.items() unpacks both.`,
        },
        {
            question: `In for name, score in scores.items():, what is score?`,
            options: [
                { text: `Always the string "score"`, correct: false },
                { text: `The value for that key`, correct: true },
                { text: `The whole dictionary`, correct: false },
                { text: `An error`, correct: false },
            ],
            correct: `The second variable is the value.`,
            wrong: `name is the key; score is the value.`,
        },
        {
            question: `Do you need scores[name] inside an .items() loop?`,
            options: [
                { text: `Always required`, correct: false },
                { text: `No — you already have the value variable`, correct: true },
                { text: `Yes, or Python crashes`, correct: false },
                { text: `Only on Tuesdays`, correct: false },
            ],
            correct: `The value is already unpacked.`,
            wrong: `items() hands you both pieces.`,
        },
    ],

    project: {
        title: "Price List",
        desc: "Use .items() to print a shop menu with a header.",
        starter: [
            "menu = {\"apple\": 1, \"bread\": 2, \"juice\": 3, \"cookie\": 2}",
            "print(\"=== MENU ===\")",
            "for item, price in menu.items():",
            "    print()"
        ].join("\n"),
    },

    prev: { unit: 8, lesson: 7, title: "Looping Keys" },
    next: { unit: 8, lesson: 9, title: "Safe Lookup with get" },
};
