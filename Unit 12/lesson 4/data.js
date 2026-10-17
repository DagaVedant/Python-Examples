export default {
    format: "v2",
    unit: 12,
    lesson: 4,
    unitLessons: 10,
    unitTitle: "Classes",
    title: "Attributes",
    readTime: 22,
    goal: "In this lesson you will learn how attributes store data on each object with a dot.",

    learn: [
        "Set attributes with object.name = value",
        "Read attributes with object.name",
        "Each object keeps its own values",
    ],

    idea: `An <strong>attribute</strong> is a piece of data stuck on an object. Set it with a dot: <code>dog.name = "Buddy"</code>. Read it the same way: <code>print(dog.name)</code>.

Each object can have different attribute values even if they share a class.`,

    code: {
        filename: "attrs.py",
        lines: [
            `class Dog:`,
            `    pass`,
            ``,
            `dog1 = Dog()`,
            `dog2 = Dog()`,
            `dog1.name = "Buddy"`,
            `dog1.age = 3`,
            `dog2.name = "Luna"`,
            `dog2.age = 1`,
            `print(dog1.name, "is", dog1.age)`,
            `print(dog2.name, "is", dog2.age)`,
        ],
        output: [
            "Buddy is 3",
            "Luna is 1",
        ],
    },

    changeOneLine: `In the editor above, change <code>dog1.age = 3</code> to <code>dog1.age = 5</code>. Press <strong>Run</strong>. First line should say Buddy is 5.`,

    code2: {
        filename: "player_attrs.py",
        lines: [
            `class Player:`,
            `    pass`,
            `p = Player()`,
            `p.name = "Sam"`,
            `p.level = 5`,
            `print(p.name, "- Level", p.level)`,
        ],
        output: [
            "Sam - Level 5",
        ],
    },

    practice: [
        {
            text: `Make a Pet, set name and kind, print both.`,
            starter: [
                "class Pet:",
                "    pass",
                "pet = Pet()",
                "pet.name = \"Mochi\"",
                "pet.kind = ",
                "print()",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if name and kind attributes print.`,
        },
        {
            text: `Make two Players with different levels. Print both levels.`,
            starter: [
                "class Player:",
                "    pass",
                "a = Player()",
                "b = Player()",
                "a.level = 2",
                "b.level = 7",
                "print()",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if 2 and 7 print from attributes.`,
        },
    ],

    quiz: [
        {
            question: `How do you set an attribute?`,
            options: [
                { text: `dog[name] = Buddy only`, correct: false },
                { text: `dog.name = "Buddy"`, correct: true },
                { text: `attr(dog)`, correct: false },
                { text: `import name`, correct: false },
            ],
            correct: `Use a dot and assign.`,
            wrong: `object.attr = value`,
        },
        {
            question: `Do dog1.age and dog2.age have to match?`,
            options: [
                { text: `Yes, forced equal`, correct: false },
                { text: `No — each object has its own`, correct: true },
                { text: `Ages cannot exist`, correct: false },
                { text: `Only if names match`, correct: false },
            ],
            correct: `Attributes are per object.`,
            wrong: `Independent data.`,
        },
        {
            question: `How do you read an attribute?`,
            options: [
                { text: `Only with open()`, correct: false },
                { text: `print(dog.name) or use dog.name`, correct: true },
                { text: `Only with except`, correct: false },
                { text: `Attributes are write-only`, correct: false },
            ],
            correct: `Same dot syntax to read.`,
            wrong: `dog.name`,
        },
    ],

    project: {
        title: "Pet Stickers",
        desc: "Create two pets. Give each a name and age. Print a one-line bio for each.",
        starter: [
            "class Pet:",
            "    pass",
            "a = Pet()",
            "b = Pet()",
            "# set attributes",
            "",
            "",
            "print()",
            "print()"
        ].join("\n"),
    },

    prev: { unit: 12, lesson: 3, title: "Objects" },
    next: { unit: 12, lesson: 5, title: "Methods" },
};
