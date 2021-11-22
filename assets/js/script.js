// question set
const codeQuestions = [
    {
        identifier: 1,
        question: "Commonly used data types do NOT include",
        answer: "alerts",
        option1: "strings",
        option2: "arrays",
        option3: "alerts",
        option4: "boolean",    
    },
    {
        identifier: 2,
        question: "What DOM command takes action when an item is clicked?",
        answer: "addEventListener",
        option1: "addEventCommand",
        option2: "addEventAction",
        option3: "addEventClick",
        option4: "addEventListener",
    },
    {
        identifier: 3,
        question: "What command can trigger a function?",
        answer: "onClick",
        option1: "onClick",
        option2: "function",
        option3: "action",
        option4: "clicked",
    },
    {
        identifier: 4,
        question: "What DOM command does NOT adds HTML code?",
        answer: "querySelector",
        option1: "setAttribute",
        option2: "createElement",
        option3: "innerHTML",
        option4: "querySelector",
    },
];

var defaultTime = 60;
var start_btn = document.querySelector(".start_btn button");
var highscore = document.querySelector(".highScore button");
var timer = defaultTime;
var counter = 0;
var score = 0;
var savedUsers = [];
var savedScores =[];
var i=0;
var timeOver = 0;


// action taken when answer selected
var Clicked = function() {

    //check to see if answer is correct or not
    if (this.innerHTML == codeQuestions[counter].answer) {
        console.log ("add 10 points");
        window.alert("Correct!");
        score +=10; //adds 10 points to score
    } else {
        console.log ("subtract 10 sec");
        window.alert("Not correct.  The correct answer is " + codeQuestions[counter].answer);
        timer -=10; //decucts 10 seconds from timer
    }
    console.log("counter " + counter);    
    counter ++;
    // starts next question
    DisplayQuestion();
}

// timer function
function displayTime(){
    if (timer > 0) {
    document.getElementById("timeLeft").innerText = timer;
    timer--; }
    else if (timeOver != 1) {
    timer = "Quiz over";
    document.getElementById("timeLeft").innerText = timer;
    presentScore();
    timeOver = 1;
    return;
    } else {
        return;
    }}

// hide last question after quiz ends
function hideQuestions () {
    document.getElementById("title").innerHTML = "";
    document.getElementById("question").innerHTML = "";
    document.getElementById("question").setAttribute("class", "hidden");
    document.getElementById("possAns1").innerHTML = "";
    document.getElementById("possAns1").setAttribute("class", "hidden");
    document.getElementById("possAns2").innerHTML = "";
    document.getElementById("possAns2").setAttribute("class", "hidden");
    document.getElementById("possAns3").innerHTML = "";
    document.getElementById("possAns3").setAttribute("class", "hidden");
    document.getElementById("possAns4").innerHTML = "";
    document.getElementById("possAns4").setAttribute("class", "hidden");
}

// once all questions answered, clears questions, inputs initials, and saves score
function presentScore() {
    console.log("score saved");
    var userName = window.prompt ("Your score is " + score +". Please enter your initials.");
    hideQuestions();
    timer=0;
    savedUsers.push(userName);
    localStorage.setItem("savedUsers", JSON.stringify(savedUsers));
    savedScores.push(score);
    localStorage.setItem("savedScores", JSON.stringify(savedScores));
    resetQuiz();
};

// loads the saved scores and displays when button clicked
function loadScore () {
    document.getElementById("scoreTitle").innerHTML = "";
    document.getElementById("indScore").innerHTML = "";    
    var scoreTitle = document.getElementById("scoreTitle");
    var list = document.getElementById("indScore");
    savedUsers = JSON.parse(localStorage.getItem("savedUsers"));
    savedScores = JSON.parse(localStorage.getItem("savedScores"));
    if (!savedScores) {
      window.alert("There are no scores at this time!  Take the quiz to test your knowledge.");
    } else { //displays scores
        document.getElementById("showScores").setAttribute("class", "showScores");
        var title = document.getElementById("scoreTitle");
        scoreTitle = document.createElement("h2");
        scoreTitle.innerText = "High Scores";
        title.appendChild(scoreTitle);
        for (i = 0; i < savedScores.length; i++) {
            var li = document.createElement("div");
            li = document.createElement("div");
            li.innerText = savedUsers[i] + ": " + savedScores[i];
            list.appendChild(li);            
    }
    resetQuiz();
    }};

// based on button click, starts quiz and timer
function executeQuiz(){
    timer = defaultTime;
    timeOver = 0;
    counter = 0;
    var time = setInterval(displayTime, 1000);
    document.getElementById("quizInfo").setAttribute ("class", "hidden");
    document.getElementById("preQuizTitle").innerHTML = "";
    document.getElementById("info").innerHTML = "";
    document.getElementById("start").innerHTML = "";
    document.getElementById("showScores").setAttribute("class", "hidden");
    document.getElementById("title").innerHTML = "Coding Quiz";

    savedUsers = JSON.parse(localStorage.getItem("savedUsers"));
    savedScores = JSON.parse(localStorage.getItem("savedScores"));
    if (!savedUsers) { //avoids null error in saved scores
        savedUsers = [];
        savedScores = [];
    } 
    DisplayQuestion();
}

// function runs through question set
function DisplayQuestion () {

    if (counter === codeQuestions.length) {
       timeOver = 1; 
       presentScore();
    } else {
        let displayQuestion = "";
        displayQuestion += codeQuestions[counter].question;
        document.getElementById("question").innerHTML = displayQuestion;
        document.getElementById("question").setAttribute("class", "question");
        let option1 ="";
        option1 += codeQuestions[counter].option1;
        document.getElementById("possAns1").innerHTML = option1;
        document.getElementById("possAns1").onclick = Clicked;
        document.getElementById("possAns1").setAttribute("class", "option");
        let option2 ="";
        option2 += codeQuestions[counter].option2;
        document.getElementById("possAns2").innerHTML = option2;
        document.getElementById("possAns2").onclick = Clicked;
        document.getElementById("possAns2").setAttribute("class", "option");
        let option3 ="";
        option3 += codeQuestions[counter].option3;
        document.getElementById("possAns3").innerHTML = option3;
        document.getElementById("possAns3").onclick = Clicked;
        document.getElementById("possAns3").setAttribute("class", "option");
        let option4 ="";
        option4 += codeQuestions[counter].option4;
        document.getElementById("possAns4").innerHTML = option4;
        document.getElementById("possAns4").onclick = Clicked;
        document.getElementById("possAns4").setAttribute("class", "option");
    }

};

// resets quiz if user wants to take it again
function resetQuiz (){
    document.getElementById("start").innerHTML = "<button>Retake Quiz</button>";
    start_btn = document.querySelector(".start_btn button");
    start_btn.addEventListener("click", executeQuiz);
}

// Add event listener to start quiz button
start_btn.addEventListener("click", executeQuiz);
// add event listener to show saved scores
highscore.addEventListener("click", loadScore);
