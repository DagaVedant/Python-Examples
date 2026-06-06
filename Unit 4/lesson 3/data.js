const LESSON = {

    unit: 4,
    lesson: 3,
    unitTitle: "Repetition & Loops",
    title: "while Loops",
    readTime: 5,

    goal: "In this lesson you will learn how to repeat a block of code for as long as a condition stays True, which is useful when you don't know in advance how many times to loop.",

    learn: [
        "Write a while loop",
        "Update the loop variable to avoid an infinite loop",
        "Use while to keep asking until the user is correct",
    ],

    idea: "A while loop keeps going as long as its condition is True. Unlike a for loop, you don't tell it how many times to run, it keeps running this a condition is True. IMPORTANT: You must make sure something inside the loop eventually makes the condition False, otherwise it runs forever.",

    code: {
        filename: "lesson_4_3.py",
        lines: [
            `# Countdown with while`,
            `count = 5`,
            `while count > 0:`,
            `    print(count)`,
            `    count = count - 1`,
            `print("Done!")`,
            ``,
            `# Keep asking until correct`,
            `secret = "python"`,
            `guess  = ""`,
            ``,
            `while guess != secret:`,
            `    guess = input("Guess the word: ")`,
            ``,
            `print("You got it!")`,
        ],
        output: [
            "5", "4", "3", "2", "1",
            "Done!",
            "Guess the word: java",
            "Guess the word: python",
            "You got it!",
        ],
    },

    practice: [
        `Use a while loop to print all the powers of 2 that are less than 1000 (1, 2, 4, 8, 16...).`,
        `Ask the user to enter numbers one at a time and add them to a running total. Stop when they type 0 and print the total.`,
    ],

    quiz: {
        question: `What is wrong with this loop? <code>x = 5  while x > 0:  print(x)</code>`,
        options: [
            {text: "Nothing, it prints 5 once and stops", correct: false},
            {text: "It runs forever because x never changes inside the loop", correct: true},
            {text: "It causes a SyntaxError", correct: false},
            {text: "It prints nothing because 5 > 0 is False", correct: false},
        ],
        correct: "Correct! x never changes, so the condition x > 0 is always True, causing an infinite loop.",
        wrong: "Not quite. The loop runs forever because nothing inside it changes x.",
    },

    project: {
        title: "Number Guessing Game",
        desc: "Pick a secret number between 1 and 100. Use a while loop to keep asking the user for guesses. After each wrong guess print Too high or Too low. When they get it right print how many guesses it took.",
    },

    prev: {lesson: 2, title: "range() in Depth", href: "../lesson 2/lesson 2.html"},
    next: {lesson: 4, title: "Loops & Decisions", href: "../lesson 4/lesson 4.html"},
};
