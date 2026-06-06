const LESSON = {

    unit: 5,
    lesson: 3,
    unitTitle: "Functions",
    title: "Return Values",
    readTime: 5,

    goal: "In this lesson you will learn how to send a result back out of a function using return, so you can use the answer in other parts of your program.",

    learn: [
        "Use return to send a value back",
        "Store a function's return value in a variable",
        "Understand the difference between printing and returning",
    ],

    idea: "return sends a value back to whoever called the function. This is much more flexible than just printing inside the function, because you can store the result, use it in a calculation, or pass it to another function. Once Python hits a return statement it exits the function immediately.",

    code: {
        filename: "lesson_5_3.py",
        lines: [
            `def add(a, b):`,
            `    return a + b`,
            ``,
            `result = add(3, 7)`,
            `print("3 + 7 =", result)`,
            ``,
            `# Use the return value directly in an expression`,
            `print("Double:", add(4, 6) * 2)`,
            ``,
            `def is_even(n):`,
            `    return n % 2 == 0`,
            ``,
            `print(is_even(4))`,
            `print(is_even(7))`,
        ],
        output: [
            "3 + 7 = 10",
            "Double: 20",
            "True",
            "False",
        ],
    },

    practice: [
        `Write a function called <code>bigger(a, b)</code> that returns the larger of two numbers. Print the result of calling it with several pairs.`,
        `Write a function called <code>celsius_to_fahrenheit(c)</code> that returns the converted temperature. Print results for 0, 20, and 100 degrees.`,
    ],

    quiz: {
        question: `What is the key difference between using <code>print()</code> and <code>return</code> inside a function?`,
        options: [
            {text: "There is no difference, both make the result available outside", correct: false},
            {text: "return sends the value back so it can be used; print just displays it", correct: true},
            {text: "print is faster than return", correct: false},
            {text: "return only works with numbers", correct: false},
        ],
        correct: "Correct! return passes the value back to the caller. print just displays it and the value is lost.",
        wrong: "Not quite. return gives the value back to the rest of your program. print only shows it on screen.",
    },

    project: {
        title: "Mini Calculator",
        desc: "Write four functions: add, subtract, multiply, and divide and take two numbers and return the result. Ask the user for two numbers and an operator, call the right function, and print the answer.",
    },

    prev: {lesson: 2, title: "Arguments & Parameters", href: "../lesson 2/lesson 2.html"},
    next: {lesson: 4, title: "Designing with Functions", href: "../lesson 4/lesson 4.html"},
};
