export default {
    format: "v2",
    unit: 11,
    lesson: 1,
    unitLessons: 8,
    unitTitle: "Imports",
    title: "Why Import",
    readTime: 20,
    goal: "In this lesson you will learn why Python lets you import ready-made toolboxes called modules.",

    learn: [
        "Modules are toolboxes of useful code",
        "Import unlocks tools you did not write",
        "You still write the rest of the program",
    ],

    idea: `Python comes with ready-made toolboxes called <strong>modules</strong>. Instead of inventing square roots or dice from scratch, you <strong>import</strong> a module and use its tools.

Imports keep programs shorter and let you stand on tools other people (and Python itself) already built.`,

    code: {
        filename: "why.py",
        lines: [
            `print("Modules = toolboxes")`,
            `print("import unlocks them")`,
            `print("Then you call the tools you need")`,
        ],
        output: [
            "Modules = toolboxes",
            "import unlocks them",
            "Then you call the tools you need",
        ],
    },

    changeOneLine: `In the editor above, change the last line to mention <code>math</code> or <code>random</code>. Press <strong>Run</strong>.`,

    code2: {
        filename: "ideas.py",
        lines: [
            `print("math helps with numbers")`,
            `print("random helps with chance")`,
        ],
        output: [
            "math helps with numbers",
            "random helps with chance",
        ],
    },

    practice: [
        {
            text: `Print two reasons imports are useful.`,
            hint: `You need two print() lines. Each one should say something helpful about imports. Like saving time or using ready-made tools.`,
            starterTip: `Try print("Imports give you tools you did not write") and print("They keep programs shorter").`,
            starter: [
                "print()",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if two non-empty prints about modules/tools/imports.`,
        },
        {
            text: `Print the names of two modules you will learn: math and random.`,
            hint: `Two print() calls. One should show math, the other should show random. Put each name inside quotes.`,
            starterTip: `For example: print("math") on the first line and print("random") on the second.`,
            starter: [
                "print()",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if math and random both appear in output.`,
        },
    ],

    quiz: [
        {
            question: `What is a module?`,
            options: [
                { text: `A type of error only`, correct: false },
                { text: `A toolbox of useful ready-made code`, correct: true },
                { text: `A kind of loop`, correct: false },
                { text: `A pet class`, correct: false },
            ],
            correct: `Modules bundle tools you can import.`,
            wrong: `Think toolbox.`,
        },
        {
            question: `Why import?`,
            options: [
                { text: `To delete print`, correct: false },
                { text: `To use tools without rewriting them`, correct: true },
                { text: `To cause NameError on purpose`, correct: false },
                { text: `To close the IDE`, correct: false },
            ],
            correct: `Reuse beats reinventing.`,
            wrong: `Imports unlock tools.`,
        },
        {
            question: `After you import, who writes the rest of the program?`,
            options: [
                { text: `Nobody`, correct: false },
                { text: `You do`, correct: true },
                { text: `Only the module`, correct: false },
                { text: `The error message`, correct: false },
            ],
            correct: `Modules help; you still design the program.`,
            wrong: `You call the tools.`,
        },
    ],

    project: {
        title: "Import Pitch",
        desc: "Print a 3-line pitch: what a module is, why import helps, and one module you are excited to try.",
        starter: [
            "print()",
            "print()",
            "print()"
        ].join("\n"),
    },

    prev: { unit: 10, lesson: 8, title: "Error Practice" },
    next: { unit: 11, lesson: 2, title: "import module" },
};
