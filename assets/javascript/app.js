//global variables 

var question = "";
var answers = [];
var correctAnswer = "";
var incorrectAnswerTotal = 0;
var correctAnswerTotal = 0;
var unansweredTotal = 0;
var timer = 31;
var countdown;
var timesUp = false; 
//questions

var questions = [{
    question: "Which Halloween film did not include Michael Myers?",
    answers: ["Halloween 4", "Halloween III", "Halloween 6", "Halloween H20"],
    correctAnswer: "Halloween III"
}, {
    question: "Who was the killer in the first Friday the 13th film?",
    answers: ["Jason Voorhees", "Pamela Voorhees", "Tommy Jarvis", "Alice Hardy"],
    correctAnswer: "Pamela Voorhees"   
} ]

console.log(questions[0].question)
console.log(questions[1].question)
console.log(questions[0].answers[0])


// functions

// function timerStart () {
//     clearInterval(countdown);
//     timer = 31;
//     countdown = setInterval(timerCountDown, 200);
// };

// function timerCountDown () {
//     timer--;
//     $("#timeRemains").text("Time Remaining: " + timer + " seconds");
//     if (timer <= 0) {
//         stopTimer();
//         timesUp = true;
//     }
    
// };

function stopTimer () {
    clearInterval(countdown)
}

function timerOne () {
    timer = 31;
    countdown = setInterval(function() {
        timer--;
        $("#timeRemains").text("Time Remaining: " + timer + " seconds");
        if (timer <= 0) {
            stopTimer();
            $("#questionfield").text("Time's Up! The correct answer is " + questions[0].correctAnswer);
            $("#answerfield").html('<img src="assets/images/halloween-3.jpg" class="img-fluid" />');
            unansweredTotal++;
            setTimeout(secondQuestion, 2000);
            setTimeout(secondAnswers, 2000);
            console.log(unansweredTotal);
        }
    }, 1000);
    
}

function timerTwo () {
    timer = 31;
    countdown = setInterval(function() {
        timer--;
        $("#timeRemains").text("Time Remaining: " + timer + " seconds");
        if (timer <= 0) {
            stopTimer();
            $("#questionfield").text("Time's Up! The correct answer is " + questions[1].correctAnswer);
            $("#answerfield").text("insert image here");
            unansweredTotal++;
            setTimeout(secondQuestion, 2000);
            setTimeout(secondAnswers, 2000);
            console.log(unansweredTotal);
        }
    }, 1000);

}   


function firstQuestion () {
    
   
    $("#questionfield").text(questions[0].question);
    firstAnswers();
}

function firstAnswers () {

    $("#answerfield").append("<p id='firstans'>"+ questions[0].answers[0] + "<p>")
    $("#answerfield").append("<p id='secondans'>"+ questions[0].answers[1] + "<p>")
    $("#answerfield").append("<p id='thirdans'>"+ questions[0].answers[2] + "<p>")
    $("#answerfield").append("<p id='fourthans'>"+ questions[0].answers[3] + "<p>")
    $("#secondans").on("click", function () {
        stopTimer();
        $("#questionfield").text("You got it right!");
        $("#answerfield").html('<img src="assets/images/halloween-3.jpg" class="img-fluid" />');
        correctAnswerTotal++;
        setTimeout(secondQuestion, 2000);
        setTimeout(secondAnswers, 2000);
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
     

}



function wrongFirstQuestion () {
    stopTimer();
    incorrectAnswerTotal++;
    $("#questionfield").text("You got it wrong! The correct answer is " + questions[0].correctAnswer);
    $("#answerfield").html('<img src="assets/images/halloween-3.jpg" />');
    setTimeout(secondQuestion, 2000);
    setTimeout(secondAnswers, 2000);
}

function secondQuestion () {
    timerTwo();
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
        setTimeout(firstQuestion, 1000);     
        timerOne();
     });
});
