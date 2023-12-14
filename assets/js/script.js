// Get elements by id
const heading = document.getElementById('heading')
const welcomeRules = document.getElementById('welcome-rules')
const startQuizBtn = document.getElementById('start-quiz-btn')
const questionContainerElement = document.getElementById('questions-div')
const quizArea = document.getElementById('quiz-area')
const answerBtnArea = document.getElementById('answer-btn-area')
const qLeftAnswerCorrect = document.getElementById('q-left-answer-correct')


startQuizBtn.addEventListener('click', startGame)

// Quiz structure

function startGame() {
    welcomeRules.classList.add('hide')
    quizArea.classList.remove('hide')
    questionContainerElement.classList.remove('hide')
}


function showQuestions() {

}

function selectAnswer() {

}