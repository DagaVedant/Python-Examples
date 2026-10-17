export default {
    format: "v2",
    unit: 12,
    lesson: 5,
    unitLessons: 10,
    unitTitle: "Classes",
    title: "Methods",
    readTime: 22,
    goal: "In this lesson you will learn how methods are functions inside a class that you call with a dot.",

    learn: [
        "Write a method with def inside the class",
        "Call methods with object.method()",
        "Methods can print or change data",
    ],

    idea: `A <strong>method</strong> is a function that lives inside a class. You call it with a dot: <code>dog.bark()</code>.

For now, include <code>self</code> as the first parameter (next lesson explains why). Methods let objects <em>do</em> things, not only store data.`,

    code: {
        filename: "bark.py",
        lines: [
            `class Dog:`,
            `    def bark(self):`,
            `        print(self.name, "says woof!")`,
            ``,
            `dog = Dog()`,
            `dog.name = "Buddy"`,
            `dog.bark()`,
        ],
        output: [
            "Buddy says woof!",
        ],
    },

    changeOneLine: `In the editor above, change the name to <code>"Luna"</code>. Press <strong>Run</strong>. Output should say Luna says woof!`,

    code2: {
        filename: "greet.py",
        lines: [
            `class Player:`,
            `    def greet(self):`,
            `        print("Hi, I am", self.name)`,
            ``,
            `p = Player()`,
            `p.name = "Sam"`,
            `p.greet()`,
        ],
        output: [
            "Hi, I am Sam",
        ],
    },

    practice: [
        {
            text: `Finish greet so it prints a hello using self.name. Call it once.`,
            hint: `Inside greet, use print with self.name — the Player's name is set on p before you call p.greet().`,
            starterTip: `In the blank under greet, try: print("Hello,", self.name) — then run; Ava's name should appear.`,
            starter: [
                "class Player:",
                "    def greet(self):",
                "        # Print hello using self.name",
                "        ",
                "p = Player()",
                "p.name = \"Ava\"",
                "p.greet()"
            ].join("\n"),
            gradingNote: `Pass if greet uses self.name and prints a hello for Ava.`,
        },
        {
            text: `Add a method spin that prints Weee! Call it on a Toy object.`,
            hint: `The spin method body needs one indented print line. t.spin() at the bottom calls it.`,
            starterTip: `Inside spin, add: print("Weee!") — indented under def spin(self):.`,
            starter: [
                "class Toy:",
                "    def spin(self):",
                "        ",
                "t = Toy()",
                "t.spin()"
            ].join("\n"),
            gradingNote: `Pass if spin method prints Weee! when called.`,
        },
    ],

    quiz: [
        {
            question: `What is a method?`,
            options: [
                { text: `A file mode`, correct: false },
                { text: `A function inside a class`, correct: true },
                { text: `A random seed`, correct: false },
                { text: `Only a comment`, correct: false },
            ],
            correct: `Methods are class functions.`,
            wrong: `def inside class.`,
        },
        {
            question: `How do you call bark on dog?`,
            options: [
                { text: `bark(dog) only always`, correct: false },
                { text: `dog.bark()`, correct: true },
                { text: `Dog.bark without object`, correct: false },
                { text: `open(bark)`, correct: false },
            ],
            correct: `object.method()`,
            wrong: `Dot + parentheses.`,
        },
        {
            question: `First parameter of a method is usually…`,
            options: [
                { text: `cls only forever`, correct: false },
                { text: `self`, correct: true },
                { text: `file`, correct: false },
                { text: `except`, correct: false },
            ],
            correct: `self means this object — next lesson!`,
            wrong: `def bark(self):`,
        },
    ],

    project: {
        title: "Action Pet",
        desc: "Make a Pet with methods speak and nap. Set a name. Call both methods.",
        starter: [
            "class Pet:",
            "    def speak(self):",
            "        print()",
            "    def nap(self):",
            "        print()",
            "p = Pet()",
            "p.name = \"Mochi\"",
            "p.speak()",
            "p.nap()"
        ].join("\n"),
    },

    prev: { unit: 12, lesson: 4, title: "Attributes" },
    next: { unit: 12, lesson: 6, title: "self" },
};
