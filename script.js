var startBtn = document.getElementById('startBtn');
var questionList = document.getElementById('question-list');
var introDisplay = document.getElementById('intro');
var questionElement = document.getElementById('question')
var answerChoices = document.getElementById('answer-selections')
var questions = [
    {
        question: "It is recommended to end each Javascript statment with a",
        choice1: "period",
        choice2: "semicolon",
        choice3: "comma",
        choice4: "colon",
        answer: 2
      },
      {
        question: "If you start with x=1 then add x++, what is the ending value of x?",
        choice1: "undefined",
        choice2: "1",
        choice3: "3",
        choice4: "2",
        answer: 4
         
      },
      {
        question: "Where do you add the <script> tag in your html file?",
        choice1: "either in the <body> or the <head>",
        choice2: "in the <head> but not the <body>",
        choice3: "in the <body> but not the <head>",
        choice4: "neither the <body> or the <head>",
        answer: 1
      },
]



startBtn.addEventListener('click', startQuiz);//listening for click event on startBtn, run the startQuiz function


function startQuiz(){//when quiz is started the start button needs to hide and the container that holds the quiz questions needs to show up
startBtn.classList.add('hide');
introDisplay.classList.add('hide');
questionList.classList.remove('hide');
}


  
// function viewQuestion(){

// }
// function chooseAnswer{
    
// }

