// Get elements by id
const welcomeRules = document.getElementById('welcome-rules')
const startQuizBtn = document.getElementById('start-quiz-btn')
const quizArea = document.getElementById('quiz-area')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-btn-area')

let shuffledQuestions, currentQuestionIndex

startQuizBtn.addEventListener('click', startGame)

// Quiz game structure

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

function showQuestion() {
    questionElement.innerText = questions.question
}

function selectAnswer() {}


/* Creating an Array containing all the questions and answers in the boolean format */

const questions = [{
    question: "Which player has scored the most goals in Champions League history?",
    answer: "Cristiano Ronaldo",
    options: [
        "Leo Messi",
        "Cristiano Ronaldo",
        "Robert Lewandowski",
        "Zlatan Ibrahimovic"

    ]
},
{
    question: "Which player has the most appearances in Champions League history?",
    answer: "Iker Casillas",
    options: [
        "Xavi",
        "Iker Casillas",
        "Raúl",
        "Cristiano Ronaldo"
    ]
},
{
    question: "Which of the following players has scored the most goals in the Champions League?",
    answer: "Zlatan Ibrahimovic",
    options: [
        "Didier Drogba",
        "Robert Lewandowski",
        "Zlatan Ibrahimovic",
        "Filippo Inzaghi"
    ]
},
{
    question: "Who has won the Champions League with the most different clubs (three)?",
    answer: "Clarence Seedorf",
    options: [
        "Samuel Eto'o",
        "Clarence Seedorf",
        "Cristiano Ronaldo",
        "Toni Kroos"
    ]
},
{
    question: "Which team has scored the most goals (25, season 2017/2018) in a Champions League group stage?",
    answer: "PSG",
    options: [
        "PSG",
        "Real Madrid",
        "Manchester City",
        "Monaco"
    ]
},
{
    question: "How many goals did Cristiano Ronaldo score in the 2013/2014 season when he broke a new record for goals in one season in the Champions League?",
    answer: "17",
    options: [
        "15",
        "16",
        "17",
        "18"
    ]
},
{
    question: "Who has the most assists in Champions League history?",
    answer: "Ryan Giggs",
    options: [
        "Leo Messi",
        "Ryan Giggs",
        "Xavi",
        "Mesut Özil"
    ]
},
{
    question: "How many hattricks have Cristiano Ronaldo and Leo Messi scored in the Champions Leauge?",
    answer: "8",
    options: [
        "4",
        "6",
        "8",
        "10"
    ]
},
{
    question: "Which player has represented the most clubs in the Champions League group stage?",
    answer: "Zlatan Ibrahimovic",
    options: [
        "Zlatan Ibrahimovic",
        "Javier Saviola",
        "Samuel Eto'o",
        "Hernán Crespo"
    ]
},
{
    question: "Who has scored the fastest goal in Champions League history?",
    answer: "Roy Makaay",
    options: [
        "Raúl",
        "Fernando Torres",
        "Hernán Crespo",
        "Roy Makaay"
    ]
} ];