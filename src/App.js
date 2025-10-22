import './App.css';
import { useState } from 'react';
import { GameBox } from './component/GameBox';
import { SelectBox } from './component/SelectBox';
import rock from './asset/rock.png';
import scissors from './asset/scissors.png';
import paper from './asset/paper.webp';
import { ScoreBoard } from './component/ScoreBoard';
import { COMPUTER, LOSE, PAPER, ROCK, SCISSORS, TIE, WIN, YOU } from './util/constant';

export const choice = {
  rock: {
    name: ROCK,
    img: rock,
  },
  scissors: {
    name: SCISSORS,
    img: scissors,
  },
  paper: {
    name: PAPER,
    img: paper,
  },
};

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userResult, setUserResult] = useState('');
  const [round, setRound] = useState(0);
  const [userScore, setUserScore] = useState(0);

  const playGame = (userChoice) => {
    setUserChoice(choice[userChoice]);
    const computerChoice = randomChoice();
    setComputerChoice(computerChoice);

    // based on user choice and computer choice, find the winner
    const userLocalResult = judgement(choice[userChoice], computerChoice);
    setScore(userLocalResult);
    setUserResult(userLocalResult);
  };

  const setScore = (userResult) => {
    setRound(round + 1);
    userResult === WIN && setUserScore(userScore + 1);
  };

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };

  // Simple Win and Lose Logic for User
  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return TIE;
    } else if (user.name === ROCK) {
      return computer.name === SCISSORS ? WIN : LOSE;
    } else if (user.name === SCISSORS) {
      return computer.name === PAPER ? WIN : LOSE;
    } else if (user.name === PAPER) {
      return computer.name === ROCK ? WIN : LOSE;
    }
  };

  // based on user result, get computer result
  const getComputerResult = (userResult) => {
    if (userResult === WIN) return LOSE;
    if (userResult === LOSE) return WIN;
    return userResult;
  };

  return (
    <div className="App">
      <div className="PaperGame">
        <GameBox title={YOU} item={userChoice} result={userResult} />
        <GameBox title={COMPUTER} item={computerChoice} result={getComputerResult(userResult)} />
      </div>
      <div>
        <SelectBox playGame={playGame} />
        <ScoreBoard round={round} userScore={userScore} />
      </div>
    </div>
  );
}

export default App;
