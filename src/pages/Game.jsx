import React from 'react';
import { useGame } from '../context/GameContext';
import Board from '../components/Board';
import './Game.css';


function Game() {
  const { squares, handleClick, winner, isDraw, xIsNext, resetGame } = useGame();

  const backToHome = () => {
    window.location.href = '/';
  };


  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <Board squares={squares} onClick={handleClick} />
      {winner ? (
        <h2 className="winner">Winner: {winner}</h2>
      ) : isDraw ? (
        <h2 className="draw">Game Draw!</h2>
      ) : (
        <h2>Next Player: {xIsNext ? 'X' : 'O'}</h2>
      )}
      <div className="buttons">
      <button onClick={resetGame}>Start New Game</button>
      <button onClick={backToHome}>Home</button>
      </div>
    </div>
  );
}

export default Game;