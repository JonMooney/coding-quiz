//Script file for coding quiz

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
