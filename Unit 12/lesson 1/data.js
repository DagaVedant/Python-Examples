export default {
    format: "v2",
    unit: 12,
    lesson: 1,
    unitLessons: 4,
    unitTitle: "Classes",
    title: "Classes & Objects",
    readTime: 30,

    goal: "In this lesson you will learn how a class is a blueprint for making objects that each store their own data.",

    learn: [
        "Define a simple class with class",
        "Make an object from a class",
        "Set and print object attributes",
    ],

    idea: `A <strong>class</strong> is a blueprint. An <strong>object</strong> is one real thing made from that blueprint.

You write the blueprint with <code>class</code>. Then you make an object by calling the class name with <code>()</code>. Each object can store its own values, called <strong>attributes</strong> — like a pet's name or age. You set them with a dot: <code>pet.name = "Buddy"</code>.`,

    code: {
        filename: "dog.py",
        lines: [
            `# A class is a blueprint`,
            `class Dog:`,
            `    pass`,
            ``,
            `# Make two Dog objects`,
            `dog1 = Dog()`,
            `dog2 = Dog()`,
            ``,
            `# Give each object its own attributes`,
            `dog1.name = "Buddy"`,
            `dog1.age = 3`,
            ``,
            `dog2.name = "Luna"`,
            `dog2.age = 1`,
            ``,
            `print(dog1.name, "is", dog1.age)`,
            `print(dog2.name, "is", dog2.age)`,
        ],
        output: [
            "Buddy is 3",
            "Luna is 1",
        ],
    },

    changeOneLine: `In the editor above, change <code>dog1.age = 3</code> to <code>dog1.age = 5</code>. Press <strong>Run</strong>. The first line should say <code>Buddy is 5</code>.`,

    code2: {
        filename: "robot.py",
        lines: [
            `class Robot:`,
            `    pass`,
            ``,
            `bot = Robot()`,
            `bot.name = "Beep"`,
            `bot.color = "blue"`,
            ``,
            `print(bot.name)`,
            `print("Color:", bot.color)`,
        ],
        output: [
            "Beep",
            "Color: blue",
        ],
    },

    practice: [
        {
            text: `Make a <code>Cat</code> object. Set its <code>name</code> and <code>age</code>, then print both.`,
            starter: [
                `class Cat:`,
                `    pass`,
                ``,
                `cat = Cat()`,
                `# Set name and age`,
                ``,
                ``,
                `# Print name and age`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if a Cat object is created, name and age attributes are set, and both are printed.`,
        },
        {
            text: `Make two <code>Book</code> objects with different titles. Print each title.`,
            starter: [
                `class Book:`,
                `    pass`,
                ``,
                `book1 = Book()`,
                `book2 = Book()`,
                `# Set each title`,
                ``,
                ``,
                `print(book1.title)`,
                `print(book2.title)`,
            ].join("\n"),
            gradingNote: `Pass if two Book objects each have a title attribute set to different values and both titles are printed.`,
        },
    ],

    quiz: [
        {
            question: `What is a class?`,
            options: [
                { text: "A blueprint for making objects", correct: true },
                { text: "A single number stored in a list", correct: false },
                { text: "A file on your computer", correct: false },
                { text: "A print statement", correct: false },
            ],
            correct: "A class is the blueprint. Objects are the real things you make from it.",
            wrong: "Think of a class as a cookie cutter and objects as the cookies.",
        },
        {
            question: `How do you make an object from a class named Dog?`,
            options: [
                { text: `dog = Dog()`, correct: true },
                { text: `dog = class Dog`, correct: false },
                { text: `dog = new Dog`, correct: false },
                { text: `Dog = dog()`, correct: false },
            ],
            correct: "Call the class name with parentheses to make an object.",
            wrong: "Use the class name followed by (): dog = Dog().",
        },
        {
            question: `If <code>pet.name = "Buddy"</code>, what is <code>name</code>?`,
            options: [
                { text: "An attribute on the pet object", correct: true },
                { text: "A brand-new class", correct: false },
                { text: "A loop", correct: false },
                { text: "A module", correct: false },
            ],
            correct: "Attributes are values stored on an object, set with a dot.",
            wrong: "name is an attribute — a value stored on that object.",
        },
    ],

    project: {
        title: "Pet Class",
        desc: "Finish a tiny Pet class. Make two pets, give each a name and a kind (like dog or cat), then print a short line for each pet.",
        starter: [
            `class Pet:`,
            `    pass`,
            ``,
            `pet1 = Pet()`,
            `pet2 = Pet()`,
            ``,
            `# Set name and kind for each pet`,
            `pet1.name = "Buddy"`,
            `pet1.kind = "dog"`,
            ``,
            `# Finish pet2`,
            ``,
            ``,
            ``,
            `print(pet1.name, "is a", pet1.kind)`,
            `print(pet2.name, "is a", pet2.kind)`,
        ].join("\n"),
    },

    prev: { unit: 11, lesson: 3, title: "Useful Standard Modules" },
    next: { unit: 12, lesson: 2, title: "Methods" },
};
