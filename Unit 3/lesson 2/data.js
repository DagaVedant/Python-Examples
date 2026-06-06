const LESSON = {
 
    unit: 3,
    lesson: 2,
    unitTitle: "Making Decisions",
    title: "if / else",
    readTime: 5,
 
    goal: "In this lesson you will learn how to make your program choose between two different paths using if and else. (this is the basis of all decision making in programming)",
 
    learn: [
        "Write an if statement",
        "Add an else statement for the fallback path",
        "Indent code correctly inside a block",
    ],
 
    idea: "An if statement runs a block of code only when a condition is True. If the condition is False, Python skips that block and runs the else block instead. The indented lines underneath if or else are the code that is being excuted when that conditon is true.",
 
    code: {
        filename: "lesson_3_2.py",
        lines: [
            `age = int(input("How old are you? "))`,
            ``,
            `if age >= 18:`,
            `    print("You can vote.")`,
            `else:`,
            `    print("You cannot vote yet.")`,
            ``,
            `# Another example`,
            `score = int(input("Enter your score: "))`,
            ``,
            `if score >= 50:`,
            `    print("You passed!")`,
            `else:`,
            `    print("You did not pass. Try again.")`,
        ],
        output: [
            "How old are you? 20",
            "You can vote.",
            "Enter your score: 42",
            "You did not pass. Try again.",
        ],
    },
 
    practice: [
        `Ask the user for a number. Print <code>Positive</code> if it is greater than zero, otherwise print <code>Zero or negative</code>.`,
        `Ask for a password. Print <code>Access granted</code> if it matches a secret word you set, otherwise print <code>Wrong password</code>.`,
    ],
 
    quiz: {
        question: `What happens if the condition in an <code>if</code> statement is False and there is no <code>else</code>?`,
        options: [
            {text: "Python crashes with an error", correct: false},
            {text: "Python skips the if block and moves on", correct: true},
            {text: "Python runs the if block anyway", correct: false},
            {text: "Python asks the user to enter a new value", correct: false},
        ],
        correct: "Correct! If there is no else, Python simply skips the if block and continues with the rest of the program.",
        wrong: "Not quite. Python just skips the if block and carries on without any errors.",
    },
 
    project: {
        title: "Odd or Even",
        desc: "Ask the user for any whole number. Use if and else with the % operator to print whether the number is odd or even.",
    },
 
    prev: {lesson: 1, title: "Comparisons & Booleans", href: "../lesson 1/lesson 1.html"},
    next: {lesson: 3, title: "elif", href: "../lesson 3/lesson 3.html"},
};