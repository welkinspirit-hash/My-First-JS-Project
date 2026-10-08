<<<<<<< HEAD
// Function to initialize and render the dashboard UI
function initDashboard() {
    // Retrieve data from localStorage with safe fallbacks
    const name = localStorage.getItem("name") || "Employee";
    const department = localStorage.getItem("department") || "General";
    const score = Number(localStorage.getItem("score")) || 0;
    const quizStatus = localStorage.getItem("quizStatus");

    // Find HTML elements
    const welcomeMessage = document.getElementById("welcomeMessage");
    const departmentMessage = document.getElementById("departmentMessage");
    const startQuizBtn = document.getElementById("startQuizBtn");
    const scoreDisplay = document.getElementById("scoreDisplay");
    const currentLevel = document.getElementById("currentLevel");
    const statusDisplay = document.getElementById("quizStatus");

    // Display user info and score
    welcomeMessage.textContent = `Welcome, ${name}!`;
    departmentMessage.textContent = `Department: ${department}`;
    scoreDisplay.textContent = `${score} Points`;

    if (quizStatus && statusDisplay) {
        statusDisplay.textContent = quizStatus;
    }

    // Evaluate security level using decision logic
    let level = "🚫 Not Started";

    if (score >= 5) {
        level = "🏆 Security Champion";
    } else if (score >= 3) {
        level = "🔐 Cyber Defender";
    } else if (score >= 1) {
        level = "🎓 Cyber Cadet";
    }

    currentLevel.textContent = level;

    // Check if the user has completed the quiz before
    if (score > 0) {
        startQuizBtn.textContent = "Retake Phishing Quiz";
    }

    // Listen for click events to redirect to the quiz page
    startQuizBtn.addEventListener("click", function () {
        window.location.href = "quiz.html";
    });
}

// Run script safely when DOM content loads
document.addEventListener("DOMContentLoaded", initDashboard);
=======
// Find the customer message button.
const customerButton =
    document.getElementById("customerButton");

// Find the paragraph that will display the message.
const storeMessage =
    document.getElementById("storeMessage");

// Confirm that the JavaScript file loaded.
console.log("Lewis Store page loaded successfully.");

// Run this code when the button is clicked.
customerButton.addEventListener("click", function () {

    // Change the text displayed on the web page.
    storeMessage.textContent =
        "Hi nice to meet you! Please speak to a sales consultant if you need assistance.";

    // Display a browser popup.
    alert("Thank you for visiting Lewis Furniture Store.");

    // Record the click for testing.
    console.log("The customer message was displayed.");
});
>>>>>>> 40f51a578b3419222e7816057f285620d0e91cf7
