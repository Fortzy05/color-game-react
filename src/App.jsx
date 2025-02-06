import React, { useState, useEffect } from "react";
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
  const [isColorVisible, setIsColorVisible] = useState(true);


  function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

    function resetGame() {
      setTargetColor(randomColor());
      setStatus("");
      setBackground("#ffffff");
      setIsColorVisible(true);
    }

  function handleGuess(color) {
    if (color === targetColor) {
      setScore(score + 1);
      setStatus("Correct! 🎉 🎉 🎉");
      setBackground(color);
      setIsColorVisible(false)
      setTimeout(() => {
        setBackground("#ffffff");
        setIsColorVisible(true)
        resetGame();
      }, 2000);
    } else {
      setStatus("Wrong! Try again.❌");
    }
  }

  useEffect(()=>{
    const timer = setTimeout(() => {
      setIsColorVisible(false);
    }, 1000)
    return ()=> clearTimeout(timer);
  }, [targetColor])

  return (
    <main className="container" style={{ backgroundColor: background }}>
      <h1>Color Guessing Game</h1>
      <Instruction />
      {isColorVisible && <ColorBox color={targetColor} />}
      <ColorOptions colors={colors} handleGuess={handleGuess} />
      <GameStatus status={status} />
      <Score score={score} />
      <NewGameButton resetGame={resetGame} />
    </main>
  );
}

export default App;
