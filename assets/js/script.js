// Get elements by id
const heading = document.getElementById('heading')
const welcomeRules = document.getElementById('welcome-rules')
const startQuizBtn = document.getElementById('start-quiz-btn')
const questionElement = document.getElementById('questions')
const quizArea = document.getElementById('quiz-area')
const answerBtnArea = document.getElementById('answer-btn-area')
const qLeftAnswerCorrect = document.getElementById('q-left-answer-correct')

// Variables to be defined

startQuizBtn.addEventListener('click', startGame)

//DOM


// Quiz structure

function startGame() {
    console.log('started')
    welcomeRules.classList.add('hide')
    quizArea.classList.remove('hide')
    questions()
}


function showQuestions() {

}

function selectAnswer() {

}

function nextQuest() {

}

// Restart the game button after the questions

function restartGameBtn() {

}

function startTimer() {

}

function showResult() {

}

function questionCounter() {

}

function resetResult() {

}

function getAnswers() {

}