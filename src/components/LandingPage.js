import React, { useState } from 'react';

const LandingPage = ({ onStartQuiz }) => {
  // New state to manage the name input
  const [name, setName] = useState('');

  // Handle button click, only if name is not empty
  const handleButtonClick = () => {
    if (name.trim()) { // Check if the name is not just whitespace
      onStartQuiz(name.trim()); // Pass the name to the parent component
    }
  };

  return (
    <div className="landing-page">
      <h1>From Abubakar: Hey there!👋  Ready for 19th August?</h1>
      <p>Before your fate awaits... 😈 let's see how scared you really are.</p>
      
      <input
        type="text"
        className="name-input"
        placeholder="Enter your name to begin..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      <button
        className="main-button"
        onClick={handleButtonClick}
        disabled={!name.trim()} // The button is disabled if the name is empty
      >
        Start Quiz
      </button>
    </div>
  );
};

export default LandingPage;