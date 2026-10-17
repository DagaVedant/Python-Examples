export default {
    format: "v2",
    unit: 1,
    lesson: 10,
    unitLessons: 10,
    unitTitle: "Getting Started with Python",
    title: "Data Types & Casting",
    readTime: 25,

    goal: "In this lesson you will learn the three main beginner data types and how to convert between them for math.",

    learn: [
        "Tell apart str, int, and float",
        "Know that digit text is still a string",
        "Convert types with int() and float()",
    ],

    idea: `Every value in Python has a <strong>type</strong>. Text is a string (<code>str</code>). Whole numbers are integers (<code>int</code>). Numbers with a decimal point are floats (<code>float</code>).

<code>input()</code> always gives back a string — even if someone types <code>14</code>. Digits in quotes like <code>"14"</code> are also text. For math, convert (cast) with <code>int()</code> or <code>float()</code> first. Adding two strings sticks them together. Adding two numbers does math.`,

    code: {
        filename: "next_year.py",
        lines: [
            `# input() always returns text — cast before math`,
            `age_text = input("How old are you? ")`,
            `age = int(age_text)`,
            `print("Next year you will be", age + 1)`,
            ``,
            `price = float(input("Price? "))`,
            `qty = int(input("How many? "))`,
            `print("Total:", price * qty)`,
        ],
        output: [
            "How old are you? ",
            "14",
            "Next year you will be 15",
            "Price? ",
            "2.50",
            "How many? ",
            "3",
            "Total: 7.5",
        ],
    },

    changeOneLine: `Press <strong>Run</strong>. Type an age like <code>10</code>, then a price and quantity. Check that the “next year” line uses your age + 1.`,

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
            text: `Two number answers are stored as text. Cast both to int and print their sum (math, not stuck-together text).`,
            starter: [
                `n1 = "6"`,
                `n2 = "7"`,
                `# Cast and add, then print the sum`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if both values are converted with int() (or equivalent casting) and the printed result is the numeric sum 13, not the string 67.`,
        },
        {
            text: `A price and a quantity are stored as text. Cast them, multiply, and print the total.`,
            starter: [
                `price = "3.25"`,
                `qty = "4"`,
                `# Cast, multiply, print the total`,
                `total = 0`,
                `print(total)`,
            ].join("\n"),
            gradingNote: `Pass if price is cast to float, qty to int (or both numeric), multiplied, and printed so the value is 13.0 (or 13) for 3.25*4.`,
        },
    ],

    quiz: [
        {
            question: `What type is the value "7" (digits inside quotes)?`,
            options: [
                { text: "int, because it looks like a whole number", correct: false },
                { text: "float, because all text is decimal", correct: false },
                { text: "str, because quotes make it text", correct: true },
                { text: "It depends on the variable name", correct: false },
            ],
            correct: "Quotes make a string. Cast with int() or float() before math.",
            wrong: "Even digits in quotes are a string until you cast them.",
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
        desc: "A meal price and tip percent are stored as text. Cast them, compute tip and total, then print both.",
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

    prev: { unit: 1, lesson: 9, title: "Using Answers" },
    next: { unit: 2, lesson: 1, title: "Plus and Minus" },
};
