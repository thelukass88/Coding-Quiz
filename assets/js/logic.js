
const startButton = document.getElementById("start");
const startPage = document.getElementById("start-screen");
const questionNumber = questionsAndAnswers[0].number;
const questionText = questionsAndAnswers[0].question;
const optionOne = questionsAndAnswers[0].options[0];
const optionTwo = questionsAndAnswers[0].options[1];
const optionThree = questionsAndAnswers[0].options[2];
const optionFour = questionsAndAnswers[0].options[3];


function hideStart(_event){
    document.getElementById("start-screen").style.display="none";
    document.getElementById("questions").style.display="block";
    document.getElementById("question-title").innerHTML="Question " + questionNumber + questionText;
    document.getElementById("choiceOne").innerHTML= optionOne;
    document.getElementById("choiceTwo").innerHTML= optionTwo;
    document.getElementById("choiceThree").innerHTML= optionThree;
    document.getElementById("choiceFour").innerHTML= optionFour;
}

startButton.addEventListener("click", hideStart);

//quiz timer
let timer