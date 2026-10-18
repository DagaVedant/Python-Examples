export default {
    format: "v2",
    unit: 12,
    lesson: 10,
    unitLessons: 10,
    unitTitle: "Classes",
    title: "Designing with Classes",
    readTime: 25,
    goal: "In this lesson you will design a small program with a class that has data, __init__, and methods working together.",

    learn: [
        "Choose attributes your thing needs",
        "Set them in __init__",
        "Add methods for actions",
        "Use objects in a tiny scene",
    ],

    idea: `Design tip: pick a real thing (shop item, pet, hero). List what it <strong>knows</strong> (attributes) and what it <strong>does</strong> (methods). Put setup in <code>__init__</code>.

Then create objects and call methods to tell a tiny story. That is designing with classes!`,

    code: {
        filename: "shop.py",
        lines: [
            `class Item:`,
            `    def __init__(self, name, price, stock):`,
            `        self.name = name`,
            `        self.price = price`,
            `        self.stock = stock`,
            ``,
            `    def label(self):`,
            `        print(self.name, "- $"+str(self.price), "x"+str(self.stock))`,
            ``,
            `    def sell(self, n):`,
            `        if n <= self.stock:`,
            `            self.stock = self.stock - n`,
            `            print("Sold", n, self.name)`,
            `        else:`,
            `            print("Not enough stock")`,
            ``,
            `apple = Item("Apple", 1, 4)`,
            `apple.label()`,
            `apple.sell(2)`,
            `apple.label()`,
        ],
        output: [
            "Apple - $1 x4",
            "Sold 2 Apple",
            "Apple - $1 x2",
        ],
    },

    changeOneLine: `In the editor above, change starting stock to <code>6</code>. Press <strong>Run</strong>. First label should show x6.`,

    code2: {
        filename: "pet_design.py",
        lines: [
            `class Pet:`,
            `    def __init__(self, name, energy):`,
            `        self.name = name`,
            `        self.energy = energy`,
            `    def play(self):`,
            `        self.energy = self.energy - 1`,
            `        print(self.name, "played! Energy", self.energy)`,
            ``,
            `p = Pet("Mochi", 3)`,
            `p.play()`,
            `p.play()`,
        ],
        output: [
            "Mochi played! Energy 2",
            "Mochi played! Energy 1",
        ],
    },

    practice: [
        {
            text: `Design Book with title, pages in __init__, and a blurb method. Create one and call blurb.`,
            hint: `__init__ should save title and pages on self. blurb prints something that uses self.title and/or self.pages.`,
            starterTip: `self.title = title, self.pages = pages, and blurb: print(self.title, "has", self.pages, "pages").`,
            starter: [
                "class Book:",
                "    def __init__(self, title, pages):",
                "        ",
                "    def blurb(self):",
                "        print()",
                "b = Book(\"Wonder\", 310)",
                "b.blurb()"
            ].join("\n"),
            gradingNote: `Pass if blurb uses attributes from __init__.`,
        },
        {
            text: `Design Battery with percent in __init__ and use(n) that lowers percent. Demo one use.`,
            hint: `In use, subtract n from self.percent. After b.use(20) on a Battery at 100, b.percent should be 80.`,
            starterTip: `self.percent = self.percent - n inside use. The final print(b.percent) checks your work.`,
            starter: [
                "class Battery:",
                "    def __init__(self, percent):",
                "        self.percent = percent",
                "    def use(self, n):",
                "        ",
                "b = Battery(100)",
                "b.use(20)",
                "print(b.percent)"
            ].join("\n"),
            gradingNote: `Pass if percent becomes 80 after use(20).`,
        },
    ],

    quiz: [
        {
            question: `When designing a class, what do you list first?`,
            options: [
                { text: `Only error names`, correct: false },
                { text: `What it knows and what it does`, correct: true },
                { text: `Only file modes`, correct: false },
                { text: `Only seed values`, correct: false },
            ],
            correct: `Attributes + methods = design.`,
            wrong: `Data and actions.`,
        },
        {
            question: `Where should starting data be set?`,
            options: [
                { text: `Only in except`, correct: false },
                { text: `Usually in __init__`, correct: true },
                { text: `Only after the program ends`, correct: false },
                { text: `Never`, correct: false },
            ],
            correct: `Init builds a ready object.`,
            wrong: `Constructor setup.`,
        },
        {
            question: `What makes a tiny class scene?`,
            options: [
                { text: `Avoid objects`, correct: false },
                { text: `Create objects and call their methods`, correct: true },
                { text: `Print only the class keyword`, correct: false },
                { text: `Import is enough alone`, correct: false },
            ],
            correct: `Objects acting tells the story.`,
            wrong: `Design then demo.`,
        },
    ],

    project: {
        title: "Tiny Shop",
        desc: "Item class with name, price, stock; methods label and sell. Make two items, label both, sell from one, label again.",
        starter: [
            "class Item:",
            "    def __init__(self, name, price, stock):",
            "        ",
            "    def label(self):",
            "        print()",
            "    def sell(self, n):",
            "        ",
            "# make two items, demo labels and a sell",
            ""
        ].join("\n"),
    },

    prev: { unit: 12, lesson: 9, title: "Objects Together" },
    next: null,
};
