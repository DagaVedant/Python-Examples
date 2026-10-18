export default {
    format: "v2",
    unit: 4,
    lesson: 3,
    unitLessons: 10,
    unitTitle: "Repetition & Loops",
    title: "range() Basics",
    readTime: 22,

    goal: "In this lesson you will learn how range() makes a sequence of numbers so a for loop can repeat a fixed number of times.",

    learn: [
        "Use range(n) to count from 0 up to n-1",
        "Pair for with range to repeat n times",
        "Remember that the stop number is not included",
    ],

    idea: `<code>range(n)</code> makes the numbers <code>0, 1, 2, …, n-1</code>. It stops <em>before</em> <code>n</code>.

Use it with a for loop when you know how many times to repeat: <code>for i in range(5):</code> runs the block five times with <code>i</code> equal to 0, 1, 2, 3, then 4.

You do not need a list of numbers written by hand, <code>range</code> builds them for you.`,

    code: {
        filename: "count.py",
        lines: [
            `# range(5) -> 0, 1, 2, 3, 4`,
            `for i in range(5):`,
            `    print("Count:", i)`,
            ``,
            `# Repeat the same message 3 times`,
            `for i in range(3):`,
            `    print("Beep")`,
        ],
        output: [
            "Count: 0",
            "Count: 1",
            "Count: 2",
            "Count: 3",
            "Count: 4",
            "Beep",
            "Beep",
            "Beep",
        ],
    },

    changeOneLine: `In the editor above, change <code>range(3)</code> to <code>range(4)</code> in the Beep loop. Press <strong>Run</strong>. You should see four Beep lines.`,

    code2: {
        filename: "laps.py",
        lines: [
            `for i in range(4):`,
            `    print("Lap number", i)`,
        ],
        output: [
            "Lap number 0",
            "Lap number 1",
            "Lap number 2",
            "Lap number 3",
        ],
    },

    practice: [
        {
            text: `Use range to print Hi! exactly four times.`,
            hint: `range(4) runs the loop body four times. Put your message inside print() on the indented line.`,
            starterTip: `Use print("Hi!") with four spaces before it. That line must sit inside for i in range(4):.`,
            starter: [
                `for i in range(4):`,
                `    print()`,
            ].join("\n"),
            gradingNote: `Pass if Hi! (or similar greeting) prints four times using for + range.`,
        },
        {
            text: `Print the numbers from range(5). One number per line.`,
            hint: `Each trip through the loop, n is the next number: 0, then 1, 2, 3, and 4. Print n.`,
            starterTip: `Change print() to print(n). You should get five lines: 0 through 4.`,
            starter: [
                `for n in range(5):`,
                `    print()`,
            ].join("\n"),
            gradingNote: `Pass if output shows 0, 1, 2, 3, 4 each on its own line.`,
        },
    ],

    quiz: [
        {
            question: `What numbers does range(4) produce?`,
            options: [
                { text: "1, 2, 3, 4", correct: false },
                { text: "0, 1, 2, 3", correct: true },
                { text: "0, 1, 2, 3, 4", correct: false },
                { text: "4 only", correct: false },
            ],
            correct: "range(4) is 0, 1, 2, 3. It stops before 4.",
            wrong: "With one argument, range starts at 0 and stops before that number.",
        },
        {
            question: `How many times does for i in range(3): run?`,
            options: [
                { text: "2 times", correct: false },
                { text: "3 times", correct: true },
                { text: "4 times", correct: false },
                { text: "Forever", correct: false },
            ],
            correct: "range(3) has three values, so the loop body runs three times.",
            wrong: "Count the values: 0, 1, 2. That is three passes.",
        },
        {
            question: `Does range(5) include the number 5?`,
            options: [
                { text: "Yes", correct: false },
                { text: "No. It stops before 5", correct: true },
                { text: "Only on Fridays", correct: false },
                { text: "Only inside while loops", correct: false },
            ],
            correct: "The stop value is never included.",
            wrong: "range goes up to but not including the stop number.",
        },
    ],

    project: {
        title: "Five Countdown Beeps",
        desc: "Use for and range(5) to print Beep five times. After the loop, print Liftoff!",
        starter: [
            `for i in range(5):`,
            `    print()`,
            ``,
            `print()`,
        ].join("\n"),
    },

    prev: { unit: 4, lesson: 2, title: "for Loops" },
    next: { unit: 4, lesson: 4, title: "range() Start and Step" },
};
