# Python Examples

An interactive Python learning course for beginners, all in your browser. No downloads, no paywalls. Its broken into small units with the basic fundamental skills, with tons of lessons including code examples, lesson goals, mini quizzes, practice problems, and projects. Basically everything you need to finally learn Python!!!

## Live Demo

Try it here: [https://dagavedant.github.io/Python-Examples/](https://dagavedant.github.io/Python-Examples/)

Every lesson is free — no account needed. You can read them, run real Python right in the browser (including input()), and take the quizzes. After your first lesson, you can optionally create a free account to save progress across devices and get AI feedback on practice code.

## Quick Peak

![How it looks](public/images/preview.png)

Theres also a short demo video at `public/video/demo.mp4` if you want to see it in action.

## What You Get

- 110 short lessons across 12 units (AP CSP style — one idea per lesson), from your first program through dictionaries, files, errors, imports, and classes
- A built in code editor with line wrapping and AI feedback on your practice code
- Optional free account to save progress across devices and unlock AI practice checks
- A quiz and two practice tasks in every lesson

## How does it Work

Its a static site (just HTML, CSS, and JS) with a [Supabase](https://supabase.com) backend doing the heavy lifting:

- An optional account stores lesson progress in Supabase so it follows you across devices.
- Your practice code gets checked by a Supabase function that uses AI. The API key stays on the server, so its never exposed in the browser.
- Each lesson loads all its content from a `data.js` file inside `Unit X/lesson Y/`. The `lesson.html` page reads the `?unit=` and `?lesson=` from the URL and renders the right lesson automatically.

## Running it Locally

Since its all static, you can serve the folder with pretty much anything:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

You dont even need Python installed to follow the lessons in the browser, but if you want to run the practice code in your own editor you'll need Python 3.x. I love VS Code, but any IDE works perfect.

## The Course

Each unit is split into short lessons — one idea at a time — like an AP CSP unit plan.

### Unit 1 - Getting Started with Python (10)
What is a Program · print() Basics · Comments · Many Lines of Output · Strings and Quotes · Fancy print() · Variables · Changing Variables · Using Answers · Data Types & Casting

### Unit 2 - Number Calculations & Data (10)
Plus and Minus · Multiply and Divide · Order of Operations · Float Division · Integer Division · Remainder · Text into Numbers · Multi-step Math · The math Module · Useful math Tools

### Unit 3 - Making Decisions (10)
True and False · Comparing Values · if · else · elif · Many Branches · and · or · not · Complex Conditions

### Unit 4 - Repetition & Loops (10)
Why Loops · for Loops · range() Basics · range() Start and Step · Looping and Totals · while Loops · while Counters · Loops That Stop Safely · if Inside Loops · Filter with Loops

### Unit 5 - Functions (8)
Why Functions · Defining and Calling · One Parameter · Multiple Parameters · Return Values · Using What You Return · Functions Calling Functions · Designing with Functions

### Unit 6 - Lists (10)
What is a List · Creating Lists · Indexes · Changing Items · append and insert · remove and pop · for over Lists · Totals from Lists · List Methods · Building Lists

### Unit 7 - 2D Lists (8)
Lists Inside Lists · Reading Rows · Cells and Columns · Changing a Cell · Nested Loops · Printing a Grid · Searching a Grid · Grid Mini Project

### Unit 8 - Dictionaries (10)
What is a Dictionary · Creating Dictionaries · Looking Up Keys · Adding Keys · Updating Values · Removing Keys · Looping Keys · Looping Items · Safe Lookup with get · Dictionary Methods

### Unit 9 - Files (8)
What is a File · Opening and Reading · Reading Lines · Writing Files · Append Mode · with open · Processing File Text · File Mini Project

### Unit 10 - Errors (8)
What is an Error · Reading Error Messages · Common Errors · try · except · Friendly Messages · Specific except · Error Practice

### Unit 11 - Imports (8)
Why Import · import module · module.name · from import · random · math Tools · Combining Modules · Mini Toolkit

### Unit 12 - Classes (10)
Why Classes · Your First Class · Objects · Attributes · Methods · self · __init__ · More __init__ · Objects Together · Designing with Classes

## Totals

- 12 units
- 110 lessons
- 110 projects (one per lesson)
- 110 quizzes (one per lesson)
- 220 practice tasks (two per lesson)

## Credits

Its built by Vedant Daga [https://github.com/DagaVedant](https://github.com/DagaVedant)

Also using different fonts from [Google Fonts](https://fonts.google.com)

I have used AI to help with coding (mainly supabase setup) and other integrations, but most of the design was done by me like Figma design for website and I made all the questions and information on the lessons
