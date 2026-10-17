export default {
    format: "v2",
    unit: 6,
    lesson: 5,
    unitLessons: 10,
    unitTitle: "Lists",
    title: "append and insert",
    readTime: 23,

    goal: "In this lesson you will learn how to grow a list by adding items at the end with append or at a chosen spot with insert.",

    learn: [
        "append() adds an item at the end",
        "insert() adds an item at an index",
        "The list gets longer after each add",
    ],

    idea: `<code>append(value)</code> sticks a new item on the <strong>end</strong> of the list.

    <code>insert(index, value)</code> slides a new item in at that index and shifts the later items to the right.`,

    code: {
        filename: "add_items.py",
        lines: [
            `tasks = ["buy milk", "homework"]`,
            `print(tasks)`,
            ``,
            `# Add at the end`,
            `tasks.append("walk dog")`,
            `print(tasks)`,
            ``,
            `# Insert at the front (index 0)`,
            `tasks.insert(0, "pack bag")`,
            `print(tasks)`,
            `print("Length:", len(tasks))`,
        ],
        output: [
            "['buy milk', 'homework']",
            "['buy milk', 'homework', 'walk dog']",
            "['pack bag', 'buy milk', 'homework', 'walk dog']",
            "Length: 4",
        ],
    },

    changeOneLine: `In the editor above, change <code>tasks.append("walk dog")</code> to <code>tasks.append("call mum")</code>. Press <strong>Run</strong>. The second printed list should end with <code>call mum</code>.`,

    code2: {
        filename: "party.py",
        lines: [
            `guests = ["Ava", "Ben"]`,
            `guests.append("Cara")`,
            `guests.insert(1, "Diego")`,
            `print(guests)`,
        ],
        output: [
            "['Ava', 'Diego', 'Ben', 'Cara']",
        ],
    },

    practice: [
        {
            text: `Start with two snacks. Append one more, then print the list.`,
            starter: [
                `snacks = ["chips", "apple"]`,
                `# Append a third snack`,
                ``,
                `print(snacks)`,
            ].join("\n"),
            gradingNote: `Pass if append adds a third item and the list is printed with three items.`,
        },
        {
            text: `Insert <code>"start"</code> at index 0 of the list, then print.`,
            starter: [
                `steps = ["middle", "end"]`,
                `# Insert at the front`,
                ``,
                `print(steps)`,
            ].join("\n"),
            gradingNote: `Pass if insert(0, "start") is used and the list begins with start.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>items.append("x")</code> do?`,
            options: [
                { text: "Removes x", correct: false },
                { text: "Adds x at the end", correct: true },
                { text: "Adds x at index 0 only", correct: false },
                { text: "Sorts the list", correct: false },
            ],
            correct: "append always adds to the end.",
            wrong: "append puts the new item after the last existing item.",
        },
        {
            question: `After <code>a = [1, 3]</code> and <code>a.insert(1, 2)</code>, what is a?`,
            options: [
                { text: "[1, 3, 2]", correct: false },
                { text: "[2, 1, 3]", correct: false },
                { text: "[1, 2, 3]", correct: true },
                { text: "[1, 3]", correct: false },
            ],
            correct: "insert(1, 2) places 2 between 1 and 3.",
            wrong: "The second argument is the value; the first is the index.",
        },
        {
            question: `How does the list length change after one append?`,
            options: [
                { text: "It stays the same", correct: false },
                { text: "It grows by 1", correct: true },
                { text: "It shrinks by 1", correct: false },
                { text: "It always becomes 0", correct: false },
            ],
            correct: "Each append adds one item, so len goes up by 1.",
            wrong: "Adding an item increases the length by one.",
        },
    ],

    project: {
        title: "Growing Todo List",
        desc: "Start with one task. Append two more, then insert a high-priority task at the front. Print the final list.",
        starter: [
            `todos = ["read"]`,
            `# Append two tasks`,
            ``,
            ``,
            `# Insert one at index 0`,
            ``,
            `print(todos)`,
        ].join("\n"),
    },

    prev: { unit: 6, lesson: 4, title: "Changing Items" },
    next: { unit: 6, lesson: 6, title: "remove and pop" },
};
