const LESSON = {
    unit: 2,
    lesson: 3,
    unitTitle: "Number Calculations & Data",
    title: "Numbers from Input",
    readTime: 5,

    goal: "In this lesson you will combine input(), casting, and arithmetic to build programs that take numbers from the user and calculate real results.",

    learn: [
        "Cast input to int and float before doing math",
        "Build multi-step calculations from user input",
        "Round results with round()",
    ],

    idea: "Every value that comes back from input() is a string. That means you cannot do math with it until you convert it. Wrap it in int() for whole numbers or float() for decimals. Once you have real numbers you can use them in any calculation you like.",

    code: {
        filename: "lesson_2_3.py",
        lines: [
            `# Get numbers from the user and do maths`,
            `price = float(input("Price per item: "))`,
            `qty = int(input("How many? "))`,
            ``,
            `total = price * qty`,
            `discount = total * 0.1`,
            `final = total - discount`,
            ``,
            `print("Subtotal: ", round(total, 2))`,
            `print("Discount: ", round(discount, 2))`,
            `print("You pay:  ", round(final, 2))`,
        ],
        output: [
            "Price per item: 12.50",
            "How many? 3",
            "Subtotal:  37.5",
            "Discount:  3.75",
            "You pay:   33.75",
        ],
    },

    practice: [
        `Ask the user for the length and width of a room in metres. Calculate and print the area and the cost of flooring if each square metre costs £8.50.`,
        `Ask for a starting number and a multiplier. Print the result rounded to 2 decimal places.`,
    ],

    quiz: {
        question: `A user types <code>5</code> when asked by input(). What happens when you try <code>x + 3</code> without casting?`,
        options: [
            {text: "It prints 8, because 5 + 3 = 8", correct: false},
            {text: "It causes a TypeError because x is a string, not a number", correct: true},
            {text: "It prints 53, joining the two values together", correct: false},
            {text: "Python handles the conversion automatically", correct: false},
        ],
        correct: "Correct! &nbsp; input() returns a string, so you must cast it with int() or float() before adding.",
        wrong: "Not quite. &nbsp; input() always returns a string — you need int() or float() first.",
    },

    project: {
        title: "Shopping Calculator",
        desc: "Ask the user for an item name, its price, and how many they want. Apply a 15% discount if the total is over £20. Print a short receipt showing the item, subtotal, any discount, and the final amount.",
    },

    prev: {lesson: 2, title: "Integer vs Float Division", href: "../lesson 2/lesson 2.html"},
    next: {lesson: 4, title: "Math Library Basics", href: "../lesson 4/lesson 4.html"},
};
