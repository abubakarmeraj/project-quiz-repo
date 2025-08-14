import React from 'react';

// The Results component now accepts a 'userName' prop and the new 'onRestartQuiz' prop
const Results = ({ fearScore, userName, onRestartQuiz }) => {
  const getResults = (score) => {
    const totalPossibleScore = 90 * 4;
    const fearPercentage = Math.round((score / totalPossibleScore) * 100);
    const survivalChance = 100 - fearPercentage;

    let category, message, emoji;

    if (fearPercentage > 80) {
      category = "Completely Doomed";
      message = "Abubakar believes... you're probably already packing your bags for a trip to a deserted island. We’ll miss you.";
      emoji = "💀";
    } else if (fearPercentage > 60) {
      category = "Slightly Nervous";
      message = "Abubakar believes... you're feeling the pressure. Try to breathe! Your survival is not guaranteed, but it's not impossible.";
      emoji = "😬";
    } else if (fearPercentage > 40) {
      category = "Results-Don’t-Matter Guru";
      message = "Abubakar believes... you're handling this like a pro. Keep that chill attitude, it might just save you. Maybe.";
      emoji = "🧘‍♂️";
    } else if (fearPercentage > 20) {
      category = "Fear itself Fears me, not I";
      message = "Abubakar believes... you're surprisingly calm. The rest of your classmates are jealous of your nerves of steel.";
      emoji = "🛡️";
    } else {
      category = "Absolutely Fearless - What Fear?";
      message = "Abubakar believes... you're either a genius or you've completely forgotten what day it is. Either way, you're a legend.";
      emoji = "🤩";
    }

    return { category, message, emoji, fearPercentage, survivalChance };
  };

  const { category, message, emoji, fearPercentage, survivalChance } = getResults(fearScore);

  return (
    <div className="results-page">
      <h2>{userName}'s 19th August Fear Report</h2>
      <div className="results-category">
        {emoji} {category} {emoji}
      </div>
      <div className="fear-score-display">Fear Level: {fearPercentage}%</div>
      <div className="survival-chance-display">Survival Chance: {survivalChance}%</div>
      <p className="results-message">{message}</p>
      <p className="results-share-message">
        Don’t forget to screenshot this and send it to your friends!
      </p>
      
      {/* New button to restart the quiz */}
      <button className="main-button" onClick={onRestartQuiz}>
        Submit Quiz Again
      </button>
    </div>
  );
};

export default Results;