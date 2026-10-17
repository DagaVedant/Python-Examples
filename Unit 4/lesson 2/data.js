export default {
    format: "v2",
    unit: 4,
    lesson: 2,
    unitLessons: 4,
    unitTitle: "Repetition & Loops",
    title: "range() in Depth",
    readTime: 30,

    goal: "In this lesson you will learn the three parts of range() so you can count up, count down, and skip values in a loop.",

    learn: [
        "Use range(start, stop, step)",
        "Count down with a negative step",
        "Skip values with a bigger step",
    ],

    idea: `<code>range()</code> can take up to three numbers: where to <strong>start</strong>, where to <strong>stop</strong>, and the <strong>step</strong> (how much to jump each time).

The stop value is never included. A step of 2 skips every other number. A negative step counts backwards.`,

    code: {
        filename: "countdown.py",
        lines: [
            `# Count up by 2`,
            `for n in range(0, 11, 2):`,
            `    print(n)`,
            ``,
            `# Count down`,
            `for n in range(5, 0, -1):`,
            `    print(n)`,
            `print("Liftoff!")`,
        ],
        output: [
            "0",
            "2",
            "4",
            "6",
            "8",
            "10",
            "5",
            "4",
            "3",
            "2",
            "1",
            "Liftoff!",
        ],
    },

    changeOneLine: `In the editor above, change the countdown from <code>range(5, 0, -1)</code> to <code>range(3, 0, -1)</code>. Press <strong>Run</strong>. Liftoff should follow 3, 2, 1.`,

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
            gradingNote: `Pass if output shows 5, 10, 15, 20, 25 using a for loop with range (step of 5 is expected).`,
        },
        {
            text: `Finish the countdown from 5 to 1, then print Go!.`,
            starter: [
                `for n in range(5, 0, -1):`,
                `    print()`,
                `# After the loop`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if 5 through 1 print, then Go! (or similar) after the loop.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>range(10, 0, -2)</code> produce?`,
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
            question: `In <code>range(1, 10, 2)</code>, what does the 2 mean?`,
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
            question: `Does <code>range(1, 5)</code> include the number 5?`,
            options: [
                { text: "Yes, stop is always included", correct: false },
                { text: "No, stop is never included", correct: true },
                { text: "Only if step is 1", correct: false },
                { text: "Only in while loops", correct: false },
            ],
            correct: "range goes up to but not including the stop value.",
            wrong: "Remember: stop is exclusive. range(1, 5) is 1, 2, 3, 4.",
        },
    ],

    project: {
        title: "Mini FizzBuzz",
        desc: "Loop from 1 to 20. Print Fizz for multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number otherwise.",
        starter: [
            `for n in range(1, 21):`,
            `    if n % 3 == 0 and n % 5 == 0:`,
            `        print("FizzBuzz")`,
            `    elif n % 3 == 0:`,
            `        print()`,
            `    elif n % 5 == 0:`,
            `        print()`,
            `    else:`,
            `        print()`,
        ].join("\n"),
    },

    prev: { unit: 4, lesson: 1, title: "for Loops" },
    next: { unit: 4, lesson: 3, title: "while Loops" },
};
