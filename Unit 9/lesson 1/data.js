export default {
    format: "v2",
    unit: 9,
    lesson: 1,
    unitLessons: 8,
    unitTitle: "Files",
    title: "What is a File",
    readTime: 20,
    fakeFiles: {
        "story.txt": "Once upon a time.\nA robot found a map.\nThe end.\n",
        "note.txt": "Remember: bring snacks!\n",
        "hello.txt": "Hi from a practice file!\n",
        "scores.txt": "Ava 90\nLeo 85\nMia 92\n",
        "tips.txt": "Save often.\nHave fun coding!\n",
        "starter.txt": "This line was already here.\n",
        "todo.txt": "1. Feed the cat\n2. Finish homework\n",
    },
    goal: "In this lesson you will learn what a practice file is and that it lives in a fake folder on this page — not on your real computer.",

    learn: [
        "A file stores text you can reuse",
        "Practice files live in a fake folder here",
        "File names end with extensions like .txt",
    ],

    idea: `A <strong>file</strong> holds text your program can read later — like a note saved under a name such as <code>story.txt</code>.

In these lessons, files live in a <strong>practice folder on this page</strong>. They are not saved to your real desktop. That keeps practice safe and simple.`,

    code: {
        filename: "about_files.py",
        lines: [
            `print("A file has a name, like story.txt")`,
            `print("Practice files live on this page")`,
            `print("They are not on your real disk")`,
        ],
        output: [
            "A file has a name, like story.txt",
            "Practice files live on this page",
            "They are not on your real disk",
        ],
    },

    changeOneLine: `In the editor above, change the middle message to <code>"Practice files are for learning"</code>. Press <strong>Run</strong>.`,

    code2: {
        filename: "names.py",
        lines: [
            `print("hello.txt")`,
            `print("note.txt")`,
            `print("story.txt")`,
        ],
        output: [
            "hello.txt",
            "note.txt",
            "story.txt",
        ],
    },

    practice: [
        {
            text: `Print two sentences: what a file stores, and where practice files live.`,
            hint: `Use two print() lines. One should say that a file stores text (or information). The other should say practice files live on this page — not on your real computer.`,
            starterTip: `Try print("A file stores text you can read later") and print("Practice files live in a fake folder on this page").`,
            starter: [
                "print()",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if two non-empty prints mention files / practice / page.`,
        },
        {
            text: `Print three practice file names from this lesson.`,
            hint: `Each name should be a string in quotes and end with .txt. story.txt is already in the starter — fill in two more from this lesson, like note.txt or hello.txt.`,
            starterTip: `Add print("note.txt") and print("hello.txt") on the blank lines (or any two other .txt names from the lesson).`,
            starter: [
                "print(\"story.txt\")",
                "print()",
                "print()"
            ].join("\n"),
            gradingNote: `Pass if three .txt names are printed.`,
        },
    ],

    quiz: [
        {
            question: `Where do practice files in this course live?`,
            options: [
                { text: `On your real computer's desktop`, correct: false },
                { text: `In a fake folder on this page`, correct: true },
                { text: `On the Moon`, correct: false },
                { text: `Inside your email`, correct: false },
            ],
            correct: `These are practice files seeded into the page — not your real disk.`,
            wrong: `The files are practice files in a fake folder on the page.`,
        },
        {
            question: `What is a common text file ending?`,
            options: [
                { text: `.png only`, correct: false },
                { text: `.txt`, correct: true },
                { text: `.exe only`, correct: false },
                { text: `No ending ever`, correct: false },
            ],
            correct: `Many text files use the .txt extension.`,
            wrong: `story.txt is a text file name.`,
        },
        {
            question: `Why use practice files instead of the real disk?`,
            options: [
                { text: `They are slower forever`, correct: false },
                { text: `Safer learning without touching real files`, correct: true },
                { text: `Python forbids real files always`, correct: false },
                { text: `They print in reverse`, correct: false },
            ],
            correct: `Practice files keep lessons safe and predictable.`,
            wrong: `The fake folder is for learning only.`,
        },
    ],

    project: {
        title: "File Name Gallery",
        desc: "Print a short intro, then list three practice file names, one per line.",
        starter: [
            "print(\"=== Practice Files ===\")",
            "print(\"story.txt\")",
            "print()",
            "print()"
        ].join("\n"),
    },

    prev: { unit: 8, lesson: 10, title: "Dictionary Methods" },
    next: { unit: 9, lesson: 2, title: "Opening and Reading" },
};
