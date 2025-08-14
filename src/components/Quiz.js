import React, { useState } from 'react';

// The hardcoded array of questions and answers.
const quizQuestions = [
  {
    question: "How ready are you for the big day?",
    answers: [
      { text: "I've memorized the grade boundaries. I'm ready!", score: 10, emoji: "💪" },
      { text: "I've been praying since June. That's my prep.", score: 30, emoji: "🙏" },
      { text: "Ready? I've already accepted my fate. What's there to be ready for?", score: 60, emoji: "🤷‍♂️" },
      { text: "I've been practicing my poker face for my parents. Wish me luck.", score: 90, emoji: "😐" },
    ],
    warning: null,
  },
  {
    question: "What will you do if your grades are… unexpected?",
    answers: [
      { text: "Call my teacher and ask for a recount. Immediately.", score: 80, emoji: "😤" },
      { text: "Blame the school's WiFi for distracting me during online lessons.", score: 70, emoji: "🤦‍♀️" },
      { text: "Act like they're exactly what I expected and walk away confidently.", score: 50, emoji: "😎" },
      { text: "Start looking for a new career path... maybe a professional gamer?", score: 10, emoji: "🎮" },
    ],
    warning: "Oh boy… this isn’t looking good...",
  },
  {
    question: "Do you think you'll see the sunrise on the 20th?",
    answers: [
      { text: "Of course! I'll be celebrating all night!", score: 10, emoji: "🥳" },
      { text: "I might, but only if I'm not hiding under my bed.", score: 40, emoji: "🛌" },
      { text: "The sunrise? I'm pretty sure I'll be a ghost by then.", score: 90, emoji: "👻" },
      { text: "My parents will make sure I'm up, whether I want to be or not.", score: 60, emoji: "⏰" },
    ],
    warning: "Are you sure you want to answer that?",
  },
  {
    question: "How will you survive your parents?",
    answers: [
      { text: "I'll use my newfound 'adult' attitude to discuss my future calmly.", score: 15, emoji: "🧠" },
      { text: "I have a detailed escape plan involving a bicycle and a small backpack.", score: 80, emoji: "🏃‍♀️" },
      { text: "I'll try to distract them with my younger sibling's report card.", score: 70, emoji: "😈" },
      { text: "I will simply cease to exist for a few days. They'll forget.", score: 90, emoji: "💨" },
    ],
    warning: null,
  },
];


const Quiz = ({ onEndQuiz, userName }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerClick = (selectedScore) => {
    setScore(prevScore => {
      const newScore = prevScore + selectedScore;
      
      if (currentQuestionIndex === quizQuestions.length - 1) {
        onEndQuiz(newScore);
      }
      
      return newScore;
    });

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-container">
      <div className="question-text">
        <p>{userName}!</p>
        <p>{currentQuestion.question}</p>
      </div>
      
      <div className="answer-options">
        {currentQuestion.answers.map((answer, index) => (
          <button
            key={index}
            className="answer-button"
            onClick={() => handleAnswerClick(answer.score)}
          >
            <span className="emoji">{answer.emoji}</span> {answer.text}
          </button>
        ))}
      </div>
      {currentQuestion.warning && (
        <div className="warning-message">{currentQuestion.warning}</div>
      )}
    </div>
  );
};

export default Quiz;