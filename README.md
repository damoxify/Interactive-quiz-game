# Interactive Game Quiz README

This README file provides an overview of the files and instructions for setting up an interactive game quiz using HTML, CSS, and JavaScript.

## Table of Contents

- [Introduction](#introduction)
- [Files Included](#files-included)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setting Up](#setting-up)
- [How the Quiz Works](#how-the-quiz-works)
- [Customization](#customization)
- [License](#license)

## Introduction

The interactive game quiz is a web-based application that allows users to answer multiple-choice questions in a quiz format. The quiz is presented in a user-friendly interface created using HTML for structure, CSS for styling, and JavaScript for interactivity.

## Files Included

The following files are included in this project:

- `index.html`: The main HTML file that structures the quiz interface.
- `style.css`: The CSS file that styles the quiz interface.
- `index.js`: The JavaScript file that adds interactivity to the quiz.
- `data.js`: A separate JavaScript file that contains an array of quiz questions and their respective answer choices.

## Getting Started

### Prerequisites

To run the interactive game quiz, you need a web browser with JavaScript enabled.

### Setting Up

1. **Clone the Repository**: Clone this repository to your local machine or download the ZIP file and extract its contents.

2. **Navigate to the Project Directory**: Open the project folder in a code editor or any text editor of your choice.

3. **Run the Application**: Open the `index.html` file in a web browser to start the quiz. You should see the quiz interface with the first question displayed.

## How the Quiz Works

1. When the quiz is loaded, the first question is displayed along with its answer choices.

2. Users can select an answer choice by clicking on the buttons below the question.

3. After selecting an answer, users can click the "Next Question" button to move on to the next question.

4. Once all questions have been answered, the quiz will display the user's score and a message based on their performance.

## Customization

You can customize the quiz by modifying the `questions.js` file. This file contains an array of question objects, each with the following structure:

```javascript
{
  question: "Question text here?",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  answer: 0 // Index of the correct answer in the 'options' array
}
```

You can add, edit, or remove questions by modifying this array.

You can also customize the styling by modifying the `style.css` file to match your desired look and feel.

## License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy creating and using your interactive game quiz! If you have any questions or run into issues, feel free to contact me at [your-email@example.com](mailto:adedamola.ajasa@student.moringaschool.com).