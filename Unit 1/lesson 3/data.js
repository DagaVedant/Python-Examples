export default {
    format: "v2",
    unit: 1,
    lesson: 3,
    unitLessons: 10,
    unitTitle: "Getting Started with Python",
    title: "Comments",
    readTime: 20,

    goal: "In this lesson you will learn how to write comments that explain your code to people.",

    learn: [
        "A comment starts with #",
        "Python ignores comments",
        "Comments help humans understand the code",
    ],

    idea: `A <strong>comment</strong> is a note for people reading the code. In Python, a comment starts with <code>#</code>.

Python skips that part. It does not print the comment and does not treat it as an instruction. Use comments to label what a line is for.`,

    code: {
        filename: "notes.py",
        lines: [
            `# This note is only for people`,
            `print("Hello!")`,
            `# Python ignores this line too`,
            `print("Ready to code.")`,
        ],
        output: [
            "Hello!",
            "Ready to code.",
        ],
    },

    changeOneLine: `In the editor above, change the first comment to <code># Greeting for a friend</code>. Press <strong>Run</strong>. The output should stay the same — comments do not print.`,

    code2: {
        filename: "labeled.py",
        lines: [
            `# Name`,
            `print("Ava")`,
            `# Hobby`,
            `print("drawing")`,
        ],
        output: [
            "Ava",
            "drawing",
        ],
    },

    practice: [
        {
            text: `Add a helpful # comment above each print so someone knows what that line shows. Keep both prints.`,
            hint: `A comment is its own line starting with #. Python skips it — only print() shows text on the screen.`,
            starterTip: `Add a line like # Name above print("Maya"), and # Hobby above print("soccer").`,
            starter: [
                `print("Maya")`,
                `print("soccer")`,
            ].join("\n"),
            gradingNote: `Pass if there are at least two print() calls with non-empty text AND at least two # comments on their own lines.`,
        },
        {
            text: `Keep the comment. Finish the blank print so the program still has a note plus one message.`,
            hint: `Leave the # line alone — it is already a comment. Fill in print() with a colour name inside quotes.`,
            starterTip: `Keep # My favourite colour, then try print("blue") on the blank line below it.`,
            starter: [
                `# My favourite colour`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if a # comment remains and one print() shows a non-empty string.`,
        },
    ],

    quiz: [
        {
            question: `What does Python do with a line that starts with #?`,
            options: [
                { text: "It runs the line like any other instruction", correct: false },
                { text: "It prints the # and the rest of the line", correct: false },
                { text: "It ignores the line — it is a comment", correct: true },
                { text: "It stops the whole program", correct: false },
            ],
            correct: "A # starts a comment. Python skips it.",
            wrong: "Comments are for people. Python does not run or print them.",
        },
        {
            question: `Which line is a comment?`,
            options: [
                { text: `print("Hello")`, correct: false },
                { text: `# Say hello to the user`, correct: true },
                { text: `print(# Hello)`, correct: false },
                { text: `"# Hello"`, correct: false },
            ],
            correct: "A line that starts with # is a comment.",
            wrong: "Look for a line that begins with # outside of quotes.",
        },
        {
            question: `Why write comments?`,
            options: [
                { text: "So Python runs faster", correct: false },
                { text: "So people can understand what the code is for", correct: true },
                { text: "So print() works", correct: false },
                { text: "Comments are required for every program to start", correct: false },
            ],
            correct: "Comments explain the code to humans.",
            wrong: "Comments help readers. They are not what makes print work.",
        },
    ],

    project: {
        title: "Labeled About Me",
        desc: "Print your name and a hobby. Put a clear # comment above each print.",
        starter: [
            `# Name`,
            `print("Name: ___")`,
            ``,
            `# Hobby`,
            `print("Hobby: ___")`,
        ].join("\n"),
    },

    prev: { unit: 1, lesson: 2, title: "print() Basics" },
    next: { unit: 1, lesson: 4, title: "Many Lines of Output" },
};
