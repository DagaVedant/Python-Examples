export default {
    unit: 6,
    lesson: 4,
    unitLessons: 4,
    unitTitle: "Lists",
    title: "Useful List Methods",
    readTime: 5,

    goal: "In this lesson you will learn the most useful built-in list tools: sorting, reversing, searching, and counting. This will help you do common tasks without loops.",

    learn: [
        "Sort a list with .sort()",
        "Search with the in keyword",
        "Count and find items with .count() and .index()",
    ],

    idea: "Python lists come with built-in methods that handle common tasks. sort() rearranges items in order. reverse() flips the list. in checks whether a value exists anywhere in the list without needing a loop. count() tells you how many times a value appears. index() gives you the position of the first match.",

    code: {
        filename: "lesson_6_4.py",
        lines: [
            `numbers = [4, 1, 9, 2, 7, 3]`,
            ``,
            `# Sort ascending`,
            `numbers.sort()`,
            `print(numbers)`,
            ``,
            `# Sort descending`,
            `numbers.sort(reverse=True)`,
            `print(numbers)`,
            ``,
            `# Search with in`,
            `print(7 in numbers)`,
            `print(99 in numbers)`,
            ``,
            `# Count and index`,
            `letters = ["a", "b", "a", "c", "a"]`,
            `print(letters.count("a"))`,
            `print(letters.index("c"))`,
        ],
        output: [
            "[1, 2, 3, 4, 7, 9]",
            "[9, 7, 4, 3, 2, 1]",
            "True",
            "False",
            "3",
            "3",
        ],
    },

    practice: [
        `Create a list of 8 random numbers. Sort it and print the smallest and largest without using min() or max().`,
        `Ask the user to type a word. Check if it is in a preset list of banned words (["bad", "evil", "ugly"]) and print an appropriate message.`,
    ],

    quiz: {
        question: `What does the <code>in</code> keyword do when used with a list?`,
        options: [
            {text: "It adds a new item to the list", correct: false},
            {text: "It checks whether a value exists in the list", correct: true},
            {text: "It loops through every item in the list", correct: false},
            {text: "It returns the index of an item", correct: false},
        ],
        correct: "Correct! in returns True if the value is found anywhere in the list, False otherwise.",
        wrong: "Not quite. in is a membership check, and makes it return True or False depending on whether the value is in the list.",
    },

    project: {
        title: "Leaderboard",
        desc: "Build a leaderboard. Store player names in one list and scores in another. Sort the scores in descending order and print the full leaderboard showing rank, name, and score. Highlight the top player.",
    },

    prev: {unit: 6, lesson: 3, title: "Looping Through Lists"},
    next: {unit: 7, lesson: 1, title: "Lists Inside Lists"},
};
