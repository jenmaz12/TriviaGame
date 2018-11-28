$(document).ready(function(){
    $(".trivia").hide();
    $("#time").hide();
    $("#alert").hide();
    $("#score").hide();  
var count = 0;
// define correct and incorrect counts
var correct = 0;
var incorrect = 0;
var unanswered = 0;  
// show trivia question and timer
function displayQuestion() {
    $("#trivia"+count).hide();
    $("#alert").hide();
    count=count+1;
    if (count<11) {
    $("#trivia"+count).show();
    $(".incorrect").show();
    $("#time").html(30);
    $("#time").show();
    number = 30;
    run();
}
else {
    // alert user Game Over
    $("#alert").html("Game Over!");
    $("#alert").show();
    // show score
    $("#score").show();
}
};
// set counter to 30
var number = 30;
var intervalId;

// define run timer function
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  };

// define decrement function
function decrement() {
    //  Decrease number by one.
    number--;

    //  Show the number in the #time tag.
    $("#time").html("<h2>" + number + "</h2>");

    //  Once number hits zero...
    if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        $("#alert").html("Time's Up! The Correct Answer Was:");
        $("#alert").show();
        // hide incorrect answers
        $(".incorrect").hide();
        // Add to unansweredCount
        unanswered = unanswered + 1;
        $("#unansweredCount").html(unanswered);
        // run displayQuestion
        $("#time").hide();
        setTimeout(displayQuestion,1000*5);
    };
};

//  The stop function
function stop() {

//  Clears intervalId
clearInterval(intervalId);
};

$("button").on("click",function(){
        displayQuestion ();
        $("button").hide();        
        // Execute run function
        run ();
});

$(".correct").on("click", function(){
    // add one to correct
    correct = correct +1;
    console.log(correct);
    // add new correct to correct count
    $("#correctCount").html(correct);
    // show correct alert
    $("#alert").html("That's Correct!");
    $("#alert").show();
    // hide incorrect answers
    $(".incorrect").hide();
    // stop and hide timer
    stop();
    $("#time").hide();
    setTimeout(displayQuestion,1000*5);
})

$(".incorrect").on("click", function(){
    // add one to incorrect
    incorrect = incorrect +1;
    console.log(incorrect);
    // add new correct to correct count
    $("#incorrectCount").html(incorrect);
    // show correct alert
    $("#alert").html("Sorry, That's Incorrect. The Correct Answer Is:");
    $("#alert").show();
    // hide incorrect answers
    $(".incorrect").hide();
    // stop and hide timer
    stop();
    $("#time").hide();
    setTimeout(displayQuestion,1000*5);
})

});