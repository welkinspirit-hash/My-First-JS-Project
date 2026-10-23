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