//global variables 

var question = "";
var questionNumber = 0;
var answers = [];
var correctAnswer = "";
var incorrectAnswerTotal = 0;
var correctAnswerTotal = 0;
var unansweredTotal = 0;
var timer = 31;
var countdown;
var pic;
var usersPick;

//questions

var questions = [{
    question: "Which Halloween film did not include Michael Myers?",
    answers: ["Halloween 4", "Halloween III", "Halloween 6", "Halloween H20"],
    correctAnswer: "Halloween III",
    pic: "<img src='assets/images/halloween-3.jpg'>"
}, {
    question: "Who was the killer in the first Friday the 13th film?",
    answers: ["Jason Voorhees", "Pamela Voorhees", "Tommy Jarvis", "Alice Hardy"],
    correctAnswer: "Pamela Voorhees",   
    pic: "assets/images/pamela.jpg" 
} ]

console.log(questions[0].question)
console.log(questions[1].question)
console.log(questions[0].answers[0])


// functions

function timerStart () {
    clearInterval(countdown);
    timer = 31;
    countdown = setInterval(timerCountDown, 500);
};

function timerCountDown () {
    timer--;
    $("#timeRemains").text("Time Remaining: " + timer + " seconds");
    if (timer <= 0) {
        stopTimer();
        $("#questionfield").text("Time's Up! The correct answer is " + questions[questionNumber].correctAnswer);
        $("#answerfield").html(questions[questionNumber].pic);
    }
    
};

function stopTimer () {
    clearInterval(countdown)
}



function QuestionsAndAnswers () {
    $("#questionfield").text(questions[questionNumber].question);
    $("#answerfield").html("<p class='answer'>"+ questions[questionNumber].answers[0] + "<p>" + 
    "<p class='answer'>" + questions[questionNumber].answers[1] + "<p>" + 
    "<p class='answer'>"+ questions[questionNumber].answers[2] + "<p>" + 
    "<p class='answer'>"+ questions[questionNumber].answers[3] + "<p>")

    $(".answer").on("click", function () {
        usersPick = $(this).text();
        if (usersPick === questions[questionNumber].correctAnswer) {
            rightAnswer();
        } else {
            wrongAnswer();
        }
    });

}

function rightAnswer() {
    stopTimer();
    $("#questionfield").text("You got it right!");
    $("#answerfield").html(questions[questionNumber].pic);
    next();
}

function wrongAnswer () {
    stopTimer();
    incorrectAnswerTotal++;
    $("#questionfield").text("You got it wrong! The correct answer is " + questions[questionNumber].correctAnswer);
    $("#answerfield").html(questions[questionNumber].pic);
}



$(document).ready(function() {
    $("#startButton").on("click", function() {
        $(this).hide();
        setTimeout(QuestionsAndAnswers, 1000);     
        timerStart();
     });
});

function next() {
    questionNumber++;
    setTimeout(QuestionsAndAnswers, 2000);
}