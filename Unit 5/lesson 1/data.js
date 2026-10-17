export default {
    format: "v2",
    unit: 5,
    lesson: 1,
    unitLessons: 8,
    unitTitle: "Functions",
    title: "Why Functions",
    readTime: 20,

    goal: "In this lesson you will learn why programs use functions: to name a chunk of work once and reuse it instead of copying the same lines.",

    learn: [
        "Repeated blocks are a clue for a function",
        "A name can stand for a group of steps",
        "Reuse beats copy-and-paste",
    ],

    idea: `Sometimes you need the <strong>same group of steps</strong> in more than one place — a banner, a cheer, a little report line.

You could copy those lines again and again. That gets long, and fixing a typo means editing every copy.

A <strong>function</strong> gives that chunk a name. You write it once, then run it by calling the name. Later lessons teach <code>def</code> and parameters. Today, notice the problem functions solve.`,

    code: {
        filename: "copied_banner.py",
        lines: [
            `# Same banner written twice — messy`,
            `print("*****")`,
            `print(" Welcome ")`,
            `print("*****")`,
            ``,
            `print("Game score: 10")`,
            ``,
            `print("*****")`,
            `print(" Welcome ")`,
            `print("*****")`,
        ],
        output: [
            "*****",
            " Welcome ",
            "*****",
            "Game score: 10",
            "*****",
            " Welcome ",
            "*****",
        ],
    },

    changeOneLine: `In the editor above, change <code>Game score: 10</code> to <code>Game score: 25</code>. Press <strong>Run</strong>. Only the middle score line should update.`,

    code2: {
        filename: "repeat_clue.py",
        lines: [
            `print("Go team!")`,
            `print("You can do it!")`,
            `print("---")`,
            `print("Go team!")`,
            `print("You can do it!")`,
        ],
        output: [
            "Go team!",
            "You can do it!",
            "---",
            "Go team!",
            "You can do it!",
        ],
    },

    practice: [
        {
            text: `Print a two-line cheer twice (four prints total), with a blank line between the two cheers. No function yet — just notice the repetition.`,
            starter: [
                `print("Go!")`,
                `print("Win!")`,
                `print()`,
                `print()`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if Go! and Win! each appear twice, with a blank line between the two cheer pairs.`,
        },
        {
            text: `Print the same three-star banner twice using separate print lines.`,
            starter: [
                `print("***")`,
                `print()`,
                `print()`,
                `# Second banner`,
                `print()`,
                `print()`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if *** appears on six lines total (banner printed twice).`,
        },
    ],

    quiz: [
        {
            question: `Why is copying the same block of prints many times a problem?`,
            options: [
                { text: "Python only allows one print()", correct: false },
                { text: "It is long and hard to fix in every copy", correct: true },
                { text: "print() cannot repeat text", correct: false },
                { text: "Comments are forbidden", correct: false },
            ],
            correct: "Copy-paste works for demos but gets messy when you need the same steps often.",
            wrong: "Think about editing: one change should not require fixing ten copies.",
        },
        {
            question: `What is a function for?`,
            options: [
                { text: "To name a chunk of work and reuse it", correct: true },
                { text: "To delete all variables", correct: false },
                { text: "To turn off loops", correct: false },
                { text: "To replace numbers with strings only", correct: false },
            ],
            correct: "Functions let you write a block once and call it by name.",
            wrong: "A function packages steps under a reusable name.",
        },
        {
            question: `If the same three lines appear twice in a program, what is that a clue for?`,
            options: [
                { text: "You must use a float", correct: false },
                { text: "A function might be a better fit", correct: true },
                { text: "Python will crash", correct: false },
                { text: "You need an infinite loop", correct: false },
            ],
            correct: "Repeated blocks are a signal that a named function could help.",
            wrong: "Same-steps-in-many-places is what functions are designed for.",
        },
    ],

    project: {
        title: "Double Stamp",
        desc: "Without writing a function yet, print a three-line stamp (top border, name, bottom border) two times. Use the same pattern both times so you can see the repetition.",
        starter: [
            `# First stamp`,
            `print("=====")`,
            `print()`,
            `print("=====")`,
            ``,
            `# Second stamp (same idea)`,
            `print()`,
            `print()`,
            `print()`,
        ].join("\n"),
    },

    prev: { unit: 4, lesson: 10, title: "Filter with Loops" },
    next: { unit: 5, lesson: 2, title: "Defining and Calling" },
};
