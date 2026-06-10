export default {
    unit: 4,
    lesson: 4,
    unitLessons: 4,
    unitTitle: "Repetition & Loops",
    title: "Loops & Decisions",
    readTime: 5,

    goal: "In this lesson you will learn how to put if statements inside loops to filter, count, and search through sequences of values.",

    learn: [
        "Put an if statement inside a for or while loop",
        "Count items that match a condition",
        "Use break to exit a loop early",
    ],

    idea: "Loops and decisions are extremly useful when you combine them. You can check a condition on every value the loop visits, and count the ones that match and skip the ones that don't, or stop the loop when you find what you need using `break`.",

    code: {
        filename: "lesson_4_4.py",
        lines: [
            `# Count even numbers from 1 to 20`,
            `count = 0`,
            `for n in range(1, 21):`,
            `    if n % 2 == 0:`,
            `        count = count + 1`,
            `print("Even numbers:", count)`,
            ``,
            `# Stop as soon as we find a match`,
            `names = ["Alice", "Bob", "Charlie", "Diana"]`,
            ``,
            `for name in names:`,
            `    if name == "Charlie":`,
            `        print("Found Charlie!")`,
            `        break`,
        ],
        output: [
            "Even numbers: 10",
            "Found Charlie!",
        ],
    },

    practice: [
        `Loop through numbers 1 to 100 and count how many are divisible by both 3 and 7. Print the count at the end. Remember to use the modulus operator % to check for divisibility and don't double count multiples of both 3 and 7!`,
        `Ask the user to enter words one at a time in a while loop. Stop when they type <code>quit</code> and print how many words they entered.`,
    ],

    quiz: {
        question: `What does <code>break</code> do inside a loop?`,
        options: [
            {text: "It pauses the loop for one iteration", correct: false},
            {text: "It exits the loop immediately", correct: true},
            {text: "It skips the current iteration and continues", correct: false},
            {text: "It resets the loop variable to zero", correct: false},
        ],
        correct: "Correct! break exits the loop immediately, so no more iterations run after it.",
        wrong: "Not quite. break stops the loop completely. To skip just one iteration you would use continue.",
    },

    project: {
        title: "Word Filter",
        desc: "Store a list of at least 8 words. Loop through the list and print only the words that are longer than 4 characters. At the end print how many words passed the filter.",
    },

    prev: {unit: 4, lesson: 3, title: "while Loops"},
    next: {unit: 5, lesson: 1, title: "Defining & Calling Functions"},
};
