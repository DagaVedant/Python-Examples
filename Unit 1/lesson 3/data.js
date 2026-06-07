const LESSON = {
    unit: 1,
    lesson: 3,
    unitLessons: 5,
    unitTitle: "Getting Started with Python",
    title: "Variables",
    readTime: 5,

    goal: "In this lesson, you will learn about variables in Python, how to store values in variables, and learn how to update a variable",

    learn: [
        "Create and name a variable",
        "Reuse a value without retyping it",
        "Update a variable's value",
    ],

    idea: "a variable is like a container that can hold a value. Instead of writing the same value over and over again, you can store it inside a variable and use it by calling the variable's name. This makes your code easier to read and maintain. You can also update the value of the variable whenever you need to.",

    code: {
        filename: "lesson_1_3.py",
        lines: [
            `# Store values in variables`,
            `player = "Messi"`,
            `goals  = 2`,
            ``,
            `print(player, "scored", goals, "goals")`,
            ``,
            `# Update the variable`,
            `goals = 3`,
            `print(player, "now has", goals, "goals")`,
        ],
        output: [
            "Messi scored 2 goals",
            "Messi now has 3 goals",
        ],
    },

    practice: [
        `Store your name and age in a variable and use ONE print statement to display them in a sentence.`,
        `Create with a variable that is set to 0, then print it. Then update the variable to 10 and print it again.`
    ],

    quiz: {
        question: `What does this print? <code>x = 5  x = 10 print(x)</code>`,
        options: [
            {text: "5 because the first value is permanent", correct: false},
            {text: "10 because the variable was updated", correct: true},
            {text: "Both 5 and 10", correct: false},
            {text: "It will cause an error because you can't change a variable", correct: false},
        ],
        correct: "Correct! The variable x was updated to 10, so that's what gets printed.",
        wrong: "Not quite, because the variable's value can be updated.",
    },

    project: {
        title: "Scoreboard",
        desc: "Create a variable for two players and their scores. Print one line showing their names and scores. Then update the scores and print the line again.",
    },

    prev: {unit: 1, lesson: 2, title: "Output & Formatting", href: "../lesson 2/lesson 2.html"},
    next: {unit: 1, lesson: 4, title: "Input", href: "../lesson 4/lesson 4.html"},
};
