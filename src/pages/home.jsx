import React from 'react';
import { Link } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import './Home.css';  // Add this line

function Home() {
  const { resetGame } = useGame();

  return (
    <div className="home">
      <h1>Welcome to Tic Tac Toe</h1>
      <Link to="/game">Go to Game</Link>
    </div>
  );
}

export default Home;