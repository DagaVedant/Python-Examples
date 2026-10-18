export default {
    format: "v2",
    unit: 6,
    lesson: 6,
    unitLessons: 10,
    unitTitle: "Lists",
    title: "remove and pop",
    readTime: 23,

    goal: "In this lesson you will learn how to take items out of a list with remove (by value) and pop (by index).",

    learn: [
        "remove() deletes the first matching value",
        "pop() removes an item by index",
        "pop() can give you the removed item back",
    ],

    idea: `<code>remove(value)</code> finds the first matching value and deletes it.

    <code>pop()</code> removes the <strong>last</strong> item by default. <code>pop(index)</code> removes the item at that index. Both return the removed value so you can save it.`,

    code: {
        filename: "take_away.py",
        lines: [
            `tasks = ["milk", "homework", "dog", "email"]`,
            `print(tasks)`,
            ``,
            `# Remove by value`,
            `tasks.remove("homework")`,
            `print(tasks)`,
            ``,
            `# Pop the last item`,
            `done = tasks.pop()`,
            `print("Removed:", done)`,
            `print("Left:", tasks)`,
            ``,
            `# Pop at index 0`,
            `first = tasks.pop(0)`,
            `print("First out:", first)`,
            `print("Left:", tasks)`,
        ],
        output: [
            "['milk', 'homework', 'dog', 'email']",
            "['milk', 'dog', 'email']",
            "Removed: email",
            "Left: ['milk', 'dog']",
            "First out: milk",
            "Left: ['dog']",
        ],
    },

    changeOneLine: `In the editor above, change <code>tasks.remove("homework")</code> to <code>tasks.remove("dog")</code>. Press <strong>Run</strong>. The second printed list should no longer include <code>dog</code>.`,

    code2: {
        filename: "stack.py",
        lines: [
            `plates = ["red", "blue", "green"]`,
            `top = plates.pop()`,
            `print("Took:", top)`,
            `print("Stack:", plates)`,
        ],
        output: [
            "Took: green",
            "Stack: ['red', 'blue']",
        ],
    },

    practice: [
        {
            text: `Remove <code>"spam"</code> from the list, then print what is left.`,
            hint: `Use inbox.remove() and pass the exact word "spam" in quotes. Same spelling as in the list.`,
            starterTip: `Add a line like inbox.remove("spam") under the comment, before print(inbox).`,
            starter: [
                `inbox = ["hello", "spam", "news"]`,
                `# Remove spam`,
                ``,
                `print(inbox)`,
            ].join("\n"),
            gradingNote: `Pass if remove("spam") is used and inbox no longer contains spam.`,
        },
        {
            text: `Pop the last item into a variable called <code>last</code>, then print <code>last</code> and the list.`,
            hint: `nums.pop() with nothing inside grabs the last item and gives it back. Save that return value in last.`,
            starterTip: `On the blank line, try last = nums.pop() so last becomes 30.`,
            starter: [
                `nums = [10, 20, 30]`,
                `last = `,
                `print(last)`,
                `print(nums)`,
            ].join("\n"),
            gradingNote: `Pass if last = nums.pop() (or pop of last index) and both last and nums are printed; last should be 30.`,
        },
    ],

    quiz: [
        {
            question: `What does <code>items.remove("x")</code> need?`,
            options: [
                { text: "An index number only", correct: false },
                { text: "The value to delete", correct: true },
                { text: "Nothing. It clears the list", correct: false },
                { text: "A brand-new list name", correct: false },
            ],
            correct: "remove looks for a matching value, not an index.",
            wrong: "You pass the value you want deleted.",
        },
        {
            question: `What does <code>pop()</code> with no argument remove?`,
            options: [
                { text: "The first item", correct: false },
                { text: "The last item", correct: true },
                { text: "Every item", correct: false },
                { text: "A random item", correct: false },
            ],
            correct: "Bare pop() takes from the end.",
            wrong: "pop() defaults to the last index.",
        },
        {
            question: `Why save <code>x = items.pop()</code>?`,
            options: [
                { text: "pop returns the removed value", correct: true },
                { text: "pop always returns None", correct: false },
                { text: "pop cannot remove anything", correct: false },
                { text: "pop only works on empty lists", correct: false },
            ],
            correct: "pop gives back the item it removed.",
            wrong: "You can store the popped value in a variable.",
        },
    ],

    project: {
        title: "Checkout Cart",
        desc: "Start with four cart items. Remove one by value, pop one from the end, then print what is left.",
        starter: [
            `cart = ["bread", "milk", "candy", "eggs"]`,
            `# remove one item by value`,
            ``,
            `# pop one from the end`,
            ``,
            `print(cart)`,
        ].join("\n"),
    },

    prev: { unit: 6, lesson: 5, title: "append and insert" },
    next: { unit: 6, lesson: 7, title: "for over Lists" },
};
