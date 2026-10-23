# Cyber Security Awareness Quiz

## Overview

The **Cyber Security Awareness Quiz** is a simple web-based training
application designed to test basic cyber security knowledge.

Users can enter their name and department, complete a short quiz, view
their score, and see their cyber security awareness level.

The project was built using:

-   HTML
-   CSS
-   JavaScript
-   Browser Local Storage

## Features

### 1. Login

The user enters:

-   Full Name
-   Department

The information is stored locally in the browser using `localStorage`.

### 2. Dashboard

After logging in, the user is taken to a dashboard showing:

-   Welcome message
-   Department
-   Current security level
-   Quiz score
-   Quiz status
-   Start or retake quiz button

### 3. Cyber Security Quiz

The quiz contains **5 questions** covering topics such as:

-   Phishing
-   Password security
-   Password managers
-   Suspicious messages
-   Safe cyber security practices

Each question provides four possible answers.

### 4. Automatic Scoring

The application checks each answer and:

-   Shows whether the answer is correct or incorrect
-   Updates the score
-   Moves to the next question
-   Saves the final score

### 5. Results

After completing the quiz, the user receives:

-   Final score out of 5
-   Cyber security awareness level
-   Option to return to the dashboard

## Security Levels

The user's score determines their awareness level:

  Score      Level
  ---------- -------------------
  5 / 5      Security Champion
  3--4 / 5   Cyber Defender
  1--2 / 5   Cyber Cadet
  0 / 5      Cyber Cadet

These levels are used to give the user a simple indication of their quiz
performance.

## Project Structure

The project uses only **three files**:

``` text
Cyber-Security-Quiz/
│
├── index.html
├── style.css
└── script.js
```

### `index.html`

Contains the structure of the application, including:

-   Login screen
-   Dashboard
-   Quiz screen
-   Results screen
-   Form fields
-   Buttons
-   Question and answer areas

### `style.css`

Controls the appearance of the application, including:

-   Colours
-   Layout
-   Buttons
-   Cards
-   Quiz questions
-   Progress bar
-   Results screen
-   Responsive mobile design

### `script.js`

Controls the functionality of the application, including:

-   Login handling
-   Screen navigation
-   Quiz questions
-   Answer checking
-   Score calculation
-   Results
-   Local Storage

## How to Run the Project

### Option 1: Open Directly

1.  Download or copy the project folder.
2.  Open the folder in VS Code.
3.  Open `index.html` in a web browser.

### Option 2: Use VS Code Live Server

For a better development experience:

1.  Open the project in VS Code.
2.  Install the **Live Server** extension if it is not already
    installed.
3.  Right-click `index.html`.
4.  Select **Open with Live Server**.
5.  The application will open in your browser.

## How the Application Works

The application follows this simple flow:

``` text
Login
  ↓
Dashboard
  ↓
Start Quiz
  ↓
Answer Questions
  ↓
Calculate Score
  ↓
Display Results
  ↓
Return to Dashboard
```

All screens are contained inside `index.html`.

JavaScript hides and displays the required screen instead of opening
separate HTML pages.

## Local Storage

The application uses browser `localStorage` to save information such as:

``` text
name
department
score
quizStatus
```

This means the information remains available when the page is refreshed
on the same browser and device.

No database or external server is required.

## Technologies Used

### HTML

Used to create the structure and content of the application.

### CSS

Used to create the professional dashboard, colours, buttons, cards, quiz
layout, and responsive design.

### JavaScript

Used to make the application interactive and handle:

-   User input
-   Button clicks
-   Quiz questions
-   Answer validation
-   Scoring
-   Navigation
-   Local Storage

## Responsive Design

The application includes responsive CSS so that the layout can adjust to
smaller screens such as:

-   Desktop computers
-   Laptops
-   Tablets
-   Mobile devices

## Future Improvements

Possible future improvements could include:

-   More quiz questions
-   Different quiz categories
-   Randomised questions
-   Timer functionality
-   High-score tracking
-   User authentication
-   Database storage
-   Detailed answer explanations
-   Administrator dashboard
-   Company-specific cyber security questions

## Project Purpose

The purpose of this project is to provide a simple and interactive way
for users to improve their awareness of common cyber security risks.

It also demonstrates practical use of:

-   HTML structure
-   CSS styling
-   JavaScript DOM manipulation
-   Event listeners
-   Functions
-   Arrays and objects
-   Conditional statements
-   Local Storage
-   Basic application navigation

## Author

**Cyber Security Awareness Quiz**

Created as a beginner-friendly web development project demonstrating
HTML, CSS, and JavaScript skills.
