export default {
    format: "v2",
    unit: 3,
    lesson: 1,
    unitLessons: 10,
    unitTitle: "Making Decisions",
    title: "True and False",
    readTime: 20,

    goal: "In this lesson you will learn about booleans: the values True and False.",

    learn: [
        "Know True and False are bool values",
        "Store a boolean in a variable",
        "Print True and False",
    ],

    idea: `A <strong>boolean</strong> (bool) is a value that is only <code>True</code> or <code>False</code>. Like a yes/no switch.

In Python, spell them with a capital T and F: <code>True</code>, <code>False</code>.

Programs use booleans to remember answers like "door is open" or "score is high enough."`,

    code: {
        filename: "bools.py",
        lines: [
            `# Boolean values`,
            `print(True)`,
            `print(False)`,
            ``,
            `# Store yes/no facts`,
            `lights_on = True`,
            `door_locked = False`,
            `print("Lights on:", lights_on)`,
            `print("Door locked:", door_locked)`,
            `print(type(lights_on))`,
        ],
        output: [
            "True",
            "False",
            "Lights on: True",
            "Door locked: False",
            "<class 'bool'>",
        ],
    },

    changeOneLine: `In the editor above, change <code>lights_on = True</code> to <code>lights_on = False</code>. Press <strong>Run</strong>. The lights line should say <code>False</code>.`,

    code2: {
        filename: "flags.py",
        lines: [
            `game_over = False`,
            `has_key = True`,
            `print("Game over?", game_over)`,
            `print("Has key?", has_key)`,
        ],
        output: [
            "Game over? False",
            "Has key? True",
        ],
    },

    practice: [
        {
            text: `Create a variable <code>ready</code> set to True and print it with the label <code>Ready:</code>.`,
            hint: `Booleans use a capital T: write <code>True</code> with no quotes. Then use print() to show the label and the variable.`,
            starterTip: `Try <code>ready = True</code> on the first line, then something like <code>print("Ready:", ready)</code>.`,
            starter: [
                `ready = `,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if ready is True and printed with a Ready label.`,
        },
        {
            text: `Set <code>raining</code> to False and <code>umbrella</code> to True. Print both values.`,
            hint: `Fill in each variable with <code>False</code> or <code>True</code>. No quotes around them. The print lines are already set up for you.`,
            starterTip: `Use <code>raining = False</code> and <code>umbrella = True</code>, then run to see both labels print.`,
            starter: [
                `raining = `,
                `umbrella = `,
                `print("Raining:", raining)`,
                `print("Umbrella:", umbrella)`,
            ].join("\n"),
            gradingNote: `Pass if raining is False and umbrella is True, both printed.`,
        },
    ],

    quiz: [
        {
            question: `Which are the two boolean values in Python?`,
            options: [
                { text: "yes and no", correct: false },
                { text: "True and False", correct: true },
                { text: "1 and 0 only", correct: false },
                { text: "On and Off", correct: false },
            ],
            correct: "Booleans are True and False (capital letters).",
            wrong: "Python uses True and False with capital first letters.",
        },
        {
            question: `What type is <code>True</code>?`,
            options: [
                { text: "str", correct: false },
                { text: "int", correct: false },
                { text: "bool", correct: true },
                { text: "float", correct: false },
            ],
            correct: "True and False are type bool.",
            wrong: "type(True) is bool.",
        },
        {
            question: `Which spelling is correct?`,
            options: [
                { text: "true", correct: false },
                { text: "TRUE", correct: false },
                { text: "True", correct: true },
                { text: "\"True\"", correct: false },
            ],
            correct: "Capital T, rest lowercase: True.",
            wrong: "It must be True. Not true, TRUE, or a string.",
        },
    ],

    project: {
        title: "Quest Checklist",
        desc: "Make three bool flags: has_map (True), has_torch (False), boss_defeated (False). Print each with a clear label.",
        starter: [
            `has_map = `,
            `has_torch = `,
            `boss_defeated = `,
            `print("Map:", has_map)`,
            `print("Torch:", has_torch)`,
            `print("Boss defeated:", boss_defeated)`,
        ].join("\n"),
    },

    prev: { unit: 2, lesson: 10, title: "Useful math Tools" },
    next: { unit: 3, lesson: 2, title: "Comparing Values" },
};
