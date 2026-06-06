const LESSON_3_4 = {
 
    unit:      3,
    lesson:    4,
    unitTitle: "Making Decisions",
    title:     "Combining Conditions",
    readTime:  5,
 
    goal: "In this lesson you will learn how to check multiple things at once using and, or, and not inside a single if statement.",
 
    learn: [
        "Use and to require all conditions to be True",
        "Use or to require at least one condition to be True",
        "Use not to flip a True to False and vice versa",
    ],
 
    idea: "Sometimes one condition is not enough. You can join multiple comparisons together with and, or, and not. With and, every condition must be True. With or, only one has to be True. With not, you reverse whatever comes after it.",
 
    code: {
        filename: "lesson_3_4.py",
        lines: [
            `age    = int(input("Age: "))`,
            `height = int(input("Height in cm: "))`,
            ``,
            `# and — both must be True`,
            `if age >= 12 and height >= 140:`,
            `    print("You can ride.")`,
            `else:`,
            `    print("Sorry, you cannot ride.")`,
            ``,
            `# or — at least one must be True`,
            `day = input("Day: ")`,
            `if day == "Saturday" or day == "Sunday":`,
            `    print("It's the weekend!")`,
            `else:`,
            `    print("It's a weekday.")`,
        ],
        output: [
            "Age: 14",
            "Height in cm: 145",
            "You can ride.",
            "Day: Saturday",
            "It's the weekend!",
        ],
    },
 
    practice: [
        `Ask the user for a number. Print <code>In range</code> if it is between 10 and 20 inclusive, otherwise print <code>Out of range</code>.`,
        `Ask for a username and password. Print <code>Welcome</code> only if both match the values you set, otherwise print <code>Login failed</code>.`,
    ],
 
    quiz: {
        question: `What does <code>print(5 > 3 and 10 < 8)</code> output?`,
        options: [
            {text: "True, because 5 > 3 is True", correct: false},
            {text: "False, because 10 < 8 is False and both must be True", correct: true},
            {text: "Error, because you can't use and with print", correct: false},
            {text: "True, because at least one condition is True", correct: false},
        ],
        correct: "Correct! &nbsp; With and, every condition must be True and because 10 < 8 is False, the whole thing is False.",
        wrong: "Not quite. &nbsp; and requires ALL conditions to be True. One False makes the whole expression False.",
    },
 
    project: {
        title: "Theme Park Entry",
        desc: "Create a theme park entry checker. Ask for the user's age and height. They can enter if they are 10 or older AND at least 130 cm tall, OR if they are accompanied (ask yes/no). Print whether they can enter or not.",
    },
 
    prev: {lesson: 3, title: "elif & Multiple Branches", href: "../lesson-3-3/index.html" },
    next: null,
};