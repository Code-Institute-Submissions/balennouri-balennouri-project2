// Get elements by id
const welcomeRules = document.getElementById('welcome-rules')
const quizArea = document.getElementById('quiz-area')
const questionElement = document.getElementById('question')

// variables to be defined

let shuffledQuestions;
let currentQuestionIndex;
let correctAnswer;
let score;
let timeLeft;

//Dom

document.addEventListener("DOMContentLoaded", function () {
    const startQuizBtn = document.getElementById('start-quiz-btn')
    startQuizBtn.addEventListener("click", startGame)
});

// Quiz game structure

function startGame() {
    welcomeRules.classList.add('hide')
    currentQuestionIndex = 0
    quizArea.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(currentQuestionIndex)
}

function showQuestion() {
    questionElement.innerText = questions.questions
}

function selectAnswer() {}