//Script file for coding quiz

//Global variables
var score = 0;
var questionNum = 0;
var timeInterval;
var timeLeft = 0;

//Questions object with questions and answer key
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

//Start Quiz Function
function startQuiz(){
    //Reset global variables for second game round
    score = 0;
    questionNum = 0;
    
    //setInterval for 60 seconds
    timeLeft = 60;
    timeInterval = setInterval(function(){
        if(timeLeft > 0){
            document.getElementById("time-remaining").innerHTML = timeLeft;
            timeLeft--;
        }else{
            document.getElementById("time-remaining").innerHTML = "";
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);

    showDiv("quiz");
    
    clearQuestion();
    
    buildQuestion();
}

//Clear the current question data to get ready for the next one
function clearQuestion(){
    var listEl = document.getElementById("answers");
    
    removeAllChildNodes(listEl);
}

//Build questions dynamically as user progresses through the quiz
function buildQuestion(){
    document.querySelector("#question").textContent = questions[questionNum].question;

    var listEl = document.getElementById("answers");
  
    var option1 = document.createElement("li");
    option1.textContent = "A - " + questions[questionNum].option1;
    option1.dataset.value = "1";

    var option2 = document.createElement("li");
    option2.textContent = "B - " + questions[questionNum].option2;
    option2.dataset.value = "2";

    var option3 = document.createElement("li");
    option3.textContent = "C - " + questions[questionNum].option3;
    option3.dataset.value = "3";

    var option4 = document.createElement("li");
    option4.textContent = "D - " + questions[questionNum].option4;
    option4.dataset.value = "4";

    listEl.appendChild(option1);
    listEl.appendChild(option2);
    listEl.appendChild(option3);
    listEl.appendChild(option4);
}

// Answer Question - called when clicking on one of the question <li> elements
function answerQuestion(event){
    li = event.target;
    var str;
    var correctEl = document.getElementById("correct");
    
    // Answered question correctly
    if(questions[questionNum].answer === parseInt(li.dataset.value)){
        score ++;
        correctEl.style.color = "green";
        correctEl.textContent = "Correct!"
    // Answered incorrectly
    }else{
        timeLeft -= 5;
        console.log(timeLeft);
        correctEl.style.color = "red";
        correctEl.textContent = "Incorrect!"
    }

    correctEl.style.display = "block";
    
    // Only show correct or incorrect for a second
    var tLeft = 2;
    var correctInterval = setInterval(function(){
        if(tLeft > 0){
            tLeft--;
        }else{
            clearInterval(correctInterval);
            correctEl.style.display = "none";
        }
    },300);
    
    questionNum++;

    // If more questions are left, clear and build another one
    if(questionNum < questions.length){
        clearQuestion();
        buildQuestion();
    // Else clear the interval and end the quiz
    }else{
        document.getElementById("time-remaining").innerHTML = "";
        clearInterval(timeInterval);
        endQuiz();
    }
}

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
