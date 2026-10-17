export default {
    format: "v2",
    unit: 5,
    lesson: 4,
    unitLessons: 8,
    unitTitle: "Functions",
    title: "Multiple Parameters",
    readTime: 22,

    goal: "In this lesson you will learn how to define and call functions with more than one parameter so you can pass several values at once.",

    learn: [
        "List two or more parameters in def",
        "Pass matching arguments in the same order",
        "Use each parameter inside the function",
    ],

    idea: `Functions can take <strong>more than one parameter</strong>. Separate them with commas on the <code>def</code> line: <code>def describe_pet(name, animal):</code>.

When you call the function, pass the same number of arguments in the <strong>same order</strong>. The first argument goes to the first parameter, the second to the second, and so on.`,

    code: {
        filename: "two_params.py",
        lines: [
            `def describe_pet(name, animal):`,
            `    print(name, "is a", animal)`,
            ``,
            `describe_pet("Rex", "dog")`,
            `describe_pet("Whiskers", "cat")`,
            ``,
            `def show_sum(a, b):`,
            `    print(a, "+", b, "=", a + b)`,
            ``,
            `show_sum(3, 4)`,
            `show_sum(10, 2)`,
        ],
        output: [
            "Rex is a dog",
            "Whiskers is a cat",
            "3 + 4 = 7",
            "10 + 2 = 12",
        ],
    },

    changeOneLine: `In the editor above, change <code>describe_pet("Rex", "dog")</code> to <code>describe_pet("Nemo", "fish")</code>. Press <strong>Run</strong>. The first line should say Nemo is a fish.`,

    code2: {
        filename: "area.py",
        lines: [
            `def area(width, height):`,
            `    print("Area:", width * height)`,
            ``,
            `area(4, 5)`,
            `area(3, 3)`,
        ],
        output: [
            "Area: 20",
            "Area: 9",
        ],
    },

    practice: [
        {
            text: `Finish area(width, height) so it prints the product. Call it with two different pairs of numbers.`,
            starter: [
                `def area(width, height):`,
                `    print()`,
                ``,
                `area(4, 5)`,
                ``,
            ].join("\n"),
            gradingNote: `Pass if area takes width and height, prints their product, and is called at least twice.`,
        },
        {
            text: `Finish intro(name, age) so it prints a line using both values. Call it twice.`,
            starter: [
                `def intro(name, age):`,
                `    print()`,
                ``,
                `intro("Sam", 11)`,
                ``,
            ].join("\n"),
            gradingNote: `Pass if intro has two parameters, uses both in a print, and is called at least twice.`,
        },
    ],

    quiz: [
        {
            question: `In describe_pet("Rex", "dog"), which argument goes to animal?`,
            options: [
                { text: "\"Rex\"", correct: false },
                { text: "\"dog\"", correct: true },
                { text: "Neither", correct: false },
                { text: "Both at once into name", correct: false },
            ],
            correct: "Order matches: first argument to name, second to animal.",
            wrong: "Arguments line up left to right with the parameters.",
        },
        {
            question: `How do you separate multiple parameters on the def line?`,
            options: [
                { text: "With commas", correct: true },
                { text: "With periods", correct: false },
                { text: "With the word and", correct: false },
                { text: "You cannot have more than one", correct: false },
            ],
            correct: "List parameters inside the parentheses, separated by commas.",
            wrong: "Use commas between parameter names.",
        },
        {
            question: `What happens if you call a two-parameter function with only one argument?`,
            options: [
                { text: "Python fills in a random second value", correct: false },
                { text: "You usually get an error about missing arguments", correct: true },
                { text: "The function runs twice", correct: false },
                { text: "Nothing — Python ignores parameters", correct: false },
            ],
            correct: "The number of arguments should match the number of parameters.",
            wrong: "Pass one argument per parameter, in order.",
        },
    ],

    project: {
        title: "Greeting Card",
        desc: "Finish greeting_card(name, occasion, message) so it prints a short card using all three values. Call it at least two times for different people.",
        starter: [
            `def greeting_card(name, occasion, message):`,
            `    print("=== Card ===")`,
            `    print("To:", name)`,
            `    print()`,
            `    print()`,
            ``,
            `greeting_card("Sam", "Birthday", "Have a great day!")`,
            ``,
        ].join("\n"),
    },

    prev: { unit: 5, lesson: 3, title: "One Parameter" },
    next: { unit: 5, lesson: 5, title: "Return Values" },
};
