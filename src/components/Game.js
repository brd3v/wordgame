import React from 'react';
import './Game.css'
const Game = ({verifyLetter}) => {
  return (
    <div className='game'>
      <p className='points'>
        <span> Pontuação:000</span>
      </p>
      <h1>
        Adivinhe a palavra
      </h1>
      <h3 className='tip'>
        Dica sobre a palavra: <span>Dica...</span>
      </h3>
      <p>Você ainda tem XX tentativas</p>
      <div className='wordContainer'>
        <span className='letter'>A</span>
        <span className='blankSquare'>d</span>
      </div>
      <div className='letterContainer'>
        <p>Tente adivinar uma letra da palabra</p>
        <form>
          <input type ='text' name='letter' maxLength='1'required />
          <button>JOGAR</button>
        </form>
      </div>
      <div className='weongLettersContainer'>
        <p>Letras já utilizadas:</p>
        <span>a,</span>
        <span>b,</span>

      </div>
    </div>
  );
}

export default Game;
