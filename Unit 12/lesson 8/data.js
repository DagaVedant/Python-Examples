export default {
    format: "v2",
    unit: 12,
    lesson: 8,
    unitLessons: 10,
    unitTitle: "Classes",
    title: "More __init__",
    readTime: 22,
    goal: "In this lesson you will practice richer __init__ setups with more attributes and defaults you set yourself.",

    learn: [
        "Store several attributes in __init__",
        "Set starting values like lives or balance",
        "Create ready-to-use objects in one line",
    ],

    idea: `<code>__init__</code> can set many fields at once: name, level, lives, score…

You can also give starting values that callers do not pass — like <code>self.lives = 3</code> always. One construction line, fully ready object.`,

    code: {
        filename: "rich_init.py",
        lines: [
            `class Player:`,
            `    def __init__(self, name, level):`,
            `        self.name = name`,
            `        self.level = level`,
            `        self.lives = 3`,
            `        self.score = 0`,
            ``,
            `    def status(self):`,
            `        print(self.name, "Lv", self.level, "Lives", self.lives, "Score", self.score)`,
            ``,
            `p = Player("Sam", 2)`,
            `p.status()`,
            `p.score = 10`,
            `p.status()`,
        ],
        output: [
            "Sam Lv 2 Lives 3 Score 0",
            "Sam Lv 2 Lives 3 Score 10",
        ],
    },

    changeOneLine: `In the editor above, change starting lives to <code>5</code>. Press <strong>Run</strong>. Status should show Lives 5.`,

    code2: {
        filename: "account.py",
        lines: [
            `class Account:`,
            `    def __init__(self, owner, balance):`,
            `        self.owner = owner`,
            `        self.balance = balance`,
            ``,
            `a = Account("Ava", 20)`,
            `print(a.owner, "has", a.balance)`,
        ],
        output: [
            "Ava has 20",
        ],
    },

    practice: [
        {
            text: `Monster __init__(name, hp). Also set self.power = 5. Create one and print all three.`,
            hint: `Store name and hp from the parameters on self, then set self.power = 5 even though callers do not pass power.`,
            starterTip: `self.name = name, self.hp = hp, and self.power = 5 — the three prints at the bottom should work.`,
            starter: [
                "class Monster:",
                "    def __init__(self, name, hp):",
                "        ",
                "m = Monster(\"Slime\", 8)",
                "print(m.name)",
                "print(m.hp)",
                "print(m.power)"
            ].join("\n"),
            gradingNote: `Pass if power defaults to 5 and name/hp stored.`,
        },
        {
            text: `Account(owner, balance) with __init__. Create and print a sentence with both fields.`,
            hint: `In __init__, set self.owner and self.balance from the parameters. print() should use a.owner and a.balance.`,
            starterTip: `self.owner = owner and self.balance = balance, then print(a.owner, "has", a.balance).`,
            starter: [
                "class Account:",
                "    def __init__(self, owner, balance):",
                "        ",
                "a = Account(\"Leo\", 15)",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if sentence uses owner and balance attributes.`,
        },
    ],

    quiz: [
        {
            question: `Can __init__ set attributes not passed as parameters?`,
            options: [
                { text: `No, never`, correct: false },
                { text: `Yes — assign defaults on self`, correct: true },
                { text: `Only with files`, correct: false },
                { text: `Only with random`, correct: false },
            ],
            correct: `self.lives = 3 is fine.`,
            wrong: `Defaults inside init.`,
        },
        {
            question: `After p = Player('Sam', 2), is p.score ready if init set it?`,
            options: [
                { text: `No, must wait a day`, correct: false },
                { text: `Yes`, correct: true },
                { text: `Only if you import score`, correct: false },
                { text: `Score is a class`, correct: false },
            ],
            correct: `Init runs during construction.`,
            wrong: `Ready immediately.`,
        },
        {
            question: `Why put setup in __init__?`,
            options: [
                { text: `To slow Python`, correct: false },
                { text: `Every new object starts complete`, correct: true },
                { text: `To ban methods`, correct: false },
                { text: `To avoid self`, correct: false },
            ],
            correct: `Consistent starting state.`,
            wrong: `One line create.`,
        },
    ],

    project: {
        title: "Hero Sheet",
        desc: "Hero __init__(name, strength) also sets self.hp = 10 and self.gold = 0. Print a 3-line sheet for one hero.",
        starter: [
            "class Hero:",
            "    def __init__(self, name, strength):",
            "        ",
            "h = Hero(\"Kai\", 4)",
            "print()",
            "print()",
            "print()"
        ].join("\n"),
    },

    prev: { unit: 12, lesson: 7, title: "__init__" },
    next: { unit: 12, lesson: 9, title: "Objects Together" },
};
