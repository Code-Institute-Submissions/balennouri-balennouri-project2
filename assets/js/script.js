// Get elements by id
const welcomeRules = document.getElementById('welcome-rules')
const startQuizBtn = document.getElementById('start-quiz-btn')
const quizArea = document.getElementById('quiz-area')
const answerButtonsElement = document.getElementById('answer-btn-area')
const questionElement = document.getElementById('question')
const nextQuizBtn = document.getElementById('next-question-btn')
const scoreCounter = document.querySelector('q-left-answer-correct')

// variables to be defined

let shuffledQuestions;
let currentQuestionIndex = 0;

// Quiz game structure

/**
 * StartGame function hide the welcome rules page when you click the start quiz button.
 */
function startGame() {
    welcomeRules.style.display = 'none';
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizArea.classList.remove('hide')
    showQuestion(1)
}


/**
 * showQuestion function show the questions, the 4 answer and the next button for the quiz   
 */

function showQuestion(index) {
    let que_tag = '<span>' + questions[index].question + '</span>'
    let option_tag = '<div class="answer-button">' + questions[index].options[0] + '<span></span></div>' +
        '<div class="answer-button">' + questions[index].options[1] + '<span></span></div>' +
        '<div class="answer-button">' + questions[index].options[2] + '<span></span></div>' +
        '<div class="answer-button">' + questions[index].options[3] + '<span></span></div>'
    questionElement.innerHTML = que_tag
    answerButtonsElement.innerHTML = option_tag
}

/*
 * nextQuizBtn function does so you can click next question
 */

function nextQueBtn() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++
        showQuestion(currentQuestionIndex)
    } else {
        console.log("Questions completed")
    }
}

/*
 * Function ScoreBoard keep the scoreboard upadating
 */
function scoreBoard() {}