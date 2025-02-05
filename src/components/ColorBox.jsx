import React from "react";

export default function ColorBox({ color }) {
  return (
    <div
    className="color-box"
      data-testid="colorBox"
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
}
