export default {
    format: "v2",
    unit: 12,
    lesson: 3,
    unitLessons: 4,
    unitTitle: "Classes",
    title: "__init__",
    readTime: 30,

    goal: "In this lesson you will learn how __init__ sets up an object's attributes as soon as you create it.",

    learn: [
        "Write an __init__ method",
        "Pass values when creating an object",
        "Store those values with self",
    ],

    idea: `Setting attributes one by one after you create an object works, but it gets messy. <code>__init__</code> (say \"dunder init\") runs automatically when you make an object.

You pass values in the parentheses: <code>Dog("Buddy", 3)</code>. Inside <code>__init__</code>, you save them with <code>self.name = name</code> and <code>self.age = age</code>. Then the object is ready to use right away.`,

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
            `# Values go in when you create the object`,
            `dog1 = Dog("Buddy", 3)`,
            `dog2 = Dog("Luna", 1)`,
            ``,
            `dog1.info()`,
            `dog2.info()`,
        ],
        output: [
            "Buddy is 3",
            "Luna is 1",
        ],
    },

    changeOneLine: `In the editor above, change <code>Dog("Luna", 1)</code> to <code>Dog("Luna", 4)</code>. Press <strong>Run</strong>. The second line should say <code>Luna is 4</code>.`,

    code2: {
        filename: "player.py",
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
            text: `Finish <code>__init__</code> so it stores <code>name</code> and <code>color</code>. Create one Car and print both attributes.`,
            starter: [
                `class Car:`,
                `    def __init__(self, name, color):`,
                `        # Store name and color on self`,
                `        self.name = name`,
                `        `,
                ``,
                `car = Car("Zoom", "red")`,
                `print(car.name)`,
                `print(car.color)`,
            ].join("\n"),
            gradingNote: `Pass if __init__ sets self.name and self.color, and both print correctly for the Car object.`,
        },
        {
            text: `Finish <code>Book</code> with <code>__init__(self, title, pages)</code> and a <code>info</code> method that prints both. Create one book and call info.`,
            starter: [
                `class Book:`,
                `    def __init__(self, title, pages):`,
                `        self.title = title`,
                `        self.pages = pages`,
                ``,
                `    def info(self):`,
                `        # Print title and pages`,
                `        print()`,
                ``,
                `# Create a Book and call info`,
                ``,
                ``,
            ].join("\n"),
            gradingNote: `Pass if Book uses __init__ for title and pages, info prints them, and info is called on a Book object.`,
        },
    ],

    quiz: [
        {
            question: `When does __init__ run?`,
            options: [
                { text: "Automatically when you create an object", correct: true },
                { text: "Only if you call it by name yourself", correct: false },
                { text: "At the end of every print", correct: false },
                { text: "Never — it is only a comment", correct: false },
            ],
            correct: "__init__ runs as soon as you make an object with ClassName(...).",
            wrong: "Python calls __init__ for you when the object is created.",
        },
        {
            question: `What does <code>Dog("Buddy", 3)</code> pass into __init__?`,
            options: [
                { text: `"Buddy" as name and 3 as age (plus self)`, correct: true },
                { text: `Nothing — the parentheses must be empty`, correct: false },
                { text: `Only the number 3`, correct: false },
                { text: `A list of every Dog ever made`, correct: false },
            ],
            correct: "The values in the parentheses become the parameters after self.",
            wrong: "Those values fill the name and age parameters in __init__.",
        },
        {
            question: `Inside __init__, why write <code>self.name = name</code>?`,
            options: [
                { text: "To save the value on the object for later", correct: true },
                { text: "To delete the name", correct: false },
                { text: "To print the name twice", correct: false },
                { text: "To turn the object into a list", correct: false },
            ],
            correct: "self.name stores the value on that object so other methods can use it.",
            wrong: "You assign to self.name so the attribute sticks to the object.",
        },
    ],

    project: {
        title: "Player Card",
        desc: "Finish a Player class with __init__ for name, level, and points. Add a show method that prints a short player card. Make two players and show both.",
        starter: [
            `class Player:`,
            `    def __init__(self, name, level, points):`,
            `        self.name = name`,
            `        self.level = level`,
            `        self.points = points`,
            ``,
            `    def show(self):`,
            `        print("=== Player Card ===")`,
            `        print("Name:", self.name)`,
            `        # Print level and points`,
            `        print()`,
            `        print()`,
            ``,
            `p1 = Player("Ava", 3, 120)`,
            `# Make a second player`,
            ``,
            ``,
            `p1.show()`,
            `# Show the second player`,
            ``,
        ].join("\n"),
    },

    prev: { unit: 12, lesson: 2, title: "Methods" },
    next: { unit: 12, lesson: 4, title: "Designing with Classes" },
};
