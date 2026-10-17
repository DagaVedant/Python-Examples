export default {
    format: "v2",
    unit: 5,
    lesson: 2,
    unitLessons: 4,
    unitTitle: "Functions",
    title: "Arguments & Parameters",
    readTime: 30,

    goal: "In this lesson you will learn how to pass values into a function so the same function can work with different names, numbers, or pets each time you call it.",

    learn: [
        "Define a function with parameters",
        "Pass arguments when calling a function",
        "Use more than one parameter",
    ],

    idea: `A <strong>parameter</strong> is a variable you write inside the parentheses on the <code>def</code> line. An <strong>argument</strong> is the real value you pass in when you call the function.

Parameters let you write one function that works for many different inputs — like greeting Alice and Bob with the same <code>greet</code> function.`,

    code: {
        filename: "greet_name.py",
        lines: [
            `# One parameter`,
            `def greet(name):`,
            `    print("Hello,", name)`,
            ``,
            `greet("Alice")`,
            `greet("Bob")`,
            ``,
            `# Two parameters`,
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

    changeOneLine: `In the editor above, change the first call from <code>greet("Alice")</code> to <code>greet("Maya")</code>. Press <strong>Run</strong>. The first line should say Hello, Maya.`,

    code2: {
        filename: "add_print.py",
        lines: [
            `def show_sum(a, b):`,
            `    print(a, "+", b, "=", a + b)`,
            ``,
            `show_sum(3, 4)`,
            `show_sum(10, 2)`,
        ],
        output: [
            "3 + 4 = 7",
            "10 + 2 = 12",
        ],
    },

    practice: [
        {
            text: `Finish <code>greet(name)</code> so it prints a hello using the name. Call it with two different names.`,
            starter: [
                `def greet(name):`,
                `    # Print Hello and the name`,
                `    print()`,
                ``,
                `# Call greet twice with different names`,
                `greet("Sam")`,
                ``,
            ].join("\n"),
            gradingNote: `Pass if greet has a name parameter, prints using that parameter, and is called at least twice with different string arguments.`,
        },
        {
            text: `Finish <code>area(width, height)</code> so it prints the area (width times height). Call it with two different pairs of numbers.`,
            starter: [
                `def area(width, height):`,
                `    # Print width * height`,
                `    print()`,
                ``,
                `area(4, 5)`,
                `# Call area again with different numbers`,
                ``,
            ].join("\n"),
            gradingNote: `Pass if area takes width and height, prints their product, and is called at least twice with numeric arguments.`,
        },
    ],

    quiz: [
        {
            question: `What is the difference between a parameter and an argument?`,
            options: [
                { text: "They are the same thing", correct: false },
                { text: "A parameter is in the def line; an argument is the value passed in", correct: true },
                { text: "An argument is in the def line; a parameter is the value passed in", correct: false },
                { text: "Parameters are for strings; arguments are for numbers", correct: false },
            ],
            correct: "Parameters are placeholders in the def line. Arguments are the real values you pass when calling.",
            wrong: "Parameters go in the def line. Arguments are the actual values you call the function with.",
        },
        {
            question: `In <code>def greet(name):</code>, what is <code>name</code>?`,
            options: [
                { text: "An argument", correct: false },
                { text: "A parameter", correct: true },
                { text: "A print statement", correct: false },
                { text: "A comment", correct: false },
            ],
            correct: "name sits in the def line, so it is a parameter.",
            wrong: "Names listed inside the parentheses on the def line are parameters.",
        },
        {
            question: `What does <code>greet("Ava")</code> pass into the function?`,
            options: [
                { text: "The argument \"Ava\"", correct: true },
                { text: "Nothing — greet needs no values", correct: false },
                { text: "Only the word greet", correct: false },
                { text: "A blank line", correct: false },
            ],
            correct: "\"Ava\" is the argument passed into the name parameter.",
            wrong: "The value inside the call's parentheses is the argument.",
        },
    ],

    project: {
        title: "Greeting Card",
        desc: "Finish <code>greeting_card(name, occasion, message)</code> so it prints a short card using all three values. Call it at least two times for different people.",
        starter: [
            `def greeting_card(name, occasion, message):`,
            `    print("=== Card ===")`,
            `    print("To:", name)`,
            `    # Print the occasion`,
            `    print()`,
            `    # Print the message`,
            `    print()`,
            ``,
            `greeting_card("Sam", "Birthday", "Have a great day!")`,
            `# Call greeting_card again for someone else`,
            ``,
        ].join("\n"),
    },

    prev: { unit: 5, lesson: 1, title: "Defining & Calling Functions" },
    next: { unit: 5, lesson: 3, title: "Return Values" },
};
