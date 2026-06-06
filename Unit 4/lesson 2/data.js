const LESSON = {

    unit: 4,
    lesson: 2,
    unitTitle: "Repetition & Loops",
    title: "range() in Depth",
    readTime: 5,

    goal: "In this lesson you will learn all three arguments of range() so you can count up, count down, and skip values inside a loop.",

    learn: [
        "Use range(start, stop, step)",
        "Count down with a negative step",
        "Build running totals inside a loop",
    ],

    idea: "range() can take up to three arguments: where to start, where to stop, and how much to step each time. A step of 2 skips every other number. A negative step counts backwards. The stop value is never included in the sequence.",

    code: {
        filename: "lesson_4_2.py",
        lines: [
            `# Count up by 2`,
            `for n in range(0, 11, 2):`,
            `    print(n)`,
            ``,
            `# Count down`,
            `for n in range(10, 0, -1):`,
            `    print(n)`,
            `print("Liftoff!")`,
            ``,
            `# Sum of all odd numbers from 1 to 19`,
            `total = 0`,
            `for n in range(1, 20, 2):`,
            `    total = total + n`,
            `print("Sum of odd numbers:", total)`,
        ],
        output: [
            "0", "2", "4", "6", "8", "10",
            "10", "9", "8", "7", "6", "5", "4", "3", "2", "1",
            "Liftoff!",
            "Sum of odd numbers: 100",
        ],
    },

    practice: [
        `Print all multiples of 5 from 5 to 100 using range().`,
        `Use a countdown loop from 10 to 1 and print a different message for the number 5, using an if statement inside the loop.`,
    ],

    quiz: {
        question: `What does <code>range(10, 0, -2)</code> produce?`,
        options: [
            {text: "10, 8, 6, 4, 2", correct: true},
            {text: "10, 8, 6, 4, 2, 0", correct: false},
            {text: "0, 2, 4, 6, 8, 10", correct: false},
            {text: "It causes an error", correct: false},
        ],
        correct: "Correct! It starts at 10, steps down by 2 each time, and stops before reaching 0.",
        wrong: "Not quite. range(10, 0, -2) starts at 10, decreases by 2, and stops before 0.",
    },

    project: {
        title: "FizzBuzz (this is really hard)",
        desc: "Loop through numbers 1 to 50. Print Fizz for multiples of 3, Buzz for multiples of 5, FizzBuzz for multiples of both, and the number itself for everything else.",
    },

    prev: {lesson: 1, title: "for Loops", href: "../lesson 1/lesson 1.html"},
    next: {lesson: 3, title: "while Loops", href: "../lesson 3/lesson 3.html"},
};
