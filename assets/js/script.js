// Get elements by id
const welcomeRules = document.getElementById('welcome-rules')
const startQuizBtn = document.getElementById('start-quiz-btn')
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
    startQuizBtn.addEventListener("click", startGame)
});

// Quiz game structure

function startGame() {
    welcomeRules.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizArea.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {}