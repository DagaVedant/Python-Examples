export default {
    format: "v2",
    unit: 10,
    lesson: 4,
    unitLessons: 8,
    unitTitle: "Errors",
    title: "try",
    readTime: 22,
    goal: "In this lesson you will learn how a try block marks code that might fail.",

    learn: [
        "Start a try: block",
        "Indent the risky lines under try",
        "Know that try alone is incomplete without except",
    ],

    idea: `Sometimes a line <em>might</em> fail. You wrap that code in <code>try:</code>.

Python runs the indented <code>try</code> block first. If something breaks, control can jump to an <code>except</code> block (next lessons). For now, focus on placing risky code under <code>try:</code>.`,

    code: {
        filename: "try_shape.py",
        lines: [
            `cookies = 12`,
            `friends = 3`,
            `try:`,
            `    each = cookies / friends`,
            `    print("Each friend gets", each)`,
            `except:`,
            `    print("Something went wrong")`,
        ],
        output: [
            "Each friend gets 4.0",
        ],
    },

    changeOneLine: `In the editor above, change <code>friends = 3</code> to <code>friends = 0</code>. Press <strong>Run</strong>. You should see the except message.`,

    code2: {
        filename: "try_int.py",
        lines: [
            `text = "10"`,
            `try:`,
            `    n = int(text)`,
            `    print("Number:", n)`,
            `except:`,
            `    print("Not a number")`,
        ],
        output: [
            "Number: 10",
        ],
    },

    practice: [
        {
            text: `Put the division inside try (keep a simple except that prints Oops). friends is 2.`,
            hint: `Move print(a / b) under try: with four spaces. Add except: below try, indented the same as try, with print("Oops") inside except.`,
            starterTip: `Structure: try:\n    print(a / b)\nexcept:\n    print("Oops"). Delete the old print(a / b) that sits outside try.`,
            starter: [
                "a = 10",
                "b = 2",
                "# try / except",
                "print(a / b)"
            ].join("\n"),
            gradingNote: `Pass if try wraps the division and result prints (except unused).`,
        },
        {
            text: `Try to int() the text '7'. Print the number inside try.`,
            hint: `Under try:, convert text to a number with int(text), then print it. Indent both lines with four spaces.`,
            starterTip: `Inside the blank under try:, add: n = int(text) and print(n). You should see 7.`,
            starter: [
                "text = \"7\"",
                "try:",
                "    ",
                "except:",
                "    print(\"fail\")"
            ].join("\n"),
            gradingNote: `Pass if 7 prints from inside try using int.`,
        },
    ],

    quiz: [
        {
            question: `What does try: mark?`,
            options: [
                { text: `Only comments`, correct: false },
                { text: `Code that might fail`, correct: true },
                { text: `Imports forever`, correct: false },
                { text: `A dictionary key`, correct: false },
            ],
            correct: `try wraps risky lines.`,
            wrong: `Put the shaky code under try.`,
        },
        {
            question: `Must try code be indented?`,
            options: [
                { text: `No`, correct: false },
                { text: `Yes`, correct: true },
                { text: `Only on Fridays`, correct: false },
                { text: `Indentation is optional always`, correct: false },
            ],
            correct: `Blocks in Python are indented.`,
            wrong: `Indent under try.`,
        },
        {
            question: `If try succeeds, what happens to except?`,
            options: [
                { text: `except always runs too`, correct: false },
                { text: `except is skipped`, correct: true },
                { text: `Python deletes except`, correct: false },
                { text: `The program restarts`, correct: false },
            ],
            correct: `except runs only when try fails.`,
            wrong: `Success path skips except.`,
        },
    ],

    project: {
        title: "Try the Divide",
        desc: "Use try around cookies/friends. Print the share when it works. Keep a simple except message.",
        starter: [
            "cookies = 12",
            "friends = 4",
            "try:",
            "    ",
            "except:",
            "    print(\"Could not divide\")"
        ].join("\n"),
    },

    prev: { unit: 10, lesson: 3, title: "Common Errors" },
    next: { unit: 10, lesson: 5, title: "except" },
};
