const quiz = [
  {
    question: "Which country has the highest life expectancy?",
    answers: ["Hong Kong", "Macedonia", "Serbia"],
    correct: 0,
  },
  {
    question: "What is the most common surname in the United States?",
    answers: ["Sam", "Smith", "John"],
    correct: 1,
  },
  {
    question: "Who was the Ancient Greek God of the Sun?",
    answers: ["Zeus", "Moses", "Apollo"],
    correct: 2,
  },
  {
    question: "How many minutes are in a full week?",
    answers: ["10080", "36000", "3600"],
    correct: 0,
  },
  {
    question: "Aureolin is a shade of what color?",
    answers: ["Green", "Yellow", "White"],
    correct: 1,
  },
  {
    question: "What is the 4th letter of the Greek alphabet?",
    answers: ["Delta", "Alfa", "Gama"],
    correct: 0,
  },
  // ... rest of questions
];

const questionElement = document.querySelector("#question");
const choicesElement = document.querySelector("#choices");
const nextButton = document.querySelector("#nextButton");

let currentQuestionIndex = 0;

function showQuestion() {
  const currentQuestion = quiz[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  choicesElement.innerHTML = "";
  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn", "btn-outline-primary", "m-3");
    button.addEventListener("click", () => checkAnswer(index));
    choicesElement.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const correctIndex = quiz[currentQuestionIndex].correct;
  if (selectedIndex === correctIndex) {
    alert("✅ Correct!");
  } else {
    alert("❌ Wrong!");
  }
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quiz.length) {
    showQuestion();
  } else {
    alert("Quiz finished!");
  }
});

showQuestion();
