import './StartScreen.css'

import React from 'react';

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
      <h1>Secreet World</h1>
      <p>Clique no botão abaixo para jogar</p>
      <button onClick={startGame}>START</button>
    </div>
  );
}

export default StartScreen;
