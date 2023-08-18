const question = document.querySelector('#question');
const options = document.querySelector('#options');
const nextButton = document.querySelector('#next-button');
const feedbackElement = document.querySelector('#feedback');
const reasonsElement = document.querySelector('#reason');



let currentQuestionIndex = 0;

function showQuestion(questionData) {
    question.textContent = questionData.question;
    // reasonsElement.textContent = questionData.reason

    options.innerHTML = '';
    questionData.options.forEach((option, index) => {
        const optionButton = document.createElement('button');  // answer button
        optionButton.textContent = option;
        optionButton.classList.add('option-button');
        optionButton.addEventListener('click', function(){
             checkAnswer(option, questionData.answer)
             showReason(questionData);

            });
        options.appendChild(optionButton);
    });
}

function showReason(answerReason){
    
       return quizData.reason;
    // nextButton.style.display = 'block';
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        feedbackElement.textContent = 'Correct!';
    } else {
        feedbackElement.textContent = 'Incorrect. Try again.';
    }
    nextButton.style.display = 'block';
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(quizData[currentQuestionIndex]);
        feedbackElement.textContent = '';
        nextButton.style.display = 'none';  
    } else {
        question.textContent = 'Quiz completed!';
        options.innerHTML = '';
        feedbackElement.textContent = '';
        nextButton.style.display = 'none';
    }
}

nextButton.addEventListener('click', showNextQuestion);

// Shuffle the quiz questions for added variety
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(quizData);
showQuestion(quizData[currentQuestionIndex]);
