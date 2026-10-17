export default {
    format: "v2",
    unit: 9,
    lesson: 7,
    unitLessons: 8,
    unitTitle: "Files",
    title: "Processing File Text",
    readTime: 25,
    fakeFiles: {
        "story.txt": "Once upon a time.\nA robot found a map.\nThe end.\n",
        "note.txt": "Remember: bring snacks!\n",
        "hello.txt": "Hi from a practice file!\n",
        "scores.txt": "Ava 90\nLeo 85\nMia 92\n",
        "tips.txt": "Save often.\nHave fun coding!\n",
        "starter.txt": "This line was already here.\n",
        "todo.txt": "1. Feed the cat\n2. Finish homework\n",
    },
    goal: "In this lesson you will learn how to split file lines into pieces and work with the parts.",

    learn: [
        "Read lines from a file",
        "split() a line into parts",
        "Use the parts in prints or totals",
    ],

    idea: `File text is still a string. After you read a line, tools like <code>split()</code> break it into pieces.

Example: <code>"Ava 90".split()</code> becomes <code>["Ava", "90"]</code>. Then you can print the name or turn the score into a number with <code>int(...)</code>.`,

    code: {
        filename: "process.py",
        lines: [
            `with open("scores.txt") as f:`,
            `    for line in f:`,
            `        parts = line.split()`,
            `        name = parts[0]`,
            `        score = int(parts[1])`,
            `        print(name, "scored", score)`,
        ],
        output: [
            "Ava scored 90",
            "Leo scored 85",
            "Mia scored 92",
        ],
    },

    changeOneLine: `In the editor above, change the print to show <code>print(name + ":", score)</code>. Press <strong>Run</strong>.`,

    code2: {
        filename: "total.py",
        lines: [
            `total = 0`,
            `with open("scores.txt") as f:`,
            `    for line in f:`,
            `        parts = line.split()`,
            `        total = total + int(parts[1])`,
            `print("Total:", total)`,
        ],
        output: [
            "Total: 267",
        ],
    },

    practice: [
        {
            text: `Loop scores.txt. Print only the names (first part of each line).`,
            hint: `After split(), the name is the first piece — index 0. Print parts[0], not the whole line or the score.`,
            starterTip: `Use print(parts[0]) inside the loop. You should see Ava, then Leo, then Mia.`,
            starter: [
                "with open(\"scores.txt\") as f:",
                "    for line in f:",
                "        parts = line.split()",
                "        print()"
            ].join("\n"),
            gradingNote: `Pass if Ava, Leo, Mia each print from split parts.`,
        },
        {
            text: `Add all scores from scores.txt and print the total.`,
            hint: `The score is the second piece: parts[1]. Turn it into a number with int() before adding to total.`,
            starterTip: `Add total = total + int(parts[1]) where the comment says "# add score". Total should be 267.`,
            starter: [
                "total = 0",
                "with open(\"scores.txt\") as f:",
                "    for line in f:",
                "        parts = line.split()",
                "        # add score",
                "",
                "print(\"Total:\", total)"
            ].join("\n"),
            gradingNote: `Pass if total is 267 from the three scores.`,
        },
    ],

    quiz: [
        {
            question: `What does "Ava 90".split() roughly become?`,
            options: [
                { text: `"Ava90"`, correct: false },
                { text: `["Ava", "90"]`, correct: true },
                { text: `90 only`, correct: false },
                { text: `An error always`, correct: false },
            ],
            correct: `split() breaks on spaces into a list of pieces.`,
            wrong: `You get name and score as separate strings.`,
        },
        {
            question: `How do you turn the score text into a number?`,
            options: [
                { text: `split(parts[1])`, correct: false },
                { text: `int(parts[1])`, correct: true },
                { text: `open(parts[1])`, correct: false },
                { text: `parts[1] + 0 only`, correct: false },
            ],
            correct: `int() casts the digit string to a number.`,
            wrong: `Cast before you add scores.`,
        },
        {
            question: `Why process file text?`,
            options: [
                { text: `To delete dictionaries`, correct: false },
                { text: `To turn saved text into useful program data`, correct: true },
                { text: `To avoid print forever`, correct: false },
                { text: `To skip learning`, correct: false },
            ],
            correct: `Files store text; your code shapes it.`,
            wrong: `split and int are common next steps.`,
        },
    ],

    project: {
        title: "Score Report",
        desc: "Read scores.txt. Print each name and score. Then print the average (total / count).",
        starter: [
            "total = 0",
            "count = 0",
            "with open(\"scores.txt\") as f:",
            "    for line in f:",
            "        parts = line.split()",
            "        name = parts[0]",
            "        score = int(parts[1])",
            "        print()",
            "        total = total + score",
            "        count = count + 1",
            "print(\"Average:\", )"
        ].join("\n"),
    },

    prev: { unit: 9, lesson: 6, title: "with open" },
    next: { unit: 9, lesson: 8, title: "File Mini Project" },
};
