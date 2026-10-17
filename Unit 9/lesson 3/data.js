export default {
    format: "v2",
    unit: 9,
    lesson: 3,
    unitLessons: 3,
    unitTitle: "Files",
    title: "Working with File Contents",
    readTime: 30,

    fakeFiles: {
        "scores.txt": "Mia 12\nLeo 9\nSam 15\n",
        "words.txt": "apple\nbanana\ncherry\n",
        "numbers.txt": "10\n20\n30\n",
    },

    goal: "In this lesson you will learn how to split a file into lines, loop over them, and build useful results from the text inside.",

    learn: [
        "Split file text into lines",
        "Loop over each line and clean it with strip()",
        "Turn line pieces into useful data",
    ],

    idea: `A file is often many lines stuck together. After <code>f.read()</code>, use <code>text.splitlines()</code> (or loop with <code>f</code>) to handle <strong>one line at a time</strong>.

<code>strip()</code> removes leftover spaces and newlines. You can <code>split()</code> a line into parts — for example a name and a score — then print totals or save a new practice file.`,

    code: {
        filename: "score_lines.py",
        lines: [
            `with open("scores.txt") as f:`,
            `    text = f.read()`,
            ``,
            `print("Players:")`,
            `for line in text.splitlines():`,
            `    if line.strip() == "":`,
            `        continue`,
            `    parts = line.split()`,
            `    name = parts[0]`,
            `    score = int(parts[1])`,
            `    print(name, "->", score)`,
        ],
        output: [
            "Players:",
            "Mia -> 12",
            "Leo -> 9",
            "Sam -> 15",
        ],
    },

    changeOneLine: `In the editor above, change the print to <code>print(name, "scored", score)</code>. Press <strong>Run</strong>. Each line should say something like <code>Mia scored 12</code>.`,

    code2: {
        filename: "sum_numbers.py",
        lines: [
            `total = 0`,
            `with open("numbers.txt") as f:`,
            `    for line in f:`,
            `        total = total + int(line.strip())`,
            ``,
            `print("Sum:", total)`,
            ``,
            `# Save the result in a new practice file`,
            `with open("total.txt", "w") as f:`,
            `    f.write("Sum: " + str(total) + "\\n")`,
            ``,
            `with open("total.txt") as f:`,
            `    print(f.read().strip())`,
        ],
        output: [
            "Sum: 60",
            "Sum: 60",
        ],
    },

    practice: [
        {
            text: `Read <code>words.txt</code>. Loop over the lines and print each word in uppercase.`,
            starter: [
                `with open("words.txt") as f:`,
                `    for line in f:`,
                `        word = line.strip()`,
                `        # Print the word in uppercase`,
                `        print()`,
            ].join("\n"),
            gradingNote: `Pass if words.txt is opened, lines are stripped, and each word is printed with .upper() (APPLE, BANANA, CHERRY).`,
        },
        {
            text: `Read <code>scores.txt</code>. Print how many players are in the file (count non-empty lines).`,
            starter: [
                `count = 0`,
                `with open("scores.txt") as f:`,
                `    for line in f:`,
                `        if line.strip() != "":`,
                `            count = count + 1`,
                ``,
                `print("Players:", )`,
            ].join("\n"),
            gradingNote: `Pass if the program counts non-empty lines from scores.txt and prints Players: 3.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>line.strip()</code> do?`,
            options: [
                { text: "Deletes the whole file", correct: false },
                { text: "Removes spaces and newlines from the ends", correct: true },
                { text: "Turns the line into a list forever", correct: false },
                { text: "Opens a second file", correct: false },
            ],
            correct: "strip() cleans leftover whitespace from both ends of the string.",
            wrong: "strip() removes spaces and newline characters from the ends of the line.",
        },
        {
            question: `For the line <code>"Sam 15"</code>, what is <code>line.split()[0]</code>?`,
            options: [
                { text: "15", correct: false },
                { text: "Sam", correct: true },
                { text: "Sam 15", correct: false },
                { text: "An error", correct: false },
            ],
            correct: "split() makes [\"Sam\", \"15\"], so index 0 is the name Sam.",
            wrong: "split() breaks the line into parts; the first part is Sam.",
        },
        {
            question: `How can you visit every line in a file named <code>words.txt</code>?`,
            options: [
                { text: `Ask the file politely with input()`, correct: false },
                { text: `with open("words.txt") as f: then for line in f`, correct: true },
                { text: `print(every_line) with no open`, correct: false },
                { text: `Delete the file first`, correct: false },
            ],
            correct: "Open with with, then loop for line in f to get each line.",
            wrong: "Use with open(...) as f and then for line in f.",
        },
    ],

    project: {
        title: "Score File Helper",
        desc: "Read scores.txt. Print each player's name and score. Add up all scores and write the total into report.txt, then print that report.",
        starter: [
            `total = 0`,
            `with open("scores.txt") as f:`,
            `    for line in f:`,
            `        line = line.strip()`,
            `        if line == "":`,
            `            continue`,
            `        parts = line.split()`,
            `        name = parts[0]`,
            `        score = int(parts[1])`,
            `        print(name + ":", score)`,
            `        # Add score to total`,
            `        total = `,
            ``,
            `with open("report.txt", "w") as f:`,
            `    f.write("Total points: " + str(total) + "\\n")`,
            ``,
            `with open("report.txt") as f:`,
            `    print(f.read().strip())`,
        ].join("\n"),
    },

    prev: { unit: 9, lesson: 2, title: "Writing Files" },
    next: { unit: 10, lesson: 1, title: "When Code Breaks" },
};
