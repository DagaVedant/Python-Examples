export default {
    format: "v2",
    unit: 3,
    lesson: 4,
    unitLessons: 4,
    unitTitle: "Making Decisions",
    title: "Combining Conditions",
    readTime: 30,

    goal: "In this lesson you will learn how to check more than one thing at once using and, or, and not inside an if statement.",

    learn: [
        "Use and when every condition must be True",
        "Use or when at least one condition must be True",
        "Use not to flip True and False",
    ],

    idea: `Sometimes one comparison is not enough. Join conditions with <code>and</code>, <code>or</code>, and <code>not</code>.

With <strong>and</strong>, every part must be True. With <strong>or</strong>, only one part needs to be True. With <strong>not</strong>, you flip whatever comes after it — True becomes False, and False becomes True.`,

    code: {
        filename: "ride_check.py",
        lines: [
            `age = 14`,
            `height = 145`,
            ``,
            `# and means both must be True`,
            `if age >= 12 and height >= 140:`,
            `    print("You can ride.")`,
            `else:`,
            `    print("Sorry, you cannot ride.")`,
            ``,
            `# or means at least one must be True`,
            `day = "Saturday"`,
            `if day == "Saturday" or day == "Sunday":`,
            `    print("It's the weekend!")`,
            `else:`,
            `    print("It's a weekday.")`,
        ],
        output: [
            "You can ride.",
            "It's the weekend!",
        ],
    },

    changeOneLine: `In the editor above, change <code>height = 145</code> to <code>height = 120</code>. Press <strong>Run</strong>. The ride message should say <code>Sorry, you cannot ride.</code> because height is too short.`,

    code2: {
        filename: "login.py",
        lines: [
            `username = "maya"`,
            `password = "secret"`,
            ``,
            `if username == "maya" and password == "secret":`,
            `    print("Welcome!")`,
            `else:`,
            `    print("Login failed")`,
            ``,
            `raining = False`,
            `if not raining:`,
            `    print("No umbrella needed.")`,
        ],
        output: [
            "Welcome!",
            "No umbrella needed.",
        ],
    },

    practice: [
        {
            text: `A number is stored. Print <code>In range</code> if it is between 10 and 20 inclusive (use and). Otherwise print <code>Out of range</code>.`,
            starter: [
                `n = 15`,
                ``,
                `if n >= 10 and n <= 20:`,
                `    print()`,
                `else:`,
                `    print()`,
            ].join("\n"),
            gradingNote: `Pass if and combines two comparisons for the 10–20 inclusive range and prints In range / Out of range.`,
        },
        {
            text: `Check username and password with and. Print <code>Welcome</code> only if both match, otherwise print <code>Login failed</code>.`,
            starter: [
                `user = "alex"`,
                `pwd = "code123"`,
                ``,
                `if user == "alex" and pwd == "code123":`,
                `    print()`,
                `else:`,
                `    print()`,
            ].join("\n"),
            gradingNote: `Pass if and requires both username and password to match, with Welcome vs Login failed messages.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>print(5 > 3 and 10 < 8)</code> output?`,
            options: [
                { text: "True, because 5 > 3 is True", correct: false },
                { text: "False, because 10 < 8 is False and both must be True", correct: true },
                { text: "Error, because you can't use and with print", correct: false },
                { text: "True, because at least one condition is True", correct: false },
            ],
            correct: "and needs every part True. One False makes the whole thing False.",
            wrong: "With and, all conditions must be True. 10 < 8 is False, so the result is False.",
        },
        {
            question: `When is <code>A or B</code> True?`,
            options: [
                { text: "Only when both A and B are True", correct: false },
                { text: "When at least one of A or B is True", correct: true },
                { text: "Only when both are False", correct: false },
                { text: "Never", correct: false },
            ],
            correct: "or is True if one or both sides are True.",
            wrong: "or needs at least one True — it does not require both.",
        },
        {
            question: `What does <code>not True</code> evaluate to?`,
            options: [
                { text: "True", correct: false },
                { text: "False", correct: true },
                { text: "None", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "not flips True into False.",
            wrong: "not reverses the boolean: not True is False.",
        },
    ],

    project: {
        title: "Theme Park Entry",
        desc: "Age and height are stored. Guests can enter if they are 10 or older AND at least 130 cm tall, OR if accompanied is True. Print whether they can enter.",
        starter: [
            `age = 9`,
            `height = 125`,
            `accompanied = True`,
            ``,
            `# Can enter if (age >= 10 and height >= 130) or accompanied`,
            `if (age >= 10 and height >= 130) or accompanied:`,
            `    print()`,
            `else:`,
            `    print()`,
        ].join("\n"),
    },

    prev: { unit: 3, lesson: 3, title: "elif & Multiple Branches" },
    next: { unit: 4, lesson: 1, title: "for Loops" },
};
