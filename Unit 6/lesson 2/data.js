export default {
    format: "v2",
    unit: 6,
    lesson: 2,
    unitLessons: 4,
    unitTitle: "Lists",
    title: "Adding & Removing Items",
    readTime: 30,

    goal: "In this lesson you will learn how to change a list after you create it by adding items, removing items, and checking how long it is.",

    learn: [
        "Add items with .append()",
        "Remove items with .pop() and .remove()",
        "Check length with len()",
    ],

    idea: `Lists can change after you make them. <code>append()</code> adds a new item at the end. <code>pop()</code> removes the last item (or an item at an index) and gives it back to you. <code>remove()</code> finds a value and deletes the first match. <code>len()</code> tells you how many items are in the list.`,

    code: {
        filename: "tasks.py",
        lines: [
            `tasks = ["buy milk", "do homework"]`,
            ``,
            `# Add to the end`,
            `tasks.append("call mum")`,
            `print(tasks)`,
            ``,
            `# Remove by value`,
            `tasks.remove("do homework")`,
            `print(tasks)`,
            ``,
            `# Pop the last item`,
            `removed = tasks.pop()`,
            `print("Removed:", removed)`,
            `print("Remaining:", tasks)`,
            ``,
            `# Length`,
            `print("Tasks left:", len(tasks))`,
        ],
        output: [
            "['buy milk', 'do homework', 'call mum']",
            "['buy milk', 'call mum']",
            "Removed: call mum",
            "Remaining: ['buy milk']",
            "Tasks left: 1",
        ],
    },

    changeOneLine: `In the editor above, change <code>tasks.append("call mum")</code> to <code>tasks.append("walk dog")</code>. Press <strong>Run</strong>. The first printed list should end with <code>walk dog</code>.`,

    code2: {
        filename: "party.py",
        lines: [
            `guests = ["Ava", "Leo"]`,
            `guests.append("Mia")`,
            `print(guests)`,
            `guests.pop()`,
            `print(guests)`,
            `print("Count:", len(guests))`,
        ],
        output: [
            "['Ava', 'Leo', 'Mia']",
            "['Ava', 'Leo']",
            "Count: 2",
        ],
    },

    practice: [
        {
            text: `Start with a shopping list of two items. Append one more item, then print the list and its length. Fill in the blanks.`,
            starter: [
                `shop = ["bread", "eggs"]`,
                `# Append one more item`,
                ``,
                `print(shop)`,
                `# Print how many items`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if append adds a third item and output shows a 3-item list plus length 3 (via len).`,
        },
        {
            text: `Start with five names. Use pop() to remove the last name, then print what remains. Finish the blanks.`,
            starter: [
                `names = ["Alex", "Sam", "Jordan", "Riley", "Casey"]`,
                `# Pop the last name`,
                ``,
                `print(names)`,
            ].join("\n"),
            gradingNote: `Pass if pop() removes the last item so the printed list has the first four names only.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>my_list.pop()</code> do?`,
            options: [
                { text: "Removes the first item from the list", correct: false },
                { text: "Removes and returns the last item", correct: true },
                { text: "Deletes the entire list", correct: false },
                { text: "Adds a new item to the end", correct: false },
            ],
            correct: "pop() removes the last item and returns it so you can store or print it.",
            wrong: "pop() removes and returns the last item (unless you pass an index).",
        },
        {
            question: `What does <code>len(tasks)</code> return?`,
            options: [
                { text: "The last item in tasks", correct: false },
                { text: "How many items are in tasks", correct: true },
                { text: "Always 0", correct: false },
                { text: "The first item in tasks", correct: false },
            ],
            correct: "len() counts how many items are in the list.",
            wrong: "len() is the length (count of items), not an item from the list.",
        },
        {
            question: `Which method adds an item to the end of a list?`,
            options: [
                { text: "remove()", correct: false },
                { text: "pop()", correct: false },
                { text: "append()", correct: true },
                { text: "len()", correct: false },
            ],
            correct: "append() adds one item at the end of the list.",
            wrong: "Use append() to add; remove and pop take items away.",
        },
    ],

    project: {
        title: "To-Do List",
        desc: "Finish a tiny to-do list. Start with two tasks, append one more, remove one by value, then print the list and how many tasks are left. No menu or input needed.",
        starter: [
            `todo = ["pack bag", "feed cat"]`,
            `# Append a new task`,
            ``,
            `# Remove "feed cat"`,
            ``,
            `print("Tasks:", todo)`,
            `print("Left:", )`,
        ].join("\n"),
    },

    prev: { unit: 6, lesson: 1, title: "Creating & Indexing Lists" },
    next: { unit: 6, lesson: 3, title: "Looping Through Lists" },
};
