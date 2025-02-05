import React from "react";

export default function NewGameButton({ resetGame }) {
  return (
    <button
      className="new-game-button"
      data-testid="newGameButton"
      onClick={resetGame}
    >
      New Game
    </button>
  );
}
