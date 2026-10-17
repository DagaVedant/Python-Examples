export default {
    format: "v2",
    unit: 10,
    lesson: 7,
    unitLessons: 8,
    unitTitle: "Errors",
    title: "Specific except",
    readTime: 25,
    goal: "In this lesson you will learn how to catch specific error types like ZeroDivisionError and ValueError.",

    learn: [
        "Write except ZeroDivisionError:",
        "Write except ValueError:",
        "Use different messages per error",
    ],

    idea: `A bare <code>except:</code> catches almost anything. Better: catch a <strong>specific</strong> type.

<code>except ZeroDivisionError:</code> handles divide-by-zero. <code>except ValueError:</code> handles bad casts like <code>int("hi")</code>. Different problems can get different messages.`,

    code: {
        filename: "specific.py",
        lines: [
            `def safe_divide(a, b):`,
            `    try:`,
            `        return a / b`,
            `    except ZeroDivisionError:`,
            `        print("ZeroDivisionError: use a non-zero divisor")`,
            `        return None`,
            ``,
            `print(safe_divide(10, 2))`,
            `print(safe_divide(10, 0))`,
        ],
        output: [
            "5.0",
            "ZeroDivisionError: use a non-zero divisor",
            "None",
        ],
    },

    changeOneLine: `In the editor above, change the first call to <code>safe_divide(9, 3)</code>. Press <strong>Run</strong>. First result should be 3.0.`,

    code2: {
        filename: "value_err.py",
        lines: [
            `text = "hi"`,
            `try:`,
            `    print(int(text))`,
            `except ValueError:`,
            `    print("ValueError: that text is not an int")`,
        ],
        output: [
            "ValueError: that text is not an int",
        ],
    },

    practice: [
        {
            text: `Catch only ZeroDivisionError around 8/0. Print a specific message.`,
            starter: [
                "try:",
                "    print(8 / 0)",
                "except ZeroDivisionError:",
                "    print()"
            ].join("\n"),
            gradingNote: `Pass if ZeroDivisionError is named in except and a message prints.`,
        },
        {
            text: `Catch ValueError around int("nope") with a clear message.`,
            starter: [
                "try:",
                "    print(int(\"nope\"))",
                "except ValueError:",
                "    print()"
            ].join("\n"),
            gradingNote: `Pass if ValueError is caught specifically.`,
        },
    ],

    quiz: [
        {
            question: `Why catch a specific error type?`,
            options: [
                { text: `It makes NameError impossible`, correct: false },
                { text: `Different problems can get different messages`, correct: true },
                { text: `It removes indentation rules`, correct: false },
                { text: `It disables print`, correct: false },
            ],
            correct: `Specific except targets the right issue.`,
            wrong: `ZeroDivisionError vs ValueError.`,
        },
        {
            question: `Which except catches divide by zero?`,
            options: [
                { text: `except ValueError:`, correct: false },
                { text: `except ZeroDivisionError:`, correct: true },
                { text: `except NameError:`, correct: false },
                { text: `except Happy:`, correct: false },
            ],
            correct: `Match the error type name.`,
            wrong: `Use ZeroDivisionError.`,
        },
        {
            question: `int("hi") usually raises…`,
            options: [
                { text: `ZeroDivisionError`, correct: false },
                { text: `ValueError`, correct: true },
                { text: `A silent success`, correct: false },
                { text: `KeyError only`, correct: false },
            ],
            correct: `Bad int casts are ValueError.`,
            wrong: `Catch ValueError for bad numbers-as-text.`,
        },
    ],

    project: {
        title: "Robust Calculator",
        desc: "In one try, attempt int('x')/0 style risk OR two separate tries: catch ValueError and ZeroDivisionError each with their own message. Print Done at end.",
        starter: [
            "print(\"Calculator\")",
            "# Catch ValueError for int",
            "",
            "# Catch ZeroDivisionError for divide",
            "",
            "print(\"Done\")"
        ].join("\n"),
    },

    prev: { unit: 10, lesson: 6, title: "Friendly Messages" },
    next: { unit: 10, lesson: 8, title: "Error Practice" },
};
