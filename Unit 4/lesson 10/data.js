export default {
    format: "v2",
    unit: 4,
    lesson: 10,
    unitLessons: 10,
    unitTitle: "Repetition & Loops",
    title: "Filter with Loops",
    readTime: 24,

    goal: "In this lesson you will learn how to filter values with a loop: print or count only the items that match a rule.",

    learn: [
        "Print only values that match a condition",
        "Count matches with a counter variable",
        "Skip non-matching values by doing nothing in else",
    ],

    idea: `<strong>Filtering</strong> means keeping only the values you care about. Inside a loop, use <code>if</code> to test each item. If it matches, print it or add 1 to a counter. If it does not match, skip it.

You often start <code>count = 0</code> before the loop, then <code>count = count + 1</code> only for matches. After the loop, print how many passed the filter.`,

    code: {
        filename: "filter_count.py",
        lines: [
            `# Print only even numbers; also count them`,
            `count = 0`,
            `for n in range(1, 11):`,
            `    if n % 2 == 0:`,
            `        print("Keep:", n)`,
            `        count = count + 1`,
            ``,
            `print("Even numbers:", count)`,
        ],
        output: [
            "Keep: 2",
            "Keep: 4",
            "Keep: 6",
            "Keep: 8",
            "Keep: 10",
            "Even numbers: 5",
        ],
    },

    changeOneLine: `In the editor above, change the condition from <code>n % 2 == 0</code> to <code>n % 2 == 1</code>. Press <strong>Run</strong>. You should keep the odd numbers instead (1, 3, 5, 7, 9) and count 5.`,

    code2: {
        filename: "long_words.py",
        lines: [
            `words = ["cat", "tiger", "dog", "elephant"]`,
            `kept = 0`,
            `for word in words:`,
            `    if len(word) > 3:`,
            `        print(word)`,
            `        kept = kept + 1`,
            `print("Kept:", kept)`,
        ],
        output: [
            "tiger",
            "elephant",
            "Kept: 2",
        ],
    },

    practice: [
        {
            text: `Count how many numbers from 1 to 20 are divisible by 3. Print the count at the end.`,
            hint: `Start count at 0. Each time n % 3 == 0, add 1 to count — do not print every n, just track how many match.`,
            starterTip: `Inside the if, try count = count + 1. After the loop, count should be 6 when you print Count:`,
            starter: [
                `count = 0`,
                `for n in range(1, 21):`,
                `    if n % 3 == 0:`,
                `        # Add 1 to count`,
                `        `,
                `print("Count:", count)`,
            ].join("\n"),
            gradingNote: `Pass if count ends at 6 (3,6,9,12,15,18) using a for loop with if and % 3.`,
        },
        {
            text: `Print only scores that are 80 or higher from the list. Then print how many passed.`,
            hint: `You already print(score) when score >= 80. Also bump passed by 1 each time you print a passing score.`,
            starterTip: `Inside the if, after print(score), add passed = passed + 1. Three scores should pass: 85, 92, 88.`,
            starter: [
                `scores = [70, 85, 92, 60, 88]`,
                `passed = 0`,
                `for score in scores:`,
                `    if score >= 80:`,
                `        print(score)`,
                `        `,
                `print("Passed:", passed)`,
            ].join("\n"),
            gradingNote: `Pass if 85, 92, 88 print and passed is 3.`,
        },
    ],

    quiz: [
        {
            question: `What does filtering with a loop usually mean?`,
            options: [
                { text: "Deleting the whole list", correct: false },
                { text: "Keeping only values that match a rule", correct: true },
                { text: "Printing every value twice", correct: false },
                { text: "Turning off if statements", correct: false },
            ],
            correct: "You test each value and only keep or count the matches.",
            wrong: "Filter = check each item, act only when the condition is True.",
        },
        {
            question: `Where should the match counter usually start?`,
            options: [
                { text: "At 100", correct: false },
                { text: "At 0 before the loop", correct: true },
                { text: "Inside print() only", correct: false },
                { text: "Counters are not allowed", correct: false },
            ],
            correct: "Start at 0, then add 1 for each match.",
            wrong: "Initialize the counter to 0 before you begin counting.",
        },
        {
            question: `If a value does not match the filter, what often happens?`,
            options: [
                { text: "The program crashes", correct: false },
                { text: "You skip it and continue the loop", correct: true },
                { text: "range() resets to 0", correct: false },
                { text: "The loop must stop forever", correct: false },
            ],
            correct: "Non-matches are ignored; the loop moves to the next item.",
            wrong: "No match usually means do nothing and go to the next value.",
        },
    ],

    project: {
        title: "Word Filter",
        desc: "Loop through the word list. Print only words longer than 4 letters. Count how many passed. Print Passed: and that count at the end.",
        starter: [
            `words = ["sun", "planet", "code", "galaxy", "hi", "python", "star", "orbit"]`,
            `passed = 0`,
            ``,
            `for word in words:`,
            `    if len(word) > 4:`,
            `        print(word)`,
            `        # Add 1 to passed`,
            `        `,
            ``,
            `print("Passed:", passed)`,
        ].join("\n"),
    },

    prev: { unit: 4, lesson: 9, title: "if Inside Loops" },
    next: { unit: 5, lesson: 1, title: "Why Functions" },
};
