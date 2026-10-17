export default {
    format: "v2",
    unit: 8,
    lesson: 1,
    unitLessons: 10,
    unitTitle: "Dictionaries",
    title: "What is a Dictionary",
    readTime: 20,
    goal: "In this lesson you will learn that a dictionary stores labeled facts as key–value pairs.",

    learn: [
        "A dictionary holds labeled data",
        "Each fact has a key and a value",
        "Keys are labels; values are the stored data",
    ],

    idea: `A <strong>dictionary</strong> is like a tiny labeled box. Each fact has a <strong>key</strong> (the label) and a <strong>value</strong> (what you store).

Example: key <code>"name"</code> might hold value <code>"Mochi"</code>. Later you ask for the key and get the value back. Dictionaries use curly braces <code>{ }</code>.`,

    code: {
        filename: "idea.py",
        lines: [
            `# A dictionary: key -> value`,
            `pet = {"name": "Mochi", "type": "cat"}`,
            `print(pet)`,
            `print("Keys label the facts")`,
            `print("Values hold the data")`,
        ],
        output: [
            "{'name': 'Mochi', 'type': 'cat'}",
            "Keys label the facts",
            "Values hold the data",
        ],
    },

    changeOneLine: `In the editor above, change <code>"Mochi"</code> to <code>"Luna"</code>. Press <strong>Run</strong>. The printed dictionary should show Luna.`,

    code2: {
        filename: "labels.py",
        lines: [
            `score = {"player": "Ava", "points": 12}`,
            `print(score)`,
        ],
        output: [
            "{'player': 'Ava', 'points': 12}",
        ],
    },

    practice: [
        {
            text: `Print a short note that a dictionary stores key–value pairs. Fill in the blank.`,
            hint: `Use one print() with a sentence inside quotes. Mention that a dictionary has keys and values (or key–value pairs).`,
            starterTip: `Try print("A dictionary stores key-value pairs") or similar — any clear sentence about keys and values works.`,
            starter: [
                "# One clear sentence",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if one non-empty print mentions keys, values, or dictionary.`,
        },
        {
            text: `Create any tiny dictionary with one key and print it.`,
            hint: `The starter already has info with one key. Fill in print() so it shows the whole dictionary — pass info inside the parentheses.`,
            starterTip: `Use print(info) so Python prints {'color': 'blue'} (or whatever your one key holds).`,
            starter: [
                "info = {\"color\": \"blue\"}",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if the dictionary is printed (shows color/blue).`,
        },
    ],

    quiz: [
        {
            question: `What does a dictionary store?`,
            options: [
                { text: `Only numbers in a row`, correct: false },
                { text: `Labeled facts as key–value pairs`, correct: true },
                { text: `Only comments`, correct: false },
                { text: `Nothing — dictionaries are empty forever`, correct: false },
            ],
            correct: `Dictionaries store labeled data: each key maps to a value.`,
            wrong: `Think of labels (keys) stuck on boxes (values).`,
        },
        {
            question: `In <code>{"age": 10}</code>, what is the key?`,
            options: [
                { text: `10`, correct: false },
                { text: `age`, correct: true },
                { text: `{ }`, correct: false },
                { text: `There is no key`, correct: false },
            ],
            correct: `The key is the label on the left: "age".`,
            wrong: `Keys are labels. Here the key is age and the value is 10.`,
        },
        {
            question: `Which symbols wrap a dictionary?`,
            options: [
                { text: `[ ] square brackets`, correct: false },
                { text: `{ } curly braces`, correct: true },
                { text: `( ) parentheses`, correct: false },
                { text: `< > angle brackets`, correct: false },
            ],
            correct: `Dictionaries use curly braces.`,
            wrong: `Lists use [ ]. Dictionaries use { }.`,
        },
    ],

    project: {
        title: "Label the Facts",
        desc: "Make a dictionary with two labeled facts. Print the whole dictionary.",
        starter: [
            "me = {",
            "    \"name\": \"___\",",
            "    \"hobby\": \"___\",",
            "}",
            "print(me)"
        ].join("\n"),
    },

    prev: { unit: 7, lesson: 8, title: "Grid Mini Project" },
    next: { unit: 8, lesson: 2, title: "Creating Dictionaries" },
};
