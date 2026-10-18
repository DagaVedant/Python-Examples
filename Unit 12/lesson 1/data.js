export default {
    format: "v2",
    unit: 12,
    lesson: 1,
    unitLessons: 10,
    unitTitle: "Classes",
    title: "Why Classes",
    readTime: 20,
    goal: "In this lesson you will learn why classes help you model real things with their own data and actions.",

    learn: [
        "Classes model real-world things",
        "One blueprint can make many things",
        "Classes group data and actions",
    ],

    idea: `A <strong>class</strong> is a blueprint for a kind of thing. Pets, players, accounts. Why bother? So you can make many similar things without copy-pasting the same variables over and over.

Classes group <strong>data</strong> (what it knows) and later <strong>actions</strong> (what it can do).`,

    code: {
        filename: "why_classes.py",
        lines: [
            `print("A class is a blueprint")`,
            `print("Objects are things built from it")`,
            `print("Each object can have its own data")`,
        ],
        output: [
            "A class is a blueprint",
            "Objects are things built from it",
            "Each object can have its own data",
        ],
    },

    changeOneLine: `In the editor above, change the last line to mention <code>name</code> or <code>age</code>. Press <strong>Run</strong>.`,

    code2: {
        filename: "idea2.py",
        lines: [
            `print("One Dog class -> many dogs")`,
            `print("Buddy and Luna can differ")`,
        ],
        output: [
            "One Dog class -> many dogs",
            "Buddy and Luna can differ",
        ],
    },

    practice: [
        {
            text: `Print two sentences: what a class is, and why it helps.`,
            hint: `Use two print() lines. First line: a class is like a blueprint. Second line: why that helps (many similar things, less copy-paste).`,
            starterTip: `Try print("A class is a blueprint") then print("You can make many objects from one class").`,
            starter: [
                "print()",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if two non-empty prints about blueprint/objects/classes.`,
        },
        {
            text: `Print an example of one class name and two different object ideas.`,
            hint: `You already have Class: Pet. Fill the two blank prints with two different pet names or ideas. They should not be the same.`,
            starterTip: `For example: print("Object: Mochi the cat") and print("Object: Buddy the dog").`,
            starter: [
                "print(\"Class: Pet\")",
                "print()",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if two different pet/object ideas print.`,
        },
    ],

    quiz: [
        {
            question: `What is a class?`,
            options: [
                { text: `Only a file name`, correct: false },
                { text: `A blueprint for making objects`, correct: true },
                { text: `A kind of error`, correct: false },
                { text: `A random seed`, correct: false },
            ],
            correct: `Classes describe a kind of thing.`,
            wrong: `Blueprint metaphor.`,
        },
        {
            question: `Why use classes?`,
            options: [
                { text: `To ban functions`, correct: false },
                { text: `To model many similar things cleanly`, correct: true },
                { text: `To avoid print`, correct: false },
                { text: `To delete modules`, correct: false },
            ],
            correct: `One blueprint, many instances.`,
            wrong: `Less copy-paste.`,
        },
        {
            question: `Do all objects from a class share the exact same data?`,
            options: [
                { text: `Yes, always identical forever`, correct: false },
                { text: `No. Each can store its own values`, correct: true },
                { text: `They cannot store data`, correct: false },
                { text: `Only numbers`, correct: false },
            ],
            correct: `Each object has its own attributes later.`,
            wrong: `Buddy ≠ Luna.`,
        },
    ],

    project: {
        title: "Blueprint Pitch",
        desc: "Print a 3-line pitch for classes: blueprint, many objects, own data.",
        starter: [
            "print()",
            "print()",
            "print()"
        ].join("\n"),
    },

    prev: { unit: 11, lesson: 8, title: "Mini Toolkit" },
    next: { unit: 12, lesson: 2, title: "Your First Class" },
};
