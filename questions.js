const questions = [
  {
    title: "Question 1",
    question: "What is the correct way to declare a variable in JavaScript?",
    answers: [
      { text: "let variableName", correct: false },
      { text: "var variableName;", correct: false },
      { text: "const variableName", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    title: "Question 2",
    question: "How do you comment a single-line in JavaScript?",
    answers: [
      { text: "// This is a comment", correct: true },
      { text: " /* This is a comment */", correct: false },
      { text: "<!-- This is a comment -->", correct: false },
      { text: "# This is a comment", correct: false },
    ],
  },
  {
    title: "Question 3",
    question: "What is the purpose of the `typeof` operator in JavaScript?",
    answers: [
      { text: "To check if a variable is defined", correct: false },
      { text: "To determine the data type of a variable ", correct: true },
      { text: "To concatenate two strings", correct: false },
      { text: "To create a new variable", correct: false },
    ],
  },
  {
    title: "Question 4",
    question: "How do you write an if statement in JavaScript?",
    answers: [
      { text: "if x = 5 then", correct: false },
      { text: "if (x == 5)", correct: true },
      { text: "if x == 5", correct: false },
      { text: " if {x == 5}", correct: false },
    ],
  },
  {
    title: "Question 5",
    question: "What is the correct syntax to create a function in JavaScript?",
    answers: [
      { text: "function = myFunction() {}", correct: false },
      { text: " function myFunction() {}", correct: true },
      { text: "create function myFunction() {}", correct: false },
      { text: "def myFunction() {}", correct: false },
    ],
  },
  {
    title: "Question 6",
    question: "How do you concatenate two strings in JavaScript?",
    answers: [
      { text: ' concat("Hello", "World")', correct: false },
      { text: ' "Hello" + "World"', correct: true },
      { text: ' join("Hello", "World")', correct: false },
      { text: 'merge("Hello", "World ")  ', correct: false },
    ],
  },
  {
    title: "Question 7",
    question: "What does the for loop do in JavaScript?",
    answers: [
      {
        text: "Executes a block of code repeatedly while a condition is true",
        correct: true,
      },
      { text: "Iterates over the properties of an object", correct: false },
      { text: "Creates a function that can be called later", correct: false },
      { text: " Declares a variable", correct: false },
    ],
  },
  {
    title: "Question 8",
    question: "What is the purpose of the `return` statement in a function?",
    answers: [
      { text: "To exit the function and return a value", correct: true },
      { text: "To print a message to the console ", correct: false },
      { text: "To declare a variable", correct: false },
      { text: " To define a loop", correct: false },
    ],
  },
  {
    title: "Question 9",
    question:
      'How do you select an HTML element with the id "myElement" in JavaScript?',
    answers: [
      { text: 'getElement("myElement")', correct: false },
      { text: 'selectElement("myElement") ', correct: false },
      { text: 'document.getElementById("myElement")', correct: true },
      { text: 'chooseElement("myElement")', correct: false },
    ],
  },
  {
    title: "Question 10",
    question:
      "What is the purpose of the `addEventListener` method in JavaScript?",
    answers: [
      { text: "To create a new HTML element", correct: false },
      { text: " To update the CSS styles of an element", correct: false },
      { text: "To attach an event handler to an element", correct: true },
      { text: "To remove an element from the DOM", correct: false },
    ],
  },
];
let title = document.getElementById("title");
let question = document.getElementById("question");
let answerBtn = document.getElementById("answerButton");
let nxtButton = document.getElementById("nxtBtn");

nxtButton.addEventListener("click", nextQuestion);
let questionIndex = 0;
let score = 0;
function nextQuestion() {
  if (questionIndex < questions.length) {
    showQuestion();
    questionIndex++;
  } else displayScore();
}

const showQuestion = () => {
  answerBtn.innerHTML = "";

  let currentQuestion = questions[questionIndex];
  title.innerHTML = currentQuestion.title;
  question.innerHTML = currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", chooseAns);
  });
};
function chooseAns(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
}

function displayScore() {
  document.getElementById("results").style.visibility = "visible";
  const finalScore = document.getElementById("final");
  finalScore.innerHTML = `Your Score is: ${score}`;
}
function displayQtn() {
  window.open("questions.html", "_self");
}
let reset = document.getElementById("restart");
reset.addEventListener("click", displayQtn);
nextQuestion();
