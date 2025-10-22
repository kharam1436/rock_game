import React from 'react';
import './GameBox.css';

export const GameBox = ({ title, item, result }) => {
  return (
    <div className="rockBox">
      <h1>{title}</h1>
      <div className="item">{item ? <img src={item.img} alt={item.name} /> : <div>?</div>}</div>
      <h2>{result || ''}</h2>
    </div>
  );
};
