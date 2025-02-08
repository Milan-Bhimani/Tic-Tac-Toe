import { useState } from 'react';

export default function useGameLogic() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false); // Add state for draw condition

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const checkDraw = (squares) => {
    return squares.every(square => square !== null);
  };

  const handleClick = (index) => {
    if (squares[index] || winner || isDraw) return; // Ignore click if square is filled, game is won, or drawn
    
    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    
    const currentWinner = calculateWinner(newSquares);
    if (currentWinner) {
      setWinner(currentWinner);
    } else if (checkDraw(newSquares)) {
      setIsDraw(true);
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setIsDraw(false); // Reset draw state
  };

  return {
    squares,
    xIsNext,
    winner,
    isDraw, // Include isDraw in the return object
    handleClick,
    resetGame,
  };
}