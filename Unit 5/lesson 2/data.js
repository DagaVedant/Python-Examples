const LESSON = {
    unit: 5,
    lesson: 2,
    unitLessons: 4,
    unitTitle: "Functions",
    title: "Arguments & Parameters",
    readTime: 5,

    goal: "In this lesson you will learn how to pass information into a function so it can do its job on different inputs each time you call it.",

    learn: [
        "Define a function with parameters",
        "Pass arguments when calling a function",
        "Use multiple parameters",
    ],

    idea: "A parameter is a variable you list inside the brackets of def. An argument is the actual value you pass in when you call the function. Parameters let you write one function that works for many different inputs rather than writing a separate function for each case.",

    code: {
        filename: "lesson_5_2.py",
        lines: [
            `# One parameter`,
            `def greet(name):`,
            `    print("Hello,", name)`,
            ``,
            `greet("Alice")`,
            `greet("Bob")`,
            ``,
            `# Multiple parameters`,
            `def describe_pet(name, animal):`,
            `    print(name, "is a", animal)`,
            ``,
            `describe_pet("Rex", "dog")`,
            `describe_pet("Whiskers", "cat")`,
        ],
        output: [
            "Hello, Alice",
            "Hello, Bob",
            "Rex is a dog",
            "Whiskers is a cat",
        ],
    },

    practice: [
        `Write a function called <code>area(width, height)</code> that prints the area of a rectangle. Call it with three different sets of numbers.`,
        `Write a function called <code>introduce(name, age, city)</code> that prints a sentence using all three values. Call it twice.`,
    ],

    quiz: {
        question: `What is the difference between a <strong>parameter</strong> and an <strong>argument</strong>?`,
        options: [
            {text: "They are the same thing, just different words", correct: false},
            {text: "A parameter is in the def line; an argument is the value passed in", correct: true},
            {text: "An argument is in the def line; a parameter is the value passed in", correct: false},
            {text: "Parameters are for strings; arguments are for numbers", correct: false},
        ],
        correct: "Correct! Parameters are the placeholders in the def line. Arguments are the real values you pass when calling.",
        wrong: "Not quite. Parameters go in the def line as placeholders. Arguments are the actual values you call the function with.",
    },

    project: {
        title: "Personalised Greeting Card",
        desc: "Write a function called <code>greeting_card(name, occasion, message)</code>. It should print a nicely formatted card using all three parameters. Call it at least three times for different people and occasions.",
    },

    prev: {unit: 5, lesson: 1, title: "Defining & Calling Functions", href: "../lesson 1/lesson 1.html"},
    next: {unit: 5, lesson: 3, title: "Return Values", href: "../lesson 3/lesson 3.html"},
};
