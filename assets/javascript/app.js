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
    pic: "<img src='assets/images/halloween-3.jpg' class='img-fluid'>"
}, {
    question: "Who was the killer in the first Friday the 13th film?",
    answers: ["Jason Voorhees", "Pamela Voorhees", "Tommy Jarvis", "Alice Hardy"],
    correctAnswer: "Pamela Voorhees",   
    pic: "<img src='assets/images/pamela.jpg' class='img-fluid'>" 
}, {
    question: "Which horror film did Jamie Lee Curtis' mother star in?",
    answers: ["Sleepaway Camp", "Tourist Trap", "Psycho", "Repulsion"],
    correctAnswer: "Psycho",
    pic: "<img src='assets/images/psycho.jpg' class='img-fluid'>" 

},{
    question: "Which of the following is NOT directed by Dario Argento?",
    answers: ["Demons 2", "Four Flies on Grey Velvet", "Opera", "Inferno"],
    correctAnswer: "Demons 2",
    pic: "<img src='assets/images/demons2.jpg' class='img-fluid'>" 

},
{
    question: "Which of the following is set at a Summer Camp?",
    answers: ["Pieces", "Stage Fright", "The Burning", "Happy Birthday To Me"],
    correctAnswer: "The Burning",
    pic: "<img src='assets/images/theburning.jpg' class='img-fluid'>" 

},
{
    question: "What year was 'The Texas Chain Saw Massacre' Released?",
    answers: ["1976", "1974", "1979", "1981"],
    correctAnswer: "1974",
    pic: "<img src='assets/images/tcm.jpg' class='img-fluid'>" 

},{
    question: "Which of the following has never been remade?",
    answers: ["Suspiria", "Maniac", "My Bloody Valentine", "Hell Night"],
    correctAnswer: "Hell Night",
    pic: "<img src='assets/images/hellnight.jpeg' class='img-fluid'>" 

},{
    question: "What is the name of the self-referential movie series in the 'Scream' films?",
    answers: ["Stab", "Kill", "Nightmare", "Slasher"],
    correctAnswer: "Stab",
    pic: "<img src='assets/images/stab.jpg' class='img-fluid'>" 

} ]

console.log(questions[0].answers[0])


// functions

function timerStart () {
    clearInterval(countdown);
    timer = 31;
    countdown = setInterval(timerCountDown, 1000);
};

function timerCountDown () {
    timer--;
    $("#timeRemains").text("Time Remaining: " + timer + " seconds");
    if (timer <= 0) {
        stopTimer();
        $("#questionfield").text("Time's Up! The correct answer is " + questions[questionNumber].correctAnswer + ".");
        $("#answerfield").html(questions[questionNumber].pic);
        unansweredTotal++;
        setTimeout(next, 1000);
    }
    
};

function stopTimer () {
    clearInterval(countdown);
}

function questionsAndAnswers () {
    $("#questionfield").text(questions[questionNumber].question);
    $("#answerfield").html("<p class='answer col-12'>"+ questions[questionNumber].answers[0] + "<p>" + 
    "<p class='answer col-12'>"+ questions[questionNumber].answers[1] + "<p>" + 
    "<p class='answer col-12'>"+ questions[questionNumber].answers[2] + "<p>" + 
    "<p class='answer col-12'>"+ questions[questionNumber].answers[3] + "<p>")

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
    correctAnswerTotal++
    $("#questionfield").text("You got it right!");
    $("#answerfield").html(questions[questionNumber].pic);
    setTimeout(next, 1000);

}

function wrongAnswer () {
    stopTimer();
    incorrectAnswerTotal++;
    $("#questionfield").text("You got it wrong! The correct answer is " + questions[questionNumber].correctAnswer + ".");
    $("#answerfield").html(questions[questionNumber].pic);
    setTimeout(next, 1000);
}

function next() {
    if (questionNumber < 7) 
    {
        questionNumber++;
        setTimeout(questionsAndAnswers, 2000);
        setTimeout(timerStart, 1000);
    } else {
        setTimeout(gameEnd, 2000);
    }
} 

function gameEnd() {
    $("#questionfield").text("All Done! Here's how you did...");
    $("#answerfield").html("<p>Correct Answers: " + correctAnswerTotal + "<p>" + 
    "<p>Incorrect Answers: " + incorrectAnswerTotal + "<p>" +
    "<p>Unanswered: " + unansweredTotal + "<p>" +
    "<br><p id='reset-button'>Click here to play again...</p>"
                            );

    $('#reset-button').on("click", function () {
        correctAnswerTotal = 0;
        incorrectAnswerTotal = 0;
        unansweredTotal = 0;
        questionNumber = 0;
        timer = 31;
        setTimeout(questionsAndAnswers, 1000);     
        timerStart();
    })
}

//start the game 

$(document).ready(function() {
    $("#startButton").on("click", function() {
        $(this).hide();
        setTimeout(questionsAndAnswers, 1000);     
        timerStart();
     });
});

