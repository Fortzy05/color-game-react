import React from "react";

export default function GameStatus({ status }) {
  return (
    <p className="game-status" data-testid="gameStaus">
      {status}
    </p>
  );
}
