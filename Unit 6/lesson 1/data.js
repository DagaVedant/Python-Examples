export default {
    format: "v2",
    unit: 6,
    lesson: 1,
    unitLessons: 10,
    unitTitle: "Lists",
    title: "What is a List",
    readTime: 20,

    goal: "In this lesson you will learn what a list is and why one list can hold many values in order.",

    learn: [
        "A list stores many values in one variable",
        "Items stay in a fixed order",
        "Lists are great for collections like scores or names",
    ],

    idea: `A <strong>list</strong> is a collection of values kept in order inside one variable. Instead of making <code>score1</code>, <code>score2</code>, and <code>score3</code>, you keep them together: <code>scores = [80, 90, 75]</code>.

    Think of a shopping list or a playlist — many items, one place, always in order.`,

    code: {
        filename: "idea.py",
        lines: [
            `# Three separate variables — messy`,
            `a = "apple"`,
            `b = "banana"`,
            `c = "cherry"`,
            `print(a, b, c)`,
            ``,
            `# One list — cleaner`,
            `fruit = ["apple", "banana", "cherry"]`,
            `print(fruit)`,
            `print("How many:", len(fruit))`,
        ],
        output: [
            "apple banana cherry",
            "['apple', 'banana', 'cherry']",
            "How many: 3",
        ],
    },

    changeOneLine: `In the editor above, change <code>"cherry"</code> to <code>"grape"</code> in the list. Press <strong>Run</strong>. The printed list should end with <code>grape</code>.`,

    code2: {
        filename: "team.py",
        lines: [
            `team = ["Ava", "Ben", "Cara"]`,
            `print(team)`,
            `print("Players:", len(team))`,
        ],
        output: [
            "['Ava', 'Ben', 'Cara']",
            "Players: 3",
        ],
    },

    practice: [
        {
            text: `Make a list of three pets. Print the whole list, then print how many pets using <code>len()</code>.`,
            hint: `Put three pet names inside square brackets with commas. Use print(pets) for the list, then len(pets) inside another print for the count.`,
            starterTip: `Try pets = ["dog", "cat", "fish"], then print(pets) and print("How many:", len(pets)).`,
            starter: [
                `# Three pet names`,
                `pets = []`,
                `print()`,
                `print("How many:", )`,
            ].join("\n"),
            gradingNote: `Pass if pets is a list of three items, the list is printed, and len(pets) is used.`,
        },
        {
            text: `Create a list of four colors and print only the length of the list.`,
            hint: `The colors list is already there. You only need one print — pass len(colors) to print so you see the number 4.`,
            starterTip: `Fill in the blank print like this: print(len(colors)).`,
            starter: [
                `colors = ["red", "blue", "green", "yellow"]`,
                `# Print the length`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if the program prints 4 using len(colors) (or prints the length of a 4-item list).`,
        },
    ],

    quiz: [
        {
            question: `What is a list best for?`,
            options: [
                { text: "Storing one number only", correct: false },
                { text: "Storing many values in order in one variable", correct: true },
                { text: "Deleting the whole program", correct: false },
                { text: "Drawing pictures only", correct: false },
            ],
            correct: "A list keeps many ordered values in one variable.",
            wrong: "Lists hold collections — names, scores, and more — in order.",
        },
        {
            question: `Why use a list instead of score1, score2, score3?`,
            options: [
                { text: "Lists are slower on purpose", correct: false },
                { text: "One name can hold the whole group", correct: true },
                { text: "Python forbids many variables", correct: false },
                { text: "Lists cannot hold numbers", correct: false },
            ],
            correct: "One list keeps the related values together under one name.",
            wrong: "A list groups related values so you manage them as one collection.",
        },
        {
            question: `What does <code>len(fruit)</code> tell you?`,
            options: [
                { text: "The first item in fruit", correct: false },
                { text: "How many items are in fruit", correct: true },
                { text: "Whether fruit is sorted", correct: false },
                { text: "The type of each item", correct: false },
            ],
            correct: "len() returns the number of items in the list.",
            wrong: "len() counts items; it does not return the first value.",
        },
    ],

    project: {
        title: "My Favorites List",
        desc: "Make a list of three favorite foods. Print the list and how many foods are in it.",
        starter: [
            `foods = ["pizza", "tacos", "mango"]`,
            `# Print the list`,
            `print()`,
            `# Print how many`,
            `print("Count:", )`,
        ].join("\n"),
    },

    prev: { unit: 5, lesson: 8, title: "Designing with Functions" },
    next: { unit: 6, lesson: 2, title: "Creating Lists" },
};
