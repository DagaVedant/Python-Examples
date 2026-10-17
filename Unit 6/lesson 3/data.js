export default {
    format: "v2",
    unit: 6,
    lesson: 3,
    unitLessons: 4,
    unitTitle: "Lists",
    title: "Looping Through Lists",
    readTime: 30,

    goal: "In this lesson you will learn how to visit every item in a list with a for loop, and use that to print items, add totals, and find the highest value.",

    learn: [
        "Loop over every item in a list",
        "Add up a total from a list",
        "Find the largest item",
    ],

    idea: `A <code>for</code> loop can walk through every item in a list one by one. Each time, the loop variable holds the current item.

That lets you print each value, add them into a total, or keep track of the biggest number — all with a few lines of code.`,

    code: {
        filename: "scores.py",
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
            "72",
            "88",
            "91",
            "65",
            "79",
            "Total: 395",
            "Average: 79.0",
            "Highest: 91",
        ],
    },

    changeOneLine: `In the editor above, change the first score in the list from <code>72</code> to <code>99</code>. Press <strong>Run</strong>. The highest should become <code>99</code>.`,

    code2: {
        filename: "pets.py",
        lines: [
            `pets = ["dog", "cat", "fish"]`,
            `for pet in pets:`,
            `    print("I like my", pet)`,
            ``,
            `temps = [15, 20, 25]`,
            `total = 0`,
            `for t in temps:`,
            `    total = total + t`,
            `print("Avg:", total / len(temps))`,
        ],
        output: [
            "I like my dog",
            "I like my cat",
            "I like my fish",
            "Avg: 20.0",
        ],
    },

    practice: [
        {
            text: `Loop through a short list of temperatures and print each one. Then print the total. Fill in the blanks.`,
            starter: [
                `temps = [16, 20, 22, 18]`,
                `for t in temps:`,
                `    print()`,
                ``,
                `total = 0`,
                `for t in temps:`,
                `    # Add t to total`,
                `    `,
                `print("Total:", total)`,
            ].join("\n"),
            gradingNote: `Pass if a for loop prints each temperature and another loop (or same idea) builds a total of 76 that is printed.`,
        },
        {
            text: `Loop through a list of words and print only the ones that start with the letter a. Finish the blank if.`,
            starter: [
                `words = ["apple", "banana", "ant", "car"]`,
                `for w in words:`,
                `    if w[0] == "a":`,
                `        print()`,
            ].join("\n"),
            gradingNote: `Pass if only apple and ant are printed (words starting with a), using a loop over the list.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>for item in my_list:</code> do?`,
            options: [
                { text: "Runs once for each index number only", correct: false },
                { text: "Runs once for each item, assigning it to item", correct: true },
                { text: "Only works if the list holds numbers", correct: false },
                { text: "Runs from index 1 to the end", correct: false },
            ],
            correct: "Each time through the loop, item holds the next value from the list.",
            wrong: "for item in my_list gives you each value directly, not only indexes.",
        },
        {
            question: `To add every number in a list into total, what goes inside the loop?`,
            options: [
                { text: `total = total + score`, correct: true },
                { text: `total = score`, correct: false },
                { text: `print(len(scores))`, correct: false },
                { text: `scores.append(total)`, correct: false },
            ],
            correct: "Add the current score into total each time: total = total + score.",
            wrong: "You need to keep adding the current item into total, not replace total.",
        },
        {
            question: `If highest starts as scores[0], when should you update it?`,
            options: [
                { text: "When score is smaller than highest", correct: false },
                { text: "When score is greater than highest", correct: true },
                { text: "On every loop, always", correct: false },
                { text: "Never — highest cannot change", correct: false },
            ],
            correct: "Update highest only when you find a bigger score.",
            wrong: "Keep the bigger value: update when score > highest.",
        },
    ],

    project: {
        title: "Class Gradebook",
        desc: "Finish the gradebook. Loop through names and scores using indexes. Print each student, then print the class total and the top score.",
        starter: [
            `names = ["Ava", "Leo", "Mia"]`,
            `scores = [88, 92, 85]`,
            ``,
            `i = 0`,
            `while i < len(names):`,
            `    print(names[i], scores[i])`,
            `    i = i + 1`,
            ``,
            `# Total all scores with a for loop`,
            `total = 0`,
            `for s in scores:`,
            `    `,
            `print("Total:", total)`,
            ``,
            `# Find highest score`,
            `highest = scores[0]`,
            `for s in scores:`,
            `    if s > highest:`,
            `        `,
            `print("Top score:", highest)`,
        ].join("\n"),
    },

    prev: { unit: 6, lesson: 2, title: "Adding & Removing Items" },
    next: { unit: 6, lesson: 4, title: "Useful List Methods" },
};
