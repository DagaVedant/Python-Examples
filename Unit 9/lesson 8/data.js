export default {
    format: "v2",
    unit: 9,
    lesson: 8,
    unitLessons: 8,
    unitTitle: "Files",
    title: "File Mini Project",
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
    goal: "In this lesson you will put reading, writing, and processing together in a small file project.",

    learn: [
        "Read data from a practice file",
        "Write a short report file",
        "Process lines into a clear summary",
    ],

    idea: `Mini project time! Read scores from a practice file, process each line, then write a neat report to another practice file.

Use <code>with open</code> for reading and writing. Keep everything in the practice folder — no real disk, and no <code>input()</code>.`,

    code: {
        filename: "mini_project_demo.py",
        lines: [
            `total = 0`,
            `count = 0`,
            `with open("scores.txt") as f:`,
            `    for line in f:`,
            `        parts = line.split()`,
            `        total = total + int(parts[1])`,
            `        count = count + 1`,
            `average = total / count`,
            ``,
            `with open("report.txt", "w") as f:`,
            `    f.write("Score Report\\n")`,
            `    f.write("Players: " + str(count) + "\\n")`,
            `    f.write("Average: " + str(average) + "\\n")`,
            ``,
            `with open("report.txt") as f:`,
            `    print(f.read())`,
        ],
        output: [
            "Score Report",
            "Players: 3",
            "Average: 89.0",
            "",
        ],
    },

    changeOneLine: `In the editor above, change the report title write to <code>"CLASS SCORES\\n"</code>. Press <strong>Run</strong>. The first line should update.`,

    code2: {
        filename: "copy_tips.py",
        lines: [
            `with open("tips.txt") as f:`,
            `    text = f.read()`,
            `with open("tips_copy.txt", "w") as f:`,
            `    f.write(text)`,
            `with open("tips_copy.txt") as f:`,
            `    print(f.read())`,
        ],
        output: [
            "Save often.",
            "Have fun coding!",
            "",
        ],
    },

    practice: [
        {
            text: `Read hello.txt and write the same text into hello_copy.txt using with open. Print the copy.`,
            hint: `You already have text from hello.txt. Open hello_copy.txt with "w" in a with block and f.write(text) to save a copy.`,
            starterTip: `Add: with open("hello_copy.txt", "w") as f: then f.write(text) — the last block prints the copy for you.`,
            starter: [
                "with open(\"hello.txt\") as f:",
                "    text = f.read()",
                "# Write hello_copy.txt",
                "",
                "with open(\"hello_copy.txt\") as f:",
                "    print(f.read())"
            ].join("\n"),
            gradingNote: `Pass if hello_copy.txt matches hello.txt and is printed.`,
        },
        {
            text: `Write report2.txt with one line stating how many lines are in story.txt, then print report2.txt.`,
            hint: `After the loop, count holds how many lines story.txt has. Write one line to report2.txt that mentions that number (story has 3 lines).`,
            starterTip: `Try: with open("report2.txt", "w") as f: f.write("Lines in story: " + str(count) + "\\n"), then open report2.txt and print(f.read()).`,
            starter: [
                "count = 0",
                "with open(\"story.txt\") as f:",
                "    for line in f:",
                "        count = count + 1",
                "# Write and print report2.txt",
                ""
            ].join("\n"),
            gradingNote: `Pass if report2 mentions 3 lines (story has 3) and is printed.`,
        },
    ],

    quiz: [
        {
            question: `What belongs in a file mini project?`,
            options: [
                { text: `Only input() from the keyboard`, correct: false },
                { text: `Read, process, and maybe write practice files`, correct: true },
                { text: `Deleting the OS`, correct: false },
                { text: `Ignoring with open`, correct: false },
            ],
            correct: `Combine the file skills you learned.`,
            wrong: `Practice folder only — no real disk.`,
        },
        {
            question: `Which pattern is best for open/close safety?`,
            options: [
                { text: `Never close`, correct: false },
                { text: `with open(...)`, correct: true },
                { text: `open without a name`, correct: false },
                { text: `print(open)`, correct: false },
            ],
            correct: `with open is the safe habit.`,
            wrong: `Prefer with in projects.`,
        },
        {
            question: `Are practice report files on your real disk?`,
            options: [
                { text: `Yes, Documents folder`, correct: false },
                { text: `No — they stay in the page practice folder`, correct: true },
                { text: `Yes, always Downloads`, correct: false },
                { text: `Yes, the recycle bin`, correct: false },
            ],
            correct: `Still the fake practice folder.`,
            wrong: `Safe sandbox for learning.`,
        },
    ],

    project: {
        title: "Team Score File Helper",
        desc: "Read scores.txt. Write report.txt with each player line plus a final total. Print the report.",
        starter: [
            "total = 0",
            "with open(\"report.txt\", \"w\") as out:",
            "    out.write(\"Team Scores\\n\")",
            "    with open(\"scores.txt\") as f:",
            "        for line in f:",
            "            parts = line.split()",
            "            # write a neat line; add to total",
            "            ",
            "    out.write(\"Total: \" + str(total) + \"\\n\")",
            "",
            "with open(\"report.txt\") as f:",
            "    print(f.read())"
        ].join("\n"),
    },

    prev: { unit: 9, lesson: 7, title: "Processing File Text" },
    next: { unit: 10, lesson: 1, title: "What is an Error" },
};
