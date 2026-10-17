export default {
    format: "v2",
    unit: 5,
    lesson: 2,
    unitLessons: 8,
    unitTitle: "Functions",
    title: "Defining and Calling",
    readTime: 22,

    goal: "In this lesson you will learn how to define a function with def and run it by calling its name with parentheses.",

    learn: [
        "Define a function with def",
        "Call a function by name with ()",
        "Remember: defining does not run the body yet",
    ],

    idea: `A <strong>function</strong> is a named block of code. You write it once with <code>def</code>, then run it by calling its name followed by <code>()</code>.

Defining a function does <em>not</em> run it. The code inside only runs when you call the function. Everything inside the function must be indented under the <code>def</code> line.`,

    code: {
        filename: "greet.py",
        lines: [
            `# Define a function`,
            `def greet():`,
            `    print("Hello!")`,
            `    print("Welcome to Python.")`,
            ``,
            `# Call it as many times as you want`,
            `greet()`,
            `greet()`,
            ``,
            `def print_stars():`,
            `    print("*****")`,
            ``,
            `print_stars()`,
            `print("Game over")`,
            `print_stars()`,
        ],
        output: [
            "Hello!",
            "Welcome to Python.",
            "Hello!",
            "Welcome to Python.",
            "*****",
            "Game over",
            "*****",
        ],
    },

    changeOneLine: `In the editor above, change the text inside <code>print_stars</code> from <code>"*****"</code> to <code>"#####"</code>. Press <strong>Run</strong>. Both star lines should now show five hash marks.`,

    code2: {
        filename: "cheer.py",
        lines: [
            `def cheer():`,
            `    print("Go team!")`,
            `    print("You can do it!")`,
            ``,
            `cheer()`,
            `cheer()`,
        ],
        output: [
            "Go team!",
            "You can do it!",
            "Go team!",
            "You can do it!",
        ],
    },

    practice: [
        {
            text: `Finish say_hi() so it prints a short hello. Then call it twice.`,
            starter: [
                `def say_hi():`,
                `    print()`,
                ``,
                `# Call say_hi twice`,
                ``,
                ``,
            ].join("\n"),
            gradingNote: `Pass if say_hi is defined with def, prints something inside, and is called at least twice.`,
        },
        {
            text: `Write print_banner() that prints a row of asterisks, a name, then asterisks again. Call it once.`,
            starter: [
                `def print_banner():`,
                `    print("***")`,
                `    print()`,
                `    print("***")`,
                ``,
                `# Call print_banner`,
                ``,
            ].join("\n"),
            gradingNote: `Pass if print_banner is defined, prints stars above and below a name, and is called at least once.`,
        },
    ],

    quiz: [
        {
            question: `When does the code inside a function actually run?`,
            options: [
                { text: "As soon as the def line is read", correct: false },
                { text: "Only when the function is called by name", correct: true },
                { text: "At the very end of the program automatically", correct: false },
                { text: "Every time Python reads through the file", correct: false },
            ],
            correct: "Defining a function just saves it. The body runs only when you call it.",
            wrong: "def stores the function. The code inside only runs when you call it.",
        },
        {
            question: `Which line correctly starts a function named greet?`,
            options: [
                { text: "function greet():", correct: false },
                { text: "def greet():", correct: true },
                { text: "greet = def()", correct: false },
                { text: "call greet():", correct: false },
            ],
            correct: "Python uses def followed by the name and parentheses.",
            wrong: "Use def, then the function name, then () and a colon.",
        },
        {
            question: `What must be true about the lines inside a function?`,
            options: [
                { text: "They must be indented", correct: true },
                { text: "They must start with print", correct: false },
                { text: "They must be in ALL CAPS", correct: false },
                { text: "They cannot use comments", correct: false },
            ],
            correct: "The body of a function must be indented under the def line.",
            wrong: "Python uses indentation to show which lines belong inside the function.",
        },
    ],

    project: {
        title: "Recipe Card",
        desc: "Finish three tiny functions: print_title, print_ingredients, and print_steps. Call all three in order to show a full recipe card.",
        starter: [
            `def print_title():`,
            `    print("=== Pancakes ===")`,
            ``,
            `def print_ingredients():`,
            `    print()`,
            `    print()`,
            ``,
            `def print_steps():`,
            `    print("1. Mix")`,
            `    print()`,
            ``,
            `# Call all three in order`,
            `print_title()`,
            ``,
            ``,
        ].join("\n"),
    },

    prev: { unit: 5, lesson: 1, title: "Why Functions" },
    next: { unit: 5, lesson: 3, title: "One Parameter" },
};
