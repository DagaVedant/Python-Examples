export default {
    unit: 3,
    lesson: 3,
    unitLessons: 4,
    unitTitle: "Making Decisions",
    title: "elif & Multiple Branches",
    readTime: 5,
 
    goal: "In this lesson you will learn how to handle more than two outcomes by creating chains of conditons using elif.",
 
    learn: [
        "Add extra branches with elif",
        "Order conditions correctly",
        "Map ranges of values to outcomes",
    ],
 
    idea: "elif stands for 'else if'. It lets you check a second condition when the first one was False, then a third, and so on. Python works through each branch from top to bottom and runs the first one that is True.",
 
    code: {
        filename: "lesson_3_3.py",
        lines: [
            `score = int(input("Enter your score: "))`,
            ``,
            `if score >= 90:`,
            `    print("Grade: A")`,
            `elif score >= 80:`,
            `    print("Grade: B")`,
            `elif score >= 70:`,
            `    print("Grade: C")`,
            `elif score >= 60:`,
            `    print("Grade: D")`,
            `else:`,
            `    print("Grade: F")`,
        ],
        output: [
            "Enter your score: 85",
            "Grade: B",
        ],
    },
 
    practice: [
        `Ask the user for a temperature in Celsius. Print <code>Freezing</code> below 0, <code>Cold</code> from 0 to 14, <code>Warm</code> from 15 to 24, and <code>Hot</code> at 25 or above.`,
        `Ask for a number from 1 to 7 and print the corresponding day of the week.`,
    ],
 
    quiz: {
        question: `If a score is 80, which branch runs? <code>if score >= 90</code> / <code>elif score >= 80</code> / <code>elif score >= 70</code>`,
        options: [
            {text: "All three branches run because 80 satisfies the last two", correct: false},
            {text: "elif score >= 80, because it is the first True condition", correct: true},
            {text: "elif score >= 70, because Python picks the lowest match",  correct: false},
            {text: "None of them because Python requires an exact match", correct: false},
        ],
        correct: "Correct! Python runs the first branch that is True and skips the rest.",
        wrong: "Not quite. Python stops at the first True condition, so elif score >= 80.",
    },
 
    project: {
        title: "BMI Calculator",
        desc: "Ask the user for their weight in kg and height in metres. Calculate their BMI (weight / height²). Use if/elif/else to print their category: Underweight (< 18.5), Normal (18.5-24.9), Overweight (25-29.9), or Obese (30 or more).",
    },
 
    prev: {unit: 3, lesson: 2, title: "if / else"},
    next: {unit: 3, lesson: 4, title: "Combining Conditions"},
};