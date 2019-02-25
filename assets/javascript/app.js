// Variables for correct and incorrect answers, as well as unanswered questions
var answersCorrect = 0;
var answersIncorrect = 0;
var unansweredQuestions = 0;

// TIMER FUNCTION
function run() {
    intervalId = setInterval(decrement, 1000);
}

// TIME ON THE CLOCK
var number = 60

// DECREASES THE TIME
function decrement() {

    number--;

    $("#timer").html("<h2>Time Remaining: " + number + "</h2>");

    if (number < 0) {

        stop();

        alert("Time Up!");
        
        submit();
    }
}

// FUNCTION TO STOP TIMER
function stop() {
    clearInterval(intervalId);
}

// DISPLAYS THE QUESTIONS
function displayGame(){
    $("#trivia").toggle("fast");
    $("#start").hide("fast");
}

// SUBMIT FUNCTION
function submit(){
    $("#trivia").hide("fast");
    stop();

// This checks your answers!
// QUESTION 1
    if ($("#correct-1").is(" :checked")){
        answersCorrect++;
    } else if ($(".question-1").is(" :checked")) {
        answersIncorrect++;
    } else {
        unansweredQuestions++;
    }
//  QUESTION 2
    if ($("#correct-2").is(" :checked")){
        answersCorrect++;
    } else if ($(".question-2").is(" :checked")) {
        answersIncorrect++;
    } else {
        unansweredQuestions++;
    }
// QUESTION 3
    if ($("#correct-3").is(" :checked")){
        answersCorrect++
    } else if ($(".question-3").is(" :checked")) {
        answersIncorrect++;
    } else {
        unansweredQuestions++;
    }
// QUESTION 4
    if ($("#correct-4").is(" :checked")){
        answersCorrect++
    } else if ($(".question-4").is(" :checked")) {
        answersIncorrect++;
    } else {
        unansweredQuestions++;
    }
// QuUESTION 5
    if ($("#correct-5").is(" :checked")){
        answersCorrect++
    } else if ($(".question-5").is(" :checked")) {
        answersIncorrect++;
    } else {
        unansweredQuestions++;
    }
// QUESTION 6
    if ($("#correct-6").is(" :checked")){
        answersCorrect++
    } else if ($(".question-6").is(" :checked")) {
        answersIncorrect++;
    } else {
        unansweredQuestions++;
    }
// QUESTION 7
    if ($("#correct-7").is(" :checked")){
        answersCorrect++
    } else if ($("#question-7").is(" :checked")) {
        answersIncorrect++;
    } else {
        unansweredQuestions++;
    }
// QUESTION 8
    if ($("#correct-8").is(" :checked")){
        answersCorrect++
    } else if ($(".question-8").is(" :checked")) {
        answersIncorrect++;
    } else {
        unansweredQuestions++;
    }
    console.log("You answered this many correctly: " + answersCorrect);
    console.log("You answered this many incorrectly: " + answersIncorrect);
    console.log("You didn't answer this many questions: " + unansweredQuestions)
// CREATES THE DIV WITH THE SCORE
    var newDiv = $("<div>");
    $("#container").append(newDiv);
    $(newDiv).html("Correct Answers: " + answersCorrect + "<br>Incorrect Answers: " + answersIncorrect + "<br> Unanswered Questions: " +unansweredQuestions);
} 


$("#start").on("click", run)
$("#start").on("click", displayGame)
$("#submit").on("click", submit)

