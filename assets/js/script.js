// question set
var codeQuestions = [
    {
        identifier: 1,
        question: "What is the correct syntax to incorporate javascript into html?",
        answer: "<script src='../js/script.js'></script>",
        options: [
            "<script src='../js/script.js'></script>",
            "<script img='../js/script.js'></script>",
            "<script src='../js.script.java'></script>",
            "<script src='../js/script.js'><script>",
        ]    
    },
    {
        identifier: 2,
        question: "What does HTML stand for",
        answer: "Hypertext Markup Language",
        options: [
            "Hyberbole Markup Language",
            "Hypertext Mobile Language",
            "Hypertext Markup Language",
            "Hypertext Madeup Language",
        ]    
    },
    {
        identifier: 3,
        question: "What is the correct syntax to add a title to a webpage?",
        answer: "<title></title>",
        options: [
            "<header></header>",
            "<head></head>",
            "<div class='title'></div>",
            "<title></title>",
        ]    
    },
    {
        identifier: 4,
        question: "What code is used in CSS to support various screens",
        answer: "media query",
        options: [
            "screen query",
            "media query",
            "screen size",
            "media width",
        ]    
    },
];
var answerIdCounter = 0;
var body = document.body;
var defaultTime = 5;
var start_btn = document.querySelector(".start_btn button");
var quizInfo = document.querySelector(".quizInfo");
var quiz = document.querySelector(".quiz");
var timer = defaultTime;
var ansSelect = document.querySelector("answers");
var optionsEl = document.createDocumentFragment("div");
var listEl = document.createElement("h3");

body.appendChild(optionsEl);
optionsEl.appendChild(listEl);

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

function checkAnswer(){
    if (ansSelect === codeQuestions[i].answer) {
        score = +10;
    } else { timer = -10;
    }
}

var saveScore = function() {
    localStorage.setItem("score", JSON.stringify(score));
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
    
    for (var i=0; i < codeQuestions.length; i++) {
        var questionEl = document.createElement("div");
        questionEl.className = "question";
        questionEl.setAttribute("data-task-id", answerIdCounter);
        var optionEl = "";
        questionEl = codeQuestions[i].question;
        document.getElementById("question").innerHTML = "<h2>" + questionEl + "</h2>";
        console.log(questionEl);
        for (var j=0; j < codeQuestions[i].options.length; j++) {
            optionEl = codeQuestions[i].options[j];
            document.getElementById("possAns").innerHTML = "<h3>" + optionEl + "</h3>";
            console.log(optionEl);
        }
        answerIdCounter ++;
        //console.log(codeQuestions[i]);
        //ansSelect.addEventListener("click", checkAnswer);
    }
} 

// Add event listener to start quiz button
start_btn.addEventListener("click", executeQuiz);
