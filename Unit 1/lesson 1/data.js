export default {
    format: "v2",
    unit: 1,
    lesson: 1,
    unitLessons: 10,
    unitTitle: "Getting Started with Python",
    title: "What is a Program",
    readTime: 20,

    goal: "In this lesson you will learn what a program is and how Python reads instructions from top to bottom.",

    learn: [
        "A program is a list of instructions",
        "Python runs lines from top to bottom",
        "Each instruction does one small job",
    ],

    idea: `A <strong>program</strong> is a list of instructions for the computer. Python starts at the top of the file and runs each line in order, one at a time.

Think of it like a recipe: step 1, then step 2, then step 3. You do not skip around unless a later lesson teaches a special command.`,

    code: {
        filename: "steps.py",
        lines: [
            `# Step 1 runs first`,
            `print("Step 1: open the book")`,
            `# Step 2 runs next`,
            `print("Step 2: read the page")`,
            `# Step 3 runs last`,
            `print("Step 3: try the code")`,
        ],
        output: [
            "Step 1: open the book",
            "Step 2: read the page",
            "Step 3: try the code",
        ],
    },

    changeOneLine: `In the editor above, change <code>Step 2: read the page</code> to <code>Step 2: write a note</code>. Press <strong>Run</strong>. The middle line of output should update.`,

    code2: {
        filename: "morning.py",
        lines: [
            `print("Wake up")`,
            `print("Brush teeth")`,
            `print("Start coding")`,
        ],
        output: [
            "Wake up",
            "Brush teeth",
            "Start coding",
        ],
    },

    practice: [
        {
            text: `Finish a three-step morning routine. Keep the comments. Fill in the blank print lines so the program shows three steps in order.`,
            starter: [
                `# Step 1`,
                `print("Wake up")`,
                ``,
                `# Step 2`,
                `print()`,
                ``,
                `# Step 3`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if there are three print() calls with non-empty text, in a clear top-to-bottom order. Empty print() fails.`,
        },
        {
            text: `Write a tiny program with exactly two instructions that print two different messages. Use the starter.`,
            starter: [
                `# Two instructions, top to bottom`,
                `print()`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if exactly two print() calls each show a non-empty string.`,
        },
    ],

    quiz: [
        {
            question: `What is a program?`,
            options: [
                { text: "A single number stored in memory", correct: false },
                { text: "A list of instructions for the computer", correct: true },
                { text: "Only comments with no actions", correct: false },
                { text: "A picture on the screen", correct: false },
            ],
            correct: "A program is a list of instructions the computer follows.",
            wrong: "Think of a recipe: steps the computer follows in order.",
        },
        {
            question: `In what order does Python run the lines in a simple program?`,
            options: [
                { text: "Bottom to top", correct: false },
                { text: "In a random order", correct: false },
                { text: "Top to bottom, one line at a time", correct: true },
                { text: "Only the last line", correct: false },
            ],
            correct: "Python reads from the top of the file downward.",
            wrong: "Simple programs run from the first line to the last.",
        },
        {
            question: `If a program has three print() lines, how many lines of output do you usually get?`,
            options: [
                { text: "One, because print only works once", correct: false },
                { text: "Three, one for each print()", correct: true },
                { text: "Zero, because print is a comment", correct: false },
                { text: "It always causes an error", correct: false },
            ],
            correct: "Each print() usually makes one line of output.",
            wrong: "Each working print() adds another line to the output.",
        },
    ],

    project: {
        title: "My Day in Three Steps",
        desc: "Write a short program that prints three steps of your day in order. Keep a comment above each step.",
        starter: [
            `# Morning`,
            `print("Step 1: ___")`,
            ``,
            `# Afternoon`,
            `print("Step 2: ___")`,
            ``,
            `# Evening`,
            `print("Step 3: ___")`,
        ].join("\n"),
    },

    prev: null,
    next: { unit: 1, lesson: 2, title: "print() Basics" },
};
