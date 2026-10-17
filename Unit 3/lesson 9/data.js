export default {
    format: "v2",
    unit: 3,
    lesson: 9,
    unitLessons: 10,
    unitTitle: "Making Decisions",
    title: "not",
    readTime: 22,

    goal: "In this lesson you will learn how not flips True to False and False to True.",

    learn: [
        "Flip a bool with not",
        "Use not in an if condition",
        "Read not as \"the opposite\"",
    ],

    idea: `<code>not</code> reverses a boolean. <code>not True</code> is <code>False</code>. <code>not False</code> is <code>True</code>.

It is useful when you care about the opposite of a flag: <code>if not game_over:</code> means "keep going while the game is not over."

Put <code>not</code> in front of a condition or a bool variable.`,

    code: {
        filename: "not_demo.py",
        lines: [
            `print(not True)`,
            `print(not False)`,
            ``,
            `game_over = False`,
            `if not game_over:`,
            `    print("Keep playing")`,
            `else:`,
            `    print("Thanks for playing")`,
            ``,
            `print(not (5 > 10))`,
        ],
        output: [
            "False",
            "True",
            "Keep playing",
            "True",
        ],
    },

    changeOneLine: `In the editor above, change <code>game_over = False</code> to <code>game_over = True</code>. Press <strong>Run</strong>. You should see <code>Thanks for playing</code>.`,

    code2: {
        filename: "alarm.py",
        lines: [
            `door_open = False`,
            `if not door_open:`,
            `    print("Door is closed — all good")`,
            `else:`,
            `    print("Door is open — check it")`,
        ],
        output: [
            "Door is closed — all good",
        ],
    },

    practice: [
        {
            text: `Set <code>paused = False</code>. If not paused, print <code>Running</code>.`,
            starter: [
                `paused = False`,
                `# if not paused`,
            ].join("\n"),
            gradingNote: `Pass if if not paused prints Running.`,
        },
        {
            text: `Print <code>not (3 == 3)</code> and explain in a comment that it is False.`,
            starter: [
                `# 3 == 3 is True, so not flips it`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if output is False using not.`,
        },
    ],

    quiz: [
        {
            question: `What is <code>not False</code>?`,
            options: [
                { text: "False", correct: false },
                { text: "True", correct: true },
                { text: "None", correct: false },
                { text: "0", correct: false },
            ],
            correct: "not flips False into True.",
            wrong: "not reverses the boolean.",
        },
        {
            question: `What does <code>if not ready:</code> mean?`,
            options: [
                { text: "Run when ready is True", correct: false },
                { text: "Run when ready is False", correct: true },
                { text: "Always run", correct: false },
                { text: "Delete ready", correct: false },
            ],
            correct: "not ready is True only when ready is False.",
            wrong: "You enter the block when ready is False.",
        },
        {
            question: `What is <code>not (2 < 1)</code>?`,
            options: [
                { text: "False", correct: false },
                { text: "True", correct: true },
                { text: "2", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "2 < 1 is False; not False is True.",
            wrong: "Flip the False comparison to True.",
        },
    ],

    project: {
        title: "Mute Button",
        desc: "Set muted to True. If not muted, print Sound on. Else print Sound off.",
        starter: [
            `muted = True`,
            `# if not muted / else`,
        ].join("\n"),
    },

    prev: { unit: 3, lesson: 8, title: "or" },
    next: { unit: 3, lesson: 10, title: "Complex Conditions" },
};
