export default {
    format: "v2",
    unit: 3,
    lesson: 2,
    unitLessons: 4,
    unitTitle: "Making Decisions",
    title: "if / else",
    readTime: 30,

    goal: "In this lesson you will learn how to make your program choose between two paths using if and else.",

    learn: [
        "Write an if statement",
        "Add an else for the other path",
        "Indent code correctly inside a block",
    ],

    idea: `An <strong>if</strong> statement runs a block of code only when a condition is <code>True</code>. If the condition is <code>False</code>, Python skips that block and runs the <strong>else</strong> block instead.

The indented lines under <code>if</code> or <code>else</code> are the code that runs for that path. Indentation matters in Python — use spaces to show what belongs inside the block.`,

    code: {
        filename: "vote_check.py",
        lines: [
            `age = 16`,
            ``,
            `if age >= 18:`,
            `    print("You can vote.")`,
            `else:`,
            `    print("You cannot vote yet.")`,
            ``,
            `# Another example`,
            `score = 42`,
            ``,
            `if score >= 50:`,
            `    print("You passed!")`,
            `else:`,
            `    print("You did not pass. Try again.")`,
        ],
        output: [
            "You cannot vote yet.",
            "You did not pass. Try again.",
        ],
    },

    changeOneLine: `In the editor above, change <code>score = 42</code> to <code>score = 75</code>. Press <strong>Run</strong>. The second message should say <code>You passed!</code>.`,

    code2: {
        filename: "temp_check.py",
        lines: [
            `temp = 30`,
            ``,
            `if temp > 25:`,
            `    print("It is hot outside.")`,
            `else:`,
            `    print("It is not hot.")`,
        ],
        output: [
            "It is hot outside.",
        ],
    },

    practice: [
        {
            text: `A number is already stored. Print <code>Positive</code> if it is greater than zero, otherwise print <code>Zero or negative</code>. Finish the blanks.`,
            starter: [
                `number = 7`,
                ``,
                `if number > 0:`,
                `    print()`,
                `else:`,
                `    print()`,
            ].join("\n"),
            gradingNote: `Pass if if/else checks number > 0 (or similar) and prints Positive on the True path and Zero or negative on the else path.`,
        },
        {
            text: `Check a password stored in a variable. Print <code>Access granted</code> if it matches the secret word, otherwise print <code>Wrong password</code>.`,
            starter: [
                `secret = "python"`,
                `password = "python"`,
                ``,
                `if password == secret:`,
                `    print()`,
                `else:`,
                `    print()`,
            ].join("\n"),
            gradingNote: `Pass if if/else compares password to secret (or a fixed string) and prints Access granted vs Wrong password appropriately.`,
        },
    ],

    quiz: [
        {
            question: `What happens if the condition in an <code>if</code> is False and there is no <code>else</code>?`,
            options: [
                { text: "Python crashes with an error", correct: false },
                { text: "Python skips the if block and moves on", correct: true },
                { text: "Python runs the if block anyway", correct: false },
                { text: "Python asks for a new value", correct: false },
            ],
            correct: "With no else, Python just skips the if block and continues.",
            wrong: "Python does not crash. It skips the if block and keeps going.",
        },
        {
            question: `Which lines run when <code>age = 10</code>? <code>if age >= 13:</code> then print "Teen" / <code>else:</code> then print "Kid"`,
            options: [
                { text: "Only Teen", correct: false },
                { text: "Only Kid", correct: true },
                { text: "Both Teen and Kid", correct: false },
                { text: "Neither", correct: false },
            ],
            correct: "10 is less than 13, so the else path runs and prints Kid.",
            wrong: "The if condition is False, so Python runs the else block.",
        },
        {
            question: `Why do the lines under <code>if</code> need to be indented?`,
            options: [
                { text: "Indentation makes the font look nicer only", correct: false },
                { text: "Indentation tells Python which lines belong to the if block", correct: true },
                { text: "Indentation is optional in Python", correct: false },
                { text: "Indentation turns True into False", correct: false },
            ],
            correct: "Python uses indentation to know what code is inside the if or else.",
            wrong: "In Python, indentation is required — it marks the block under if or else.",
        },
    ],

    project: {
        title: "Odd or Even",
        desc: "A whole number is stored in a variable. Use if and else with the % operator to print whether the number is odd or even.",
        starter: [
            `number = 14`,
            ``,
            `# Hint: number % 2 == 0 means even`,
            `if number % 2 == 0:`,
            `    print()`,
            `else:`,
            `    print()`,
        ].join("\n"),
    },

    prev: { unit: 3, lesson: 1, title: "Comparisons & Booleans" },
    next: { unit: 3, lesson: 3, title: "elif & Multiple Branches" },
};
