export default {
    format: "v2",
    unit: 12,
    lesson: 6,
    unitLessons: 10,
    unitTitle: "Classes",
    title: "self",
    readTime: 22,
    goal: "In this lesson you will learn that self means this object inside a method.",

    learn: [
        "self is the object calling the method",
        "Use self.attr to read or change data",
        "You do not pass self yourself when calling",
    ],

    idea: `Inside a method, <code>self</code> means <strong>this object</strong> — the one before the dot.

When you write <code>dog.bark()</code>, Python sends <code>dog</code> into <code>self</code> automatically. Use <code>self.name</code> to reach that object's attributes. You do not type <code>self</code> in the call.`,

    code: {
        filename: "self_demo.py",
        lines: [
            `class Dog:`,
            `    def bark(self):`,
            `        print(self.name, "says woof!")`,
            ``,
            `    def birthday(self):`,
            `        self.age = self.age + 1`,
            `        print(self.name, "is now", self.age)`,
            ``,
            `dog = Dog()`,
            `dog.name = "Buddy"`,
            `dog.age = 3`,
            `dog.bark()`,
            `dog.birthday()`,
        ],
        output: [
            "Buddy says woof!",
            "Buddy is now 4",
        ],
    },

    changeOneLine: `In the editor above, change starting age to <code>5</code>. Press <strong>Run</strong>. Birthday line should say is now 6.`,

    code2: {
        filename: "piggy.py",
        lines: [
            `class PiggyBank:`,
            `    def show(self):`,
            `        print("Balance:", self.balance)`,
            ``,
            `    def deposit(self, amount):`,
            `        self.balance = self.balance + amount`,
            `        print("Added", amount)`,
            ``,
            `bank = PiggyBank()`,
            `bank.balance = 5`,
            `bank.show()`,
            `bank.deposit(3)`,
            `bank.show()`,
        ],
        output: [
            "Balance: 5",
            "Added 3",
            "Balance: 8",
        ],
    },

    practice: [
        {
            text: `In shout, print self.name in all caps message. Call it.`,
            starter: [
                "class Fan:",
                "    def shout(self):",
                "        print()",
                "f = Fan()",
                "f.name = \"Sam\"",
                "f.shout()"
            ].join("\n"),
            gradingNote: `Pass if shout uses self.name in the print.`,
        },
        {
            text: `Finish deposit so it adds amount to self.balance. Show before/after.`,
            starter: [
                "class Bank:",
                "    def deposit(self, amount):",
                "        ",
                "b = Bank()",
                "b.balance = 10",
                "b.deposit(5)",
                "print(b.balance)"
            ].join("\n"),
            gradingNote: `Pass if balance becomes 15 via self.balance update.`,
        },
    ],

    quiz: [
        {
            question: `What does self mean?`,
            options: [
                { text: `A random module`, correct: false },
                { text: `The object that called the method`, correct: true },
                { text: `Always None`, correct: false },
                { text: `The file name`, correct: false },
            ],
            correct: `self is this object.`,
            wrong: `dog.bark() -> self is dog.`,
        },
        {
            question: `Do you pass self when calling dog.bark()?`,
            options: [
                { text: `Yes, dog.bark(self)`, correct: false },
                { text: `No — Python fills self for you`, correct: true },
                { text: `Yes, twice`, correct: false },
                { text: `Yes, as a string`, correct: false },
            ],
            correct: `Calls omit self.`,
            wrong: `Just dog.bark().`,
        },
        {
            question: `How do you change an attribute inside a method?`,
            options: [
                { text: `Only with global`, correct: false },
                { text: `Assign to self.attr`, correct: true },
                { text: `Delete self`, correct: false },
                { text: `open(self)`, correct: false },
            ],
            correct: `self.age = self.age + 1`,
            wrong: `Use self.`,
        },
    ],

    project: {
        title: "Self Care Bank",
        desc: "PiggyBank with show and deposit using self. Start at 0, deposit 4, deposit 6, show.",
        starter: [
            "class PiggyBank:",
            "    def show(self):",
            "        print()",
            "    def deposit(self, amount):",
            "        ",
            "bank = PiggyBank()",
            "bank.balance = 0",
            "bank.deposit(4)",
            "bank.deposit(6)",
            "bank.show()"
        ].join("\n"),
    },

    prev: { unit: 12, lesson: 5, title: "Methods" },
    next: { unit: 12, lesson: 7, title: "__init__" },
};
