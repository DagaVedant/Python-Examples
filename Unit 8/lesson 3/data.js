export default {
    format: "v2",
    unit: 8,
    lesson: 3,
    unitLessons: 4,
    unitTitle: "Dictionaries",
    title: "Looping over Dictionaries",
    readTime: 30,

    goal: "In this lesson you will learn how to visit every key in a dictionary, and how to loop over keys and values together with .items().",

    learn: [
        "Loop over keys with for key in dict",
        "Look up each value inside the loop",
        "Use .items() to get key and value together",
    ],

    idea: `A <code>for</code> loop over a dictionary visits each <strong>key</strong>. Inside the loop you can look up the value with <code>dict[key]</code>.

Want both at once? Use <code>.items()</code>:

<code>for key, value in scores.items():</code>

Each turn gives you the key and its value as a pair.`,

    code: {
        filename: "roster.py",
        lines: [
            `scores = {`,
            `    "Ava": 90,`,
            `    "Leo": 85,`,
            `    "Mia": 92,`,
            `}`,
            ``,
            `# Loop over keys only`,
            `for name in scores:`,
            `    print(name, "->", scores[name])`,
            ``,
            `# Loop over key and value together`,
            `for name, score in scores.items():`,
            `    print(name, "scored", score)`,
        ],
        output: [
            "Ava -> 90",
            "Leo -> 85",
            "Mia -> 92",
            "Ava scored 90",
            "Leo scored 85",
            "Mia scored 92",
        ],
    },

    changeOneLine: `In the editor above, change Mia's score from <code>92</code> to <code>100</code>. Press <strong>Run</strong>. The last line for Mia should show <code>100</code>.`,

    code2: {
        filename: "pets.py",
        lines: [
            `pets = {"Mochi": "cat", "Buddy": "dog", "Nemo": "fish"}`,
            `for name in pets:`,
            `    print(name, "is a", pets[name])`,
            ``,
            `for name, kind in pets.items():`,
            `    print(name + ":", kind)`,
        ],
        output: [
            "Mochi is a cat",
            "Buddy is a dog",
            "Nemo is a fish",
            "Mochi: cat",
            "Buddy: dog",
            "Nemo: fish",
        ],
    },

    practice: [
        {
            text: `Loop over the ages dictionary and print each name with their age. Fill in the blank loop.`,
            starter: [
                `ages = {"Sam": 11, "Riley": 12, "Jordan": 10}`,
                `# Print each name and age`,
                `for name in ages:`,
                `    print()`,
            ].join("\n"),
            gradingNote: `Pass if the loop prints each key with its value from ages (three lines). Must use the loop variable and dictionary lookup.`,
        },
        {
            text: `Use <code>.items()</code> to print each snack and its price like <code>cookie: 2</code>.`,
            starter: [
                `prices = {"cookie": 2, "apple": 1, "juice": 3}`,
                `for name, price in prices.items():`,
                `    print()`,
            ].join("\n"),
            gradingNote: `Pass if .items() loop prints each snack name and price. Empty print fails.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>for key in scores:</code> loop over?`,
            options: [
                { text: "Only the values", correct: false },
                { text: "The keys", correct: true },
                { text: "Nothing — it is an error", correct: false },
                { text: "Only the first key", correct: false },
            ],
            correct: "A for loop over a dictionary visits each key.",
            wrong: "for key in dict walks the keys. Use dict[key] or .items() for values.",
        },
        {
            question: `What does <code>.items()</code> give you each time through the loop?`,
            options: [
                { text: "Only the keys", correct: false },
                { text: "Only the values", correct: false },
                { text: "Both the key and the value", correct: true },
                { text: "The length of the dictionary", correct: false },
            ],
            correct: ".items() yields each key–value pair together.",
            wrong: "for k, v in d.items() unpacks both the key and the value.",
        },
        {
            question: `Inside <code>for name in pets:</code>, how do you get the value for that name?`,
            options: [
                { text: `pets.name`, correct: false },
                { text: `pets[name]`, correct: true },
                { text: `name[pets]`, correct: false },
                { text: `pets.getname()`, correct: false },
            ],
            correct: "Use the key in square brackets: pets[name].",
            wrong: "Look up with square brackets and the loop variable as the key.",
        },
    ],

    project: {
        title: "Class Roster",
        desc: "Finish a class roster dictionary of student names and grades. Loop with .items() to print each student, then print how many students are in the class with len().",
        starter: [
            `roster = {`,
            `    "Ava": "A",`,
            `    "Leo": "B",`,
            `    "Mia": "A",`,
            `    "Sam": "C",`,
            `}`,
            `# Print each student and grade`,
            `for name, grade in roster.items():`,
            `    print()`,
            ``,
            `# Print how many students`,
            `print("Students:", )`,
        ].join("\n"),
    },

    prev: { unit: 8, lesson: 2, title: "Adding & Updating" },
    next: { unit: 8, lesson: 4, title: "Dictionary Methods" },
};
