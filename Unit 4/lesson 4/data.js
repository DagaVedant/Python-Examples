export default {
    format: "v2",
    unit: 4,
    lesson: 4,
    unitLessons: 4,
    unitTitle: "Repetition & Loops",
    title: "Loops & Decisions",
    readTime: 30,

    goal: "In this lesson you will learn how to put if statements inside loops to filter values, count matches, and stop early with break.",

    learn: [
        "Put an if inside a for or while loop",
        "Count items that match a condition",
        "Use break to exit a loop early",
    ],

    idea: `Loops and decisions are powerful together. On every trip through the loop, you can check a condition: count the matches, skip the rest, or stop when you find what you need.

<code>break</code> leaves the loop right away — no more items are checked after that.`,

    code: {
        filename: "filter_count.py",
        lines: [
            `# Count even numbers from 1 to 10`,
            `count = 0`,
            `for n in range(1, 11):`,
            `    if n % 2 == 0:`,
            `        count = count + 1`,
            `print("Even numbers:", count)`,
            ``,
            `# Stop when we find a match`,
            `target = "Charlie"`,
            `names = ["Alice", "Bob", "Charlie", "Diana"]`,
            ``,
            `for name in names:`,
            `    if name == target:`,
            `        print("Found", target)`,
            `        break`,
        ],
        output: [
            "Even numbers: 5",
            "Found Charlie",
        ],
    },

    changeOneLine: `In the editor above, change <code>target = "Charlie"</code> to <code>target = "Diana"</code>. Press <strong>Run</strong>. The second line should say Found Diana.`,

    code2: {
        filename: "long_words.py",
        lines: [
            `words = ["cat", "tiger", "dog", "elephant"]`,
            `for word in words:`,
            `    if len(word) > 3:`,
            `        print(word)`,
        ],
        output: [
            "tiger",
            "elephant",
        ],
    },

    practice: [
        {
            text: `Count how many numbers from 1 to 20 are divisible by 3. Print the count at the end.`,
            starter: [
                `count = 0`,
                `for n in range(1, 21):`,
                `    if n % 3 == 0:`,
                `        # Add 1 to count`,
                `        `,
                `print("Count:", count)`,
            ].join("\n"),
            gradingNote: `Pass if count ends at 6 (3,6,9,12,15,18) using a for loop with an if and % 3.`,
        },
        {
            text: `Loop through the list. Print Found! and break when you see banana.`,
            starter: [
                `fruits = ["apple", "pear", "banana", "kiwi"]`,
                `for fruit in fruits:`,
                `    if fruit == "banana":`,
                `        print()`,
                `        # Leave the loop early`,
                `        `,
            ].join("\n"),
            gradingNote: `Pass if the loop prints Found! (or similar) when fruit is banana and uses break so it stops there.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>break</code> do inside a loop?`,
            options: [
                { text: "It pauses for one turn", correct: false },
                { text: "It exits the loop immediately", correct: true },
                { text: "It skips one item then continues", correct: false },
                { text: "It resets the loop variable to zero", correct: false },
            ],
            correct: "break leaves the loop right away — later items are not visited.",
            wrong: "break stops the whole loop. Skipping one item is continue (not in this lesson).",
        },
        {
            question: `Why put <code>if</code> inside a loop?`,
            options: [
                { text: "Loops cannot run without if", correct: false },
                { text: "To check a condition on each value", correct: true },
                { text: "To make range() work", correct: false },
                { text: "To delete variables", correct: false },
            ],
            correct: "Each pass can test the current value — count, print, or break.",
            wrong: "if inside a loop lets you decide what to do for each item.",
        },
        {
            question: `After <code>break</code> runs, what happens to the rest of the loop?`,
            options: [
                { text: "The remaining items still run", correct: false },
                { text: "Nothing else in that loop runs", correct: true },
                { text: "Python restarts from the first item", correct: false },
                { text: "Only print() lines are skipped", correct: false },
            ],
            correct: "Once break fires, the loop is over.",
            wrong: "break ends the loop completely for this run.",
        },
    ],

    project: {
        title: "Word Filter",
        desc: "Loop through the word list. Print only words longer than 4 letters. At the end, print how many words passed the filter.",
        starter: [
            `words = ["sun", "planet", "code", "galaxy", "hi", "python", "star", "orbit"]`,
            `passed = 0`,
            ``,
            `for word in words:`,
            `    if len(word) > 4:`,
            `        print(word)`,
            `        # Add 1 to passed`,
            `        `,
            ``,
            `print("Passed:", passed)`,
        ].join("\n"),
    },

    prev: { unit: 4, lesson: 3, title: "while Loops" },
    next: { unit: 5, lesson: 1, title: "Defining & Calling Functions" },
};
