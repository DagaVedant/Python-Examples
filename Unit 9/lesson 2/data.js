export default {
    format: "v2",
    unit: 9,
    lesson: 2,
    unitLessons: 3,
    unitTitle: "Files",
    title: "Writing Files",
    readTime: 30,

    fakeFiles: {
        "starter.txt": "This line was already here.\n",
        "tips.txt": "Save often.\nHave fun coding!\n",
    },

    goal: "In this lesson you will learn how to create or overwrite a practice text file on the page and put your own words inside it.",

    learn: [
        "Open a file for writing with mode \"w\"",
        "Write text with write()",
        "Read the file back to check what you saved",
    ],

    idea: `To <strong>write</strong> a practice file, open it with mode <code>"w"</code>: <code>with open("diary.txt", "w") as f:</code>. Then call <code>f.write("your text")</code>.

Mode <code>"w"</code> creates the file if it is new, or replaces the old contents if it already exists. These files stay in the fake folder on this page — not on your real computer.`,

    code: {
        filename: "write_diary.py",
        lines: [
            `# Create (or overwrite) a practice file`,
            `with open("diary.txt", "w") as f:`,
            `    f.write("Today I learned about files.\\n")`,
            `    f.write("Writing is fun!\\n")`,
            ``,
            `# Read it back to check`,
            `with open("diary.txt") as f:`,
            `    print(f.read())`,
        ],
        output: [
            "Today I learned about files.",
            "Writing is fun!",
            "",
        ],
    },

    changeOneLine: `In the editor above, change the second <code>write</code> string to <code>"I wrote this myself!\\n"</code>. Press <strong>Run</strong>. The second line of output should match your new text.`,

    code2: {
        filename: "write_list.py",
        lines: [
            `with open("todo.txt", "w") as f:`,
            `    f.write("1. Feed the cat\\n")`,
            `    f.write("2. Finish homework\\n")`,
            ``,
            `with open("todo.txt") as f:`,
            `    print(f.read())`,
        ],
        output: [
            "1. Feed the cat",
            "2. Finish homework",
            "",
        ],
    },

    practice: [
        {
            text: `Write the line <code>Hello, file!</code> (plus a newline) into <code>hello_out.txt</code>, then read and print the file.`,
            starter: [
                `with open("hello_out.txt", "w") as f:`,
                `    f.write()`,
                ``,
                `with open("hello_out.txt") as f:`,
                `    print(f.read())`,
            ].join("\n"),
            gradingNote: `Pass if hello_out.txt is opened with "w", write saves Hello, file! (with newline), and the file is read and printed.`,
        },
        {
            text: `Overwrite <code>starter.txt</code> with a new short message, then read and print it to prove the old line is gone.`,
            starter: [
                `with open("starter.txt", "w") as f:`,
                `    f.write("Brand new text!\\n")`,
                ``,
                `# Read and print starter.txt`,
                ``,
            ].join("\n"),
            gradingNote: `Pass if starter.txt is written with mode "w" and then read/printed showing the new message, not the old starter line.`,
        },
    ],

    quiz: [
        {
            question: `What does mode <code>"w"</code> mean when you open a file?`,
            options: [
                { text: "Wait — do nothing", correct: false },
                { text: "Write — create or replace the file contents", correct: true },
                { text: "Whisper — print quietly", correct: false },
                { text: "Wipe your whole computer", correct: false },
            ],
            correct: "\"w\" means write mode: create the file or replace what was there.",
            wrong: "Mode \"w\" is for writing (creating or overwriting) a file.",
        },
        {
            question: `After you write to a practice file, how can you check what is inside?`,
            options: [
                { text: "Open it again and use read()", correct: true },
                { text: "Restart your real computer", correct: false },
                { text: "Delete Python", correct: false },
                { text: "Use input()", correct: false },
            ],
            correct: "Open the same file again (default read mode) and call read().",
            wrong: "Read the file back with open(...) and f.read().",
        },
        {
            question: `If <code>tips.txt</code> already exists and you open it with <code>"w"</code>, what happens?`,
            options: [
                { text: "Nothing — Python ignores \"w\"", correct: false },
                { text: "The old contents are replaced by what you write", correct: true },
                { text: "Two copies of the file appear", correct: false },
                { text: "Your real Documents folder is erased", correct: false },
            ],
            correct: "Write mode replaces the previous contents of that practice file.",
            wrong: "Opening with \"w\" overwrites the old text in that practice file.",
        },
    ],

    project: {
        title: "Diary Entry",
        desc: "Write a 3-line diary entry into diary.txt (use write three times, each ending with \\n). Then read the file and print it under a title.",
        starter: [
            `with open("diary.txt", "w") as f:`,
            `    f.write("Day 1: Learned to write files.\\n")`,
            `    # Write two more short lines`,
            `    f.write()`,
            `    f.write()`,
            ``,
            `print("=== My Diary ===")`,
            `with open("diary.txt") as f:`,
            `    print(f.read())`,
        ].join("\n"),
    },

    prev: { unit: 9, lesson: 1, title: "Reading Files" },
    next: { unit: 9, lesson: 3, title: "Working with File Contents" },
};
