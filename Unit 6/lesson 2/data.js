export default {
    unit: 6,
    lesson: 2,
    unitLessons: 4,
    unitTitle: "Lists",
    title: "Adding & Removing Items",
    readTime: 5,

    goal: "In this lesson you will learn how to change a list after you create it by adding new items, removing existing ones, and checking how many items it holds.",

    learn: [
        "Add items with .append()",
        "Remove items with .pop() and .remove()",
        "Check the length with len()",
    ],

    idea: "Lists are mutable, which means you can change them after you create them. append() adds a new item to the end. pop() removes the last item (or the item at a given index). remove() searches for a value and removes the first match. len() tells you how many items are in the list.",

    code: {
        filename: "Unit_6_Lesson_2.py",
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

    practice: [
        `Build a shopping list program. Start with an empty list and use a loop to let the user add items one at a time until they type <code>done</code>. Print the final list.`,
        `Start with a list of 5 names. Remove the first and last items using pop() and print what remains.`,
    ],

    quiz: {
        question: `What does <code>my_list.pop()</code> do?`,
        options: [
            {text: "Removes the first item from the list", correct: false},
            {text: "Removes and returns the last item from the list", correct: true},
            {text: "Deletes the entire list", correct: false},
            {text: "Adds a new item to the end of the list", correct: false},
        ],
        correct: "Correct! pop() removes the last item and returns it so you can store or print it.",
        wrong: "Not quite. pop() removes and returns the last item unless you pass an index.",
    },

    project: {
        title: "To-Do List App",
        desc: "Build a simple to-do list. Show a menu: add task, remove task, view tasks, and quit. Use a while loop to keep the menu running. Use append() and remove() to manage the list.",
    },

    prev: {unit: 6, lesson: 1, title: "Creating & Indexing Lists"},
    next: {unit: 6, lesson: 3, title: "Looping Through Lists"},
};
