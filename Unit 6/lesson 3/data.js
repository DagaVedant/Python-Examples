const LESSON = {
    unit: 6,
    lesson: 3,
    unitLessons: 4,
    unitTitle: "Lists",
    title: "Looping Through Lists",
    readTime: 5,

    goal: "In this lesson you will learn how to visit every item in a list automatically using a for loop, and use that to find totals, maximums, and summaries.",

    learn: [
        "Loop over every item in a list",
        "Accumulate a total from a list",
        "Find the largest or smallest item",
    ],

    idea: "A for loop can go through every item in a list one by one. Each time through the loop, the loop variable holds the current item. This lets you process an entire list with just a few lines by adding everything up, comparing items, or printing each one with extra formatting.",

    code: {
        filename: "lesson_6_3.py",
        lines: [
            `scores = [72, 88, 91, 65, 79]`,
            ``,
            `# Print each score`,
            `for score in scores:`,
            `    print(score)`,
            ``,
            `# Find the total`,
            `total = 0`,
            `for score in scores:`,
            `    total = total + score`,
            `print("Total:", total)`,
            `print("Average:", total / len(scores))`,
            ``,
            `# Find the highest`,
            `highest = scores[0]`,
            `for score in scores:`,
            `    if score > highest:`,
            `        highest = score`,
            `print("Highest:", highest)`,
        ],
        output: [
            "72", "88", "91", "65", "79",
            "Total: 395",
            "Average: 79.0",
            "Highest: 91",
        ],
    },

    practice: [
        `Create a list of 6 temperatures. Loop through and print each one. Then calculate and print the average.`,
        `Loop through a list of words and print only the ones that start with the letter "a".`,
    ],

    quiz: {
        question: `What does <code>for item in my_list:</code> do?`,
        options: [
            {text: "Runs the loop once for each index number", correct: false},
            {text: "Runs the loop once for each item, assigning it to item", correct: true},
            {text: "Only works if the list contains numbers", correct: false},
            {text: "Runs the loop from index 1 to the end", correct: false},
        ],
        correct: "Correct! Each time through the loop, item holds the next value from the list.",
        wrong: "Not quite. for item in my_list gives you each value directly, not the index.",
    },

    project: {
        title: "Class Gradebook",
        desc: "Store a list of student names and a matching list of scores. Loop through both lists together using indexes. Print each student's name and score, and at the end print the class average and the name of the top scorer.",
    },

    prev: {unit: 6, lesson: 2, title: "Adding & Removing Items", href: "../lesson 2/lesson 2.html"},
    next: {unit: 6, lesson: 4, title: "Useful List Methods", href: "../lesson 4/lesson 4.html"},
};
