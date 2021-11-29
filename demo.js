const quizDB = [
    {
        question: "Q1: What is the full form of HTML1?",
        a: "Hello To My Land",
        b: "Hey Text Makeup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4",
    },
    {
        question: "Q2: What is the full form of HTML2?",
        a: "Hello To My Land2",
        b: "Hey Text Makeup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans3",
    },
    {
        question: "Q3: What is the full form of HTML3?",
        a: "Hello To My Land3",
        b: "Hey Text Makeup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans2",
    },
    {
        question: "Q4: What is the full form of HTML4?",
        a: "Hello To My Land4",
        b: "Hey Text Makeup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans2",
    },

];

const question = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submit = document.querySelector('#submit')
const answers = document.querySelectorAll('.answer')    
const showScore = document.querySelector('#showScore')

let questionCount = 0   
let score  = 0

const loadQuestion = () => {
    const questionList = quizDB[questionCount]
    question.innerText = questionList.question
    option1.innerText = questionList.a
    option2.innerText = questionList.b
    option3.innerText = questionList.c
    option4.innerText = questionList.d
}
loadQuestion()


const getCheckAnswer = () => {
    let answer;

    answers.forEach(function(currentAnswer) {
        if(currentAnswer.checked) {
            answer = currentAnswer.id
        }
    })
    return answer;
    
}

deselectAll = function() {
    answers.forEach(function(currentAnswer) {
        currentAnswer.checked = false
    })
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer)
    
    if(checkedAnswer === quizDB[questionCount].ans) {
        score ++
    };
    questionCount++
    deselectAll()
    
    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = `
        <h3>Your scored ${score}/${quizDB.length} !</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove("scoreArea");
    }

});

