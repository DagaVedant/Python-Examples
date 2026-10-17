export default {
    format: "v2",
    unit: 3,
    lesson: 10,
    unitLessons: 10,
    unitTitle: "Making Decisions",
    title: "Complex Conditions",
    readTime: 25,

    goal: "In this lesson you will combine and, or, and not — and use parentheses to keep the meaning clear.",

    learn: [
        "Mix and, or, and not safely",
        "Use parentheses to group logic",
        "Build a real decision from several facts",
    ],

    idea: `Real decisions often need more than one operator. Parentheses <code>()</code> show what groups together, just like in math.

Example: <code>(has_ticket or is_vip) and not banned</code> means you need a ticket or VIP status, and you must not be banned.

Write conditions so a human can read them. When unsure, add parentheses.`,

    code: {
        filename: "complex.py",
        lines: [
            `has_ticket = True`,
            `is_vip = False`,
            `banned = False`,
            ``,
            `if (has_ticket or is_vip) and not banned:`,
            `    print("Welcome to the show")`,
            `else:`,
            `    print("Entry blocked")`,
            ``,
            `score = 75`,
            `bonus = True`,
            `if score >= 90 or (score >= 70 and bonus):`,
            `    print("Award earned")`,
        ],
        output: [
            "Welcome to the show",
            "Award earned",
        ],
    },

    changeOneLine: `In the editor above, change <code>banned = False</code> to <code>banned = True</code>. Press <strong>Run</strong>. First message should be <code>Entry blocked</code>.`,

    code2: {
        filename: "weather_plan.py",
        lines: [
            `raining = True`,
            `cold = False`,
            `has_coat = True`,
            `if raining and (not cold or has_coat):`,
            `    print("Go outside carefully")`,
            `else:`,
            `    print("Stay in")`,
        ],
        output: [
            "Go outside carefully",
        ],
    },

    practice: [
        {
            text: `Set has_key True, door_locked True, alarm_off True. If has_key and door_locked and alarm_off, print Safe to open.`,
            starter: [
                `has_key = True`,
                `door_locked = True`,
                `alarm_off = True`,
                `# if with and`,
            ].join("\n"),
            gradingNote: `Pass if all three are and-ed and Safe to open prints.`,
        },
        {
            text: `Use parentheses: allow entry if (age >= 12 or with_adult) and not closed. Set age=10, with_adult=True, closed=False.`,
            starter: [
                `age = 10`,
                `with_adult = True`,
                `closed = False`,
                `# if (age >= 12 or with_adult) and not closed`,
            ].join("\n"),
            gradingNote: `Pass if parentheses group or, and not closed is used, and a success message prints.`,
        },
    ],

    quiz: [
        {
            question: `Why use parentheses in complex conditions?`,
            options: [
                { text: "They are required for print", correct: false },
                { text: "They make grouping clear so logic means what you intend", correct: true },
                { text: "They turn bools into ints", correct: false },
                { text: "They disable not", correct: false },
            ],
            correct: "Parentheses control which parts combine first.",
            wrong: "Grouping avoids mix-ups between and and or.",
        },
        {
            question: `What does <code>(True or False) and not False</code> equal?`,
            options: [
                { text: "False", correct: false },
                { text: "True", correct: true },
                { text: "None", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "(True or False) is True; not False is True; True and True is True.",
            wrong: "Work inside parens first, then and.",
        },
        {
            question: `Which best matches: ticket or VIP, and not banned?`,
            options: [
                { text: `has_ticket and is_vip or banned`, correct: false },
                { text: `(has_ticket or is_vip) and not banned`, correct: true },
                { text: `not has_ticket or is_vip and banned`, correct: false },
                { text: `has_ticket or is_vip or banned`, correct: false },
            ],
            correct: "Group the or, then require not banned.",
            wrong: "Parentheses around ticket/VIP keep the meaning right.",
        },
    ],

    project: {
        title: "Launch Checklist",
        desc: "fuel_ok True, weather_ok True, abort False. If (fuel_ok and weather_ok) and not abort, print Launch. Else print Hold.",
        starter: [
            `fuel_ok = True`,
            `weather_ok = True`,
            `abort = False`,
            `# complex if / else`,
        ].join("\n"),
    },

    prev: { unit: 3, lesson: 9, title: "not" },
    next: { unit: 4, lesson: 1, title: "Why Loops" },
};
