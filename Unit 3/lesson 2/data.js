export default {
    format: "v2",
    unit: 3,
    lesson: 2,
    unitLessons: 10,
    unitTitle: "Making Decisions",
    title: "Comparing Values",
    readTime: 22,

    goal: "In this lesson you will learn comparison operators that return True or False.",

    learn: [
        "Compare with == != < > <= >=",
        "See that comparisons make bools",
        "Compare numbers and strings",
    ],

    idea: `A <strong>comparison</strong> asks a yes/no question about two values. The answer is always <code>True</code> or <code>False</code>.

<code>==</code> means equal. <code>!=</code> means not equal. <code>&lt;</code> less than, <code>&gt;</code> greater than, <code>&lt;=</code> less or equal, <code>&gt;=</code> greater or equal.

Remember: <code>=</code> assigns. <code>==</code> compares.`,

    code: {
        filename: "compare.py",
        lines: [
            `score = 80`,
            `print(score == 80)`,
            `print(score != 100)`,
            `print(score > 50)`,
            `print(score < 50)`,
            `print(score >= 80)`,
            `print(score <= 79)`,
            ``,
            `print("cat" == "cat")`,
            `print("cat" == "dog")`,
        ],
        output: [
            "True",
            "True",
            "True",
            "False",
            "True",
            "False",
            "True",
            "False",
        ],
    },

    changeOneLine: `In the editor above, change <code>score = 80</code> to <code>score = 40</code>. Press <strong>Run</strong>. <code>score > 50</code> should become <code>False</code>.`,

    code2: {
        filename: "goals.py",
        lines: [
            `points = 15`,
            `goal = 20`,
            `print("Reached goal?", points >= goal)`,
            `print("Still short?", points < goal)`,
        ],
        output: [
            "Reached goal? False",
            "Still short? True",
        ],
    },

    practice: [
        {
            text: `Set <code>age = 11</code>. Print whether age is greater than or equal to 10.`,
            hint: `Put a comparison inside print(). The operator <code>&gt;=</code> means “greater than or equal to.” The answer will be True or False.`,
            starterTip: `Try <code>print(age >= 10)</code> on the second line. With age 11, you should see True.`,
            starter: [
                `age = 11`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if age >= 10 is printed (True).`,
        },
        {
            text: `Compare the strings <code>"blue"</code> and <code>"Blue"</code> with == and print the result.`,
            hint: `Use <code>==</code> inside print() to ask “are these equal?” Python cares about capital letters in strings.`,
            starterTip: `Try <code>print("blue" == "Blue")</code>. Lowercase b and uppercase B are different, so expect False.`,
            starter: [
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if output is False showing case-sensitive string compare.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>==</code> mean?`,
            options: [
                { text: "Assign a value", correct: false },
                { text: "Check if two values are equal", correct: true },
                { text: "Add twice", correct: false },
                { text: "Make a comment", correct: false },
            ],
            correct: "== compares for equality.",
            wrong: "Single = assigns. Double == asks \"are these equal?\"",
        },
        {
            question: `What does <code>print(5 > 3)</code> show?`,
            options: [
                { text: "5", correct: false },
                { text: "3", correct: false },
                { text: "True", correct: true },
                { text: "False", correct: false },
            ],
            correct: "5 is greater than 3, so True.",
            wrong: "Comparisons print True or False, not the numbers.",
        },
        {
            question: `What is <code>10 != 10</code>?`,
            options: [
                { text: "True", correct: false },
                { text: "False", correct: true },
                { text: "0", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "They are equal, so \"not equal\" is False.",
            wrong: "!= means not equal. 10 is equal to 10, so False.",
        },
    ],

    project: {
        title: "High Score Check",
        desc: "Your score is 250. The high score is 300. Print three bools: equal to high, greater than high, and less than high.",
        starter: [
            `score = 250`,
            `high = 300`,
            `print("Equal?", )`,
            `print("Greater?", )`,
            `print("Less?", )`,
        ].join("\n"),
    },

    prev: { unit: 3, lesson: 1, title: "True and False" },
    next: { unit: 3, lesson: 3, title: "if" },
};
