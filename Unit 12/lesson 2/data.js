export default {
    format: "v2",
    unit: 12,
    lesson: 2,
    unitLessons: 4,
    unitTitle: "Classes",
    title: "Methods",
    readTime: 30,

    goal: "In this lesson you will learn how methods are functions inside a class that use self to work with an object's own data.",

    learn: [
        "Write a method inside a class",
        "Use self to reach attributes",
        "Call methods with a dot",
    ],

    idea: `A <strong>method</strong> is a function that lives inside a class. The first parameter is always <code>self</code> — that means \"this object.\"

Inside the method you use <code>self.name</code> or <code>self.balance</code> to read or change that object's attributes. You call a method with a dot: <code>dog.bark()</code> or <code>account.deposit(10)</code>.`,

    code: {
        filename: "bark.py",
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
            ``,
            `dog.bark()`,
            `dog.birthday()`,
            `dog.bark()`,
        ],
        output: [
            "Buddy says woof!",
            "Buddy is now 4",
            "Buddy says woof!",
        ],
    },

    changeOneLine: `In the editor above, change <code>dog.name = "Buddy"</code> to <code>dog.name = "Luna"</code>. Press <strong>Run</strong>. Every line should say Luna instead of Buddy.`,

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
            text: `Finish <code>greet</code> so it prints a hello that uses <code>self.name</code>. Call it once.`,
            starter: [
                `class Player:`,
                `    def greet(self):`,
                `        # Print a hello using self.name`,
                `        print()`,
                ``,
                `p = Player()`,
                `p.name = "Ava"`,
                `# Call greet`,
                ``,
            ].join("\n"),
            gradingNote: `Pass if greet uses self.name and is called so a greeting with the player's name is printed.`,
        },
        {
            text: `Finish <code>add_one</code> so it adds 1 to <code>self.score</code> and prints the new score. Call it once.`,
            starter: [
                `class Game:`,
                `    def add_one(self):`,
                `        # Add 1 to self.score`,
                `        self.score = self.score + 1`,
                `        print("Score:", self.score)`,
                ``,
                `g = Game()`,
                `g.score = 10`,
                `# Call add_one`,
                ``,
            ].join("\n"),
            gradingNote: `Pass if add_one increases self.score by 1, prints the score, and is called at least once.`,
        },
    ],

    quiz: [
        {
            question: `What is the first parameter of a method usually called?`,
            options: [
                { text: "self", correct: true },
                { text: "this_class", correct: false },
                { text: "object", correct: false },
                { text: "main", correct: false },
            ],
            correct: "self means \"this object\" — the one the method was called on.",
            wrong: "In Python, methods almost always start with self.",
        },
        {
            question: `If dog is a Dog object, how do you call its bark method?`,
            options: [
                { text: `dog.bark()`, correct: true },
                { text: `bark(dog)`, correct: false },
                { text: `Dog.bark`, correct: false },
                { text: `call bark on dog`, correct: false },
            ],
            correct: "Use a dot and parentheses: object.method().",
            wrong: "Call it with a dot: dog.bark().",
        },
        {
            question: `Inside a method, how do you change the object's balance?`,
            options: [
                { text: `self.balance = self.balance + 5`, correct: true },
                { text: `balance = balance + 5`, correct: false },
                { text: `Dog.balance = 5`, correct: false },
                { text: `print(balance)`, correct: false },
            ],
            correct: "Use self.attribute to read or change that object's data.",
            wrong: "You need self.balance so Python knows which object's value to change.",
        },
    ],

    project: {
        title: "Bank Account",
        desc: "Finish a BankAccount class with show and deposit methods. Start with a balance, deposit some money, and print the balance after each step.",
        starter: [
            `class BankAccount:`,
            `    def show(self):`,
            `        print("Balance:", self.balance)`,
            ``,
            `    def deposit(self, amount):`,
            `        # Add amount to self.balance`,
            `        self.balance = self.balance + amount`,
            `        print("Deposited", amount)`,
            ``,
            `account = BankAccount()`,
            `account.balance = 20`,
            `account.show()`,
            `# Deposit 15, then show again`,
            ``,
            ``,
        ].join("\n"),
    },

    prev: { unit: 12, lesson: 1, title: "Classes & Objects" },
    next: { unit: 12, lesson: 3, title: "__init__" },
};
