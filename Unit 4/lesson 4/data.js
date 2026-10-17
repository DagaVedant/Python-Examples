export default {
    format: "v2",
    unit: 4,
    lesson: 4,
    unitLessons: 10,
    unitTitle: "Repetition & Loops",
    title: "range() Start and Step",
    readTime: 23,

    goal: "In this lesson you will learn the start and step parts of range() so you can count from any number and skip by a fixed jump.",

    learn: [
        "Use range(start, stop) to choose where counting begins",
        "Use range(start, stop, step) to jump by a step",
        "Count down with a negative step",
    ],

    idea: `<code>range()</code> can take up to three numbers: <strong>start</strong>, <strong>stop</strong>, and <strong>step</strong>.

<code>range(1, 5)</code> is 1, 2, 3, 4 — it still stops before the stop value. <code>range(0, 11, 2)</code> jumps by 2: 0, 2, 4, 6, 8, 10. A <strong>negative step</strong> counts backwards, like <code>range(5, 0, -1)</code>.`,

    code: {
        filename: "start_step.py",
        lines: [
            `# Start at 1, stop before 5`,
            `for n in range(1, 5):`,
            `    print(n)`,
            ``,
            `# Count up by 2`,
            `for n in range(0, 11, 2):`,
            `    print("Even:", n)`,
            ``,
            `# Count down`,
            `for n in range(3, 0, -1):`,
            `    print(n)`,
            `print("Go!")`,
        ],
        output: [
            "1",
            "2",
            "3",
            "4",
            "Even: 0",
            "Even: 2",
            "Even: 4",
            "Even: 6",
            "Even: 8",
            "Even: 10",
            "3",
            "2",
            "1",
            "Go!",
        ],
    },

    changeOneLine: `In the editor above, change the countdown from <code>range(3, 0, -1)</code> to <code>range(5, 0, -1)</code>. Press <strong>Run</strong>. Go! should follow 5, 4, 3, 2, 1.`,

    code2: {
        filename: "odds.py",
        lines: [
            `# Odd numbers from 1 to 9`,
            `for n in range(1, 10, 2):`,
            `    print(n)`,
        ],
        output: [
            "1",
            "3",
            "5",
            "7",
            "9",
        ],
    },

    practice: [
        {
            text: `Print every multiple of 5 from 5 to 25 using range with a step.`,
            starter: [
                `# 5, 10, 15, 20, 25`,
                `for n in range(5, 26, 5):`,
                `    print()`,
            ].join("\n"),
            gradingNote: `Pass if output shows 5, 10, 15, 20, 25 using for with range and a step of 5.`,
        },
        {
            text: `Finish the countdown from 5 to 1, then print Go!.`,
            starter: [
                `for n in range(5, 0, -1):`,
                `    print()`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if 5 through 1 print, then Go! (or similar) after the loop.`,
        },
    ],

    quiz: [
        {
            question: `What does range(10, 0, -2) produce?`,
            options: [
                { text: "10, 8, 6, 4, 2", correct: true },
                { text: "10, 8, 6, 4, 2, 0", correct: false },
                { text: "0, 2, 4, 6, 8, 10", correct: false },
                { text: "It causes an error", correct: false },
            ],
            correct: "It starts at 10, steps down by 2, and stops before 0.",
            wrong: "Stop is not included. range(10, 0, -2) never reaches 0.",
        },
        {
            question: `In range(1, 10, 2), what does the 2 mean?`,
            options: [
                { text: "Stop at 2", correct: false },
                { text: "Start at 2", correct: false },
                { text: "Step by 2 each time", correct: true },
                { text: "Run the loop twice", correct: false },
            ],
            correct: "The third number is the step — how much to add each time.",
            wrong: "range(start, stop, step) — the last number is the step size.",
        },
        {
            question: `What numbers does range(2, 6) produce?`,
            options: [
                { text: "2, 3, 4, 5, 6", correct: false },
                { text: "2, 3, 4, 5", correct: true },
                { text: "0, 1, 2, 3, 4, 5", correct: false },
                { text: "6, 5, 4, 3, 2", correct: false },
            ],
            correct: "Start at 2, stop before 6: 2, 3, 4, 5.",
            wrong: "range(start, stop) includes start but not stop.",
        },
    ],

    project: {
        title: "Skip Counting Poster",
        desc: "Print the multiples of 3 from 3 to 30 using range with a step. After the loop, print Skip counting done!",
        starter: [
            `for n in range(3, 31, 3):`,
            `    print()`,
            ``,
            `print()`,
        ].join("\n"),
    },

    prev: { unit: 4, lesson: 3, title: "range() Basics" },
    next: { unit: 4, lesson: 5, title: "Looping and Totals" },
};
