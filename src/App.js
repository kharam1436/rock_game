import './App.css';
import { useState } from 'react';
import { GameBox } from './component/GameBox';
import { SelectBox } from './component/SelectBox';
import rock from './asset/rock.png';
import scissors from './asset/scissors.png';
import paper from './asset/paper.webp';

const choice = {
  rock: {
    name: 'Rock',
    img: rock,
  },
  scissors: {
    name: 'Scissors',
    img: scissors,
  },
  paper: {
    name: 'Paper',
    img: paper,
  },
};

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const playGame = (userChoice) => {
    setUserChoice(choice[userChoice]);
    const computerChoice = randomChoice();
    setComputerChoice(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };

  // Simple Win and Lose Logic
  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'Tie';
    } else if (user.name === 'Rock') {
      return computer.name === 'Scissors' ? 'Win' : 'Lose';
    } else if (user.name === 'Scissors') {
      return computer.name === 'Paper' ? 'Win' : 'Lose';
    } else if (user.name === 'Paper') {
      return computer.name === 'Rock' ? 'Win' : 'Lose';
    }
  };

  // based on user result, get computer result
  const getComputerResult = (userResult) => {
    if (userResult === 'Win') return 'Lose';
    if (userResult === 'Lose') return 'Win';
    return userResult;
  };

  return (
    <div className="App">
      <div className="PaperGame">
        <GameBox title="You" item={userChoice} result={result} />
        <GameBox title="Computer" item={computerChoice} result={getComputerResult(result)} />
      </div>
      <SelectBox playGame={playGame} />
    </div>
  );
}

export default App;
