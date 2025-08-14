import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import "./styles.css";

function App() {
  const [currentScreen, setCurrentScreen] = useState("landing");
  const [fearScore, setFearScore] = useState(0);
  const [userName, setUserName] = useState('');

  const handleStartQuiz = (name) => {
    setUserName(name);
    setCurrentScreen("quiz");
  };

  const handleEndQuiz = (score) => {
    setFearScore(score);
    setCurrentScreen("results");
  };

  // New function to restart the quiz
  const handleRestartQuiz = () => {
    setCurrentScreen("landing");
    setFearScore(0);
    setUserName('');
  };

  return (
    <div className="app-container">
      {currentScreen === "landing" && (
        <LandingPage onStartQuiz={handleStartQuiz} />
      )}
      {currentScreen === "quiz" && <Quiz onEndQuiz={handleEndQuiz} userName={userName} />}
      {currentScreen === "results" && <Results fearScore={fearScore} userName={userName} onRestartQuiz={handleRestartQuiz} />}
    </div>
  );
}

export default App;