export default {
    format: "v2",
    unit: 10,
    lesson: 3,
    unitLessons: 3,
    unitTitle: "Errors",
    title: "Catching Specific Errors",
    readTime: 30,

    goal: "In this lesson you will learn how to catch only certain errors — like ValueError or ZeroDivisionError — so each problem gets its own clear message.",

    learn: [
        "Write except ValueError and except ZeroDivisionError",
        "Give each error type its own friendly message",
        "Use int() on pretend text safely inside try",
    ],

    idea: `A bare <code>except:</code> catches almost everything. Often you want to be more precise.

<code>except ValueError:</code> runs when a value is the wrong kind of thing for the job — for example <code>int("hello")</code> cannot become a number. <code>except ZeroDivisionError:</code> runs only when you divide by zero.

You can stack several <code>except</code> blocks after one <code>try</code>. Python picks the matching one. That way kids get a message that matches the real problem.`,

    code: {
        filename: "specific.py",
        lines: [
            `raw = "pizza"`,
            `divider = 0`,
            ``,
            `try:`,
            `    number = int(raw)`,
            `    print(number / divider)`,
            `except ValueError:`,
            `    print("That text is not a number.")`,
            `except ZeroDivisionError:`,
            `    print("Cannot divide by zero.")`,
            ``,
            `print("Check complete.")`,
        ],
        output: [
            "That text is not a number.",
            "Check complete.",
        ],
    },

    changeOneLine: `In the editor above, change <code>raw = "pizza"</code> to <code>raw = "20"</code>. Press <strong>Run</strong>. Now int works, but dividing by zero should print the ZeroDivisionError message.`,

    code2: {
        filename: "two_paths.py",
        lines: [
            `# Path A: bad text → ValueError`,
            `try:`,
            `    print(int("nine"))`,
            `except ValueError:`,
            `    print("ValueError: not a number")`,
            ``,
            `# Path B: divide by zero → ZeroDivisionError`,
            `try:`,
            `    print(8 / 0)`,
            `except ZeroDivisionError:`,
            `    print("ZeroDivisionError: no dividing by 0")`,
            ``,
            `print("Both caught!")`,
        ],
        output: [
            "ValueError: not a number",
            "ZeroDivisionError: no dividing by 0",
            "Both caught!",
        ],
    },

    practice: [
        {
            text: `Use try with except ValueError. Try int() on the pretend text. If it fails, print a short message and set n to 0. Then print n.`,
            starter: [
                `text = "abc"`,
                `# try: n = int(text)`,
                `# except ValueError: message + n = 0`,
                ``,
                `print(n)`,
            ].join("\n"),
            gradingNote: `Pass if except ValueError is used (not only bare except), int() is attempted on the text, and on failure n becomes 0 (or similar) and the program prints without crashing.`,
        },
        {
            text: `Catch ZeroDivisionError specifically. If the division fails, print "No zero divisors!" Otherwise print the result.`,
            starter: [
                `x = 15`,
                `y = 0`,
                `# try / except ZeroDivisionError`,
                `print(x / y)`,
            ].join("\n"),
            gradingNote: `Pass if except ZeroDivisionError is used and a friendly message prints instead of crashing when y is 0.`,
        },
    ],

    quiz: [
        {
            question: `Which error does <code>int("hello")</code> usually raise?`,
            options: [
                { text: "ZeroDivisionError", correct: false },
                { text: "ValueError", correct: true },
                { text: "NameError", correct: false },
                { text: "SyntaxError", correct: false },
            ],
            correct: "The text is not a valid number, so int() raises ValueError.",
            wrong: "Bad text for int() is a ValueError, not dividing by zero.",
        },
        {
            question: `Why write <code>except ZeroDivisionError:</code> instead of bare <code>except:</code>?`,
            options: [
                { text: "It makes Python run faster", correct: false },
                { text: "It only handles that error and can show a matching message", correct: true },
                { text: "Bare except is illegal", correct: false },
                { text: "It turns off all other errors forever", correct: false },
            ],
            correct: "Specific except blocks catch one kind of problem so your message fits.",
            wrong: "Naming the error type lets you handle just that case clearly.",
        },
        {
            question: `You have <code>except ValueError</code> then <code>except ZeroDivisionError</code>. What if dividing by zero happens?`,
            options: [
                { text: "The ValueError block always runs", correct: false },
                { text: "The ZeroDivisionError block runs", correct: true },
                { text: "Both blocks run every time", correct: false },
                { text: "Python ignores both", correct: false },
            ],
            correct: "Python picks the except that matches the error that actually happened.",
            wrong: "Only the matching except block runs for that error.",
        },
    ],

    project: {
        title: "Robust Calculator",
        desc: "Build a tiny calculator with pretend values. Convert text with int(), then divide. Catch ValueError and ZeroDivisionError with different messages. Print Done at the end.",
        starter: [
            `left_text = "12"`,
            `right_text = "0"`,
            ``,
            `# try:`,
            `#   left = int(left_text)`,
            `#   right = int(right_text)`,
            `#   print("Answer:", left / right)`,
            `# except ValueError:`,
            `#   ...`,
            `# except ZeroDivisionError:`,
            `#   ...`,
            ``,
            `print("Done")`,
        ].join("\n"),
    },

    prev: { unit: 10, lesson: 2, title: "try / except" },
    next: { unit: 11, lesson: 1, title: "Using import" },
};
