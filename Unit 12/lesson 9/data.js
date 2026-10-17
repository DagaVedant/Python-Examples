export default {
    format: "v2",
    unit: 12,
    lesson: 9,
    unitLessons: 10,
    unitTitle: "Classes",
    title: "Objects Together",
    readTime: 25,
    goal: "In this lesson you will learn how multiple objects can work together in one program.",

    learn: [
        "Create several objects",
        "Store objects in a list",
        "Loop to call the same method on each",
    ],

    idea: `Programs get interesting when objects work <strong>together</strong>. Make several players, put them in a list, and loop:

<code>for p in team: p.card()</code>

Same class, many objects, one loop — powerful and tidy.`,

    code: {
        filename: "together.py",
        lines: [
            `class Player:`,
            `    def __init__(self, name, level):`,
            `        self.name = name`,
            `        self.level = level`,
            ``,
            `    def card(self):`,
            `        print(self.name, "- Level", self.level)`,
            ``,
            `team = [Player("Ava", 3), Player("Leo", 4), Player("Mia", 2)]`,
            `for p in team:`,
            `    p.card()`,
        ],
        output: [
            "Ava - Level 3",
            "Leo - Level 4",
            "Mia - Level 2",
        ],
    },

    changeOneLine: `In the editor above, change Mia's level to <code>5</code>. Press <strong>Run</strong>. Last card should show Level 5.`,

    code2: {
        filename: "pets_together.py",
        lines: [
            `class Pet:`,
            `    def __init__(self, name):`,
            `        self.name = name`,
            `    def hello(self):`,
            `        print(self.name, "waves")`,
            ``,
            `pets = [Pet("Mochi"), Pet("Buddy")]`,
            `for pet in pets:`,
            `    pet.hello()`,
        ],
        output: [
            "Mochi waves",
            "Buddy waves",
        ],
    },

    practice: [
        {
            text: `Make a list of two Dog objects and loop to print each name.`,
            hint: `Inside the for loop, d is each Dog. Print d.name so Rex and Zoey show up one line each.`,
            starterTip: `Replace print() in the loop with print(d.name).`,
            starter: [
                "class Dog:",
                "    def __init__(self, name):",
                "        self.name = name",
                "dogs = [Dog(\"Rex\"), Dog(\"Zoey\")]",
                "for d in dogs:",
                "    print()"
            ].join("\n"),
            gradingNote: `Pass if Rex and Zoey print via a loop over objects.`,
        },
        {
            text: `Create three Players in a list. Loop and call a greet method you define.`,
            hint: `Fill greet's print with self.name. team = should be a list of three Player(...) objects with different names.`,
            starterTip: `team = [Player("Ava"), Player("Leo"), Player("Mia")] and in greet: print("Hi,", self.name).`,
            starter: [
                "class Player:",
                "    def __init__(self, name):",
                "        self.name = name",
                "    def greet(self):",
                "        print()",
                "team = ",
                "for p in team:",
                "    p.greet()"
            ].join("\n"),
            gradingNote: `Pass if three greetings print from looped objects.`,
        },
    ],

    quiz: [
        {
            question: `How can objects work together neatly?`,
            options: [
                { text: `Only print once ever`, correct: false },
                { text: `Store them in a list and loop`, correct: true },
                { text: `Never use methods`, correct: false },
                { text: `Delete __init__`, correct: false },
            ],
            correct: `Lists of objects + loops scale well.`,
            wrong: `for p in team`,
        },
        {
            question: `Do objects in a list need the same class?`,
            options: [
                { text: `They must be integers`, correct: false },
                { text: `Often yes for shared methods`, correct: true },
                { text: `Lists cannot hold objects`, correct: false },
                { text: `Only if names match`, correct: false },
            ],
            correct: `Same class makes looping methods easy.`,
            wrong: `team of Players.`,
        },
        {
            question: `What does for p in team: p.card() do?`,
            options: [
                { text: `Creates files`, correct: false },
                { text: `Calls card on each player object`, correct: true },
                { text: `Imports math`, correct: false },
                { text: `Catches errors only`, correct: false },
            ],
            correct: `One call per object.`,
            wrong: `Team roll call.`,
        },
    ],

    project: {
        title: "Team Roll Call",
        desc: "Make a Player class with __init__ and shout. Put 4 players in a list. Loop shout for each.",
        starter: [
            "class Player:",
            "    def __init__(self, name):",
            "        self.name = name",
            "    def shout(self):",
            "        print(self.name, \"is here!\")",
            "team = ",
            "for p in team:",
            "    p.shout()"
        ].join("\n"),
    },

    prev: { unit: 12, lesson: 8, title: "More __init__" },
    next: { unit: 12, lesson: 10, title: "Designing with Classes" },
};
