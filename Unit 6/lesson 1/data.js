export default {
    unit: 6,
    lesson: 1,
    unitLessons: 4,
    unitTitle: "Lists",
    title: "Creating & Indexing Lists",
    readTime: 5,

    goal: "In this lesson you will learn how to store multiple values in a single list and access individual items using their index.",

    learn: [
        "Create a list with square brackets",
        "Access items using their index number",
        "Understand that indexing starts at 0",
    ],

    idea: "A list stores many values in order inside one variable. You reach each item using its index (its position in the list). Python counts positions starting from 0, so the first item is at index 0, the second at index 1, and so on. You can also use negative indexes to count from the end.",

    code: {
        filename: "Unit_6_Lesson_1.py",
        lines: [
            `# Creating a list`,
            `fruits = ["apple", "banana", "cherry"]`,
            ``,
            `# Accessing items by index`,
            `print(fruits[0])`,
            `print(fruits[1])`,
            `print(fruits[2])`,
            ``,
            `# Negative indexing counts from the end`,
            `print(fruits[-1])`,
            ``,
            `# Lists can hold mixed types`,
            `mixed = ["Alice", 25, True, 3.14]`,
            `print(mixed[0], "is", mixed[1], "years old")`,
        ],
        output: [
            "apple",
            "banana",
            "cherry",
            "cherry",
            "Alice is 25 years old",
        ],
    },

    practice: [
        `Create a list of five of your favourite movies. Print the first, the last, and the middle one using indexes.`,
        `Create a list of numbers and print the sum of the first and last items.`,
    ],

    quiz: {
        question: `A list has 4 items. What index does the last item have?`,
        options: [
            {text: "4, because there are 4 items", correct: false},
            {text: "3, because indexing starts at 0", correct: true},
            {text: "0, because Python counts from 0", correct: false},
            {text: "-1, always", correct: false},
        ],
        correct: "Correct! &nbsp; With 4 items, the indexes are 0, 1, 2, 3, so the last item is at index 3.",
        wrong: "Not quite. &nbsp; Indexes start at 0, so a list with 4 items has indexes 0 through 3.",
    },

    project: {
        title: "Top 5 List",
        desc: "Create a list of your top 5 songs, books, or games. Print them out in a numbered list (1 to 5) using indexes. Then print the one you'd recommend most at the bottom.",
    },

    prev: {unit: 5, lesson: 4, title: "Designing with Functions"},
    next: {unit: 6, lesson: 2, title: "Adding & Removing Items"},
};
