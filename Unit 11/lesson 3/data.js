export default {
    format: "v2",
    unit: 11,
    lesson: 3,
    unitLessons: 8,
    unitTitle: "Imports",
    title: "module.name",
    readTime: 22,
    goal: "In this lesson you will learn how to call a tool with module.name after importing.",

    learn: [
        "Use a dot: module.name",
        "Call functions like math.sqrt()",
        "Read values like math.pi",
    ],

    idea: `After <code>import math</code>, reach a tool with a <strong>dot</strong>: <code>math.sqrt(16)</code> or <code>math.pi</code>.

The pattern is always <code>module.name</code>. The module owns the tool; the dot picks which tool.`,

    code: {
        filename: "dot.py",
        lines: [
            `import math`,
            `print(math.sqrt(16))`,
            `print(math.sqrt(25))`,
            `print(math.pi)`,
        ],
        output: [
            "4.0",
            "5.0",
            "3.141592653589793",
        ],
    },

    changeOneLine: `In the editor above, change <code>math.sqrt(16)</code> to <code>math.sqrt(36)</code>. Press <strong>Run</strong>. First line should be 6.0.`,

    code2: {
        filename: "floor_ceil.py",
        lines: [
            `import math`,
            `print(math.floor(3.7))`,
            `print(math.ceil(3.2))`,
        ],
        output: [
            "3",
            "4",
        ],
    },

    practice: [
        {
            text: `Import math. Print the square root of 81.`,
            hint: `After import math, use the dot pattern: math.sqrt(...) inside print(). The number inside sqrt should be 81.`,
            starterTip: `Try print(math.sqrt(81)). You should see 9.0 when you Run.`,
            starter: [
                "import math",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if math.sqrt(81) prints 9.0.`,
        },
        {
            text: `Import math. Print floor of 9.8 and ceil of 9.1.`,
            hint: `Use math.floor(9.8) on one print line and math.ceil(9.1) on the other. floor rounds down; ceil rounds up.`,
            starterTip: `First print: print(math.floor(9.8)) → 9. Second: print(math.ceil(9.1)) → 10.`,
            starter: [
                "import math",
                "print()",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if 9 and 10 print via floor/ceil.`,
        },
    ],

    quiz: [
        {
            question: `How do you call sqrt after import math?`,
            options: [
                { text: `sqrt.math(...)`, correct: false },
                { text: `math.sqrt(...)`, correct: true },
                { text: `math-sqrt(...)`, correct: false },
                { text: `import.sqrt`, correct: false },
            ],
            correct: `module.name is the pattern.`,
            wrong: `Dot after the module.`,
        },
        {
            question: `What does the dot mean?`,
            options: [
                { text: `Delete the module`, correct: false },
                { text: `Pick a name inside the module`, correct: true },
                { text: `End the program`, correct: false },
                { text: `Start a loop`, correct: false },
            ],
            correct: `Dot reaches into the toolbox.`,
            wrong: `module.tool`,
        },
        {
            question: `Is math.pi a function call?`,
            options: [
                { text: `Yes, it needs () always`, correct: false },
                { text: `No. It is a value you can print`, correct: true },
                { text: `Yes, it rolls dice`, correct: false },
                { text: `It is an error`, correct: false },
            ],
            correct: `Some names are values; functions need ().`,
            wrong: `pi has no parentheses.`,
        },
    ],

    project: {
        title: "Dot Practice",
        desc: "Import math. Print sqrt of 49, floor of 4.2, and pi rounded with round(math.pi, 2).",
        starter: [
            "import math",
            "print()",
            "print()",
            "print()"
        ].join("\n"),
    },

    prev: { unit: 11, lesson: 2, title: "import module" },
    next: { unit: 11, lesson: 4, title: "from import" },
};
