import React from 'react';
import './Board.css';

function Board({ squares, onClick }) {
    return (
        <div className="board">
            {squares.map((value, index) => (
                <button
                    key={index}
                    className={`square ${value ? value.toLowerCase() : ''}`}
                    onClick={() => onClick(index)}
                >
                    {value}
                </button>
            ))}
        </div>
    );
}

export default Board;