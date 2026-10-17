export default {
    format: "v2",
    unit: 12,
    lesson: 7,
    unitLessons: 10,
    unitTitle: "Classes",
    title: "__init__",
    readTime: 22,
    goal: "In this lesson you will learn how __init__ sets up an object's attributes as soon as you create it.",

    learn: [
        "Write def __init__(self, ...)",
        "Pass values when creating an object",
        "Store them with self",
    ],

    idea: `Setting attributes one by one after creation works, but gets messy. <code>__init__</code> (say “dunder init”) runs automatically when you make an object.

<code>Dog("Buddy", 3)</code> passes values into <code>__init__</code>. Save them with <code>self.name = name</code>.`,

    code: {
        filename: "init_dog.py",
        lines: [
            `class Dog:`,
            `    def __init__(self, name, age):`,
            `        self.name = name`,
            `        self.age = age`,
            ``,
            `    def info(self):`,
            `        print(self.name, "is", self.age)`,
            ``,
            `dog1 = Dog("Buddy", 3)`,
            `dog2 = Dog("Luna", 1)`,
            `dog1.info()`,
            `dog2.info()`,
        ],
        output: [
            "Buddy is 3",
            "Luna is 1",
        ],
    },

    changeOneLine: `In the editor above, change <code>Dog("Luna", 1)</code> to <code>Dog("Luna", 4)</code>. Press <strong>Run</strong>. Second line should say Luna is 4.`,

    code2: {
        filename: "player_init.py",
        lines: [
            `class Player:`,
            `    def __init__(self, name, level):`,
            `        self.name = name`,
            `        self.level = level`,
            ``,
            `    def card(self):`,
            `        print(self.name, "- Level", self.level)`,
            ``,
            `p = Player("Sam", 5)`,
            `p.card()`,
        ],
        output: [
            "Sam - Level 5",
        ],
    },

    practice: [
        {
            text: `Finish __init__ to store name and color. Create one Car and print both attributes.`,
            starter: [
                "class Car:",
                "    def __init__(self, name, color):",
                "        self.name = name",
                "        ",
                "car = Car(\"Zoom\", \"red\")",
                "print(car.name)",
                "print(car.color)"
            ].join("\n"),
            gradingNote: `Pass if color stored on self and both prints show Zoom and red.`,
        },
        {
            text: `Make Book(title, pages) with __init__. Create one and print title.`,
            starter: [
                "class Book:",
                "    def __init__(self, title, pages):",
                "        ",
                "b = Book(\"Wonder\", 310)",
                "print(b.title)"
            ].join("\n"),
            gradingNote: `Pass if __init__ stores title/pages and Wonder prints.`,
        },
    ],

    quiz: [
        {
            question: `When does __init__ run?`,
            options: [
                { text: `Only if you call it by hand always`, correct: false },
                { text: `Automatically when you create an object`, correct: true },
                { text: `Never`, correct: false },
                { text: `Only on errors`, correct: false },
            ],
            correct: `Dog(...) triggers __init__.`,
            wrong: `Constructor idea.`,
        },
        {
            question: `In Dog("Buddy", 3), where do Buddy and 3 go?`,
            options: [
                { text: `Into a file`, correct: false },
                { text: `Into __init__ parameters after self`, correct: true },
                { text: `Into random`, correct: false },
                { text: `Nowhere`, correct: false },
            ],
            correct: `They become name and age parameters.`,
            wrong: `Then stored on self.`,
        },
        {
            question: `Why use __init__?`,
            options: [
                { text: `To avoid classes`, correct: false },
                { text: `Set up attributes right away`, correct: true },
                { text: `To import math`, correct: false },
                { text: `To erase methods`, correct: false },
            ],
            correct: `Objects start ready to use.`,
            wrong: `Less manual setup.`,
        },
    ],

    project: {
        title: "Player Card",
        desc: "Player with __init__(name, level) and a card method. Make two players and print both cards.",
        starter: [
            "class Player:",
            "    def __init__(self, name, level):",
            "        ",
            "    def card(self):",
            "        print()",
            "a = Player(\"Ava\", 3)",
            "b = Player(\"Leo\", 5)",
            "a.card()",
            "b.card()"
        ].join("\n"),
    },

    prev: { unit: 12, lesson: 6, title: "self" },
    next: { unit: 12, lesson: 8, title: "More __init__" },
};
