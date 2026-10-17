export default {
    format: "v2",
    unit: 4,
    lesson: 7,
    unitLessons: 10,
    unitTitle: "Repetition & Loops",
    title: "while Counters",
    readTime: 22,

    goal: "In this lesson you will practice while loops that count up or down with a clear counter pattern.",

    learn: [
        "Count up with += 1 style updates",
        "Count down until a stop value",
        "Print the counter each time through",
    ],

    idea: `A <strong>counter</strong> is an integer you change by a fixed amount each pass — usually +1 or -1.

Count up: start at 1, while the counter is less than or equal to a limit, print it, then add 1. Count down: start high, while greater than 0, print, then subtract 1.

Keep the update on its own line so you can see how the loop will end.`,

    code: {
        filename: "count_up_down.py",
        lines: [
            `# Count up from 1 to 5`,
            `n = 1`,
            `while n <= 5:`,
            `    print("Up:", n)`,
            `    n = n + 1`,
            ``,
            `# Count down from 4 to 1`,
            `n = 4`,
            `while n > 0:`,
            `    print("Down:", n)`,
            `    n = n - 1`,
        ],
        output: [
            "Up: 1",
            "Up: 2",
            "Up: 3",
            "Up: 4",
            "Up: 5",
            "Down: 4",
            "Down: 3",
            "Down: 2",
            "Down: 1",
        ],
    },

    changeOneLine: `In the editor above, change the first loop’s start from <code>n = 1</code> to <code>n = 3</code>. Press <strong>Run</strong>. The Up lines should show 3, 4, 5.`,

    code2: {
        filename: "by_twos.py",
        lines: [
            `n = 0`,
            `while n <= 8:`,
            `    print(n)`,
            `    n = n + 2`,
        ],
        output: [
            "0",
            "2",
            "4",
            "6",
            "8",
        ],
    },

    practice: [
        {
            text: `Count up from 1 to 7 with a while loop. Print each number.`,
            hint: `Fill the empty print() with n, then add 1 to n each pass so the loop reaches 7 and stops.`,
            starterTip: `Try print(n) in the blank line, then n = n + 1 under the comment — both indented under while.`,
            starter: [
                `n = 1`,
                `while n <= 7:`,
                `    print()`,
                `    # Add 1 to n`,
                `    `,
            ].join("\n"),
            gradingNote: `Pass if while prints 1 through 7 and n increases by 1 each time.`,
        },
        {
            text: `Count down from 6 to 1. Print each number, then print Blast off! after the loop.`,
            hint: `Inside the while, subtract 1 from n after each print. The last print() after the loop is not indented under while.`,
            starterTip: `Add n = n - 1 inside the loop. After while ends, fill print() with print("Blast off!").`,
            starter: [
                `n = 6`,
                `while n > 0:`,
                `    print(n)`,
                `    `,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if 6 through 1 print, n decreases, then Blast off! (or similar) after the loop.`,
        },
    ],

    quiz: [
        {
            question: `What does n = n + 1 do in a while loop?`,
            options: [
                { text: "It freezes n forever", correct: false },
                { text: "It moves the counter one step forward", correct: true },
                { text: "It deletes n", correct: false },
                { text: "It prints n twice", correct: false },
            ],
            correct: "Adding 1 advances the counter toward the stop condition.",
            wrong: "n = n + 1 increases the counter by one each pass.",
        },
        {
            question: `If n starts at 1 and the condition is while n <= 3 with n = n + 1, what prints?`,
            options: [
                { text: "1, 2, 3", correct: true },
                { text: "1, 2, 3, 4", correct: false },
                { text: "0, 1, 2, 3", correct: false },
                { text: "Nothing", correct: false },
            ],
            correct: "The loop runs while n is 1, 2, and 3, then stops.",
            wrong: "Trace it: print, add 1, check again — stop when n becomes 4.",
        },
        {
            question: `Why is a fixed +/- update a good counter pattern?`,
            options: [
                { text: "It makes infinite loops on purpose", correct: false },
                { text: "You can predict when the loop will stop", correct: true },
                { text: "Counters cannot use + or -", correct: false },
                { text: "It replaces print()", correct: false },
            ],
            correct: "A steady step makes the stopping point clear and finite.",
            wrong: "Predictable updates keep while loops finite and safe.",
        },
    ],

    project: {
        title: "Warm-Up Reps",
        desc: "Count reps from 1 to 10 with a while loop. Print Rep: and the number each time. After the loop, print Warm-up done!",
        starter: [
            `rep = 1`,
            `while rep <= 10:`,
            `    print()`,
            `    # Add 1 to rep`,
            `    `,
            `print()`,
        ].join("\n"),
    },

    prev: { unit: 4, lesson: 6, title: "while Loops" },
    next: { unit: 4, lesson: 8, title: "Loops That Stop Safely" },
};
