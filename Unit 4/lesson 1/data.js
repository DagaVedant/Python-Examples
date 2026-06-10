export default {
    unit: 4,
    lesson: 1,
    unitLessons: 4,
    unitTitle: "Repetition & Loops",
    title: "for Loops",
    readTime: 5,

    goal: "In this lesson you will learn how to repeat a block of code a fixed number of times using a for loop, so you never have to copy and paste the same lines.",

    learn: [
        "Write a for loop",
        "Use the loop variable inside the block",
        "Repeat code a fixed number of times",
    ],

    idea: "A for loop runs a block of code once for each item in a sequence. Each time through the loop, the loop variable holds the current item. This lets you repeat the same action over and over.",

    code: {
        filename: "Unit_4_Lesson_1.py",
        lines: [
            `# Print numbers 1 to 5`,
            `for i in range(1, 6):`,
            `    print(i)`,
            ``,
            `# Loop over a list of names`,
            `names = ["Alice", "Bob", "Charlie"]`,
            ``,
            `for name in names:`,
            `    print("Hello,", name)`,
            ``,
            `# Running total`,
            `total = 0`,
            `for num in range(1, 11):`,
            `    total = total + num`,
            `print("Sum 1-10:", total)`,
        ],
        output: [
            "1", "2", "3", "4", "5",
            "Hello, Alice",
            "Hello, Bob",
            "Hello, Charlie",
            "Sum 1-10: 55",
        ],
    },

    practice: [
        `Write a for loop that prints the 6 times table from 6 * 1 up to 6 * 10.`,
        `Use a for loop to print every number from 2 to 20.`,
    ],

    quiz: {
        question: `How many times does the loop run? <code>for i in range(3, 8):</code>`,
        options: [
            {text: "8 times", correct: false},
            {text: "5 times, from 3 up to but not including 8", correct: true},
            {text: "3 times", correct: false},
            {text: "6 times, including both 3 and 8", correct: false},
        ],
        correct: "Correct! range(3, 8) generates 3, 4, 5, 6, 7, which is 5 values.",
        wrong: "Not quite. range(start, stop) goes from start up to but not including stop.",
    },

    project: {
        title: "Times Table Printer",
        desc: "Ask the user which times table they want (e.g. 7). Use a for loop to print every result from 1 to 12, formatted like: 7 x 1 = 7.",
    },

    prev: {unit: 3, lesson: 4, title: "Combining Conditions"},
    next: {unit: 4, lesson: 2, title: "range() in Depth"},
};
