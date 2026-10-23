/* =========================================================
   CYBER SECURITY AWARENESS QUIZ
========================================================= */

console.log("Cyber Security Quiz loaded successfully.");



/* =========================================================
   GET ALL SCREENS
========================================================= */

const loginScreen =
    document.getElementById("loginScreen");

const dashboardScreen =
    document.getElementById("dashboardScreen");

const quizScreen =
    document.getElementById("quizScreen");

const resultsScreen =
    document.getElementById("resultsScreen");



/* =========================================================
   LOGIN ELEMENTS
========================================================= */

const loginForm =
    document.getElementById("loginForm");

const nameInput =
    document.getElementById("name");

const departmentInput =
    document.getElementById("department");



/* =========================================================
   DASHBOARD ELEMENTS
========================================================= */

const welcomeMessage =
    document.getElementById("welcomeMessage");

const departmentMessage =
    document.getElementById("departmentMessage");

const currentLevel =
    document.getElementById("currentLevel");

const scoreDisplay =
    document.getElementById("scoreDisplay");

const quizStatus =
    document.getElementById("quizStatus");

const startQuizBtn =
    document.getElementById("startQuizBtn");



/* =========================================================
   QUIZ ELEMENTS
========================================================= */

const questionNumber =
    document.getElementById("questionNumber");

const progressPercent =
    document.getElementById("progressPercent");

const progressFill =
    document.getElementById("progressFill");

const question =
    document.getElementById("question");

const feedback =
    document.getElementById("feedback");

const answerButtons = [

    document.getElementById("answer0"),

    document.getElementById("answer1"),

    document.getElementById("answer2"),

    document.getElementById("answer3")

];



/* =========================================================
   RESULTS ELEMENTS
========================================================= */

const finalScore =
    document.getElementById("finalScore");

const level =
    document.getElementById("level");

const dashboardBtn =
    document.getElementById("dashboardBtn");



/* =========================================================
   QUIZ DATA
========================================================= */

const quizData = [

    {
        question:
            "What does MFA stand for?",

        answers: [

            "Multiple File Accounts.",

            "Managed Firewall Administration.",

            "Main File Access.",

            "Multi-Factor Authentication."

        ],

        correct: 3
    },


    {
        question:
            "What is phishing?",

        answers: [

            "A method of securing networks.",

            "A technique used to gain unauthorized access.",

            "A type of antivirus software.",

            "A password manager."

        ],

        correct: 1
    },


    {
        question:
            "Which password is the strongest?",

        answers: [

            "Welcome123",

            "Redpanda2024",

            "P@55w0rd",

            "AT!9x$Lq#7vR2"

        ],

        correct: 3
    },


    {
        question:
            "What is the safest way to store passwords?",

        answers: [

            "In a notebook at your desk",

            "In a spreadsheet on your desktop",

            "In a password manager",

            "In your email drafts"

        ],

        correct: 2
    },


    {
        question:
            "You receive a message asking you to urgently reset your password through a provided link. What should you do first?",

        answers: [

            "Click the link immediately",

            "Forward it to coworkers",

            "Verify the request through official company channels",

            "Ignore the message"

        ],

        correct: 2
    }

];



/* =========================================================
   QUIZ VARIABLES
========================================================= */

let currentQuestionIndex = 0;

let score = 0;



/* =========================================================
   LOGIN
========================================================= */

if(loginForm){

    loginForm.addEventListener(
        "submit",
        function(event){

            event.preventDefault();

            const name =
                nameInput.value.trim();

            const department =
                departmentInput.value.trim();

            if(
                name === "" ||
                department === ""
            ) {

                alert(
                    "Please enter your name and department."
                );

                return;

            }

            localStorage.setItem(
                "name",
                name
            );

            localStorage.setItem(
                "department",
                department
            );

            localStorage.setItem(
                "quizStatus",
                "Not Started"
            );

            console.log(
                "Login successful."
            );
            
            window.location.href =
            "dashboard.html";

        }
    );

}




/* =========================================================
   LOAD DASHBOARD
========================================================= */

function loadDashboard() {

    const name =
        localStorage.getItem("name") ||
        "User";


    const department =
        localStorage.getItem("department") ||
        "Department";


    const savedScore =
        Number(
            localStorage.getItem("score")
        ) || 0;


    const status =
        localStorage.getItem("quizStatus") ||
        "Not Started";


    // Welcome message

    welcomeMessage.textContent =
        `Welcome, ${name}!`;


    // Department

    departmentMessage.textContent =
        `Department: ${department}`;


    // Score

    scoreDisplay.textContent =
        `${savedScore} / ${quizData.length}`;


    // Quiz status

    quizStatus.textContent =
        status;


    // Determine security level

    let userLevel =
        "Not Started";


    if (savedScore >= 5) {

        userLevel =
            "Security Champion";

    }

    else if (savedScore >= 3) {

        userLevel =
            "Cyber Defender";

    }

    else if (savedScore >= 1) {

        userLevel =
            "Cyber Cadet";

    }


    currentLevel.textContent =
        userLevel;


    // Change button text if quiz was completed

    if (status === "Completed") {

        startQuizBtn.textContent =
            "Retake Phishing Quiz";

    }

    else {

        startQuizBtn.textContent =
            "Start Phishing Quiz";

    }

}



/* =========================================================
   START / RETAKE QUIZ BUTTON
========================================================= */

if(startQuizBtn){

    startQuizBtn.addEventListener(
        "click",
        function(){

            console.log(
                "Opening quiz page..."
            );

            window.location.href =
                "quiz.html";

        }
    );

}



/* =========================================================
   START NEW QUIZ
========================================================= */

function startNewQuiz() {

    // Reset quiz

    currentQuestionIndex = 0;

    score = 0;


    // Remove previous score

    localStorage.removeItem(
        "score"
    );


    // Set quiz status

    localStorage.setItem(
        "quizStatus",
        "In Progress"
    );


    // Load the first question

    loadQuestion();

    console.log(
        "New quiz started."
    );

}




/* =========================================================
   LOAD QUESTION
========================================================= */

function loadQuestion() {

    const currentQuestion =
        quizData[
            currentQuestionIndex
        ];


    // Question number

    questionNumber.textContent =
        `Question ${
            currentQuestionIndex + 1
        } of ${quizData.length}`;


    // Calculate progress

    const percentage =
        (
            (currentQuestionIndex + 1) /
            quizData.length
        ) * 100;


    progressPercent.textContent =
        `${percentage}%`;


    progressFill.style.width =
        `${percentage}%`;


    // Display question

    question.textContent =
        currentQuestion.question;


    // Display answers
        
    answerButtons.forEach(
    function(button,index){

        button.textContent =
            currentQuestion.answers[index];

        button.classList.remove(
            "correct",
            "incorrect"
        );

        button.disabled = false;

    }
);


    // Clear feedback

    feedback.textContent = "";

}



/* =========================================================
   CHECK ANSWER
========================================================= */

function checkAnswer(
    selectedAnswer,
    selectedButton
) {

    const currentQuestion =
        quizData[
            currentQuestionIndex
        ];


    // Disable all answers

    answerButtons.forEach(
        function (button) {

            button.disabled = true;

        }
    );


    // Check if answer is correct

    if (
        selectedAnswer ===
        currentQuestion.correct
    ) {

        score++;


        selectedButton.classList.add(
            "correct"
        );


        feedback.textContent =
            "✓ Correct!";


        feedback.style.color =
            "#22c55e";


        console.log(
            "Correct answer."
        );

    }

    else {

        selectedButton.classList.add(
            "incorrect"
        );


        feedback.textContent =
            "✕ Incorrect!";


        feedback.style.color =
            "#ef4444";


        console.log(
            "Incorrect answer."
        );

    }


    // Wait one second before moving on

    setTimeout(
        function () {

            currentQuestionIndex++;


            if (
                currentQuestionIndex <
                quizData.length
            ) {

                loadQuestion();

                console.log("Loading Question:", currentQuestion.question);
                console.log(answerButtons);

            }

            else {

                finishQuiz();

            }

        },
        1000
    );

}



/* =========================================================
   ANSWER BUTTON EVENTS
========================================================= */

if(answerButtons[0]){

    answerButtons.forEach(
        function(button,index){

            button.addEventListener(
                "click",
                function(){

                    checkAnswer(
                        index,
                        button
                    );

                }
            );

        }
    );

}



/* =========================================================
   FINISH QUIZ
========================================================= */

function finishQuiz() {

    // Save final score

    localStorage.setItem(
        "score",
        score
    );


    // Save quiz status

    localStorage.setItem(
        "quizStatus",
        "Completed"
    );


    // Load results

    // loadResults();


    // Show results screen

    window.location.href ="results.html";

}



/* =========================================================
   LOAD RESULTS
========================================================= */

function loadResults() {

   const savedScore =
    Number(localStorage.getItem("score"));

finalScore.textContent =
    `${savedScore} / ${quizData.length}`;


    let userLevel;


    if (savedScore >= 5) {

        userLevel =
            "Security Champion";

    }

    else if (savedScore >= 3) {

        userLevel =
            "Cyber Defender";

    }

    else {

        userLevel =
            "Cyber Cadet";

    }


    level.textContent =
        userLevel;

}



/* =========================================================
   RETURN TO DASHBOARD
========================================================= */

if(dashboardBtn){

    dashboardBtn.addEventListener(
        "click",
        function(){

            window.location.href =
                "dashboard.html";

        }
    );

}



/* =========================================================
   START APPLICATION
========================================================= */
/*
// function startApplication() {

    // IMPORTANT:
    // Do NOT automatically skip the login screen.
    // Every time the application is opened,
    // the user must log in first.

    nameInput.value = "";

    departmentInput.value = "";

    showScreen(
        loginScreen
    );

    nameInput.focus();

    console.log(
        "Login required."
    );

}
*/

// startApplication();

// Load dashboard information automatically
if(welcomeMessage){

    loadDashboard();

}

if(question){

    loadQuestion();

        };

        if(finalScore){

    loadResults();
}

    


//Shane PM04 Notes//
// Executed immediately, causing errors if DOM elements weren't found yet
//document.getElementById("welcomeMessage").textContent = `Welcome, ${name}!`;

// Wrapped inside a DOMContentLoaded listener to ensure elements exist before modification
//document.addEventListener("DOMContentLoaded", function() {
    //document.getElementById("welcomeMessage").textContent = `Welcome, ${name}!`;
//});


// Refactored from procedural code into a clean, reusable initialization function
f//unction initDashboard() {
    //const name = localStorage.getItem("name") || "Guest";
    //document.getElementById("welcomeMessage").textContent = `Welcome, ${name}!`;
//}


//DOM Manipulation
// Selecting the welcome element and updating its text dynamically
//document.getElementById("welcomeMessage").textContent = `Welcome, ${name}!`;


//Event Listeners
// Listening for a click event on the start button to navigate or change screens
//startQuizBtn.addEventListener("click", function () {
    //window.location.href = "quiz.html";
//});


//Data Persistence (localStorage)

// Saving the final score to local storage when the quiz ends
//localStorage.setItem("score", score);

// Retrieving the saved score on another screen/dashboard
//const savedScore = localStorage.getItem("score");