export default {
    format: "v2",
    unit: 4,
    lesson: 1,
    unitLessons: 4,
    unitTitle: "Repetition & Loops",
    title: "for Loops",
    readTime: 30,

    goal: "In this lesson you will learn how to repeat a block of code with a for loop, so you do not have to copy and paste the same lines.",

    learn: [
        "Write a for loop",
        "Use the loop variable inside the block",
        "Repeat code a fixed number of times",
    ],

    idea: `A <strong>for loop</strong> runs a block of code once for each item in a sequence. Each time through, the <strong>loop variable</strong> holds the current item.

You write <code>for name in names:</code>, then indent the lines that should repeat. Python visits every item and runs those lines again.`,

    code: {
        filename: "greetings.py",
        lines: [
            `# Loop over a list of names`,
            `names = ["Alice", "Bob", "Charlie"]`,
            ``,
            `for name in names:`,
            `    print("Hello,", name)`,
            ``,
            `# Repeat with range (more next lesson)`,
            `for i in range(1, 4):`,
            `    print("Lap", i)`,
        ],
        output: [
            "Hello, Alice",
            "Hello, Bob",
            "Hello, Charlie",
            "Lap 1",
            "Lap 2",
            "Lap 3",
        ],
    },

    changeOneLine: `In the editor above, add <code>"Diana"</code> to the names list so it has four names. Press <strong>Run</strong>. You should see a fourth Hello line for Diana.`,

    code2: {
        filename: "score_board.py",
        lines: [
            `scores = [10, 25, 40]`,
            `for score in scores:`,
            `    print("Points:", score)`,
        ],
        output: [
            "Points: 10",
            "Points: 25",
            "Points: 40",
        ],
    },

    practice: [
        {
            text: `Finish the loop so it prints each fruit on its own line.`,
            starter: [
                `fruits = ["apple", "banana", "cherry"]`,
                `# Print each fruit`,
                `for fruit in fruits:`,
                `    print()`,
            ].join("\n"),
            gradingNote: `Pass if a for loop walks the fruits list and prints each fruit (or a line that includes each fruit).`,
        },
        {
            text: `Use a for loop with range to print Lap 1, Lap 2, and Lap 3. Fill in the blanks.`,
            starter: [
                `# Print Lap 1 through Lap 3`,
                `for i in range(1, 4):`,
                `    print()`,
            ].join("\n"),
            gradingNote: `Pass if output includes Lap 1, Lap 2, and Lap 3 (for + range is expected).`,
        },
    ],

    quiz: [
        {
            question: `How many times does this loop run? <code>for name in ["A", "B", "C"]:</code>`,
            options: [
                { text: "1 time", correct: false },
                { text: "2 times", correct: false },
                { text: "3 times", correct: true },
                { text: "Forever", correct: false },
            ],
            correct: "There are three items in the list, so the loop body runs three times.",
            wrong: "Count the items in the list. The loop runs once per item.",
        },
        {
            question: `What is the loop variable in <code>for color in colors:</code>?`,
            options: [
                { text: "for", correct: false },
                { text: "color", correct: true },
                { text: "colors", correct: false },
                { text: "print", correct: false },
            ],
            correct: "color is the loop variable. It holds one item from colors each time.",
            wrong: "The name between for and in is the loop variable.",
        },
        {
            question: `Why indent the lines under a for loop?`,
            options: [
                { text: "Indentation looks nicer but does nothing", correct: false },
                { text: "Those lines are the block that repeats", correct: true },
                { text: "Indentation makes the loop run faster", correct: false },
                { text: "Only comments need to be indented", correct: false },
            ],
            correct: "Indented lines belong to the loop and run each time through.",
            wrong: "In Python, indentation shows which lines are inside the loop.",
        },
    ],

    project: {
        title: "Times Table Printer",
        desc: "Finish the times table. Use a for loop to print n x 1 through n x 12, like 7 x 1 = 7.",
        starter: [
            `n = 7`,
            `# Print n x 1 = ... up through n x 12`,
            `for i in range(1, 13):`,
            `    print()`,
        ].join("\n"),
    },

    prev: { unit: 3, lesson: 4, title: "Combining Conditions" },
    next: { unit: 4, lesson: 2, title: "range() in Depth" },
};
