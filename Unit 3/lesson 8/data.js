export default {
    format: "v2",
    unit: 3,
    lesson: 8,
    unitLessons: 10,
    unitTitle: "Making Decisions",
    title: "or",
    readTime: 22,

    goal: "In this lesson you will learn how or is True when at least one side is True.",

    learn: [
        "Combine conditions with or",
        "Know one True side is enough",
        "Use or inside an if",
    ],

    idea: `The keyword <code>or</code> joins two conditions. The whole expression is <code>True</code> if <strong>at least one</strong> side is True.

<code>False or True</code> → True. Only <code>False or False</code> is False.

Use it when either option is enough. Like a coupon <em>or</em> a member pass.`,

    code: {
        filename: "or_demo.py",
        lines: [
            `print(True or False)`,
            `print(False or False)`,
            `print(True or True)`,
            ``,
            `has_coupon = False`,
            `is_member = True`,
            `if has_coupon or is_member:`,
            `    print("Discount unlocked")`,
            `else:`,
            `    print("Full price")`,
        ],
        output: [
            "True",
            "False",
            "True",
            "Discount unlocked",
        ],
    },

    changeOneLine: `In the editor above, change <code>is_member = True</code> to <code>is_member = False</code>. Press <strong>Run</strong>. You should see <code>Full price</code>.`,

    code2: {
        filename: "escape.py",
        lines: [
            `has_rope = False`,
            `has_ladder = True`,
            `if has_rope or has_ladder:`,
            `    print("You can climb out")`,
            `else:`,
            `    print("Stuck for now")`,
        ],
        output: [
            "You can climb out",
        ],
    },

    practice: [
        {
            text: `Set raining and snowing. Make raining True and snowing False. If either is True, print Stay inside.`,
            hint: `<code>or</code> is True when at least one side is True. Raining is already True, so you only need one <code>if</code> that checks both weather flags.`,
            starterTip: `Try <code>if raining or snowing:</code> then indented below: <code>print("Stay inside")</code>.`,
            starter: [
                `raining = True`,
                `snowing = False`,
                `# if with or`,
            ].join("\n"),
            gradingNote: `Pass if or is used and Stay inside prints.`,
        },
        {
            text: `Print the value of <code>(3 == 4) or (3 < 5)</code>.`,
            hint: `One side of <code>or</code> can be False as long as the other is True. Wrap the whole expression in <code>print()</code>.`,
            starterTip: `Try <code>print((3 == 4) or (3 < 5))</code>. The first part is False but the second is True, so the result is True.`,
            starter: [
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if output is True using or.`,
        },
    ],

    quiz: [
        {
            question: `When is <code>A or B</code> True?`,
            options: [
                { text: "Only when both are True", correct: false },
                { text: "When at least one is True", correct: true },
                { text: "Only when both are False", correct: false },
                { text: "Never", correct: false },
            ],
            correct: "One True side is enough for or.",
            wrong: "or fails only when both sides are False.",
        },
        {
            question: `What is <code>False or False</code>?`,
            options: [
                { text: "True", correct: false },
                { text: "False", correct: true },
                { text: "None", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "No True side means False.",
            wrong: "or needs at least one True.",
        },
        {
            question: `How is or different from and?`,
            options: [
                { text: "They are the same", correct: false },
                { text: "or needs one True; and needs both True", correct: true },
                { text: "or only works on strings", correct: false },
                { text: "and is for printing only", correct: false },
            ],
            correct: "and = both; or = at least one.",
            wrong: "Remember: and is stricter than or.",
        },
    ],

    project: {
        title: "Club Entry",
        desc: "has_ticket is False and knows_password is True. If either is True, print Come in. Else print Denied.",
        starter: [
            `has_ticket = False`,
            `knows_password = True`,
            `# if / else with or`,
        ].join("\n"),
    },

    prev: { unit: 3, lesson: 7, title: "and" },
    next: { unit: 3, lesson: 9, title: "not" },
};
