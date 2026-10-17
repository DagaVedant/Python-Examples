export default {
    format: "v2",
    unit: 4,
    lesson: 3,
    unitLessons: 4,
    unitTitle: "Repetition & Loops",
    title: "while Loops",
    readTime: 30,

    goal: "In this lesson you will learn how a while loop repeats as long as a condition is True — and how to update a variable so the loop always stops.",

    learn: [
        "Write a while loop",
        "Update the loop variable so it can stop",
        "Compare while loops with for loops",
    ],

    idea: `A <strong>while loop</strong> keeps going as long as its condition is True. You do not always know the count in advance — you stop when the condition becomes False.

<strong>Important:</strong> something inside the loop must change the condition. If nothing changes, the loop never ends. Always give while a clear way to stop.`,

    code: {
        filename: "countdown_while.py",
        lines: [
            `# Countdown — count shrinks each time`,
            `count = 5`,
            `while count > 0:`,
            `    print(count)`,
            `    count = count - 1`,
            `print("Done!")`,
            ``,
            `# Grow until we pass a limit`,
            `n = 1`,
            `while n < 32:`,
            `    print(n)`,
            `    n = n * 2`,
        ],
        output: [
            "5",
            "4",
            "3",
            "2",
            "1",
            "Done!",
            "1",
            "2",
            "4",
            "8",
            "16",
        ],
    },

    changeOneLine: `In the editor above, change the first <code>count = 5</code> to <code>count = 3</code>. Press <strong>Run</strong>. The countdown should print 3, 2, 1, then Done!.`,

    code2: {
        filename: "guess_list.py",
        lines: [
            `# Pretend guesses — no typing needed`,
            `secret = 7`,
            `guesses = [2, 9, 7]`,
            `i = 0`,
            `guess = guesses[i]`,
            ``,
            `while guess != secret:`,
            `    print("Wrong:", guess)`,
            `    i = i + 1`,
            `    guess = guesses[i]`,
            ``,
            `print("Got it:", guess)`,
        ],
        output: [
            "Wrong: 2",
            "Wrong: 9",
            "Got it: 7",
        ],
    },

    practice: [
        {
            text: `Finish the while loop so it prints 3, 2, 1 and then Stop. Remember to shrink count each time.`,
            starter: [
                `count = 3`,
                `while count > 0:`,
                `    print(count)`,
                `    # Make count smaller so the loop can end`,
                `    `,
                `print("Stop")`,
            ].join("\n"),
            gradingNote: `Pass if a while loop prints 3, 2, 1 then Stop, and count decreases inside the loop (no infinite loop).`,
        },
        {
            text: `Double n each time and print until n is 16 or bigger. Start at 1.`,
            starter: [
                `n = 1`,
                `while n < 16:`,
                `    print(n)`,
                `    # Double n`,
                `    `,
            ].join("\n"),
            gradingNote: `Pass if output is 1, 2, 4, 8 (stops before printing 16) and n doubles inside the while loop.`,
        },
    ],

    quiz: [
        {
            question: `What is wrong with this loop? <code>x = 5</code> then <code>while x > 0: print(x)</code>`,
            options: [
                { text: "Nothing — it prints 5 once and stops", correct: false },
                { text: "It runs forever because x never changes", correct: true },
                { text: "It causes a SyntaxError", correct: false },
                { text: "It prints nothing because 5 > 0 is False", correct: false },
            ],
            correct: "x never changes, so x > 0 stays True forever.",
            wrong: "If the condition never becomes False, the while loop never stops.",
        },
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
            question: `Which loop is usually better when you know the exact count, like 1 to 10?`,
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
        title: "Number Guessing (no typing)",
        desc: "Secret is 12. Walk through the guesses list with a while loop. Print Too low or Too high for wrong guesses. When you hit 12, print how many tries it took.",
        starter: [
            `secret = 12`,
            `guesses = [5, 20, 10, 12]`,
            `i = 0`,
            `tries = 0`,
            `guess = guesses[i]`,
            ``,
            `while guess != secret:`,
            `    tries = tries + 1`,
            `    if guess < secret:`,
            `        print("Too low:", guess)`,
            `    else:`,
            `        print("Too high:", guess)`,
            `    i = i + 1`,
            `    guess = guesses[i]`,
            ``,
            `tries = tries + 1`,
            `# Print that you got it and how many tries`,
            `print()`,
        ].join("\n"),
    },

    prev: { unit: 4, lesson: 2, title: "range() in Depth" },
    next: { unit: 4, lesson: 4, title: "Loops & Decisions" },
};
