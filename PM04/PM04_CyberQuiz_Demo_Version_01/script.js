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
            "You receive an email asking you to reset your password. What should you do?",

        answers: [

            "Click the link and reset your password.",

            "Ignore the email and report it as phishing.",

            "Reply to the email asking for more information.",

            "Verify the sender's identity before taking any action."

        ],

        correct: 3
    },


    {
        question:
            "What is phishing?",

        answers: [

            "A type of malware.",

            "A technique used to gain unauthorized access.",

            "A method of tricking users into revealing information.",

            "A cyber attack on mobile devices."

        ],

        correct: 2
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
   SHOW SCREEN
========================================================= */

function showScreen(screenToShow) {

    loginScreen.classList.add("hidden");

    dashboardScreen.classList.add("hidden");

    quizScreen.classList.add("hidden");

    resultsScreen.classList.add("hidden");


    screenToShow.classList.remove("hidden");

}



/* =========================================================
   LOGIN
========================================================= */

loginForm.addEventListener(
    "submit",
    function (event) {

        // Prevent the form from refreshing the page
        event.preventDefault();


        // Get the information entered by the user
        const name =
            nameInput.value.trim();

        const department =
            departmentInput.value.trim();


        // Make sure both fields are completed
        if (
            name === "" ||
            department === ""
        ) {

            alert(
                "Please enter your name and department."
            );

            return;

        }


        // Save the current user's information
        localStorage.setItem(
            "name",
            name
        );

        localStorage.setItem(
            "department",
            department
        );


        console.log(
            "Login successful."
        );

        console.log(
            "User:",
            name
        );

        console.log(
            "Department:",
            department
        );


        /*
         IMPORTANT:

         After login we now start a NEW quiz.

         This means the login screen is required
         every time the user starts or retakes
         the quiz.
        */

        startNewQuiz();

    }
);



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

startQuizBtn.addEventListener(
    "click",
    function () {

        /*
         Instead of immediately starting the quiz,
         send the user back to the login screen.

         This forces the user to enter their
         name and department again.
        */

        nameInput.value = "";

        departmentInput.value = "";


        showScreen(
            loginScreen
        );


        // Put the cursor in the name field

        nameInput.focus();


        console.log(
            "Login required before starting the quiz."
        );

    }
);



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


    // Show quiz

    showScreen(
        quizScreen
    );


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
        function (button, index) {

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

answerButtons.forEach(
    function (button, index) {

        button.addEventListener(
            "click",
            function () {

                checkAnswer(
                    index,
                    button
                );

            }
        );

    }
);



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

    loadResults();


    // Show results screen

    showScreen(
        resultsScreen
    );


    console.log(
        `Quiz completed. Score: ${score}/${quizData.length}`
    );

}



/* =========================================================
   LOAD RESULTS
========================================================= */

function loadResults() {

    finalScore.textContent =
        `${score} / ${quizData.length}`;


    let userLevel;


    if (score >= 5) {

        userLevel =
            "Security Champion";

    }

    else if (score >= 3) {

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

dashboardBtn.addEventListener(
    "click",
    function () {

        loadDashboard();


        showScreen(
            dashboardScreen
        );


        console.log(
            "Returned to dashboard."
        );

    }
);



/* =========================================================
   START APPLICATION
========================================================= */

function startApplication() {

    /*
     IMPORTANT:

     Do NOT automatically skip the login screen.

     Every time the application is opened,
     the user must log in first.
    */


    // Clear the login fields

    nameInput.value = "";

    departmentInput.value = "";


    // Always show login screen

    showScreen(
        loginScreen
    );


    // Put cursor in the name field

    nameInput.focus();


    console.log(
        "Login required."
    );

}


startApplication();