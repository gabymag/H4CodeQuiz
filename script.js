var startBtn = document.getElementById('startBtn');
var questionList = document.getElementById('question-list');
var introDisplay = document.getElementById('intro');
var questionElement = document.getElementById('question');
var answerChoices = document.getElementById('answer-selections');
var AnswerText = document.getElementById('AnswerText');
var doneScreen = document.getElementById('doneScreen');
var timerDisplay = document.getElementById('timer');
var YourScore = document.getElementById('YourScore');
var SubmitButton = document.getElementById('submitBtn');
var inputField = document.getElementById('inputField');
var savedInit = document.getElementById('savedinitials');
var highScore = document.getElementById('high-score-screen');
var goBack = document.getElementById('back-to-start');
var QuestionNum = -1;
var highScoreShow = document.getElementById('high-score-show');
var time = 75;



//questions array
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
      {
        question: "Which of the following is not a JS data type",
        choice1: "Boolean",
        choice2: "String",
        choice3: "Jule",
        choice4: "Number",
        answer: 3
      },
      {
        question: "Which of the following is a type of error in Javascript?",
        choice1: "Run time error",
        choice2: "Load time error",
        choice3: "Logical error",
        choice4: "All of the above",
        answer: 4
      },
]


//listening for click events on the following 
startBtn.addEventListener('click', DoStuff);
answerChoices.children[0].addEventListener('click', DoStuff);
answerChoices.children[1].addEventListener('click', DoStuff);
answerChoices.children[2].addEventListener('click', DoStuff);
answerChoices.children[3].addEventListener('click', DoStuff);
SubmitButton.addEventListener('click', DoStuff);
goBack.addEventListener('click', DoStuff);

//main function that starts 
function DoStuff(){
  console.log(DoStuff)
  if(QuestionNum == -1){
    QuestionNum++;
    startQuiz();
  }
  else if(QuestionNum >-1 && QuestionNum < questions.length){
        //var ans = event.srcElement.innerText;
        //AnswerText.innerHTML ="<hr>" + ans;
        //
        var childnum = Array.prototype.indexOf.call(answerChoices.children, event.srcElement) + 1; //within event. find source element(.srcElement)returns the index + 1
        // AnswerText.innerHTML ="<hr>" + childnum;
        AnswerText.classList.remove('hide');
        if(childnum == questions[QuestionNum].answer) {//if childnum is equal to the the right index choice
          AnswerText.innerHTML = "<hr>" +  "Correct!";//tell user correct
        }
        else{
          AnswerText.innerHTML = "<hr>" +  "Wrong!";//otherwrise tell user its 
          //wrong
          decrementTimer(15);
        }
        clearTimeout(hideElement);//cancels out the setTimeout function
        setTimeout(hideElement,1000);//after 1 sec hide the text 
        QuestionNum++;
        if(QuestionNum == questions.length   ){//once it reaches all questions, them hide the questions
          questionList.classList.add('hide');
          //display Input Box
          clearInterval(a); // stops the timer
          doneScreen.classList.remove('hide');
          YourScore.innerText = "Your score is " + time;
          QuestionNum++;
        }else{//next question
          viewQuestion(QuestionNum);
        }
      }  
      else if(QuestionNum == questions.length + 1){//display high scores
        doneScreen.classList.add('hide');
        highScore.classList.remove('hide');
        highScoreShow.innerText = localStorage.getItem("user") + ": " + localStorage.getItem("score");
        highScoreShow.innerText += "\n" + savedInit.value + ": " + time;
        localStorage.setItem("user", savedInit.value);
        localStorage.setItem("score",time);
        QuestionNum++;
      }
      else{//restart code
          startBtn.classList.remove('hide');
          highScore.classList.add('hide');
          introDisplay.classList.remove('hide');
          QuestionNum = -1;
          time = 75;
          timerDisplay.innerText = "Time: 75";
      }
}

function startQuiz(){//when quiz is started the start button needs to hide and the container that holds the quiz questions needs to show up
    console.log(startQuiz)
    startBtn.classList.add('hide');
    introDisplay.classList.add('hide');
    questionList.classList.remove('hide');
    viewQuestion(QuestionNum);
    a = setInterval(decrementTimer,1000,1)
}


  //calling the questions and choices, take the inner text set it equal to the [i]th element in the questions array, and the same for the answer buttons, calling the child buttons
 function viewQuestion(i){
   console.log(viewQuestion);
   questionElement.innerText = questions[i].question;
   answerChoices.children[0].innerText = questions[i].choice1;
   answerChoices.children[1].innerText = questions[i].choice2;
   answerChoices.children[2].innerText = questions[i].choice3;
   answerChoices.children[3].innerText = questions[i].choice4;

 }

 //when answer option is chosen
 function chooseAnswer(answer,j){
    if(i == questions[QuestionNum].answer) {
        AnswerText.innerHTML = "Correct!";
    }
    else{
        AnswerText.innerHTML = "Incorrect!";
    }
    QuestionNum++;
    viewQuestion(QuestionNum);
 }


function hideElement(){//function for the wrong or correct text at the bottom
  AnswerText.classList.add('hide');//hides the wrong or correct response
}
function decrementTimer(i){ // score function
  // console.log(decrementTimer);
  time=time - i;
  if(time < 0){
    time = 0;
    
  }
  timerDisplay.innerText = "Time: " + time

}