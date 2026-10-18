export default {
    format: "v2",
    unit: 5,
    lesson: 6,
    unitLessons: 8,
    unitTitle: "Functions",
    title: "Using What You Return",
    readTime: 23,

    goal: "In this lesson you will learn how to store a return value in a variable and use it later in prints or other calculations.",

    learn: [
        "Store a return value in a variable",
        "Use that variable in print or math",
        "Call a function inside a bigger expression",
    ],

    idea: `When a function returns a value, you can <strong>catch</strong> it: <code>result = add(3, 7)</code>. Then use <code>result</code> as many times as you want.

You can also use a call inside another expression, like <code>print(add(4, 6) * 2)</code>. Storing the answer makes longer programs easier to read.`,

    code: {
        filename: "use_return.py",
        lines: [
            `def add(a, b):`,
            `    return a + b`,
            ``,
            `result = add(3, 7)`,
            `print("3 + 7 =", result)`,
            `print("Double that:", result * 2)`,
            ``,
            `# Call inside an expression`,
            `print("Another:", add(4, 6) * 2)`,
        ],
        output: [
            "3 + 7 = 10",
            "Double that: 20",
            "Another: 20",
        ],
    },

    changeOneLine: `In the editor above, change <code>result = add(3, 7)</code> to <code>result = add(5, 5)</code>. Press <strong>Run</strong>. The first two lines should use 10 as the stored result.`,

    code2: {
        filename: "tax.py",
        lines: [
            `def with_tax(price):`,
            `    return price + price * 0.1`,
            ``,
            `total = with_tax(20)`,
            `print("Total:", total)`,
            `print("Half:", total / 2)`,
        ],
        output: [
            "Total: 22.0",
            "Half: 11.0",
        ],
    },

    practice: [
        {
            text: `Finish add(a, b) so it returns the sum. Store the result of add(2, 3) and print it.`,
            hint: `Finish return with a + b, then print whatever is stored in result. That variable catches the returned value.`,
            starterTip: `Use return a + b in add, and replace the empty print() with print(result).`,
            starter: [
                `def add(a, b):`,
                `    return`,
                ``,
                `result = add(2, 3)`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if add returns a+b, the return value is stored in a variable, and that value is printed.`,
        },
        {
            text: `Finish double(n) so it returns n * 2. Store double(8) in answer, then print answer and answer + 1.`,
            hint: `double should return n times 2. The second print line should use answer in a little math.`,
            starterTip: `Try return n * 2 in double, and print(answer + 1) on the last blank print(). First line should show 16.`,
            starter: [
                `def double(n):`,
                `    return`,
                ``,
                `answer = double(8)`,
                `print(answer)`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if double returns n*2, answer is 16, and a second print uses answer (like 17).`,
        },
    ],

    quiz: [
        {
            question: `Why store a return value in a variable?`,
            options: [
                { text: "So you can use the answer later in the program", correct: true },
                { text: "Because Python forbids printing return values", correct: false },
                { text: "Variables are required for every function", correct: false },
                { text: "So the function runs twice", correct: false },
            ],
            correct: "Storing the result lets you reuse it in prints or other calculations.",
            wrong: "The main reason is so you can use the answer again later.",
        },
        {
            question: `After result = add(2, 3), what is usually in result if add returns a + b?`,
            options: [
                { text: "2", correct: false },
                { text: "3", correct: false },
                { text: "5", correct: true },
                { text: "\"add\"", correct: false },
            ],
            correct: "add returns 5, and that value is stored in result.",
            wrong: "The variable holds whatever the function returned.",
        },
        {
            question: `Is print(add(1, 2) * 3) allowed?`,
            options: [
                { text: "No. Return values cannot be used in math", correct: false },
                { text: "Yes. The returned value can go into a bigger expression", correct: true },
                { text: "Only inside while loops", correct: false },
                { text: "Only if add also prints", correct: false },
            ],
            correct: "A returned number can be multiplied, added, or printed like any other value.",
            wrong: "Calls that return values can sit inside larger expressions.",
        },
    ],

    project: {
        title: "Shopping Math",
        desc: "Write subtotal(a, b) that returns a + b, and with_tax(amount) that returns amount * 1.1. Store a subtotal of two prices, then store the taxed total, then print both.",
        starter: [
            `def subtotal(a, b):`,
            `    return`,
            ``,
            `def with_tax(amount):`,
            `    return`,
            ``,
            `bill = subtotal(12, 8)`,
            `total = with_tax(bill)`,
            `print("Bill:", bill)`,
            `print("Total:", total)`,
        ].join("\n"),
    },

    prev: { unit: 5, lesson: 5, title: "Return Values" },
    next: { unit: 5, lesson: 7, title: "Functions Calling Functions" },
};
