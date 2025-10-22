import React from 'react';
import rock from '../asset/rock.png';
import scissors from '../asset/scissors.png';
import paper from '../asset/paper.webp';
import { choice } from '../App';

export const SelectBox = ({ playGame }) => {
  return (
    <div className="selectBox">
      <button onClick={() => playGame('rock')}>
        <img src={choice.rock.img} alt={choice.rock.name} />
      </button>
      <button onClick={() => playGame('scissors')}>
        <img src={choice.scissors.img} alt={choice.scissors.name} />
      </button>
      <button onClick={() => playGame('paper')}>
        <img src={choice.paper.img} alt={choice.paper.name} />
      </button>
    </div>
  );
};
