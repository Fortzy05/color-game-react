import React from "react";

export default function ColorOptions({ colors, handleGuess }) {
  return (
    <div className="color-options">
      {colors.map((color) => (
        <button
        className="color-button"
          key={color}
          data-testid="colorOption"
          style={{ backgroundColor: color, padding: "15px", margin: "5px" }}
          onClick={() => handleGuess(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
