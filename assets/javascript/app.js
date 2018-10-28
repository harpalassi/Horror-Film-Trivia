//global variables 

var question = "";
var answers = [];
var correctAnswer = "";
var incorrectAnswerTotal = 0;
var correctAnswerTotal = 0;
var unansweredTotal = 0;
var timer = 31;
var countdown;

//questions

var questions = [{
    question: "Which Halloween film did not include Michael Myers?",
    answers: ["Halloween 4", "Halloween 3", "Halloween 6", "Halloween H20"],
    correctAnswer: "Halloween 3"
}, {
    question: "Who was the killer in Friday the 13th part 1?",
    answers: ["Jason", "Jason's Mother", "Placeholder", "Another Placeholder"],
    correctAnswer: "Jason's Mother"   
} ]

console.log(questions[0].question)
console.log(questions[1].question)
console.log(questions[0].correctAnswer)
// functions

function timerStart () {
    clearInterval(countdown);
    countdown = setInterval(timerCountDown, 1000);
};

function timerCountDown () {
    timer--;
    $("#timeRemains").text("Time Remaining: " + timer + " seconds");
};

function firstQuestion () {
    $("#questionfield").text(questions[0].question);

}
$(document).ready(function() {
    $("#startButton").on("click", function() {
        $("#startButton").hide();
        timerStart();
        setTimeout(firstQuestion, 1000);
     });
});
