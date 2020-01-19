var startBtn = document.getElementById('startBtn');
var questionList = document.getElementById('question-list');
var introDisplay = document.getElementById('intro');
startBtn.addEventListener('click', startQuiz);//listening for click event on startBtn, run the startQuiz function


function startQuiz(){//when quiz is started the start button needs to hide and the container that holds the quiz questions needs to show up
startBtn.classList.add('hide');
introDisplay.classList.add('hide');
questionList.classList.remove('hide');
}
// function nextQuestion(){

// }
// function chooseAnswer{
    
// }