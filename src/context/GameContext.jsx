// context/GameContext.js
import React, { createContext, useContext } from 'react';
import useGameLogic from '../hooks/userGameLogic';  // Correctly import the hook

const GameContext = createContext();  // Create the context

export function useGame() {
  return useContext(GameContext);  // Custom hook to access context
}

export function GameProvider({ children }) {
  const gameLogic = useGameLogic();  // Use the hook to get game logic

  return (
    <GameContext.Provider value={gameLogic}>  {/* Provide the context value */}
      {children}
    </GameContext.Provider>
  );
}
