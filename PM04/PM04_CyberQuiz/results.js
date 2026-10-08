const score =
    localStorage.getItem("score");

document.getElementById("finalScore")
.textContent =
`Your Score: ${score}/5`;

let level = "";

if(score >= 5){

    level = "🏆 Security Champion";

}
else if(score >= 3){

    level = "🛡️ Cyber Defender";

}
else{

    level = "🎓 Cyber Cadet";

}

document.getElementById("finalScore")
.textContent =
    `Your Score: ${score}/5`;

document.getElementById("dashboardBtn")
.addEventListener("click", function(){

    window.location.href = "dashboard.html";

});

document.getElementById("level")
.textContent = level;