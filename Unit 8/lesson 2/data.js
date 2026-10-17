export default {
    format: "v2",
    unit: 8,
    lesson: 2,
    unitLessons: 10,
    unitTitle: "Dictionaries",
    title: "Creating Dictionaries",
    readTime: 22,
    goal: "In this lesson you will learn how to create a dictionary with curly braces and key: value pairs.",

    learn: [
        "Write curly braces to start a dictionary",
        "Put a colon between each key and value",
        "Separate pairs with commas",
    ],

    idea: `Create a dictionary like this: <code>pet = {"name": "Mochi", "age": 3}</code>.

Each pair is <code>key: value</code>. Put commas between pairs. Keys are often strings in quotes. Values can be strings, numbers, or True/False.`,

    code: {
        filename: "create.py",
        lines: [
            `pet = {`,
            `    "name": "Mochi",`,
            `    "type": "cat",`,
            `    "age": 3,`,
            `}`,
            `print(pet)`,
            `print(type(pet))`,
        ],
        output: [
            "{'name': 'Mochi', 'type': 'cat', 'age': 3}",
            "<class 'dict'>",
        ],
    },

    changeOneLine: `In the editor above, change <code>"age": 3</code> to <code>"age": 5</code>. Press <strong>Run</strong>. The printed age should be 5.`,

    code2: {
        filename: "player.py",
        lines: [
            `player = {"name": "Ava", "level": 12, "lives": 3}`,
            `print(player)`,
        ],
        output: [
            "{'name': 'Ava', 'level': 12, 'lives': 3}",
        ],
    },

    practice: [
        {
            text: `Finish the book dictionary with title and pages, then print it.`,
            starter: [
                "book = {",
                "    \"title\": \"Wonder\",",
                "    # Add pages: 310",
                "}",
                "print(book)"
            ].join("\n"),
            gradingNote: `Pass if book has title Wonder and pages 310 and is printed.`,
        },
        {
            text: `Create a snack dictionary with name Cookie and cost 2. Print it.`,
            starter: [
                "# snack with name Cookie and cost 2",
                "snack = ",
                "print(snack)"
            ].join("\n"),
            gradingNote: `Pass if a dict with Cookie and 2 is created and printed.`,
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
            correct: `Curly braces with key: value pairs create a dictionary.`,
            wrong: `Use {"name": "Sam"} with a colon between key and value.`,
        },
        {
            question: `What goes between a key and its value?`,
            options: [
                { text: `A comma`, correct: false },
                { text: `A colon :`, correct: true },
                { text: `A plus sign`, correct: false },
                { text: `Nothing`, correct: false },
            ],
            correct: `Write key: value with a colon.`,
            wrong: `Commas separate pairs. Colons join key to value.`,
        },
        {
            question: `Can a dictionary value be a number?`,
            options: [
                { text: `No, only strings`, correct: false },
                { text: `Yes — numbers, strings, and more`, correct: true },
                { text: `Only True/False`, correct: false },
                { text: `Only empty values`, correct: false },
            ],
            correct: `Values can be many types, including numbers.`,
            wrong: `Keys are often strings; values can be numbers too.`,
        },
    ],

    project: {
        title: "Pet Profile Draft",
        desc: "Create a pet dictionary with name, type, and age. Print it.",
        starter: [
            "pet = {",
            "    \"name\": \"Buddy\",",
            "    \"type\": \"dog\",",
            "    \"age\": 5,",
            "}",
            "print()"
        ].join("\n"),
    },

    prev: { unit: 8, lesson: 1, title: "What is a Dictionary" },
    next: { unit: 8, lesson: 3, title: "Looking Up Keys" },
};
