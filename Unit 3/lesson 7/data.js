export default {
    format: "v2",
    unit: 3,
    lesson: 7,
    unitLessons: 10,
    unitTitle: "Making Decisions",
    title: "and",
    readTime: 22,

    goal: "In this lesson you will learn how and requires both sides to be True.",

    learn: [
        "Combine conditions with and",
        "Know both must be True",
        "Use and inside an if",
    ],

    idea: `The keyword <code>and</code> joins two conditions. The whole expression is <code>True</code> only if <strong>both</strong> sides are True.

<code>True and True</code> → True. If either side is False, the result is False.

Use it when two things must be true at once — like having a ticket <em>and</em> being old enough.`,

    code: {
        filename: "and_demo.py",
        lines: [
            `print(True and True)`,
            `print(True and False)`,
            `print(False and False)`,
            ``,
            `age = 12`,
            `has_pass = True`,
            `if age >= 10 and has_pass:`,
            `    print("You may enter")`,
            `else:`,
            `    print("Cannot enter")`,
        ],
        output: [
            "True",
            "False",
            "False",
            "You may enter",
        ],
    },

    changeOneLine: `In the editor above, change <code>has_pass = True</code> to <code>has_pass = False</code>. Press <strong>Run</strong>. You should see <code>Cannot enter</code>.`,

    code2: {
        filename: "quest.py",
        lines: [
            `has_map = True`,
            `has_key = True`,
            `if has_map and has_key:`,
            `    print("Open the secret door")`,
            `else:`,
            `    print("Missing an item")`,
        ],
        output: [
            "Open the secret door",
        ],
    },

    practice: [
        {
            text: `Set score to 80 and lives to 2. If score >= 70 and lives > 0, print Level clear.`,
            hint: `Both sides of <code>and</code> must be True. Your score and lives already pass — write one <code>if</code> that checks both in the same line.`,
            starterTip: `Try <code>if score >= 70 and lives > 0:</code> on its own line, then indented underneath: <code>print("Level clear")</code>.`,
            starter: [
                `score = 80`,
                `lives = 2`,
                `# if with and`,
            ].join("\n"),
            gradingNote: `Pass if and connects both conditions and Level clear prints.`,
        },
        {
            text: `Print the value of <code>(5 > 2) and (5 < 10)</code>.`,
            hint: `Each part in parentheses is True or False. Put the whole <code>and</code> expression inside <code>print()</code> so Python shows the final answer.`,
            starterTip: `Try <code>print((5 > 2) and (5 < 10))</code> — both comparisons are True, so you should see True.`,
            starter: [
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if output is True using and.`,
        },
    ],

    quiz: [
        {
            question: `When is <code>A and B</code> True?`,
            options: [
                { text: "When either A or B is True", correct: false },
                { text: "When both A and B are True", correct: true },
                { text: "When both are False", correct: false },
                { text: "Never", correct: false },
            ],
            correct: "and needs both sides True.",
            wrong: "If one side is False, and is False.",
        },
        {
            question: `What is <code>True and False</code>?`,
            options: [
                { text: "True", correct: false },
                { text: "False", correct: true },
                { text: "None", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "One False makes the and False.",
            wrong: "Both must be True for and to be True.",
        },
        {
            question: `Which if needs both a key and a torch?`,
            options: [
                { text: `if has_key or has_torch:`, correct: false },
                { text: `if has_key and has_torch:`, correct: true },
                { text: `if has_key:`, correct: false },
                { text: `if not has_key:`, correct: false },
            ],
            correct: "and means both items are required.",
            wrong: "Use and when both conditions must hold.",
        },
    ],

    project: {
        title: "Ride Rules",
        desc: "height is 130 and with_adult is True. If height >= 120 and with_adult, print Ride allowed. Else print Not allowed.",
        starter: [
            `height = 130`,
            `with_adult = True`,
            `# if / else with and`,
        ].join("\n"),
    },

    prev: { unit: 3, lesson: 6, title: "Many Branches" },
    next: { unit: 3, lesson: 8, title: "or" },
};
