//global variables 

var question = "";
var answers = [];
var correctAnswer = "";
var incorrectAnswerTotal = 0;
var correctAnswerTotal = 0;
var unansweredTotal = 0;
var timer = 31;
var countdown;
var gameOn = false; 
//questions

var questions = [{
    question: "Which Halloween film did not include Michael Myers?",
    answers: ["Halloween 4", "Halloween 3", "Halloween 6", "Halloween H20"],
    correctAnswer: "Halloween 3"
}, {
    question: "Who was the killer in Friday the 13th part 1?",
    answers: ["Jason Voorhees", "Pamela Voorhees", "Tommy Jarvis", "Alice Hardy"],
    correctAnswer: "Jason's Mother"   
} ]

console.log(questions[0].question)
console.log(questions[1].question)
console.log(questions[0].answers[0])


// functions

function timerStart () {
    clearInterval(countdown);
    timer = 31;
    countdown = setInterval(timerCountDown, 200);
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
        $("#answerfield").html('<img src="assets/images/halloween-3.jpg" />');
        correctAnswerTotal++;
    });

    $("#firstans").on("click", function () {
        console.log("wrong");
        wrongFirstQuestion();
        
    });

    $("#thirdans").on("click", function () {
        console.log("wrong");
        wrongFirstQuestion();
    });
    
    $("#fourthans").on("click", function () {
        console.log("wrong");
        wrongFirstQuestion();
    });

    // if (gameOn === true && timer <= 0) {
    //     // $("#questionfield").text("time's up");
    //     // $("#answerfield").text("the correct answer was halloween 3")

    // }


}

function wrongFirstQuestion () {
    stopTimer();
    incorrectAnswerTotal++;
    $("#questionfield").text("You got it wrong! The correct answer is Halloween 3.");
    $("#answerfield").html('<img src="assets/images/halloween-3.jpg" />');
    setTimeout(secondQuestion, 1000);
    setTimeout(secondAnswers, 1000);
}

function secondQuestion () {
    $("#questionfield").text(questions[1].question);

}

function secondAnswers() {
    $("#answerfield").empty();
    $("#answerfield").append("<p id='firstans'>"+ questions[1].answers[0] + "<p>")
    $("#answerfield").append("<p id='secondans'>"+ questions[1].answers[1] + "<p>")
    $("#answerfield").append("<p id='thirdans'>"+ questions[1].answers[2] + "<p>")
    $("#answerfield").append("<p id='fourthans'>"+ questions[1].answers[3] + "<p>")
}


$(document).ready(function() {
    $("#startButton").on("click", function() {
        $("#startButton").hide();
        timerStart();
        setTimeout(firstQuestion, 1000);
        setTimeout(firstAnswers, 1000)
     });
});
