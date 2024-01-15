
const startButton = document.getElementById("start");
const startPage = document.getElementById("start-screen");
const questionNumber = questionsAndAnswers[0].number;
const questionText = questionsAndAnswers[0].question;


function hideStart(_event){
    document.getElementById("start-screen").style.display="none";
    document.getElementById("questions").style.display="block";
    document.getElementById("question-title").innerHTML="Question " + questionNumber + questionText;

}

startButton.addEventListener("click", hideStart);

//quiz timer
let timer