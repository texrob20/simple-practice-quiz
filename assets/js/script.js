// question set
const codeQuestions = [
    {
        identifier: 1,
        question: "What does CSS stand for",
        answer: "Cascading Style Sheet",
        option1: "Cascading Support Sheet",
        option2: "Cascading Style Sheet",
        option3: "Colorful Style Sheet",
        option4: "Colorful Support Sheet",    
    },
    {
        identifier: 2,
        question: "What does HTML stand for",
        answer: "Hypertext Markup Language",
        option1: "Hyberbole Markup Language",
        option2: "Hypertext Mobile Language",
        option3: "Hypertext Markup Language",
        option4: "Hypertext Madeup Language",
    },
    {
        identifier: 3,
        question: "What is the correct syntax to add a title to a webpage?",
        answer: "title",
        option1: "header",
        option2: "head",
        option3: "class=title",
        option4: "title",
    },
    {
        identifier: 4,
        question: "What code is used in CSS to support various screens",
        answer: "media query",
        option1: "screen query",
        option2: "media query",
        option3: "screen size",
        option4: "media width",
    },
];

var defaultTime = 45;
var start_btn = document.querySelector(".start_btn button");
var timer = defaultTime;
var counter = 0;
var score = 0;
var userScore = {
    user: "",
    finalScore: 0,
};
var Clicked = function() {
    console.log(this.id, this.innerHTML);
    console.log(codeQuestions[counter].answer);
    if (this.innerHTML == codeQuestions[counter].answer) {
        console.log ("add 10 points");
        score +=10;
    } else {
        console.log ("subtract 10 sec");
        timer -=10;
    }
    console.log("counter " + counter);    
    counter ++;
    DisplayQuestion();
}

function displayTime(){
    if (timer > 0) {
    document.getElementById("timeLeft").innerText = timer;
    timer--; }
    else {
    timer = "Out of time";
    document.getElementById("timeLeft").innerText = timer;
    return;
    }

    console.log(timer);
}
function saveScore() {
    //localStorage.setItem("score", JSON.stringify(score));
    console.log("score saved")
    document.getElementById("title").innerHTML = "";
    document.getElementById("question").innerHTML = "";
    document.getElementById("possAns1").innerHTML = "";
    document.getElementById("possAns2").innerHTML = "";
    document.getElementById("possAns3").innerHTML = "";
    document.getElementById("possAns4").innerHTML = "";
    timer=0;
};

var loadScore = function() {
    var savedScores = localStorage.getItem("score");
    if (!savedScores) {
      return false;
    }
    console.log("No scores!");

    savedScores = JSON.parse(scores);

    for (var i = 0; i < savedScores.length; i++) {
      createScoreEl(savedScores[i]);
    }
};

function executeQuiz(){
    var time = setInterval(displayTime, 1000);
    document.getElementById("preQuizTitle").innerHTML = "";
    document.getElementById("info").innerHTML = "";
    document.getElementById("start").innerHTML = "";
 
    DisplayQuestion();
}

function DisplayQuestion () {
    if (counter === codeQuestions.length){
       saveScore();
    } else {
        let displayQuestion = "";
        displayQuestion += codeQuestions[counter].question;
        document.getElementById("question").innerHTML = displayQuestion;
        let option1 ="";
        option1 += codeQuestions[counter].option1;
        document.getElementById("possAns1").innerHTML = option1;
        document.getElementById("possAns1").onclick = Clicked;
        let option2 ="";
        option2 += codeQuestions[counter].option2;
        document.getElementById("possAns2").innerHTML = option2;
        document.getElementById("possAns2").onclick = Clicked;
        let option3 ="";
        option3 += codeQuestions[counter].option3;
        document.getElementById("possAns3").innerHTML = option3;
        document.getElementById("possAns3").onclick = Clicked;
        let option4 ="";
        option4 += codeQuestions[counter].option4;
        document.getElementById("possAns4").innerHTML = option4;
        document.getElementById("possAns4").onclick = Clicked;
}};
 

// Add event listener to start quiz button
start_btn.addEventListener("click", executeQuiz);
