export default {
    format: "v2",
    unit: 2,
    lesson: 7,
    unitLessons: 10,
    unitTitle: "Number Calculations & Data",
    title: "Text into Numbers",
    readTime: 22,

    goal: "In this lesson you will learn how to turn digit strings into ints and floats so you can do math.",

    learn: [
        "Know digit text is still a string",
        "Convert with int() and float()",
        "Do math only after converting",
    ],

    idea: `Text that looks like a number is still a string if it is in quotes. <code>"7"</code> is text. <code>7</code> is a number.

<code>"3" + "4"</code> sticks together into <code>"34"</code>. To add as math, convert first:

<code>int("3")</code> makes the integer 3. <code>float("2.5")</code> makes the float 2.5.`,

    code: {
        filename: "cast_nums.py",
        lines: [
            `# Strings that look like numbers`,
            `a = "3"`,
            `b = "4"`,
            `print("Stuck together:", a + b)`,
            ``,
            `# Convert then add`,
            `print("Math add:", int(a) + int(b))`,
            ``,
            `# Float from text`,
            `price = float("9.50")`,
            `tax = float("0.50")`,
            `print("Total:", price + tax)`,
        ],
        output: [
            "Stuck together: 34",
            "Math add: 7",
            "Total: 10.0",
        ],
    },

    changeOneLine: `In the editor above, change <code>b = "4"</code> to <code>b = "5"</code>. Press <strong>Run</strong>. Math add should show <code>8</code> and stuck together should show <code>35</code>.`,

    code2: {
        filename: "scores.py",
        lines: [
            `round1 = "120"`,
            `round2 = "85"`,
            `total = int(round1) + int(round2)`,
            `print("Total score:", total)`,
            `print(type(total))`,
        ],
        output: [
            "Total score: 205",
            "<class 'int'>",
        ],
    },

    practice: [
        {
            text: `Convert the strings <code>"10"</code> and <code>"7"</code> to ints, subtract, and print the difference.`,
            hint: `x and y are strings right now. Wrap each one in int() before you subtract.`,
            starterTip: `Try diff = int(x) - int(y). That turns "10" and "7" into numbers, then 10 minus 7.`,
            starter: [
                `x = "10"`,
                `y = "7"`,
                `diff = `,
                `print("Diff:", diff)`,
            ].join("\n"),
            gradingNote: `Pass if diff is 3 using int() on both strings.`,
        },
        {
            text: `Turn <code>"3.25"</code> into a float, multiply by 2, and print the result.`,
            hint: `The variable text is still a string. Use float() because 3.25 has a decimal point.`,
            starterTip: `Set value = float(text), then the next line value * 2 should show 6.5 when you run it.`,
            starter: [
                `text = "3.25"`,
                `value = `,
                `print(value * 2)`,
            ].join("\n"),
            gradingNote: `Pass if float("3.25") is used and output is 6.5.`,
        },
    ],

    quiz: [
        {
            question: `What is <code>"2" + "5"</code>?`,
            options: [
                { text: "7", correct: false },
                { text: `"25"`, correct: true },
                { text: "2.5", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "Strings stick together: \"25\".",
            wrong: "With quotes, + joins text. You need int() for math.",
        },
        {
            question: `What does <code>int("8")</code> return?`,
            options: [
                { text: `"8"`, correct: false },
                { text: "8", correct: true },
                { text: "8.0", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "int() turns digit text into an integer.",
            wrong: "int(\"8\") makes the whole number 8.",
        },
        {
            question: `Which turns <code>"1.5"</code> into a number you can multiply?`,
            options: [
                { text: `str("1.5")`, correct: false },
                { text: `int("1.5")`, correct: false },
                { text: `float("1.5")`, correct: true },
                { text: `print("1.5")`, correct: false },
            ],
            correct: "Decimals need float(), not int().",
            wrong: "int() only works on whole-number text. Use float() for decimals.",
        },
    ],

    project: {
        title: "High Score Board",
        desc: "Three scores are stored as text: \"450\", \"380\", \"410\". Convert each with int(), add them, and print the total.",
        starter: [
            `s1 = "450"`,
            `s2 = "380"`,
            `s3 = "410"`,
            `total = `,
            `print("Combined:", total)`,
        ].join("\n"),
    },

    prev: { unit: 2, lesson: 6, title: "Remainder" },
    next: { unit: 2, lesson: 8, title: "Multi-step Math" },
};
