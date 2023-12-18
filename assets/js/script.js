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
    const optionsButtons = answerButtonsElement.querySelectorAll(".answer-button");
    for (let i = 0; i < optionsButtons.length; i++) {
        optionsButtons[i].setAttribute("onclick", "optionSelected(this)");
    }
}

/**
 * This function does so you can see if your answer is correct by showing green or red button,
 * when you click on it.
 */

function optionSelected(answer) {
    let userAns = answer.innerText;
    let correctAns = questions[questionNumber].answer;
    let alloptions = answerButtonsElement.children.length;
    if (userAns == correctAns) {
        answer.classList.add("correct-btn");
        console.log("correct answer");
    } else {
        answer.classList.add("wrong-btn");
        console.log("wrong answer");

        /**
         * If answer is incorrect then show the correct answer automatically.
         */

        for (let i = 0; i < alloptions; i++) {
            if (answerButtonsElement.children[i].innerText == correctAns) {
                answerButtonsElement.children[i].setAttribute("class", "option correct");
            }
        }
    }

    /**
     *  Once the player/user selected a option, disabled all the othe questions.
     */

    for (let i = 0; i < alloptions; i++) {
        answerButtonsElement.children[i].classList.add("disabled")
    }

}

/*
 * nextQuizBtn function does so you can click next question
 */

function nextQueBtn() {
    if (questionNumber < questions.length - 1) {
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