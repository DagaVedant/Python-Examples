export default {
    format: "v2",
    unit: 4,
    lesson: 6,
    unitLessons: 10,
    unitTitle: "Repetition & Loops",
    title: "while Loops",
    readTime: 22,

    goal: "In this lesson you will learn how a while loop repeats as long as a condition is True, using a counter that changes each time.",

    learn: [
        "Write a while loop with a condition",
        "Change a counter inside the loop",
        "See when the condition becomes False",
    ],

    idea: `A <strong>while loop</strong> keeps going as long as its condition is True. Before each pass, Python checks the condition. When it becomes False, the loop stops.

In this course, while loops use a <strong>counter</strong> you update yourself — for example <code>count = count - 1</code>. That way the loop always reaches a stop. No <code>input()</code> needed.`,

    code: {
        filename: "countdown_while.py",
        lines: [
            `count = 5`,
            `while count > 0:`,
            `    print(count)`,
            `    count = count - 1`,
            `print("Done!")`,
        ],
        output: [
            "5",
            "4",
            "3",
            "2",
            "1",
            "Done!",
        ],
    },

    changeOneLine: `In the editor above, change <code>count = 5</code> to <code>count = 3</code>. Press <strong>Run</strong>. The countdown should print 3, 2, 1, then Done!.`,

    code2: {
        filename: "grow.py",
        lines: [
            `n = 1`,
            `while n < 20:`,
            `    print(n)`,
            `    n = n * 2`,
        ],
        output: [
            "1",
            "2",
            "4",
            "8",
            "16",
        ],
    },

    practice: [
        {
            text: `Finish the while loop so it prints 3, 2, 1 and then Stop. Shrink count each time.`,
            starter: [
                `count = 3`,
                `while count > 0:`,
                `    print(count)`,
                `    # Make count smaller`,
                `    `,
                `print("Stop")`,
            ].join("\n"),
            gradingNote: `Pass if a while loop prints 3, 2, 1 then Stop, and count decreases inside the loop.`,
        },
        {
            text: `Start at n = 1. While n is less than 16, print n and double it.`,
            starter: [
                `n = 1`,
                `while n < 16:`,
                `    print(n)`,
                `    # Double n`,
                `    `,
            ].join("\n"),
            gradingNote: `Pass if output is 1, 2, 4, 8 and n doubles inside the while loop.`,
        },
    ],

    quiz: [
        {
            question: `When does a while loop stop?`,
            options: [
                { text: "After exactly 10 times", correct: false },
                { text: "When its condition becomes False", correct: true },
                { text: "Only when you use range()", correct: false },
                { text: "When print() is called", correct: false },
            ],
            correct: "while checks the condition before each pass and stops when it is False.",
            wrong: "while keeps going only while the condition is True.",
        },
        {
            question: `Why change count inside the loop?`,
            options: [
                { text: "So the condition can eventually become False", correct: true },
                { text: "So print() works", correct: false },
                { text: "Because for loops require it", correct: false },
                { text: "Variables cannot stay the same", correct: false },
            ],
            correct: "Updating the counter is what lets a while loop finish safely.",
            wrong: "If nothing changes, the condition may stay True forever.",
        },
        {
            question: `Which loop is usually clearer when you already know the exact count, like 1 to 10?`,
            options: [
                { text: "while, always", correct: false },
                { text: "for with range", correct: true },
                { text: "Neither can count", correct: false },
                { text: "Only if statements", correct: false },
            ],
            correct: "for with range is a clear fit when you know how many times to repeat.",
            wrong: "Use for + range for a known count. Use while when you stop on a condition.",
        },
    ],

    project: {
        title: "Battery Drain",
        desc: "Start battery at 100. While battery is greater than 0, print the battery level, then subtract 25. After the loop, print Battery empty.",
        starter: [
            `battery = 100`,
            `while battery > 0:`,
            `    print("Battery:", battery)`,
            `    # Subtract 25`,
            `    `,
            `print("Battery empty")`,
        ].join("\n"),
    },

    prev: { unit: 4, lesson: 5, title: "Looping and Totals" },
    next: { unit: 4, lesson: 7, title: "while Counters" },
};
