export default {
    unit: 3,
    lesson: 1,
    unitLessons: 4,
    unitTitle: "Making Decisions",
    title: "Comparisons & Booleans",
    readTime: 4,
 
    goal: "In this lesson you will learn how to ask yes or no questions in Python using comparison operators, and understand how True and False values work.",
 
    learn: [
        "Use ==, !=, <, >, <=, >= to compare values",
        "Understand True and False",
        "Predict the result of a comparison",
    ],
 
    idea: "A comparison is a question with a yes or no answer. Python answers it with either True or False (also called Booleans). You can compare numbers, strings, or variables. Comparisons are neccesary for decision making in a program.",
 
    code: {
        filename: "lesson_3_1.py",
        lines: [
            `# Comparing numbers`,
            `print(5 > 3)`,
            `print(5 < 3)`,
            `print(5 == 5)`,
            `print(5 != 3)`,
            ``,
            `# Comparing variables`,
            `age = 16`,
            `print(age >= 18)`,
            `print(age <= 17)`,
            ``,
            `# Comparing strings`,
            `name = "Alice"`,
            `print(name == "Alice")`,
            `print(name == "Bob")`,
        ],
        output: [
            "True",
            "False",
            "True",
            "True",
            "False",
            "True",
            "True",
            "False",
        ],
    },
 
    practice: [
        `Write five comparisons using different operators, and try to figure out what they print before you run it.`,
        `Ask the user for a number and print whether it is greater than 100.`,
    ],
 
    quiz: {
        question: `What does <code>print(10 == 10.0)</code> output?`,
        options: [
            {text: "False, because one is an int and one is a float", correct: false },
            {text: "True, because their values are equal", correct: true  },
            {text: "It causes a TypeError", correct: false },
            {text: "Error, because you can't compare int and float", correct: false },
        ],
        correct: "Correct! Python compares the values, not the data types, so 10 == 10.0 is True.",
        wrong: "Not quite. Python compares the value, so 10 and 10.0 are considered equal.",
    },
 
    project: {
        title: "Number Checker",
        desc: "Ask the user for two numbers. Print whether the first is greater than, less than, or equal to the second using three seperate comparisons.",
    },
 
    prev: {unit: 2, lesson: 4, title: "Math Library Basics"},
    next: {unit: 3, lesson: 2, title: "if / else"},
};