//Script file for coding quiz

var score = 0;
var questionNum = 0;
var timeInterval;
var timeLeft = 0;

var questions = [
    {
        question: "Which is NOT a commonly used data type: ",
        option1: "Strings",
        option2: "Booleans",
        option3: "Alerts",
        option4: "Numbers",
        answer: 3
    },
    {
        question: "The condition in an if/else statement is enclosed within ____",
        option1: "Quotes",
        option2: "Curly brackets",
        option3: "Parenthesis",
        option4: "Square brackets",
        answer: 3
    },
    {
        question: "Arrays in JavaScript can be used to store ____",
        option1: "Numbers and strings",
        option2: "Other arrays",
        option3: "Booleans",
        option4: "All of the above",
        answer: 4
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        option1: "Commas",
        option2: "Curly brackets",
        option3: "Quotes",
        option4: "Parenthesis",
        answer: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        option1: "JavaScript",
        option2: "Terminal / Bash",
        option3: "for loops",
        option4: "console.log",
        answer: 4
    }
];

//Add event listeners after page is loaded
window.onload = function(){
    var buttonStart = document.querySelector("#button-start");
    var buttonBack = document.querySelector("#button-back");
    var buttonClear = document.querySelector("#button-clear");
    var form = document.querySelector("#score-form");
    var answers = document.getElementById("answers"); //ul element
        
    buttonStart.addEventListener("click", function(){
        startQuiz();
    });  
    
    buttonBack.addEventListener("click", function(){
        showDiv("intro");
    });

    buttonClear.addEventListener("click", function(){
        console.log("Clicked clear button");
    });

    form.addEventListener("submit", function(event){
        event.preventDefault();
        highScores();
    });

    answers.addEventListener("click", answerQuestion);
}
