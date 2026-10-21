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

const dashboardBtn =
    document.getElementById("dashboardBtn");

    if(dashboardBtn){

    dashboardBtn.addEventListener(
        "click",
        function(){

            window.location.href =
                "dashboard.html";

        }
    );

}


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

const securityCheck =
    document.getElementById(
        "securityCheck"
    );    



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

const certificateBtn =
    document.getElementById("certificateBtn");


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

const certificateDate =
    document.getElementById("certificateDate");

const certificateName =
    document.getElementById(
        "certificateName"
    );

const certificateDepartment =
    document.getElementById(
        "certificateDepartment"
    );

const certificateLevel =
    document.getElementById(
        "certificateLevel"
    );

const certificateScore =
    document.getElementById(
        "certificateScore"
    );    

// const dashboardBtn =
//     document.getElementById(
//     "dashboardBtn");



/* =========================================================
   QUIZ DATA
========================================================= */

const quizData = [

    {
        question:
            "You receive an unexpected email attachment from an unfamiliar sender. What is the safest action?",
        
        answers: [

            "Open it to see what it contains.",
            "Download it and disable antivirus first.",
            "Avoid opening it and verify the sender or report it.",
            "Send it to your personal email account.",
        ],

            correct: 2
    },

    {
        question:
            "What should you do before leaving your work computer unattended?",
        
        answers: [

            "Leave all confidential files open",
            "Lock your computer screen",
            "Share your login with a nearby colleague",
            "Turn off all security software",
        ],

            correct: 1
    
    },

    {

        question:
            "You receive a message claiming to be from your manager, asking you to urgently buy gift cards and send the codes. What should you do?",

        answers: [

            "Buy them immediately because the request is urgent",
            "Send the codes before checking the request",
            "Ask the sender to email the request again and trust it if they do",
            "Verify the request directly using a trusted contact method",

        ],

            correct: 3

    },


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
            "Why are software updates important?",

        answers: [

            "They remove the need for passwords",
            "They make every website trustworthy",
            "They fix security weaknesses and bugs",
            "They prevent every possible cyberattack",
        ],

        correct: 2
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
            "What should you do if you suspect your computer has been infected with malware??",

        answers: [

            "Ignore it and hope it goes away",
            "Try to uninstall the software yourself",
            "Immediately disconnect from the network and report it to the security or IT department",
            "Reboot and continue working"

        ],

        correct: 2
    },

    {
        question:
            "A colleague asks you to share your password so they can finish a task. What should you do?",

        answers: [

            "Share it if they are in a hurry",
            "Keep it private and direct them to approved access procedures",
            "Send it through a personal messaging app",
            "Write it on a sticky note for them"
        ],

        correct: 1
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
            "Which of the following is defined as an attempt to steal, spy, damage or destroy computer systems, networks, or their associated information?",

        answers: [

            "Cyber attack",
            "Computer security",
            "Cryptography",
            "Digital hacking"

        ],

        correct: 0
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

if(securityCheck.value !== "strong"){

    const securityError =
    document.getElementById("securityError");

    securityError.textContent =
    "⚠ Security verification failed. Please select the strongest password.";

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
                "quizCompleted",
                "false"
            );

            localStorage.setItem(
                "quizStatus",
                "Not Started"
            );

            localStorage.removeItem(
                "score"
            );

            console.log(
                "Login successful."
            );

            window.location.href =
                "dashboard.html";

            localStorage.setItem(
                "name",
                name
            );

            localStorage.setItem(
                "quizCompleted",
                "false"
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
       
     
    const certificateBtn =
    document.getElementById(
        "certificateBtn"
    
    );

    const quizCompleted =
    localStorage.getItem(
        "quizCompleted"
    );

    if(quizCompleted === "true"){

    quizStatus.textContent =
        "Completed";

}
else{

    quizStatus.textContent =
        "Not Started";

}


console.log(quizCompleted);

if(quizCompleted === "true"){

    certificateBtn.style.display =
        "inline-block";

}
else{

    certificateBtn.style.display =
        "none";

}

if(status !== "Completed"){

    certificateBtn.style.display =
        "none";

}  

else{

    quizStatus.textContent =
        "Not Started";

}


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


    if (savedScore >= 10) {

        userLevel =
            "Security Champion";   


    }

      if (savedScore >= 8) {

        userLevel =
            "Cyber Defender";   


    }

    else if (savedScore >= 6) {

        userLevel =
            "Cyber Sentinel";

    }

    else if (savedScore >= 4) {

        userLevel =
            "Cyber Cadet";

    }

    else if (savedScore >= 2) {

        userLevel =
            "Cyber Rookie";

    }


    currentLevel.textContent =
        userLevel;


    // Change button text if quiz was completed

    if (status === "Completed") {

        startQuizBtn.textContent =
            "Retake Awareness Quiz";

    }

    else {

        startQuizBtn.textContent =
            "Start Phishing Quiz";

    }

};



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
   CERTIFICATE BUTTON
========================================================= */

if(certificateBtn){

    certificateBtn.addEventListener(
       "click",
        function(){

           window.location.href =
               "certificate.html";

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

    localStorage.setItem(
    "quizCompleted",
    "true"
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

    localStorage.setItem(
    "quizStatus",
    "Completed"
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


    if (savedScore >= 8) {

        userLevel =
            "Cyber Defender";   


    }

    else if (savedScore >= 6) {

        userLevel =
            "Cyber Sentinel";

    }

    else if (savedScore >= 4) {

        userLevel =
            "Cyber Cadet";

    }

    else if (savedScore >= 2) {

        userLevel =
            "Cyber Rookie";

    }


    level.textContent =
        userLevel;

    localStorage.setItem(
        "quizCompleted",
        "true"
);
    localStorage.setItem(
        "userLevel",
        userLevel
);

}



function loadCertificate() {

    console.log("Loading certificate...");
    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("department"));
    console.log(localStorage.getItem("score"));

    const name =
        localStorage.getItem("name") ||
        "Participant";

    const department =
        localStorage.getItem(
            "department"
        ) ||
        "Department";

    const score =
        Number(
            localStorage.getItem(
                "score"
            )
        ) || 0;

    let userLevel =
        "Cyber Cadet";

    if(score >= 5){

        userLevel =
            "Security Champion";

    }
    else if(score >= 3){

        userLevel =
            "Cyber Defender";

    }

    certificateName.textContent =
        name;

    certificateDepartment.textContent =
        department;

    certificateLevel.textContent =
        userLevel;

    certificateScore.textContent =
        `${score} / ${quizData.length}`;

    certificateDate.textContent =
        new Date().toLocaleDateString();
    

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

// Load certificate automatically
if(document.getElementById("certificateName")){

    loadCertificate();

}



