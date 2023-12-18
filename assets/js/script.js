// Get elements by id

const welcomeRules = document.getElementById('welcome-rules')
const startQuizBtn = document.getElementById('start-quiz-btn')
const quizArea = document.getElementById('quiz-area')
const answerButtonsElement = document.getElementById('answer-btn-area')
const questionElement = document.getElementById('question')
const nextQuizBtn = document.getElementById('next-question-btn')
const timeCount = document.querySelector('.timer_sec')
const result_box = document.querySelector('.result-box')
const restart_quiz = document.querySelector('.restart-quiz-btn')
const quit_quiz = document.querySelector('.quit-quiz-btn')

// Onclick

/**
 * when you click on the quit button it reload the page.
 */

quit_quiz.onclick = () => {
    window.location.reload();
}

// variables to be defined

let questionNumber = 0;
let que_numb = 1;
let timeCounter;
let timeValue = 15;
let userScore = 0;

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
    startTimer(15)
}

/**
 * showQuestion function show the questions, the 4 answer and the next button for the quiz.   
 */

function showQuestion(index) {
    let que_tag = '<span>' + questions[index].numb + '. ' + questions[index].question + '</span>'
    let option_tag = '<button class="answer-button">' + questions[index].options[0] + '<span></span></button>' +
        '<button class="answer-button">' + questions[index].options[1] + '<span></span></button>' +
        '<button class="answer-button">' + questions[index].options[2] + '<span></span></button>' +
        '<button class="answer-button">' + questions[index].options[3] + '<span></span></button>'
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
    clearInterval(timeCounter);
    let userAns = answer.innerText;
    let correctAns = questions[questionNumber].answer;
    let alloptions = answerButtonsElement.children.length;
    if (userAns == correctAns) {
        userScore += 1;
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
                answerButtonsElement.children[i].classList.add("correct-btn");
            }
        }
    }

    /**
     *  Once the player/user selected a option, disabled all the other questions.
     */

    for (let i = 0; i < alloptions; i++) {
        answerButtonsElement.children[i].classList.add("disabled")
    }

    nextQuizBtn.style.display = "block";
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
        clearInterval(timeCounter);
        startTimer(timeValue);
        nextQuizBtn.style.display = "none";
    } else {
        console.log("Questions completed")
        showResultbox();
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

/**
 * Show the result after all the quiz questions, shows also two buttons,
 * restart quiz and quit quiz.
 */

function showResultbox() {
    welcomeRules.style.display = 'none';
    quizArea.classList.add('hide')
    result_box.style.display = "block"
    const scoreText = document.querySelector('.score_text')
    if (userScore > 6) {
        let scoreTag = '<p class="score_text">Good job you had a great score! <p>' + userScore + '</p> of <p>' + questions.length + '</p></p>';
        scoreText.innerHTML = scoreTag;
    } else if (userScore > 1) {
        let scoreTag = '<p class="score_text">Your score was not so good! <p>' + userScore + '</p> of <p>' + questions.length + '</p></p>';
        scoreText.innerHTML = scoreTag;
    } else {
        let scoreTag = '<p class="score_text">Your score was not so good!<p>' + userScore + '</p> of <p>' + questions.length + '</p></p>';
        scoreText.innerHTML = scoreTag;
    }
}

/**
 * Clock on the quiz
 */

function startTimer(time) {
    timeCounter = setInterval(timer, 1000);

    function timer() {
        timeCount.innerText = time;
        time--;

        /**
         * Add zero when the time become 9 or lower.
         * Clear time and stop on 00 when the time is finnish 
         */

        if (time < 9) {
            let addzero = timeCount.innerText;
            timeCount.innerText = "0" + addzero;
        }
        if (time < 0) {
            clearInterval(timeCounter)
            timeCount.innerText = "00"
            nextQuizBtn.style.display = "block";

            /**
             * When the time is finnish you see the right answer and you can click on next question.
             * Also so you cant make a choose after the time is finnish.
             */

            let correctAns = questions[questionNumber].answer;
            let alloptions = answerButtonsElement.children.length;

            for (let i = 0; i < alloptions; i++) {
                if (answerButtonsElement.children[i].innerText == correctAns) {
                    answerButtonsElement.children[i].classList.add("correct-btn");
                }
            }
            for (let i = 0; i < alloptions; i++) {
                answerButtonsElement.children[i].classList.add("disabled")
            }
        
            nextQuizBtn.style.display = "block";
        }
    }
}