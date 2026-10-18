export default {
    format: "v2",
    unit: 9,
    lesson: 4,
    unitLessons: 8,
    unitTitle: "Files",
    title: "Writing Files",
    readTime: 22,
    fakeFiles: {
        "story.txt": "Once upon a time.\nA robot found a map.\nThe end.\n",
        "note.txt": "Remember: bring snacks!\n",
        "hello.txt": "Hi from a practice file!\n",
        "scores.txt": "Ava 90\nLeo 85\nMia 92\n",
        "tips.txt": "Save often.\nHave fun coding!\n",
        "starter.txt": "This line was already here.\n",
        "todo.txt": "1. Feed the cat\n2. Finish homework\n",
    },
    goal: "In this lesson you will learn how to create or overwrite a practice file with mode \"w\" and write().",

    learn: [
        "Open for writing with mode \"w\"",
        "Write text with write()",
        "Read the file back to check",
    ],

    idea: `To <strong>write</strong>, open with mode <code>"w"</code>: <code>f = open("diary.txt", "w")</code>. Then <code>f.write("text\\n")</code>.

Mode <code>"w"</code> creates the file or <strong>replaces</strong> old contents. Still only in the practice folder on this page!`,

    code: {
        filename: "write_diary.py",
        lines: [
            `f = open("diary.txt", "w")`,
            `f.write("Today I learned about files.\\n")`,
            `f.write("Writing is fun!\\n")`,
            `f.close()`,
            ``,
            `f = open("diary.txt")`,
            `print(f.read())`,
            `f.close()`,
        ],
        output: [
            "Today I learned about files.",
            "Writing is fun!",
            "",
        ],
    },

    changeOneLine: `In the editor above, change the second write string to <code>"I wrote this myself!\\n"</code>. Press <strong>Run</strong>.`,

    code2: {
        filename: "write_list.py",
        lines: [
            `f = open("todo.txt", "w")`,
            `f.write("1. Feed the cat\\n")`,
            `f.write("2. Finish homework\\n")`,
            `f.close()`,
            `f = open("todo.txt")`,
            `print(f.read())`,
            `f.close()`,
        ],
        output: [
            "1. Feed the cat",
            "2. Finish homework",
            "",
        ],
    },

    practice: [
        {
            text: `Write "Hello, file!" plus a newline into hello_out.txt, then read and print it.`,
            hint: `f.write() needs a string. Put the message in quotes and add \\n at the end so it becomes its own line.`,
            starterTip: `Try f.write("Hello, file!\\n"). The rest of the starter already reads and prints the file for you.`,
            starter: [
                "f = open(\"hello_out.txt\", \"w\")",
                "f.write()",
                "f.close()",
                "f = open(\"hello_out.txt\")",
                "print(f.read())",
                "f.close()"
            ].join("\n"),
            gradingNote: `Pass if hello_out.txt is written with Hello, file! and then read/printed.`,
        },
        {
            text: `Overwrite starter.txt with a new short message, then read and print it.`,
            hint: `Mode "w" replaces everything. Pick any short sentence, write it with f.write("your message\\n"), then use the read block to check.`,
            starterTip: `Example: f.write("My new note!\\n"). Run it and the printed text should be your message, not the old starter line.`,
            starter: [
                "f = open(\"starter.txt\", \"w\")",
                "f.write()",
                "f.close()",
                "f = open(\"starter.txt\")",
                "print(f.read())",
                "f.close()"
            ].join("\n"),
            gradingNote: `Pass if starter.txt is overwritten and the new text is printed.`,
        },
    ],

    quiz: [
        {
            question: `What does mode "w" do if the file already exists?`,
            options: [
                { text: `Always appends quietly`, correct: false },
                { text: `Replaces the old contents`, correct: true },
                { text: `Deletes Python`, correct: false },
                { text: `Reads only`, correct: false },
            ],
            correct: `"w" overwrites existing practice file contents.`,
            wrong: `Write mode starts fresh.`,
        },
        {
            question: `Which call puts text into the file?`,
            options: [
                { text: `f.read()`, correct: false },
                { text: `f.write(...)`, correct: true },
                { text: `f.close()`, correct: false },
                { text: `print only`, correct: false },
            ],
            correct: `write() saves the string into the file.`,
            wrong: `Use write for output to the file.`,
        },
        {
            question: `Do these writes change your real computer files?`,
            options: [
                { text: `Yes, always the desktop`, correct: false },
                { text: `No. Only the practice folder on the page`, correct: true },
                { text: `Yes, your photos`, correct: false },
                { text: `Yes, system files`, correct: false },
            ],
            correct: `Practice files stay in the fake folder.`,
            wrong: `Lessons do not touch your real disk.`,
        },
    ],

    project: {
        title: "Diary Entry",
        desc: "Write two lines to my_day.txt, close, then read and print the whole file.",
        starter: [
            "f = open(\"my_day.txt\", \"w\")",
            "# write two lines",
            "",
            "f.close()",
            "",
            "f = open(\"my_day.txt\")",
            "print(f.read())",
            "f.close()"
        ].join("\n"),
    },

    prev: { unit: 9, lesson: 3, title: "Reading Lines" },
    next: { unit: 9, lesson: 5, title: "Append Mode" },
};
