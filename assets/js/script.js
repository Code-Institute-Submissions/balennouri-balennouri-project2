// Get elements by id
const welcomeRules = document.getElementById('welcome-rules')
const startQuizBtn = document.getElementById('start-quiz-btn')
const quizArea = document.getElementById('quiz-area')
const answerButtonsElement = document.getElementById('answer-btn-area')
const questionElement = document.getElementById('question')
const nextQuizBtn = document.getElementById('next-question-btn')


// variables to be defined

let questionNumber = 0;
let que_numb = 1;

// Quiz game structure

/**
 * StartGame function hide the welcome rules page when you click the start quiz button.
 */
function startGame() {
    welcomeRules.style.display = 'none';
    questionNumber = 0
    quizArea.classList.remove('hide')
    showQuestion(0)
    queCounter(1)
}


/**
 * showQuestion function show the questions, the 4 answer and the next button for the quiz.   
 */

function showQuestion(index) {
    let que_tag = '<span>' + questions[index].numb + '. ' + questions[index].question + '</span>'
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
    if (questionNumber < questions.length) {
        questionNumber++
        que_numb++
        showQuestion(questionNumber)
        queCounter(que_numb)

    } else {
        console.log("Questions completed")
    }
}

/*
 * Function queCounter keep the scoreboard upadating
 */

function queCounter(index) {
    const bottomQuestionNr = document.getElementById('q-left-answer-correct')
    let totalQuestionsTag = '<span><p>' + index + '</p> <p class="gold">/</p> <p class="gold">' + questions.length + '</p></span>'
    bottomQuestionNr.innerHTML = totalQuestionsTag;
}