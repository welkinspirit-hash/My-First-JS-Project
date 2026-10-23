console.log("Quiz JS Loaded!");

// Keeps track of which question we are on
let currentQuestionIndex = 0;

// Keeps track of correct answers
let score = 0;

// QUIZ QUESTIONS
const quizData = [

{
    question: "You receive an email asking you to reset your password. What should you do?",

    answers: [
        "Click the link and reset your password.",
        "Ignore the email and report it as phishing.",
        "Reply to the email asking for more information.",
        "Verify the sender's identity before taking any action."
    ],
    correct: 3
},

{
    question: "What is phishing?",

    answers: [
        "A type of malware.",
        "A technique used to gain unauthorized access.",
        "A method of tricking users into revealing information.",
        "A cyber attack on mobile devices."
    ],
    correct: 1
},

{
    question: "Which password is the strongest",

    answers: [
        "Welcome123",
        "Redpanda2024",
        "P@55w0rd",
        "AT!9x$Lq#7vR2"
    ],
    correct: 3
},

{
    question: "What is the safest way to store passwords?",

    answers: [
        "In a notebook at your desk",
        "In a spreadsheet on your desktop",
        "In a password manager",
        "In your email drafts"
    ],
    correct: 2
},

{
    question: "You receive a message asking you to urgently reset your password through a provided link. What should you do first?",

    answers: [
        "Click the link immediately",
        "Forward it to coworkers",
        "Verify the request through official company channels",
        "Ignore the message"
    ],
    correct: 2
},
        
]
function checkAnswer(selectedAnswer, button){

    const currentQuestion =
        quizData[currentQuestionIndex];

    const feedback =
        document.getElementById("feedback");

    if(selectedAnswer === currentQuestion.correct){

        score++;

        feedback.textContent =
            "✅ Correct!";

        button.classList.add("correct");

    } else {

        feedback.textContent =
            "❌ Incorrect!";

        button.classList.add("incorrect");

    }

    setTimeout(function(){

        button.classList.remove("correct");
        button.classList.remove("incorrect");

        currentQuestionIndex++;

        if(currentQuestionIndex < quizData.length){

            loadQuestion();

        } else {

            localStorage.setItem("score", score);

            localStorage.setItem(
                "quizStatus",
                "Completed ✅"
            );

            window.location.href =
                "results.html";

        }

    }, 1000);

}
// }
//     // Move to next question
//     currentQuestionIndex++;

//     // Load next question
//     if(currentQuestionIndex < quizData.length){

//     loadQuestion();


//     } else {

//     // Save score
//         localStorage.setItem("score", score);

//     // Open results page
//         window.location.href =
//             "results.html";

//     }



// // Wait 1 second before moving to the next question
//     setTimeout(function(){

        

// // Wait 1 second before moving to the next question
// setTimeout(function(){

// //     // Move to the next question
// //     currentQuestionIndex++;

// //     // Check if there are more questions
// //     if(currentQuestionIndex < quizData.length){

// //         // Load next question
// //         loadQuestion();

// //     } else {

// //         // Save final score
// //         localStorage.setItem("score", score);

// //         // Save quiz status
// //         localStorage.setItem(
// //             "quizStatus",
// //             "Completed ✅"
// //         );

// //         // Open results page
// //         window.location.href =
// //             "results.html";

// //     }

// // }, 1000);

// // }
  
function loadQuestion() {

//Clear the feedback text
    document.getElementById("feedback").textContent = "";

    document.getElementById("questionNumber").textContent =
    `Question ${currentQuestionIndex + 1} of ${quizData.length}`;


    const currentQuestion =
        quizData[currentQuestionIndex];

    document.getElementById("question").textContent =
        currentQuestion.question;

    document.getElementById("answer0").textContent =
        currentQuestion.answers[0];

    document.getElementById("answer1").textContent =
        currentQuestion.answers[1];

    document.getElementById("answer2").textContent =
        currentQuestion.answers[2];

    document.getElementById("answer3").textContent =
        currentQuestion.answers[3];

}

document.getElementById("answer0")
.addEventListener("click", function(){

    checkAnswer(0, this);

});

document.getElementById("answer1")
.addEventListener("click", function(){

    checkAnswer(1, this);

});

document.getElementById("answer2")
.addEventListener("click", function(){

    checkAnswer(2, this);

});

document.getElementById("answer3")
.addEventListener("click", function(){

    checkAnswer(3, this);

});

loadQuestion();

