export default {
    format: "v2",
    unit: 1,
    lesson: 2,
    unitLessons: 10,
    unitTitle: "Getting Started with Python",
    title: "print() Basics",
    readTime: 20,

    goal: "In this lesson you will learn how print() shows text on the screen.",

    learn: [
        "print() displays something on the screen",
        "Put text inside quotes inside the parentheses",
        "Run the program to see the output",
    ],

    idea: `<code>print()</code> is how you make Python show something on the screen. Put the text inside quotes, and put those quotes inside the parentheses.

When you press <strong>Run</strong>, Python follows the instruction and the words appear in the output area.`,

    code: {
        filename: "hello.py",
        lines: [
            `print("Hello, world!")`,
            `print("I am learning Python.")`,
        ],
        output: [
            "Hello, world!",
            "I am learning Python.",
        ],
    },

    changeOneLine: `In the editor above, change <code>Hello, world!</code> to <code>Hello, Python!</code>. Press <strong>Run</strong>. The first line of output should update.`,

    code2: {
        filename: "hi.py",
        lines: [
            `print("Hi, Sam!")`,
            `print("Welcome to coding.")`,
        ],
        output: [
            "Hi, Sam!",
            "Welcome to coding.",
        ],
    },

    practice: [
        {
            text: `Finish the greeting. Keep the first print. Fill in the second blank so it prints a second message.`,
            hint: `Keep print("Hello!"). On the blank line, add a second message inside quotes inside print().`,
            starterTip: `Under the comment, try: print("Nice to meet you!"). Then press Run.`,
            starter: [
                `print("Hello!")`,
                `# Add your second message`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if there are two print() calls that each display a non-empty string.`,
        },
        {
            text: `Print your favourite animal in one print() call. Replace the blank.`,
            hint: `One print() is enough. Put your animal name (or a short sentence) inside quotes.`,
            starterTip: `Replace the blank with something like: print("panda") or print("I like dogs").`,
            starter: [
                `# One print with your favourite animal`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if one print() shows a non-empty string (animal name or sentence). Empty print() fails.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>print("Hello!")</code> do?`,
            options: [
                { text: "It saves Hello! forever in a file", correct: false },
                { text: "It displays Hello! on the screen", correct: true },
                { text: "It creates a variable named Hello", correct: false },
                { text: "It stops the program", correct: false },
            ],
            correct: "print() shows the text on the screen.",
            wrong: "print() displays text. It does not create a variable by itself.",
        },
        {
            question: `Which line is written correctly?`,
            options: [
                { text: `print(Hello!)`, correct: false },
                { text: `print "Hello!"`, correct: false },
                { text: `print("Hello!")`, correct: true },
                { text: `Print("Hello!")`, correct: false },
            ],
            correct: "Use lowercase print, parentheses, and quotes around the text.",
            wrong: "Text needs quotes, and print needs parentheses. Spelling is lowercase print.",
        },
        {
            question: `Why do we put quotes around Hello in print("Hello")?`,
            options: [
                { text: "So Python knows it is text to show", correct: true },
                { text: "Quotes make the program run faster", correct: false },
                { text: "Quotes turn print into a comment", correct: false },
                { text: "Quotes are only for numbers", correct: false },
            ],
            correct: "Quotes mark a string. Text for Python to print.",
            wrong: "Quotes tell Python the words are text, not a variable name.",
        },
    ],

    project: {
        title: "Mini Greeting",
        desc: "Print two lines: a hello, and one fun fact about you. Keep both messages in quotes.",
        starter: [
            `print("Hello!")`,
            `# Fun fact`,
            `print()`,
        ].join("\n"),
    },

    prev: { unit: 1, lesson: 1, title: "What is a Program" },
    next: { unit: 1, lesson: 3, title: "Comments" },
};
