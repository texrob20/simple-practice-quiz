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
// action taken when answer selected
var Clicked = function() {
    console.log(this.id, this.innerHTML);
    console.log(codeQuestions[counter].answer);
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
    else {
    timer = "Quiz over";
    document.getElementById("timeLeft").innerText = timer;
    return;
    }

    console.log(timer);
}

// once all questions answered, clears questions and saves score
function Score() {
    console.log("score saved");
    var user = window.prompt ("Your score is " + score +". Please enter your name.");
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
    timer=0;
    function saveScore(){

    }
    console.log(user);
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

// based on button click, starts quiz and timer
function executeQuiz(){
    var time = setInterval(displayTime, 1000);
    document.getElementById("quizInfo").setAttribute ("class", "hidden");
    document.getElementById("preQuizTitle").innerHTML = "";
    document.getElementById("info").innerHTML = "";
    document.getElementById("start").innerHTML = "";
    document.getElementById("title").innerHTML = "Coding Quiz";
 
    DisplayQuestion();
}

// function runs through question set
function DisplayQuestion () {
    if (counter === codeQuestions.length){
       Score();
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
}};
 

// Add event listener to start quiz button
start_btn.addEventListener("click", executeQuiz);
