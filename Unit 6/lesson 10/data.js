export default {
    format: "v2",
    unit: 6,
    lesson: 10,
    unitLessons: 10,
    unitTitle: "Lists",
    title: "Building Lists",
    readTime: 25,

    goal: "In this lesson you will put list skills together: start empty, append in a loop, then use the finished list.",

    learn: [
        "Start with an empty list",
        "Append items one by one",
        "Use the finished list afterward",
    ],

    idea: `Sometimes you do not know every item when you write the program. Start with <code>[]</code>, then <code>append</code> values as you go — often inside a loop.

    When building is done, you can print, total, or search the list you made.`,

    code: {
        filename: "build.py",
        lines: [
            `# Build a list of even numbers`,
            `evens = []`,
            `for n in [1, 2, 3, 4, 5, 6]:`,
            `    if n % 2 == 0:`,
            `        evens.append(n)`,
            ``,
            `print(evens)`,
            ``,
            `# Build squares`,
            `squares = []`,
            `for n in [1, 2, 3, 4]:`,
            `    squares.append(n * n)`,
            `print(squares)`,
        ],
        output: [
            "[2, 4, 6]",
            "[1, 4, 9, 16]",
        ],
    },

    changeOneLine: `In the editor above, change the squares loop to go through <code>[1, 2, 3, 4, 5]</code>. Press <strong>Run</strong>. The second list should end with <code>25</code>.`,

    code2: {
        filename: "doubles.py",
        lines: [
            `nums = [3, 5, 7]`,
            `doubled = []`,
            `for n in nums:`,
            `    doubled.append(n * 2)`,
            `print(doubled)`,
        ],
        output: [
            "[6, 10, 14]",
        ],
    },

    practice: [
        {
            text: `Build a new list of each number plus 1. Print the new list.`,
            hint: `Loop over nums and each time append n + 1 to plus_one — grow the list, do not replace it.`,
            starterTip: `for n in nums: then plus_one.append(n + 1) indented under the comment.`,
            starter: [
                `nums = [10, 20, 30]`,
                `plus_one = []`,
                `# append n + 1 for each n`,
                ``,
                `print(plus_one)`,
            ].join("\n"),
            gradingNote: `Pass if plus_one becomes [11, 21, 31] via append in a loop.`,
        },
        {
            text: `Start empty. Append three color strings, then print the list and its length.`,
            hint: `Call colors.append("something") three times with three different color names in quotes.`,
            starterTip: `Three lines like colors.append("red"), colors.append("blue"), colors.append("green") before the prints.`,
            starter: [
                `colors = []`,
                ``,
                ``,
                ``,
                `print(colors)`,
                `print(len(colors))`,
            ].join("\n"),
            gradingNote: `Pass if three append calls build a 3-item list and length 3 is printed.`,
        },
    ],

    quiz: [
        {
            question: `Why start with <code>[]</code> when building a list?`,
            options: [
                { text: "So you can append items as you go", correct: true },
                { text: "Empty lists cannot grow", correct: false },
                { text: "Python forbids starting with values", correct: false },
                { text: "Only strings can be appended", correct: false },
            ],
            correct: "An empty list is a clean starting point to fill.",
            wrong: "You grow [] by appending one item at a time.",
        },
        {
            question: `Where does <code>append</code> put each new item?`,
            options: [
                { text: "At the beginning", correct: false },
                { text: "At the end", correct: true },
                { text: "In sorted order always", correct: false },
                { text: "In a second hidden list", correct: false },
            ],
            correct: "append always adds to the end.",
            wrong: "New items land after the last existing item.",
        },
        {
            question: `After building, what can you do with the list?`,
            options: [
                { text: "Nothing — building lists is useless", correct: false },
                { text: "Print, total, search, or loop like any list", correct: true },
                { text: "Only delete it", correct: false },
                { text: "Only convert it to a string forever", correct: false },
            ],
            correct: "A built list works like any other list.",
            wrong: "Once built, use the same list skills you already know.",
        },
    ],

    project: {
        title: "Double Machine",
        desc: "From a list of five numbers, build a new list where each value is doubled. Print both lists.",
        starter: [
            `original = [1, 2, 3, 4, 5]`,
            `doubled = []`,
            `# append each n * 2`,
            ``,
            `print("Original:", original)`,
            `print("Doubled:", doubled)`,
        ].join("\n"),
    },

    prev: { unit: 6, lesson: 9, title: "List Methods" },
    next: { unit: 7, lesson: 1, title: "Lists Inside Lists" },
};
