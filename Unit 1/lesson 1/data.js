export default {
    format: "v2",
    unit: 1,
    lesson: 1,
    unitLessons: 5,
    unitTitle: "Getting Started with Python",
    title: "Your First Program",
    readTime: 30,

    goal: "In this lesson you will run your very first Python program, learn how to display text on the screen, and write comments to explain your code.",

    learn: [
        "Run a Python program",
        "Use print() to display text",
        "Write comments using #",
    ],

    idea: `A <strong>program</strong> is a list of instructions. The computer reads them from the top of the file to the bottom, one at a time.

<code>print()</code> is how you make Python show something on the screen. Whatever you put inside the parentheses (and inside quotes) gets displayed.

A <strong>comment</strong> is a note for people reading the code. Python ignores it. In Python, a comment starts with <code>#</code>.`,

    code: {
        filename: "hello.py",
        lines: [
            `# This is my first program`,
            `print("Hello, world!")`,
            ``,
            `# You can print as many lines as you want`,
            `print("My name is Vedant.")`,
            `print("I am learning Python.")`,
        ],
        output: [
            "Hello, world!",
            "My name is Vedant.",
            "I am learning Python.",
        ],
    },

    changeOneLine: `In the editor above, find the line that says <code>print("My name is Vedant.")</code>. Change <code>Vedant</code> to your own name (keep the quotes). Press <strong>Run</strong> and check that the output shows your name.`,

    code2: {
        filename: "greetings.py",
        lines: [
            `# A short greeting for a friend`,
            `print("Hi, Sam!")`,
            `print("Welcome to Python.")`,
            `# This comment is ignored by Python`,
            `print("Let's write some code.")`,
        ],
        output: [
            "Hi, Sam!",
            "Welcome to Python.",
            "Let's write some code.",
        ],
    },

    practice: [
        {
            text: `Finish the program so it prints three lines: your name, your age, and your favorite hobby. Keep the comments. Fill in the blank print() lines.`,
            starter: [
                `# Print your name`,
                `print("Alex")`,
                ``,
                `# Print your age`,
                `print()`,
                ``,
                `# Print your favorite hobby`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass only if there are three print() calls that each display a non-empty string (name, age, hobby). Empty print() or leaving the blanks empty fails. Comments alone are not enough.`,
        },
        {
            text: `Add a helpful comment above each print() so someone else can tell what that line does. Keep three print() lines that show something.`,
            starter: [
                `print("Maya")`,
                `print("11")`,
                `print("drawing")`,
            ].join("\n"),
            gradingNote: `Pass only if there are at least three print() calls with non-empty string output AND at least three # comments that describe the prints. Comments must be on their own lines starting with #.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>print("Hello World!")</code> do?`,
            options: [
                { text: "It saves the words into the computer's memory forever", correct: false },
                { text: "It displays the words on the screen", correct: true },
                { text: "It creates a variable called Hello World!", correct: false },
                { text: "It causes an error because Hello World! has no quotes", correct: false },
            ],
            correct: "Yes — print() shows whatever is inside the parentheses on the screen.",
            wrong: "print() does not save a variable. It displays text on the screen.",
        },
        {
            question: `What does Python do with a line that starts with <code>#</code>?`,
            options: [
                { text: "It runs that line like any other instruction", correct: false },
                { text: "It prints the # and the rest of the line", correct: false },
                { text: "It ignores the line — it is a comment for people", correct: true },
                { text: "It stops the program", correct: false },
            ],
            correct: "Correct! A # starts a comment. Python skips it.",
            wrong: "A line that starts with # is a comment. Python does not run it or print it.",
        },
        {
            question: `Which program prints two separate lines?`,
            options: [
                { text: `print("Hello World!")`, correct: false },
                { text: `print("Hello") then print("World") on the next line`, correct: true },
                { text: `Two comment lines with # print("Hello") and # print("World")`, correct: false },
                { text: `print(Hello) and print(World) with no quotes`, correct: false },
            ],
            correct: "Two print() calls make two lines of output.",
            wrong: "You need two print() calls (not comments, and text needs quotes).",
        },
    ],

    project: {
        title: "About Me Card",
        desc: "Finish the About Me card. Fill in your name, age, favourite subject, and one fun fact. Keep the comments.",
        starter: [
            `# About Me card`,
            `print("===== ABOUT ME =====")`,
            ``,
            `# Name`,
            `print("Name: ___")`,
            ``,
            `# Age`,
            `print("Age: ___")`,
            ``,
            `# Favourite subject`,
            `print("Favourite subject: ___")`,
            ``,
            `# Fun fact`,
            `print("Fun fact: ___")`,
        ].join("\n"),
    },

    prev: null,
    next: { unit: 1, lesson: 2, title: "Output & Formatting" },
};
