export default {
    format: "v2",
    unit: 10,
    lesson: 6,
    unitLessons: 8,
    unitTitle: "Errors",
    title: "Friendly Messages",
    readTime: 22,
    goal: "In this lesson you will learn how to show kid-friendly messages in except instead of scary crashes.",

    learn: [
        "Print a clear message in except",
        "Set a safe fallback value",
        "Keep the rest of the program calm",
    ],

    idea: `In <code>except</code>, speak to a human: short, clear, kind. Example: <code>print("That score is not a number — using 0.")</code>.

Also set a safe value so the program can continue. Friendly messages + fallbacks beat scary red text.`,

    code: {
        filename: "friendly.py",
        lines: [
            `raw = "twelve"`,
            `try:`,
            `    lives = int(raw)`,
            `except:`,
            `    print("Hmm, that was not a number. Using 3 lives.")`,
            `    lives = 3`,
            `print("Lives:", lives)`,
            `print("Let's play!")`,
        ],
        output: [
            "Hmm, that was not a number. Using 3 lives.",
            "Lives: 3",
            "Let's play!",
        ],
    },

    changeOneLine: `In the editor above, change the fallback lives from <code>3</code> to <code>5</code>. Press <strong>Run</strong>.`,

    code2: {
        filename: "friendly_div.py",
        lines: [
            `left = 10`,
            `right = 0`,
            `try:`,
            `    print(left / right)`,
            `except:`,
            `    print("Cannot divide by zero — try a different number.")`,
        ],
        output: [
            "Cannot divide by zero — try a different number.",
        ],
    },

    practice: [
        {
            text: `Try int("abc"). In except, print a friendly message and set n = 0. Print n.`,
            starter: [
                "text = \"abc\"",
                "try:",
                "    n = int(text)",
                "except:",
                "    ",
                "print(n)"
            ].join("\n"),
            gradingNote: `Pass if friendly message prints and n is 0.`,
        },
        {
            text: `On divide-by-zero, print a kind tip (not just Error). Then print OK.`,
            starter: [
                "try:",
                "    print(1 / 0)",
                "except:",
                "    print()",
                "print(\"OK\")"
            ].join("\n"),
            gradingNote: `Pass if except prints a clear human message and OK still prints.`,
        },
    ],

    quiz: [
        {
            question: `What makes a good except message?`,
            options: [
                { text: `Long scary jargon only`, correct: false },
                { text: `Clear, kind, and useful`, correct: true },
                { text: `Silence forever`, correct: false },
                { text: `Random emojis only`, correct: false },
            ],
            correct: `Speak to the kid playing the program.`,
            wrong: `Friendly beats cryptic.`,
        },
        {
            question: `Why set a fallback value in except?`,
            options: [
                { text: `To cause more errors`, correct: false },
                { text: `So the program can keep going safely`, correct: true },
                { text: `To erase try`, correct: false },
                { text: `To open files only`, correct: false },
            ],
            correct: `Fallbacks keep later lines working.`,
            wrong: `Example: lives = 3.`,
        },
        {
            question: `Should except just crash harder?`,
            options: [
                { text: `Yes always`, correct: false },
                { text: `No — catch and explain`, correct: true },
                { text: `Yes with louder beeps`, correct: false },
                { text: `Crashing is the goal`, correct: false },
            ],
            correct: `The point is to handle the problem.`,
            wrong: `Catch, message, continue.`,
        },
    ],

    project: {
        title: "Kind Calculator",
        desc: "try to divide 10 by 0. except with a friendly message and set result = None. Print result and a goodbye line.",
        starter: [
            "try:",
            "    result = 10 / 0",
            "except:",
            "    print()",
            "    result = None",
            "print(result)",
            "print()"
        ].join("\n"),
    },

    prev: { unit: 10, lesson: 5, title: "except" },
    next: { unit: 10, lesson: 7, title: "Specific except" },
};
