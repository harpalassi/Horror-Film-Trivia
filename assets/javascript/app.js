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
console.log(questions[0].answers[0])


// functions

function timerStart () {
    clearInterval(countdown);
    countdown = setInterval(timerCountDown, 1000);
};

function timerCountDown () {
    timer--;
    $("#timeRemains").text("Time Remaining: " + timer + " seconds");
};

function stopTimer () {
    clearInterval(countdown)
}

function firstQuestion () {
    $("#questionfield").text(questions[0].question);

}

function firstAnswers () {
    $("#answerfield").append("<p id='firstans'>"+ questions[0].answers[0] + "<p>")
    $("#answerfield").append("<p id='secondans'>"+ questions[0].answers[1] + "<p>")
    $("#answerfield").append("<p id='thirdans'>"+ questions[0].answers[2] + "<p>")
    $("#answerfield").append("<p id='fourthans'>"+ questions[0].answers[3] + "<p>")
    $("#secondans").on("click", function () {
        console.log("correct");
        stopTimer();
        $("#questionfield").text("You got it right!");
        $("#answerfield").html("<img src='https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Halloween-3-700x300.jpg'>");
    });
    $("#firstans").on("click", function () {
        console.log("wrong");
    });
    $("#thirdans").on("click", function () {
        console.log("wrong");
    });
    $("#fourthans").on("click", function () {
        console.log("wrong");
    });


}

$(document).ready(function() {
    $("#startButton").on("click", function() {
        $("#startButton").hide();
        timerStart();
        setTimeout(firstQuestion, 1000);
        setTimeout(firstAnswers, 1000)
     });
});
