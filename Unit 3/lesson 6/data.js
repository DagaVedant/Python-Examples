export default {
    format: "v2",
    unit: 3,
    lesson: 6,
    unitLessons: 10,
    unitTitle: "Making Decisions",
    title: "Many Branches",
    readTime: 24,

    goal: "In this lesson you will practice longer if / elif / else chains that pick one outcome from many choices.",

    learn: [
        "Build a multi-branch menu",
        "Keep conditions ordered carefully",
        "Use else as the catch-all",
    ],

    idea: `When there are many options, stack several <code>elif</code> lines. Python still runs only one branch — the first True one.

Think of a menu or a ranking chart: check top ranks first, then next, then a final else for everything else.

Clear labels in each branch make the program easy to follow.`,

    code: {
        filename: "menu.py",
        lines: [
            `choice = 3`,
            ``,
            `if choice == 1:`,
            `    print("Start game")`,
            `elif choice == 2:`,
            `    print("Load save")`,
            `elif choice == 3:`,
            `    print("Settings")`,
            `elif choice == 4:`,
            `    print("Quit")`,
            `else:`,
            `    print("Unknown choice")`,
        ],
        output: [
            "Settings",
        ],
    },

    changeOneLine: `In the editor above, change <code>choice = 3</code> to <code>choice = 9</code>. Press <strong>Run</strong>. You should see <code>Unknown choice</code>.`,

    code2: {
        filename: "ranks.py",
        lines: [
            `stars = 4`,
            `if stars >= 5:`,
            `    print("Legend")`,
            `elif stars == 4:`,
            `    print("Champion")`,
            `elif stars == 3:`,
            `    print("Hero")`,
            `elif stars == 2:`,
            `    print("Scout")`,
            `else:`,
            `    print("Beginner")`,
        ],
        output: [
            "Champion",
        ],
    },

    practice: [
        {
            text: `Build a day picker. Set <code>day = 6</code>. If 1 print Mon, elif 2 Tue, elif 3 Wed, elif 4 Thu, elif 5 Fri, elif 6 Sat, elif 7 Sun, else Invalid.`,
            starter: [
                `day = 6`,
                `# many branches`,
            ].join("\n"),
            gradingNote: `Pass if Sat prints for day 6 with a multi-elif chain.`,
        },
        {
            text: `Set <code>hp = 12</code>. If hp > 50 print Fine, elif hp > 20 print Wounded, elif hp > 0 print Critical, else print Down.`,
            starter: [
                `hp = 12`,
            ].join("\n"),
            gradingNote: `Pass if Critical prints; order of thresholds matters.`,
        },
    ],

    quiz: [
        {
            question: `In a long if/elif/else chain, how many branches run?`,
            options: [
                { text: "All of them", correct: false },
                { text: "Exactly one", correct: true },
                { text: "Two", correct: false },
                { text: "None", correct: false },
            ],
            correct: "Only the first matching branch runs.",
            wrong: "One True branch (or else) — then stop.",
        },
        {
            question: `What is else for in a menu chain?`,
            options: [
                { text: "The first option", correct: false },
                { text: "A catch-all for anything unmatched", correct: true },
                { text: "To skip printing", correct: false },
                { text: "To import math", correct: false },
            ],
            correct: "else handles unexpected values.",
            wrong: "When no if/elif matched, else runs.",
        },
        {
            question: `Why put higher thresholds first (like >= 90 before >= 80)?`,
            options: [
                { text: "Python requires descending order", correct: false },
                { text: "So a high score is not caught by a lower band", correct: true },
                { text: "It makes code slower", correct: false },
                { text: "It does not matter", correct: false },
            ],
            correct: "First match wins, so order affects results.",
            wrong: "A score of 95 would match >= 80 if that came first.",
        },
    ],

    project: {
        title: "Arcade Cabinet",
        desc: "Set button to \"B\". If A print Jump, elif B print Dash, elif X print Attack, elif Y print Shield, else print Nothing.",
        starter: [
            `button = "B"`,
            `# many branches`,
        ].join("\n"),
    },

    prev: { unit: 3, lesson: 5, title: "elif" },
    next: { unit: 3, lesson: 7, title: "and" },
};
