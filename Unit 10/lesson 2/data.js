export default {
    format: "v2",
    unit: 10,
    lesson: 2,
    unitLessons: 3,
    unitTitle: "Errors",
    title: "try / except",
    readTime: 30,

    goal: "In this lesson you will learn how to catch an error with try and except so your program can show a friendly message and keep going.",

    learn: [
        "Wrap risky code in a try block",
        "Catch the error with except",
        "Print a friendly message and continue",
    ],

    idea: `Sometimes a line <em>might</em> fail — like dividing numbers that could include zero. Instead of crashing, you can wrap that code in <code>try</code> and write an <code>except</code> block for what to do if it breaks.

Python runs the <code>try</code> block first. If an error happens, it jumps to <code>except</code> and runs that code instead. After that, the rest of the program can still run. The kid sees a clear message, not a scary crash.`,

    code: {
        filename: "safe_divide.py",
        lines: [
            `cookies = 12`,
            `friends = 0`,
            ``,
            `try:`,
            `    each = cookies / friends`,
            `    print("Each friend gets", each)`,
            `except:`,
            `    print("Oops — cannot divide by zero!")`,
            ``,
            `# This still runs after the error was caught`,
            `print("Game continues...")`,
        ],
        output: [
            "Oops — cannot divide by zero!",
            "Game continues...",
        ],
    },

    changeOneLine: `In the editor above, change <code>friends = 0</code> to <code>friends = 3</code>. Press <strong>Run</strong>. Now the try block should succeed and print how many cookies each friend gets.`,

    code2: {
        filename: "score_check.py",
        lines: [
            `score_text = "fifty"`,
            ``,
            `try:`,
            `    score = int(score_text)`,
            `    print("Score:", score)`,
            `except:`,
            `    print("That score is not a number — using 0.")`,
            `    score = 0`,
            ``,
            `print("Ready with score", score)`,
        ],
        output: [
            "That score is not a number — using 0.",
            "Ready with score 0",
        ],
    },

    practice: [
        {
            text: `Wrap the division in try / except. If it fails, print a friendly message. Either way, print "Done" at the end.`,
            starter: [
                `a = 10`,
                `b = 0`,
                `# Use try / except around the division`,
                `print(a / b)`,
                `print("Done")`,
            ].join("\n"),
            gradingNote: `Pass if try/except catches the ZeroDivisionError (or any error), prints a friendly message instead of crashing, and still prints Done.`,
        },
        {
            text: `Try to turn pretend text into an int. If it fails, set number to 0 and print a short message. Then print number.`,
            starter: [
                `text = "hello"`,
                `# try: number = int(text)`,
                `# except: set number to 0 and print a message`,
                ``,
                `print(number)`,
            ].join("\n"),
            gradingNote: `Pass if try/except is used with int(), failure sets number to 0 (or similar safe default), and the program prints without crashing.`,
        },
    ],

    quiz: [
        {
            question: `What does the <code>try</code> block hold?`,
            options: [
                { text: "Only comments", correct: false },
                { text: "Code that might cause an error", correct: true },
                { text: "The friendly message only", correct: false },
                { text: "Code that always crashes on purpose", correct: false },
            ],
            correct: "try wraps the risky lines you want to attempt first.",
            wrong: "try is for the code that might fail; except handles the failure.",
        },
        {
            question: `If an error happens inside <code>try</code>, what runs next?`,
            options: [
                { text: "The whole program stops forever", correct: false },
                { text: "The except block", correct: true },
                { text: "Python deletes your file", correct: false },
                { text: "Nothing — errors are ignored forever", correct: false },
            ],
            correct: "Python jumps to except and runs that code instead of crashing.",
            wrong: "except is where you handle the error so the program can continue.",
        },
        {
            question: `After a caught error, can the program print more lines?`,
            options: [
                { text: "No — it always stops", correct: false },
                { text: "Yes — code after try/except can still run", correct: true },
                { text: "Only if you restart the computer", correct: false },
                { text: "Only inside another try", correct: false },
            ],
            correct: "Catching the error lets the rest of the program keep going.",
            wrong: "That is the point of try/except: handle the problem, then continue.",
        },
    ],

    project: {
        title: "Safe Divider",
        desc: "Finish a tiny divider. Use try / except so dividing by zero prints a friendly message. Always print a goodbye line at the end.",
        starter: [
            `left = 50`,
            `right = 0`,
            ``,
            `# Wrap this in try / except`,
            `result = left / right`,
            `print("Result:", result)`,
            ``,
            `print("Thanks for dividing!")`,
        ].join("\n"),
    },

    prev: { unit: 10, lesson: 1, title: "When Code Breaks" },
    next: { unit: 10, lesson: 3, title: "Catching Specific Errors" },
};
