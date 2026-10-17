export default {
    format: "v2",
    unit: 3,
    lesson: 3,
    unitLessons: 4,
    unitTitle: "Making Decisions",
    title: "elif & Multiple Branches",
    readTime: 30,

    goal: "In this lesson you will learn how to handle more than two outcomes by chaining conditions with elif.",

    learn: [
        "Add extra branches with elif",
        "Order conditions from top to bottom",
        "Map ranges of values to different messages",
    ],

    idea: `<code>elif</code> stands for "else if." It lets you check another condition when the first one was <code>False</code>, then another, and so on.

Python checks each branch from <strong>top to bottom</strong> and runs the <strong>first</strong> one that is True. After that, it skips the rest. Put the most specific or highest checks first when you map ranges.`,

    code: {
        filename: "grades.py",
        lines: [
            `score = 85`,
            ``,
            `if score >= 90:`,
            `    print("Grade: A")`,
            `elif score >= 80:`,
            `    print("Grade: B")`,
            `elif score >= 70:`,
            `    print("Grade: C")`,
            `elif score >= 60:`,
            `    print("Grade: D")`,
            `else:`,
            `    print("Grade: F")`,
        ],
        output: [
            "Grade: B",
        ],
    },

    changeOneLine: `In the editor above, change <code>score = 85</code> to <code>score = 95</code>. Press <strong>Run</strong>. The output should say <code>Grade: A</code>.`,

    code2: {
        filename: "weather.py",
        lines: [
            `temp = 18`,
            ``,
            `if temp < 0:`,
            `    print("Freezing")`,
            `elif temp < 15:`,
            `    print("Cold")`,
            `elif temp < 25:`,
            `    print("Warm")`,
            `else:`,
            `    print("Hot")`,
        ],
        output: [
            "Warm",
        ],
    },

    practice: [
        {
            text: `Finish the temperature checker. Print Freezing below 0, Cold from 0 to 14, Warm from 15 to 24, and Hot at 25 or above.`,
            starter: [
                `temp = 12`,
                ``,
                `if temp < 0:`,
                `    print("Freezing")`,
                `elif temp < 15:`,
                `    print()`,
                `elif temp < 25:`,
                `    print()`,
                `else:`,
                `    print()`,
            ].join("\n"),
            gradingNote: `Pass if if/elif/else covers freezing/cold/warm/hot style ranges and prints the matching label for the stored temp (blanks filled with correct messages).`,
        },
        {
            text: `A day number from 1 to 7 is stored. Print the day name. Fill in at least Mon, Tue, and Wed paths; you may add more.`,
            starter: [
                `day = 2`,
                ``,
                `if day == 1:`,
                `    print("Monday")`,
                `elif day == 2:`,
                `    print()`,
                `elif day == 3:`,
                `    print()`,
                `else:`,
                `    print("Another day")`,
            ].join("\n"),
            gradingNote: `Pass if if/elif uses day numbers and prints day names (at least Tuesday for day == 2). else for other days is fine.`,
        },
    ],

    quiz: [
        {
            question: `If score is 80, which branch runs? <code>if score >= 90</code> / <code>elif score >= 80</code> / <code>elif score >= 70</code>`,
            options: [
                { text: "All three branches run", correct: false },
                { text: "elif score >= 80, the first True condition", correct: true },
                { text: "elif score >= 70, the lowest match", correct: false },
                { text: "None, because Python needs an exact match", correct: false },
            ],
            correct: "Python runs the first True branch and skips the rest.",
            wrong: "Only the first matching branch runs. For 80 that is elif score >= 80.",
        },
        {
            question: `What does <code>elif</code> stand for?`,
            options: [
                { text: "else if", correct: true },
                { text: "end if", correct: false },
                { text: "equal if", correct: false },
                { text: "empty if", correct: false },
            ],
            correct: "elif is short for else if.",
            wrong: "elif means else if — another condition to try when the previous ones failed.",
        },
        {
            question: `Why put <code>score >= 90</code> before <code>score >= 80</code>?`,
            options: [
                { text: "Python only allows bigger numbers first", correct: false },
                { text: "So an A score is not caught by the B check first", correct: true },
                { text: "Order never matters with elif", correct: false },
                { text: "So the else block runs more often", correct: false },
            ],
            correct: "If 90+ came after 80+, every A would match the B branch first.",
            wrong: "Order matters. Check the higher (or more specific) range first.",
        },
    ],

    project: {
        title: "Game Score Rank",
        desc: "A game score is stored. Use if/elif/else to print the rank: Beginner (under 50), Solid (50–79), Great (80–99), or Legend (100 or more).",
        starter: [
            `score = 85`,
            `print("Score:", score)`,
            ``,
            `if score < 50:`,
            `    print()`,
            `elif score < 80:`,
            `    print()`,
            `elif score < 100:`,
            `    print()`,
            `else:`,
            `    print()`,
        ].join("\n"),
    },

    prev: { unit: 3, lesson: 2, title: "if / else" },
    next: { unit: 3, lesson: 4, title: "Combining Conditions" },
};
