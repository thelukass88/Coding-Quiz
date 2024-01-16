
const startButton = document.getElementById("start");
const startPage = document.getElementById("start-screen");
const questionNumber = questionsAndAnswers[0].number;
const questionText = questionsAndAnswers[0].question;
const optionOne = questionsAndAnswers[0].options[0];
const optionTwo = questionsAndAnswers[0].options[1];
const optionThree = questionsAndAnswers[0].options[2];
const optionFour = questionsAndAnswers[0].options[3];

var timerElement = document.getElementById("time");
var timer;
var timerCount;

//click away from the start page and into the quiz
function hideStart(_event){
    document.getElementById("start-screen").style.display="none";
    document.getElementById("questions").style.display="block";
    document.getElementById("question-title").innerHTML="Question " + questionNumber + ":" + questionText;
    document.getElementById("choiceOne").innerHTML= optionOne;
    document.getElementById("choiceTwo").innerHTML= optionTwo;
    document.getElementById("choiceThree").innerHTML= optionThree;
    document.getElementById("choiceFour").innerHTML= optionFour;
    timerCount = 60;
    startTimer()
}

startButton.addEventListener("click", hideStart);

function questionEventListeners(){
    optionOne.addEventListener('click', )

}

function checkAnswer(){
    
}


//quiz timer
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }
