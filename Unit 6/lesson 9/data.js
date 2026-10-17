export default {
    format: "v2",
    unit: 6,
    lesson: 9,
    unitLessons: 10,
    unitTitle: "Lists",
    title: "List Methods",
    readTime: 24,

    goal: "In this lesson you will learn handy list tools: sort, in, count, and index.",

    learn: [
        "sort() puts items in order",
        "in checks whether a value is present",
        "count() and index() find matches",
    ],

    idea: `<code>sort()</code> rearranges the list from small to big (or A to Z).

    The word <code>in</code> asks “is this value here?” and gives True or False. <code>count(value)</code> tells how many times it appears. <code>index(value)</code> gives the position of the first match.`,

    code: {
        filename: "helpers.py",
        lines: [
            `numbers = [4, 1, 9, 2, 7]`,
            `numbers.sort()`,
            `print(numbers)`,
            ``,
            `pets = ["dog", "cat", "dog", "fish"]`,
            `print("cat" in pets)`,
            `print("bird" in pets)`,
            `print("dog count:", pets.count("dog"))`,
            `print("fish at:", pets.index("fish"))`,
        ],
        output: [
            "[1, 2, 4, 7, 9]",
            "True",
            "False",
            "dog count: 2",
            "fish at: 3",
        ],
    },

    changeOneLine: `In the editor above, change <code>"bird" in pets</code> to <code>"dog" in pets</code>. Press <strong>Run</strong>. That line of output should become <code>True</code>.`,

    code2: {
        filename: "alpha.py",
        lines: [
            `names = ["Zoe", "Ava", "Mia"]`,
            `names.sort()`,
            `print(names)`,
            `print("Ava" in names)`,
            `print(names.index("Mia"))`,
        ],
        output: [
            "['Ava', 'Mia', 'Zoe']",
            "True",
            "1",
        ],
    },

    practice: [
        {
            text: `Sort <code>scores</code> and print the sorted list.`,
            hint: `Call scores.sort() on its own line — it rearranges the list in place, then print shows the new order.`,
            starterTip: `Put scores.sort() between the comment and print(scores).`,
            starter: [
                `scores = [88, 72, 95, 60]`,
                `# Sort then print`,
                ``,
                `print(scores)`,
            ].join("\n"),
            gradingNote: `Pass if sort() is called and the printed list is ascending.`,
        },
        {
            text: `Print whether <code>"blue"</code> is in colors, then print how many times <code>"red"</code> appears.`,
            hint: `First print uses "blue" in colors. Second print uses colors.count("red").`,
            starterTip: `Try print("blue" in colors) on the first blank line and print(colors.count("red")) on the second.`,
            starter: [
                `colors = ["red", "blue", "red", "green"]`,
                `print()`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if one print uses in for "blue" and one uses count("red").`,
        },
    ],

    quiz: [
        {
            question: `What does <code>nums.sort()</code> do?`,
            options: [
                { text: "Deletes nums", correct: false },
                { text: "Rearranges nums in order", correct: true },
                { text: "Only prints nums", correct: false },
                { text: "Adds a new number", correct: false },
            ],
            correct: "sort changes the list into sorted order.",
            wrong: "sort rearranges the existing items.",
        },
        {
            question: `What does <code>"cat" in pets</code> return?`,
            options: [
                { text: "The index of cat", correct: false },
                { text: "True or False", correct: true },
                { text: "Always an error", correct: false },
                { text: "The word cat twice", correct: false },
            ],
            correct: "in checks membership and returns a boolean.",
            wrong: "Membership tests give True or False.",
        },
        {
            question: `What does <code>items.count("x")</code> tell you?`,
            options: [
                { text: "How many times x appears", correct: true },
                { text: "The length of every string", correct: false },
                { text: "Whether the list is sorted", correct: false },
                { text: "The last index only", correct: false },
            ],
            correct: "count returns the number of matching items.",
            wrong: "count tallies how often a value shows up.",
        },
    ],

    project: {
        title: "Leaderboard Tools",
        desc: "Sort a list of five scores. Print the sorted list, whether 100 is in it, and the index of the highest score after sorting.",
        starter: [
            `scores = [88, 100, 72, 95, 60]`,
            `# sort`,
            ``,
            `print(scores)`,
            `print(100 in scores)`,
            `print(scores.index(100))`,
        ].join("\n"),
    },

    prev: { unit: 6, lesson: 8, title: "Totals from Lists" },
    next: { unit: 6, lesson: 10, title: "Building Lists" },
};
