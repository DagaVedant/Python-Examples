export default {
    format: "v2",
    unit: 2,
    lesson: 3,
    unitLessons: 4,
    unitTitle: "Number Calculations & Data",
    title: "Numbers from Input",
    readTime: 30,

    goal: "In this lesson you will turn pretend typed answers into real numbers, then use them in multi-step calculations and round the results.",

    learn: [
        "Cast text to int or float before math",
        "Build a calculation with several steps",
        "Round answers with round()",
    ],

    idea: `On a real computer, <code>input()</code> always gives you text (a string). You cannot do math with text until you convert it.

Use <code>int()</code> for whole numbers and <code>float()</code> for decimals.

In this website we <strong>pretend</strong> the user typed answers by storing them as strings first, then casting. After casting you can multiply, add, and round with <code>round(value, 2)</code> for money-style answers.`,

    code: {
        filename: "shop.py",
        lines: [
            `# Pretend the user typed these answers (still text)`,
            `price_text = "12.50"`,
            `qty_text = "3"`,
            ``,
            `# Cast to real numbers before math`,
            `price = float(price_text)`,
            `qty = int(qty_text)`,
            ``,
            `total = price * qty`,
            `discount = total * 0.1`,
            `final = total - discount`,
            ``,
            `print("Subtotal:", round(total, 2))`,
            `print("Discount:", round(discount, 2))`,
            `print("You pay:", round(final, 2))`,
        ],
        output: [
            "Subtotal: 37.5",
            "Discount: 3.75",
            "You pay: 33.75",
        ],
    },

    changeOneLine: `In the editor above, change <code>qty_text = "3"</code> to <code>qty_text = "4"</code>. Press <strong>Run</strong>. Subtotal should become 50.0 and you pay should become 45.0.`,

    code2: {
        filename: "room.py",
        lines: [
            `# Pretend typed answers`,
            `length = float("5")`,
            `width = float("4")`,
            `area = length * width`,
            `cost = area * 8.50`,
            `print("Area:", area)`,
            `print("Flooring cost:", round(cost, 2))`,
        ],
        output: [
            "Area: 20.0",
            "Flooring cost: 170.0",
        ],
    },

    practice: [
        {
            text: `Pretend room length and width as text. Cast them to float, print the area, and print flooring cost if each square metre costs 8.50.`,
            starter: [
                `length_text = "6"`,
                `width_text = "3"`,
                `# Cast to float`,
                `length = 0`,
                `width = 0`,
                `area = length * width`,
                `cost = area * 8.50`,
                `print("Area:", area)`,
                `print("Cost:", round(cost, 2))`,
            ].join("\n"),
            gradingNote: `Pass if length/width come from casting the text with float(), area is 18, and cost is printed for 18*8.50 (153.0) with round preferred.`,
        },
        {
            text: `Pretend a starting number and a multiplier as text. Cast, multiply, and print the result rounded to 2 decimal places.`,
            starter: [
                `start = "2.5"`,
                `mult = "3"`,
                `# Cast, multiply, round to 2 decimals, print`,
                `result = 0`,
                `print(result)`,
            ].join("\n"),
            gradingNote: `Pass if values are cast (float/int), multiplied to 7.5, and printed with round(..., 2).`,
        },
    ],

    quiz: [
        {
            question: `A user types 5 for input(). What happens with <code>x + 3</code> if you never cast?`,
            options: [
                { text: "It prints 8", correct: false },
                { text: "It causes a TypeError because x is still text", correct: true },
                { text: "It prints 53", correct: false },
                { text: "Python converts it automatically", correct: false },
            ],
            correct: "input() returns a string. Cast with int() or float() before adding a number.",
            wrong: "Without casting, Python treats the answer as text, so adding a number fails.",
        },
        {
            question: `Which line turns the text "4" into a whole number?`,
            options: [
                { text: `number = "4"`, correct: false },
                { text: `number = int("4")`, correct: true },
                { text: `number = str(4)`, correct: false },
                { text: `number = print("4")`, correct: false },
            ],
            correct: "int() converts text that looks like a whole number into an int.",
            wrong: "Use int() on the string to get a whole number you can do math with.",
        },
        {
            question: `What does <code>round(3.14159, 2)</code> give?`,
            options: [
                { text: "3", correct: false },
                { text: "3.14", correct: true },
                { text: "3.14159", correct: false },
                { text: "2", correct: false },
            ],
            correct: "round(value, 2) keeps two digits after the decimal point.",
            wrong: "The second argument is how many decimal places to keep.",
        },
    ],

    project: {
        title: "Shopping Calculator",
        desc: "Finish the receipt. Pretend price and quantity as text, cast them, compute a subtotal, take 15% off, and print the final amount rounded to 2 decimals.",
        starter: [
            `item = "Notebook"`,
            `price_text = "9.99"`,
            `qty_text = "3"`,
            `# Cast to numbers`,
            `price = 0`,
            `qty = 0`,
            `subtotal = price * qty`,
            `# 15% discount`,
            `discount = subtotal * 0.15`,
            `final = subtotal - discount`,
            `print("Item:", item)`,
            `print("Subtotal:", round(subtotal, 2))`,
            `print("Discount:", round(discount, 2))`,
            `print("You pay:", round(final, 2))`,
        ].join("\n"),
    },

    prev: { unit: 2, lesson: 2, title: "Integer vs Float Division" },
    next: { unit: 2, lesson: 4, title: "Math Library Basics" },
};
