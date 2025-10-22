import React from 'react';

export const ScoreBoard = ({ round, userScore }) => {
  const computerScore = round - userScore;
  const winRate = ((userScore / round) * 100).toFixed(2) || 0;

  return (
    <div>
      <div>
        You: {userScore} | Computer: {computerScore}
      </div>
      <div>
        Total Round: {round} | Win Rate: {winRate}%
      </div>
    </div>
  );
};
export default ScoreBoard;
