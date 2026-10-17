export default {
    format: "v2",
    unit: 5,
    lesson: 4,
    unitLessons: 4,
    unitTitle: "Functions",
    title: "Designing with Functions",
    readTime: 30,

    goal: "In this lesson you will learn how to break a bigger program into small, well-named functions that each do one job, so your code is easier to read and fix.",

    learn: [
        "Split a program into focused functions",
        "Give functions clear, descriptive names",
        "Call functions from other functions",
    ],

    idea: `Good programs are built from small functions that each do one clear job. When something goes wrong, you can find the broken function quickly. When you want to reuse a piece of logic, you just call the function again.

One function can call another. That is how you build a bigger report from tiny pieces like <code>grade</code> and <code>print_report</code>.`,

    code: {
        filename: "report.py",
        lines: [
            `def grade(score):`,
            `    if score >= 90:`,
            `        return "A"`,
            `    elif score >= 70:`,
            `        return "B"`,
            `    else:`,
            `        return "C"`,
            ``,
            `def print_report(name, score):`,
            `    letter = grade(score)`,
            `    print(name, "scored", score, "- Grade:", letter)`,
            ``,
            `print_report("Ava", 95)`,
            `print_report("Sam", 78)`,
            `print_report("Leo", 60)`,
        ],
        output: [
            "Ava scored 95 - Grade: A",
            "Sam scored 78 - Grade: B",
            "Leo scored 60 - Grade: C",
        ],
    },

    changeOneLine: `In the editor above, change Ava's score from <code>95</code> to <code>88</code>. Press <strong>Run</strong>. Ava's line should now show Grade: B.`,

    code2: {
        filename: "team.py",
        lines: [
            `def points(wins):`,
            `    return wins * 3`,
            ``,
            `def show_team(name, wins):`,
            `    total = points(wins)`,
            `    print(name, "has", total, "points")`,
            ``,
            `show_team("Dragons", 4)`,
            `show_team("Sharks", 2)`,
        ],
        output: [
            "Dragons has 12 points",
            "Sharks has 6 points",
        ],
    },

    practice: [
        {
            text: `Finish <code>grade(score)</code> and <code>print_report(name, score)</code>. The report function should call grade and print one line.`,
            starter: [
                `def grade(score):`,
                `    if score >= 90:`,
                `        return "A"`,
                `    else:`,
                `        return "B"`,
                ``,
                `def print_report(name, score):`,
                `    letter = grade(score)`,
                `    # Print name, score, and letter`,
                `    print()`,
                ``,
                `print_report("Maya", 92)`,
            ].join("\n"),
            gradingNote: `Pass if grade returns a letter, print_report calls grade, and a report line is printed using name and score.`,
        },
        {
            text: `Finish two functions: <code>double(n)</code> returns n times 2, and <code>show(n)</code> prints the doubled value by calling double. Call show once.`,
            starter: [
                `def double(n):`,
                `    # Return n * 2`,
                `    return`,
                ``,
                `def show(n):`,
                `    result = double(n)`,
                `    print("Doubled:", result)`,
                ``,
                `# Call show with a number`,
                ``,
            ].join("\n"),
            gradingNote: `Pass if double returns n * 2, show calls double and prints, and show is called at least once.`,
        },
    ],

    quiz: [
        {
            question: `Why is it better to write many small functions instead of one long block of code?`,
            options: [
                { text: "Python runs small functions faster", correct: false },
                { text: "Small functions are easier to test, reuse, and fix", correct: true },
                { text: "You need more functions to use return", correct: false },
                { text: "Python requires at least three functions in every program", correct: false },
            ],
            correct: "Small, focused functions are easier to understand, reuse, and fix.",
            wrong: "The real benefit is readability and reuse — each function does one clear job.",
        },
        {
            question: `Can one function call another function?`,
            options: [
                { text: "No, that always causes an error", correct: false },
                { text: "Yes — that is a normal way to build programs", correct: true },
                { text: "Only if both functions are named main", correct: false },
                { text: "Only inside print()", correct: false },
            ],
            correct: "Functions can call other functions to build bigger behavior from small pieces.",
            wrong: "Yes, one function can call another. That is common and useful.",
        },
        {
            question: `In the lesson code, who decides the letter grade: print_report or grade?`,
            options: [
                { text: "print_report does the if/elif checks", correct: false },
                { text: "grade returns the letter; print_report uses it", correct: true },
                { text: "Neither — Python picks a random grade", correct: false },
                { text: "Only print decides the grade", correct: false },
            ],
            correct: "grade does one job (pick the letter). print_report does one job (show the report).",
            wrong: "grade returns the letter. print_report calls grade and prints the line.",
        },
    ],

    project: {
        title: "Student Report Card",
        desc: "Build a tiny report card with separate functions: average of three scores, a letter grade from that average, and a print_report that uses both. Use fixed numbers — no input().",
        starter: [
            `def average(a, b, c):`,
            `    # Return the average of a, b, and c`,
            `    return`,
            ``,
            `def grade(score):`,
            `    if score >= 90:`,
            `        return "A"`,
            `    elif score >= 70:`,
            `        return "B"`,
            `    else:`,
            `        return "C"`,
            ``,
            `def print_report(name, a, b, c):`,
            `    avg = average(a, b, c)`,
            `    letter = grade(avg)`,
            `    # Print name, avg, and letter`,
            `    print()`,
            ``,
            `print_report("Ava", 90, 80, 85)`,
        ].join("\n"),
    },

    prev: { unit: 5, lesson: 3, title: "Return Values" },
    next: { unit: 6, lesson: 1, title: "Creating & Indexing Lists" },
};
