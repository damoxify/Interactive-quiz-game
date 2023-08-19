const question = document.querySelector('#question');
const optionsElement = document.querySelector('#options');
const nextButton = document.querySelector('#next-button');
const feedbackElement = document.querySelector('#feedback');
const reasonElement = document.querySelector('#reason');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    question.textContent = currentQuizData.question;
    optionsElement.innerHTML = '';  

    currentQuizData.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => checkAnswer(index));
        optionsElement.appendChild(optionButton);
    });

    nextButton.style.display = 'none';
    feedbackElement.textContent = '';
    reasonElement.textContent = '';
}

function checkAnswer(selectedIndex) {
    const currentQuizData = quizData[currentQuestion];

    if (currentQuizData.options[selectedIndex] === currentQuizData.answer) {
        score++;
        feedbackElement.textContent = 'Correct!';
        reasonElement.textContent = currentQuizData.reason;
    } else {
        feedbackElement.textContent = 'Wrong! Try again.';
        reasonElement.textContent = '';
    }

    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        question.textContent = 'Quiz completed!';
        optionsElement.innerHTML = '';
        feedbackElement.textContent = `Your score: ${score} out of ${quizData.length}`;
        reasonElement.textContent = '';
        nextButton.style.display = 'none';
    }
}

loadQuestion();

nextButton.addEventListener('click', nextQuestion);
