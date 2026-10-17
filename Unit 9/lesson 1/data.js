export default {
    format: "v2",
    unit: 9,
    lesson: 1,
    unitLessons: 3,
    unitTitle: "Files",
    title: "Reading Files",
    readTime: 30,

    fakeFiles: {
        "story.txt": "Once upon a time.\nA robot found a map.\nThe end.\n",
        "note.txt": "Remember: bring snacks!\n",
        "hello.txt": "Hi from a practice file!\n",
    },

    goal: "In this lesson you will learn how to open a practice text file on the page and read its words into your program.",

    learn: [
        "Open a file with open() and with",
        "Read the whole file with read()",
        "Print what you loaded from the file",
    ],

    idea: `These are <strong>practice files</strong> that live in a fake folder on this page — not on your real computer.

To read one, use <code>with open("story.txt") as f:</code>. Inside the block, <code>f.read()</code> gives you the whole file as one string. The <code>with</code> block closes the file for you when you are done.`,

    code: {
        filename: "read_story.py",
        lines: [
            `# Open a practice file and read it`,
            `with open("story.txt") as f:`,
            `    text = f.read()`,
            ``,
            `print(text)`,
            ``,
            `# Another small file`,
            `with open("hello.txt") as f:`,
            `    msg = f.read()`,
            `print("Message:", msg.strip())`,
        ],
        output: [
            "Once upon a time.",
            "A robot found a map.",
            "The end.",
            "",
            "Message: Hi from a practice file!",
        ],
    },

    changeOneLine: `In the editor above, change <code>open("story.txt")</code> to <code>open("note.txt")</code>. Press <strong>Run</strong>. The first print should show <code>Remember: bring snacks!</code>.`,

    code2: {
        filename: "read_note.py",
        lines: [
            `with open("note.txt") as f:`,
            `    reminder = f.read()`,
            ``,
            `print("From the file:")`,
            `print(reminder)`,
        ],
        output: [
            "From the file:",
            "Remember: bring snacks!",
            "",
        ],
    },

    practice: [
        {
            text: `Open <code>hello.txt</code>, read it into a variable, and print it. Fill in the blanks.`,
            starter: [
                `with open("hello.txt") as f:`,
                `    text = `,
                ``,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if the code opens hello.txt with with open, calls read(), and prints the file contents.`,
        },
        {
            text: `Read <code>story.txt</code> and print only the first 16 characters using a slice on the string you read.`,
            starter: [
                `with open("story.txt") as f:`,
                `    text = f.read()`,
                `# Print the first 16 characters`,
                `print()`,
            ].join("\n"),
            gradingNote: `Pass if story.txt is read and the print shows a 16-character slice (Once upon a time).`,
        },
    ],

    quiz: [
        {
            question: `What does <code>f.read()</code> return?`,
            options: [
                { text: "A list of numbers", correct: false },
                { text: "The whole file as one string", correct: true },
                { text: "Only the file name", correct: false },
                { text: "Nothing — it only prints", correct: false },
            ],
            correct: "read() loads the entire file into one string you can print or store.",
            wrong: "f.read() gives you the file's text as a string.",
        },
        {
            question: `Why do we use <code>with open(...)</code>?`,
            options: [
                { text: "It makes the file bigger", correct: false },
                { text: "It opens the file and closes it safely when done", correct: true },
                { text: "It installs Python", correct: false },
                { text: "It deletes the file", correct: false },
            ],
            correct: "with opens the file and closes it automatically at the end of the block.",
            wrong: "with open(...) is the safe way to open and then close a file.",
        },
        {
            question: `Where do the practice files in this lesson live?`,
            options: [
                { text: "On your real computer's desktop", correct: false },
                { text: "In a fake folder on this page for practice", correct: true },
                { text: "On the Moon", correct: false },
                { text: "Inside your email", correct: false },
            ],
            correct: "These are practice files seeded into the page — not your real disk.",
            wrong: "The files are practice files in a fake folder on the page.",
        },
    ],

    project: {
        title: "Story Reader",
        desc: "Read story.txt and print a short intro, then the story, then how many characters it has (use len on the text).",
        starter: [
            `print("=== Story Reader ===")`,
            ``,
            `with open("story.txt") as f:`,
            `    story = f.read()`,
            ``,
            `# Print the story`,
            `print()`,
            ``,
            `# Print the character count`,
            `print("Characters:", )`,
        ].join("\n"),
    },

    prev: { unit: 8, lesson: 4, title: "Dictionary Methods" },
    next: { unit: 9, lesson: 2, title: "Writing Files" },
};
