export default {
    format: "v2",
    unit: 8,
    lesson: 3,
    unitLessons: 10,
    unitTitle: "Dictionaries",
    title: "Looking Up Keys",
    readTime: 22,
    goal: "In this lesson you will learn how to look up a value with square brackets and a key.",

    learn: [
        "Look up with dict[\"key\"]",
        "Print values one at a time",
        "Mix looked-up values in one print",
    ],

    idea: `To get a value, put the key in square brackets: <code>pet["name"]</code>.

Python finds that key and gives you its value. If you mistype the key, you get an error — so spell keys carefully!`,

    code: {
        filename: "lookup.py",
        lines: [
            `pet = {`,
            `    "name": "Mochi",`,
            `    "type": "cat",`,
            `    "age": 3,`,
            `}`,
            `print(pet["name"])`,
            `print(pet["type"])`,
            `print(pet["age"])`,
            `print(pet["name"], "is a", pet["type"])`,
        ],
        output: [
            "Mochi",
            "cat",
            "3",
            "Mochi is a cat",
        ],
    },

    changeOneLine: `In the editor above, change the first print to <code>pet["type"]</code>. Press <strong>Run</strong>. The first line should say <code>cat</code>.`,

    code2: {
        filename: "player_card.py",
        lines: [
            `player = {"name": "Ava", "level": 12, "lives": 3}`,
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
            text: `Print the book title and pages using key lookups.`,
            starter: [
                "book = {\"title\": \"Wonder\", \"pages\": 310}",
                "print()",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if two prints look up book["title"] and book["pages"] and show Wonder and 310.`,
        },
        {
            text: `Print a sentence like Cookie costs 2 using snack keys.`,
            starter: [
                "snack = {\"name\": \"Cookie\", \"cost\": 2}",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if one print uses snack keys to show Cookie and 2.`,
        },
    ],

    quiz: [
        {
            question: `If pet = {"name": "Mochi"}, what does pet["name"] give you?`,
            options: [
                { text: `The key name`, correct: false },
                { text: `The value Mochi`, correct: true },
                { text: `An error`, correct: false },
                { text: `The whole dictionary`, correct: false },
            ],
            correct: `Square brackets with a key look up that key's value.`,
            wrong: `pet["name"] returns the value Mochi.`,
        },
        {
            question: `What happens if you look up a key that is not there?`,
            options: [
                { text: `Python invents a value`, correct: false },
                { text: `You usually get a KeyError`, correct: true },
                { text: `Nothing ever happens`, correct: false },
                { text: `The program deletes the dictionary`, correct: false },
            ],
            correct: `A missing key causes a KeyError (until you learn safer tools).`,
            wrong: `Mistyped keys often cause KeyError.`,
        },
        {
            question: `Which line looks up the level?`,
            options: [
                { text: `player.level`, correct: false },
                { text: `player["level"]`, correct: true },
                { text: `player(level)`, correct: false },
                { text: `get player level`, correct: false },
            ],
            correct: `Use square brackets and the key string.`,
            wrong: `Dictionary lookup uses ["key"], not a bare word.`,
        },
    ],

    project: {
        title: "Pet Lookups",
        desc: "Print name, type, and age on separate lines, then one sentence using all three keys.",
        starter: [
            "pet = {\"name\": \"Buddy\", \"type\": \"dog\", \"age\": 5}",
            "print(\"Name:\", pet[\"name\"])",
            "print()",
            "print()",
            "",
            "# One sentence using all three keys",
            "print()"
        ].join("\n"),
    },

    prev: { unit: 8, lesson: 2, title: "Creating Dictionaries" },
    next: { unit: 8, lesson: 4, title: "Adding Keys" },
};
