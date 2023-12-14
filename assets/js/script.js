// Get elements by id
const welcomeRules = document.getElementById('welcome-rules')
const startQuizBtn = document.getElementById('start-quiz-btn')
const quizArea = document.getElementById('quiz-area')


startQuizBtn.addEventListener('click', startGame)

// Quiz structure

function startGame() {
    welcomeRules.classList.add('hide')
    quizArea.classList.remove('hide')
}

function setNextQuestion() {
}

function showQuestion() {
}



function selectAnswer() {

}