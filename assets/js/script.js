// Get elements by id
const welcomeRules = document.getElementById('welcome-rules')
const startQuizBtn = document.getElementById('start-quiz-btn')
const quizArea = document.getElementById('quiz-area')

// variables to be defined

let currentQuestionIndex = 0;

// Quiz game structure
/**
  StartGame function hide the welcome rules page when you click the start quiz button.
 */

function startGame() {
    welcomeRules.style.display = 'none';
    quizArea.classList.remove('hide')
    showQuestion(0)
}

function setNextQuestion() {}

function showQuestion(index) {
    const answerButtonsElement = document.getElementById('answer-btn-area')
    const questionElement = document.getElementById('question')
    let que_tag = '<span>' + questions[index].question + '</span>'
    let option_tag = '<div class="answer-button">'+ questions[index].options[0] +'<span></span></div>' +
        '<div class="answer-button">'+ questions[index].options[1] +'<span></span></div>' +
        '<div class="answer-button">'+ questions[index].options[2] +'<span></span></div>' +
        '<div class="answer-button">'+ questions[index].options[3] +'<span></span></div>'
    questionElement.innerHTML = que_tag
    answerButtonsElement.innerHTML = option_tag
}

function selectAnswer() {}