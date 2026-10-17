export default {
    format: "v2",
    unit: 5,
    lesson: 3,
    unitLessons: 4,
    unitTitle: "Functions",
    title: "Return Values",
    readTime: 30,

    goal: "In this lesson you will learn how to send a result back out of a function with return, so you can store the answer and use it later in your program.",

    learn: [
        "Use return to send a value back",
        "Store a return value in a variable",
        "See the difference between print and return",
    ],

    idea: `<code>return</code> sends a value back to whoever called the function. That is more useful than only printing inside the function, because you can store the result, print it later, or use it in another calculation.

When Python hits <code>return</code>, it leaves the function right away and hands the value back.`,

    code: {
        filename: "add.py",
        lines: [
            `def add(a, b):`,
            `    return a + b`,
            ``,
            `result = add(3, 7)`,
            `print("3 + 7 =", result)`,
            ``,
            `# Use the return value in another calculation`,
            `print("Double:", add(4, 6) * 2)`,
            ``,
            `def grade(score):`,
            `    if score >= 90:`,
            `        return "A"`,
            `    elif score >= 70:`,
            `        return "B"`,
            `    else:`,
            `        return "C"`,
            ``,
            `print(grade(95))`,
            `print(grade(75))`,
        ],
        output: [
            "3 + 7 = 10",
            "Double: 20",
            "A",
            "B",
        ],
    },

    changeOneLine: `In the editor above, change <code>print(grade(95))</code> to <code>print(grade(65))</code>. Press <strong>Run</strong>. That line of output should say <code>C</code> instead of <code>A</code>.`,

    code2: {
        filename: "double.py",
        lines: [
            `def double(n):`,
            `    return n * 2`,
            ``,
            `print(double(4))`,
            `answer = double(10)`,
            `print("Answer:", answer)`,
        ],
        output: [
            "8",
            "Answer: 20",
        ],
    },

    practice: [
        {
            text: `Finish <code>add(a, b)</code> so it returns the sum. Store the result in a variable and print it.`,
            starter: [
                `def add(a, b):`,
                `    # Return a + b`,
                `    return`,
                ``,
                `result = add(2, 3)`,
                `# Print result`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if add returns a + b (not only prints), the return value is stored or printed, and the sum is shown in the output.`,
        },
        {
            text: `Finish <code>bigger(a, b)</code> so it returns the larger of two numbers. Print the result of calling it.`,
            starter: [
                `def bigger(a, b):`,
                `    if a > b:`,
                `        return a`,
                `    else:`,
                `        # Return b`,
                `        return`,
                ``,
                `print(bigger(8, 3))`,
                `# Print one more call`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if bigger returns the larger number using return (not only print inside the function) and at least one call result is printed.`,
        },
    ],

    quiz: [
        {
            question: `What is the key difference between print and return inside a function?`,
            options: [
                { text: "There is no difference", correct: false },
                { text: "return sends the value back so it can be used; print just displays it", correct: true },
                { text: "print is faster than return", correct: false },
                { text: "return only works with numbers", correct: false },
            ],
            correct: "return passes the value back to the caller. print only shows it on the screen.",
            wrong: "return gives the value back to the rest of your program. print only shows it.",
        },
        {
            question: `What does this print? <code>def add(a, b): return a + b</code> then <code>print(add(2, 3))</code>`,
            options: [
                { text: "2", correct: false },
                { text: "3", correct: false },
                { text: "5", correct: true },
                { text: "Nothing", correct: false },
            ],
            correct: "add returns 5, and print shows that returned value.",
            wrong: "The function returns 2 + 3, which is 5, and print displays it.",
        },
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
    ],

    project: {
        title: "Mini Calculator",
        desc: "Finish four tiny functions that each take two numbers and return a result: add, subtract, multiply, and divide. Call each one and print the answers. (No input — use fixed numbers.)",
        starter: [
            `def add(a, b):`,
            `    return a + b`,
            ``,
            `def subtract(a, b):`,
            `    # Return a - b`,
            `    return`,
            ``,
            `def multiply(a, b):`,
            `    return a * b`,
            ``,
            `def divide(a, b):`,
            `    # Return a / b`,
            `    return`,
            ``,
            `print("Add:", add(10, 2))`,
            `print("Subtract:", subtract(10, 2))`,
            `# Print multiply and divide results`,
            `print()`,
            `print()`,
        ].join("\n"),
    },

    prev: { unit: 5, lesson: 2, title: "Arguments & Parameters" },
    next: { unit: 5, lesson: 4, title: "Designing with Functions" },
};
