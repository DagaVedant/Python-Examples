export default {
    format: "v2",
    unit: 6,
    lesson: 4,
    unitLessons: 4,
    unitTitle: "Lists",
    title: "Useful List Methods",
    readTime: 30,

    goal: "In this lesson you will learn handy list tools: sorting, checking if a value is in a list, counting matches, and finding an item's index.",

    learn: [
        "Sort a list with .sort()",
        "Search with the in keyword",
        "Count and find items with .count() and .index()",
    ],

    idea: `Lists come with built-in helpers. <code>sort()</code> puts items in order. The word <code>in</code> checks whether a value is somewhere in the list (True or False). <code>count()</code> tells you how many times a value appears. <code>index()</code> gives the position of the first match.`,

    code: {
        filename: "leaderboard.py",
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

    changeOneLine: `In the editor above, change <code>print(7 in numbers)</code> to <code>print(4 in numbers)</code>. Press <strong>Run</strong>. That line should still print <code>True</code> (4 is in the sorted list).`,

    code2: {
        filename: "team.py",
        lines: [
            `scores = [12, 5, 20, 8]`,
            `scores.sort()`,
            `print("Sorted:", scores)`,
            `print("Smallest:", scores[0])`,
            `print("Largest:", scores[-1])`,
            `print("Has 20?", 20 in scores)`,
            `print("Twenties:", scores.count(20))`,
        ],
        output: [
            "Sorted: [5, 8, 12, 20]",
            "Smallest: 5",
            "Largest: 20",
            "Has 20? True",
            "Twenties: 1",
        ],
    },

    practice: [
        {
            text: `Sort a short list of numbers. Print the smallest and largest using indexes after sorting (not min/max). Fill in the blanks.`,
            starter: [
                `nums = [8, 3, 11, 1, 6]`,
                `# Sort the list`,
                ``,
                `print("Smallest:", )`,
                `print("Largest:", )`,
            ].join("\n"),
            gradingNote: `Pass if sort() is used and smallest/largest print as 1 and 11 via indexes (0 and -1) after sorting.`,
        },
        {
            text: `Check whether a word is in a banned list and print a clear message. Finish the if/else prints.`,
            starter: [
                `banned = ["bad", "evil", "ugly"]`,
                `word = "nice"`,
                `if word in banned:`,
                `    print()`,
                `else:`,
                `    print()`,
            ].join("\n"),
            gradingNote: `Pass if the program uses "in" with the banned list and prints a message showing the word is allowed (since word is "nice").`,
        },
    ],

    quiz: [
        {
            question: `What does the <code>in</code> keyword do with a list?`,
            options: [
                { text: "It adds a new item to the list", correct: false },
                { text: "It checks whether a value exists in the list", correct: true },
                { text: "It loops through every item", correct: false },
                { text: "It returns the index of an item", correct: false },
            ],
            correct: "in returns True if the value is found, False otherwise.",
            wrong: "in is a membership check — True or False — not add or index.",
        },
        {
            question: `After <code>nums = [3, 1, 2]</code> and <code>nums.sort()</code>, what is nums?`,
            options: [
                { text: "[3, 1, 2]", correct: false },
                { text: "[1, 2, 3]", correct: true },
                { text: "[2, 1, 3]", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "sort() rearranges the list in ascending order: [1, 2, 3].",
            wrong: "sort() changes the list in place into ascending order.",
        },
        {
            question: `What does <code>letters.count("a")</code> return for <code>["a", "b", "a"]</code>?`,
            options: [
                { text: "0", correct: false },
                { text: "1", correct: false },
                { text: "2", correct: true },
                { text: "3", correct: false },
            ],
            correct: "count tells how many times \"a\" appears — twice.",
            wrong: "There are two \"a\" values in that list, so count returns 2.",
        },
    ],

    project: {
        title: "Leaderboard",
        desc: "Finish a tiny leaderboard. Sort the scores high to low, print rank lines, and highlight the top score. Keep the lists small — no input needed.",
        starter: [
            `names = ["Ava", "Leo", "Mia"]`,
            `scores = [80, 95, 88]`,
            ``,
            `# Sort scores high to low`,
            `scores.sort(reverse=True)`,
            `print("1st:", scores[0])`,
            `# Print 2nd and 3rd`,
            `print()`,
            `print()`,
            ``,
            `# Check if 95 is on the board`,
            `print("Champ on board?", )`,
        ].join("\n"),
    },

    prev: { unit: 6, lesson: 3, title: "Looping Through Lists" },
    next: { unit: 7, lesson: 1, title: "Lists Inside Lists" },
};
