export default {
    format: "v2",
    unit: 1,
    lesson: 5,
    unitLessons: 5,
    unitTitle: "Getting Started with Python",
    title: "Data Types & Casting",
    readTime: 35,

    goal: "In this lesson you will learn the three main data types beginners use, and how to convert between them so you can do math.",

    learn: [
        "Tell apart str, int, and float",
        "Know that input() always returns a string",
        "Convert types with int() and float()",
    ],

    idea: `Every value in Python has a <strong>type</strong>. Text is a string (<code>str</code>). Whole numbers are integers (<code>int</code>). Numbers with a decimal point are floats (<code>float</code>).

<code>input()</code> always returns a string. If you want to do math, you must convert (cast) with <code>int()</code> or <code>float()</code> first. Adding two strings sticks them together. Adding two numbers does math.`,

    code: {
        filename: "next_year.py",
        lines: [
            `# Pretend the user typed 14 (still text at first)`,
            `age_text = "14"`,
            `age = int(age_text)`,
            `print("Next year you will be", age + 1)`,
            ``,
            `# Float for money, int for count`,
            `price = float("2.50")`,
            `qty = int("3")`,
            `print("Total:", price * qty)`,
        ],
        output: [
            "Next year you will be 15",
            "Total: 7.5",
        ],
    },

    changeOneLine: `In the editor above, change <code>age_text = "14"</code> to <code>age_text = "10"</code>. Press <strong>Run</strong>. The first line should say Next year you will be 11.`,

    code2: {
        filename: "types.py",
        lines: [
            `a = "3"`,
            `b = "4"`,
            `print("As text:", a + b)`,
            `print("As numbers:", int(a) + int(b))`,
            `print("Decimal:", float("1.5") * 2)`,
        ],
        output: [
            "As text: 34",
            "As numbers: 7",
            "Decimal: 3.0",
        ],
    },

    practice: [
        {
            text: `Pretend two number answers as text. Cast both to int and print their sum (math, not stuck-together text).`,
            starter: [
                `n1 = "6"`,
                `n2 = "7"`,
                `# Cast and add, then print the sum`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if both values are converted with int() (or equivalent casting) and the printed result is the numeric sum 13, not the string 67.`,
        },
        {
            text: `Pretend a price and a quantity. Compute the total and print it rounded to 2 decimal places with round().`,
            starter: [
                `price = "3.25"`,
                `qty = "4"`,
                `# Cast, multiply, round to 2 decimals, print`,
                `total = 0`,
                `print(total)`,
            ].join("\n"),
            gradingNote: `Pass if price is cast to float, qty to int (or both numeric), multiplied, and printed with round(..., 2) so the value is 13.0 or 13.00 style total for 3.25*4.`,
        },
    ],

    quiz: [
        {
            question: `A user types 7 for input(). What type is the result?`,
            options: [
                { text: "int, because they typed a whole number", correct: false },
                { text: "float, because all input is decimal", correct: false },
                { text: "str, because input() always returns text", correct: true },
                { text: "It depends on what the user types", correct: false },
            ],
            correct: "input() always returns a string. Cast with int() or float() before math.",
            wrong: "Even digits from input() arrive as a string.",
        },
        {
            question: `What does <code>"3" + "4"</code> produce?`,
            options: [
                { text: "7", correct: false },
                { text: "34", correct: true },
                { text: "3.4", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "Adding strings sticks them together: 34.",
            wrong: "With strings, + joins text. Use int() if you want 7.",
        },
        {
            question: `Which call turns the text "2.5" into a number you can multiply?`,
            options: [
                { text: `int("2.5")`, correct: false },
                { text: `float("2.5")`, correct: true },
                { text: `str("2.5")`, correct: false },
                { text: `print("2.5")`, correct: false },
            ],
            correct: "float() is for numbers with a decimal point.",
            wrong: "int(\"2.5\") fails. Use float() for decimals.",
        },
    ],

    project: {
        title: "Tip Calculator",
        desc: "Pretend a meal price and tip percent as text. Cast them, compute tip and total, then print both.",
        starter: [
            `price_text = "40"`,
            `tip_percent_text = "15"`,
            `price = float(price_text)`,
            `tip_percent = float(tip_percent_text)`,
            `# tip = price * tip_percent / 100`,
            `# total = price + tip`,
            `tip = 0`,
            `total = 0`,
            `print("Tip:", tip)`,
            `print("Total:", total)`,
        ].join("\n"),
    },

    prev: { unit: 1, lesson: 4, title: "Input" },
    next: { unit: 2, lesson: 1, title: "Arithmetic Operators" },
};
