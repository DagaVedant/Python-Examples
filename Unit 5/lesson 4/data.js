export default {
    unit: 5,
    lesson: 4,
    unitLessons: 4,
    unitTitle: "Functions",
    title: "Designing with Functions",
    readTime: 6,

    goal: "In this lesson you will learn how to break a bigger program into small, well-named functions that each do one job, making your code easier to read and fix.",

    learn: [
        "Split a program into focused functions",
        "Give functions clear, descriptive names",
        "Call functions from other functions",
    ],

    idea: "Good programs are built from small functions that each do exactly one thing. When something goes wrong it is easy to find the broken function. When you want to reuse a piece of logic you just call the function again. One function can call another, building up complex behaviour from simple pieces.",

    code: {
        filename: "lesson_5_4.py",
        lines: [
            `def get_name():`,
            `    return input("Enter your name: ")`,
            ``,
            `def get_score():`,
            `    return int(input("Enter your score: "))`,
            ``,
            `def grade(score):`,
            `    if score >= 90:`,
            `        return "A"`,
            `    elif score >= 70:`,
            `        return "B"`,
            `    else:`,
            `        return "C"`,
            ``,
            `def print_report(name, score):`,
            `    print(name, "scored", score, "Grade:", grade(score))`,
            ``,
            `name  = get_name()`,
            `score = get_score()`,
            `print_report(name, score)`,
        ],
        output: [
            "Enter your name: Vedant",
            "Enter your score: 85",
            "Vedant scored 85 Grade: B",
        ],
    },

    practice: [
        `Take a program you wrote in a previous lesson and refactor it by moving each logical step into its own function.`,
        `Write a program that uses at least four functions. One of them should call another to build up a final result.`,
    ],

    quiz: {
        question: `Why is it better to write many small functions instead of one long block of code?`,
        options: [
            {text: "Python runs small functions faster", correct: false},
            {text: "Small functions are easier to test, reuse, and fix individually", correct: true},
            {text: "You need more functions to use return", correct: false},
            {text: "Python requires at least three functions in every program", correct: false},
        ],
        correct: "Correct! Small, focused functions are easier to understand, test, and fix.",
        wrong: "Not quite. The real benefit is readability and reuse because each function does one clear job.",
    },

    project: {
        title: "Student Report Card",
        desc: "Build a report card program using at least five functions: one to get the student name, one to get three subject scores, one to calculate the average, one to assign a grade, and one to print the full report.",
    },

    prev: {unit: 5, lesson: 3, title: "Return Values"},
    next: {unit: 6, lesson: 1, title: "Creating & Indexing Lists"},
};
