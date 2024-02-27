const startQuizButton = document.getElementById("startButton");
startQuizButton.addEventListener("click", startQuiz);
function startQuiz() {
  console.log("Started!");
  document.getElementById("start-screen").style.display="none";
  document.getElementById("quizContainer").style.display="block";
  document.getElementById("timerAppear").style.display="block";
}


// Quiz data
const quizData = [
  {
    question: 'What does the D in DOM stand for?',
    options: ['Document', 'Donut', 'Destroy', 'Dominate'],
    answer: 0 // Index of correct option in options array
  },
  {
    question: 'What can you put inside an array?',
    options: ['Only Strings', 'Only Integers', 'Only Booleans', 'All of the above'],
    answer: 3
  },
  {
    question: 'Which of these is not a type of loop?',
    options: ['For', 'When', 'If', 'While'],
    answer: 1
  },
  {
    question: 'An integer is a...?',
    options: ['Number', 'Text', 'Someone into gers', 'Images'],
    answer: 0
  },
  {
    question: 'Which one of these does NOT need to be in a README file?',
    options: ['Screenshots of application', 'Licence to code', 'Licence to Kill', 'Testing'],
    answer: 2
  },
  {
    question: 'What is the name of the titles inside of an object?',
    options: ['Tags', 'Keys', 'Headings', 'Signs'],
    answer: 1
  },
  {
    question: 'Which command allows you to move into a file on the terminal?',
    options: ['cd ..', 'ls', 'git add .', 'cd fileName'],
    answer: 3
  },
  {
    question: 'What is the name of test the looks at a smaller function within code?',
    options: ['Mock', 'Practice', 'Test', 'Suck it and see'],
    answer: 0
  }

];

// Quiz state
let currentQuestionIndex = 0;
let userScore = 0;

// DOM elements
const quizContainer = document.getElementById('quizContainer');
const resultContainer = document.getElementById('resultContainer');
const scoreboardContainer = document.getElementById('scoreboardContainer');
const timerContainer = document.getElementById('timerContainer');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitBtn = document.getElementById('submitBtn');
const userScoreElement = document.getElementById('userScore');
const userNameElement = document.getElementById('userName');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const scoreListElement = document.getElementById('scoreList');
const timerElement = document.getElementById('timer');
const playAgain = document.getElementById('playAgain');

// Initialize quiz
function initQuiz() {
  renderQuestion();
  renderTimer();
}

// Render questions
function renderQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = '';
  currentQuestion.options.forEach((option, index) => {
      const optionBtn = document.createElement('button');
      optionBtn.textContent = option;
      optionBtn.addEventListener('click', () => handleOptionClick(index));
      optionsElement.appendChild(optionBtn);
  });
}

// Handle option click
function handleOptionClick(optionIndex) {
  if (optionIndex === quizData[currentQuestionIndex].answer) {
      userScore++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
      renderQuestion();
  } else {
      showResult();
  }
}


playAgain.addEventListener("click", replay);

function replay() {
  document.getElementById("start-screen").style.display="block";
  document.getElementById("scoreboardContainer").style.display="none";
  document.getElementById("resultContainer").style.display="none";

}

// Render result
function showResult() {
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  userScoreElement.textContent = userScore;
  timerElement.style.display = 'none';
}

// Initialize high scores from local storage
let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Save high scores to local storage
function saveHighScores() {
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

// Save score
saveScoreBtn.addEventListener('click', () => {
    const userName = userNameElement.value;
    const scoreData = { name: userName, score: userScore };
    highScores.push(scoreData); // Add the new score to highScores array
    saveHighScores(); // Save the updated highScores array to local storage
    renderScoreboard();
});

// Render scoreboard
function renderScoreboard() {
    scoreboardContainer.style.display = 'block';
    scoreListElement.innerHTML = '';
    highScores.forEach(scoreData => {
        const scoreItem = document.createElement('li');
        scoreItem.textContent = `${scoreData.name}: ${scoreData.score}`;
        scoreListElement.appendChild(scoreItem);
    });
}


// Timer functionality
function renderTimer() {
  let timeLeft = 60;
  const timerInterval = setInterval(() => {
      timeLeft--;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      if (timeLeft === 0) {
          clearInterval(timerInterval);
          // timerContainer.style.display = 'none';
          showResult(); // End the quiz and display the result
      }
  }, 1000);
}

// Start quiz
initQuiz();