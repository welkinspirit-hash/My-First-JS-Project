// Get the info saved during login
const name = localStorage.getItem("name");
const department = localStorage.getItem("department");

//find the html elements
const welcomeMessage =
    document.getElementById("welcomeMessage");

const departmentMessage =
    document.getElementById("departmentMessage");

//change the text on the page
welcomeMessage.textContent = 
    `Welcome, ${name}!`;

departmentMessage.textContent = 
    `Department: ${department}`;


//Find the the button
const startQuizBtn =
    document.getElementById("startQuizBtn");

//Listen for the click event
startQuizBtn.addEventListener("click", function () {

    window.location.href = "quiz.html";

});

// Get the score that was saved when the quiz ended
const score =
    localStorage.getItem("score");

// Check if the user has already completed a quiz
// A score greater than 0 means they have attempted the quiz before
if(score > 0){
    document.getElementById("startQuizBtn")
    .textContent = "Retake Phishing Quiz";

}

// Display the score on the results page
document.getElementById("scoreDisplay")
    .textContent =
    `${score} Points`;
    ``

let level = "🚫 Not Started";

if(score >= 5){

    level = "🏆 Security Champion";

}
else if(score >= 3){

    level = "🔐 Cyber Defender";

}
else if(score >= 1){

    level = "🎓 Cyber Cadet";

}

document.getElementById("currentLevel")
.textContent =
level;

const quizStatus = 
    localStorage.getItem("quizStatus");

    if(quizStatus){

    document.getElementById("quizStatus")
        .textContent = quizStatus;

}



The Original Code (Before)
This is my initial procedural script that handles the dashboard logic:
// Get the info saved during login
const name = localStorage.getItem("name");
const department = localStorage.getItem("department");

// Find the html elements
const welcomeMessage = document.getElementById("welcomeMessage");
const departmentMessage = document.getElementById("departmentMessage");

// Change the text on the page
welcomeMessage.textContent = `Welcome, ${name}!`;
departmentMessage.textContent = `Department: ${department}`;

// Find the button
const startQuizBtn = document.getElementById("startQuizBtn");

// Listen for the click event
startQuizBtn.addEventListener("click", function () {
    window.location.href = "quiz.html";
});

// Get the score that was saved when the quiz ended
const score = localStorage.getItem("score");

// Check if the user has already completed a quiz
if (score > 0) {
    document.getElementById("startQuizBtn").textContent = "Retake Phishing Quiz";
}

// Display the score on the results page
document.getElementById("scoreDisplay").textContent = `${score} Points`;

let level = "🚫 Not Started";

if (score >= 5) {
    level = "🏆 Security Champion";
} else if (score >= 3) {
    level = "🔐 Cyber Defender";
} else if (score >= 1) {
    level = "🎓 Cyber Cadet";
}

document.getElementById("currentLevel").textContent = level;

const quizStatus = localStorage.getItem("quizStatus");
if (quizStatus) {
    document.getElementById("quizStatus").textContent = quizStatus;
}


//The Structured Code (After)
//This refactored version organizes your logic into a reusable function, 
//making your code modular, easier to test, and fully compliant with project standards:
// Function to initialize and render the dashboard UI
function initDashboard() {
    // 1. Variables & LocalStorage Data
    const name = localStorage.getItem("name") || "Guest";
    const department = localStorage.getItem("department") || "General";
    const score = Number(localStorage.getItem("score")) || 0;
    const quizStatus = localStorage.getItem("quizStatus");

    // 2. DOM Elements
    const welcomeMessage = document.getElementById("welcomeMessage");
    const departmentMessage = document.getElementById("departmentMessage");
    const startQuizBtn = document.getElementById("startQuizBtn");
    const scoreDisplay = document.getElementById("scoreDisplay");
    const currentLevel = document.getElementById("currentLevel");
    const statusDisplay = document.getElementById("quizStatus");

    // 3. DOM Changes (User Info)
    welcomeMessage.textContent = `Welcome, ${name}!`;
    departmentMessage.textContent = `Department: ${department}`;
    scoreDisplay.textContent = `${score} Points`;

    if (quizStatus && statusDisplay) {
        statusDisplay.textContent = quizStatus;
    }

    // 4. Conditions (Level Evaluation & Button Text)
    let level = "🚫 Not Started";

    if (score >= 5) {
        level = "🏆 Security Champion";
    } else if (score >= 3) {
        level = "🔐 Cyber Defender";
    } else if (score >= 1) {
        level = "🎓 Cyber Cadet";
    }

    currentLevel.textContent = level;

    if (score > 0) {
        startQuizBtn.textContent = "Retake Phishing Quiz";
    }

    // 5. Events (Navigation Listener)
    startQuizBtn.addEventListener("click", function () {
        window.location.href = "quiz.html";
    });
}

// Run on page load
document.addEventListener("DOMContentLoaded", initDashboard);