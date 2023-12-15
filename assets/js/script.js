// Get elements by id
const welcomeRules = document.getElementById('welcome-rules')
const startQuizBtn = document.getElementById('start-quiz-btn')
const quizArea = document.getElementById('quiz-area')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-btn-area')

let currentQuestionIndex

startQuizBtn.addEventListener('click', startGame)

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
    questionElement.innerText = questions.question
}

function selectAnswer() {}


/* Creating an Array containing all the questions and answers*/