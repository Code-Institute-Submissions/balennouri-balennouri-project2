// Get elements by id
const welcomeRules = document.getElementById('welcome-rules')
const startQuizBtn = document.getElementById('start-quiz-btn')
const quizArea = document.getElementById('quiz-area')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btn-area')

// variables to be defined

let shuffledQuestions;
let currentQuestionIndex;
let correctAnswer;
let score;
let timeLeft;
let timerInterval;

/*
waits for DOM to load before executing the first function 
*/

document.addEventListener("DOMContentLoaded", function () {
    startQuizBtn.addEventListener("click", startGame)
});

// Quiz game structure
/**
  StartGame function hide the welcome rules page when you click the start quiz button.
 */

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