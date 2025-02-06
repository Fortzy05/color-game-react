import React, { useState } from "react";
import ColorBox from "./components/ColorBox";
import "./App.css";
import Instruction from "./components/Instruction";
import ColorOptions from "./components/ColorOptions";
import GameStatus from "./components/GameStatus";
import Score from "./components/Score";
import NewGameButton from "./components/NewGameButton";

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
function App() {
  const [targetColor, setTargetColor] = useState(randomColor());
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("");
  const [background, setBackground] = useState("#ffffff");
  function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function handleGuess(color) {
    if (color === targetColor) {
      setScore(score + 1);
      setStatus("Correct! 🎉 🎉 🎉");
      setBackground(color);
      setTimeout(() => {
        setBackground("#ffffff");
      }, 2000);
    } else {
      setStatus("Wrong! Try again.❌");
    }
  }
  function resetGame() {
    setTargetColor(randomColor());
    setStatus("");
    setBackground("#ffffff");
  }
  
  return (
    <main className="container" style={{backgroundColor: background}}>
      <h1>Color Guessing Game</h1>
      <Instruction />
      <ColorBox color={targetColor} />
      <ColorOptions colors={colors} handleGuess={handleGuess} />
      <GameStatus status={status} />
      <Score score={score} />
      <NewGameButton resetGame={resetGame} />
    </main>
  );
}

export default App;
