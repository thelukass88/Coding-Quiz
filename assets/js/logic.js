const startQuizButton = document.getElementById("startButton");
startQuizButton.addEventListener("click", startQuiz);
function startQuiz() {
  console.log("Started!");
  document.getElementById("start-screen").style.display="none";
  document.getElementById("questions").style.display="block";
  document.getElementById("myButton").style.display="block";
}

// Get a reference to the button, the question container, and the choices container
var button = document.getElementById('myButton');
var questionContainer = document.getElementById('question');
var choicesButtons = document.querySelectorAll('.choiceButton');

// Initialize index to 0 (start from the first question)
var currentIndex = 0;

// Function to update question and choices
function updateQuestion() {
    // Access the current question
    var currentQuestion = questions[currentIndex];
    
    // Update the question text
    questionContainer.textContent = currentQuestion.question;
    
    // Update the choices buttons text
    currentQuestion.choices.forEach(function(choice, index) {
        choicesButtons[index].textContent = choice;
    });
}

// Call the updateQuestion function to initially set the question and choices
updateQuestion();

// Add event listener to the buttons
choicesButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Increment the index
        currentIndex++;
        
        // If the index exceeds the length of the array, reset it to 0 (start from the beginning)
        if (currentIndex >= questions.length) {
            currentIndex = 0;
        }
        
        // Update the question and choices
        updateQuestion();
    });
});

// Add event listener to the button
button.addEventListener('click', function() {
    // Increment the index
    currentIndex++;
    
    // If the index exceeds the length of the array, reset it to 0 (start from the beginning)
    if (currentIndex >= questions.length) {
        currentIndex = 0;
    }
    
    // Update the question and choices
    updateQuestion();
});



// button.addEventListener("click", startQuestions);

// function startQuestions() {
//       // Iterate through the array of objects
//       for (var i = 0; i < questions.length; i++) {
//         // Access each object
//         var currentObject = questions[i];
        
//         // Do something with the object, for example, log its properties
//         console.log("Name:", currentObject.name, ", Value:", currentObject.value);
//     }

// }
//     // Iterate through the array of objects
//     for (var i = 0; i < questions.length; i++) {
//         // Access each object
//         var currentObject = questions[i];
        
//         // Do something with the object, for example, log its properties
//         console.log("Name:", currentObject.name, ", Value:", currentObject.value);
//     }


// const question = document.getElementById("question");
// const choiceOne = document.getElementById("choice-text1");
// const choiceTwo = document.getElementById("choice-text2");
// const choiceThree = document.getElementById("choice-text3");
// const choiceFour = document.getElementById("choice-text4");

// const questionOne = questions[0].question;
// const questionOneChoiceOne = questions[0].choice1;
// const questionOneChoiceTwo = questions[0].choice2;
// const questionOneChoiceThree = questions[0].choice3;
// const questionOneChoiceFour = questions[0].choice4;


// function startQuiz() {
//   console.log("Started!");
//   document.getElementById("start-screen").style.display="none";
//   document.getElementById("questions").style.display="block";
//   question.innerHTML = questionOne;
//   choiceOne.innerHTML = questionOneChoiceOne;
//   choiceTwo.innerHTML = questionOneChoiceTwo;
//   choiceThree.innerHTML = questionOneChoiceThree;
//   choiceFour.innerHTML = questionOneChoiceFour;
//   toQuestionTwo();
// };

// function toQuestionTwo() {
//   choiceOne.addEventListener("click", startQuestionTwo);
//   choiceTwo.addEventListener("click", startQuestionTwo);
//   choiceThree.addEventListener("click", startQuestionTwo);
//   choiceFour.addEventListener("click", startQuestionTwo);
// };

// function startQuestionTwo() {
//   const questionTwo = questions[1].question;
//   const questionTwoChoiceOne = questions[1].choice1;
//   const questionTwoChoiceTwo = questions[1].choice2;
//   const questionTwoChoiceThree = questions[1].choice3;
//   const questionTwoChoiceFour = questions[1].choice4;

//   question.innerHTML = questionTwo;
//   choiceOne.innerHTML = questionTwoChoiceOne;
//   choiceTwo.innerHTML = questionTwoChoiceTwo;
//   choiceThree.innerHTML = questionTwoChoiceThree;
//   choiceFour.innerHTML = questionTwoChoiceFour;

//   toQuestionThree();
// }

// function toQuestionThree() {
//   choiceOne.addEventListener("click", startQuestionThree);
//   choiceTwo.addEventListener("click", startQuestionThree);
//   choiceThree.addEventListener("click", startQuestionThree);
//   choiceFour.addEventListener("click", startQuestionThree);
// };

// function startQuestionThree() {
//   const questionThree = questions[2].question;
//   const questionThreeChoiceOne = questions[2].choice1;
//   const questionThreeChoiceTwo = questions[2].choice2;

//   question.innerHTML = questionThree;
//   choiceOne.innerHTML = questionThreeChoiceOne;
//   choiceTwo.innerHTML = questionThreeChoiceTwo;
//   document.getElementById("choice-text3").style.display="none";
//   document.getElementById("choice-text4").style.display="none";


//   toQuestionFour();
// }

// function toQuestionFour() {
//   choiceOne.addEventListener("click", startQuestionFour);
//   choiceTwo.addEventListener("click", startQuestionFour);
//   choiceThree.addEventListener("click", startQuestionFour);
//   choiceFour.addEventListener("click", startQuestionFour);
// };

// function startQuestionFour() {
//   const questionFour = questions[3].question;
//   const questionFourChoiceOne = questions[3].choice1;
//   const questionFourChoiceTwo = questions[3].choice2;
//   const questionFourChoiceThree = questions[3].choice3;
//   const questionFourChoiceFour = questions[3].choice4;

//   question.innerHTML = questionFour;
//   choiceOne.innerHTML = questionFourChoiceOne;
//   choiceTwo.innerHTML = questionFourChoiceTwo;
//   choiceThree.innerHTML = questionFourChoiceThree;
//   choiceFour.innerHTML = questionFourChoiceFour;
//   document.getElementById("choice-text3").style.display="block";
//   document.getElementById("choice-text4").style.display="block";

//   toHighScores();
// }

// function toHighScores() {
//   choiceOne.addEventListener("click", );
//   choiceTwo.addEventListener("click", startQuestionFour);
//   choiceThree.addEventListener("click", startQuestionFour);
//   choiceFour.addEventListener("click", startQuestionFour);
// };