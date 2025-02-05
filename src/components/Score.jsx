import React from "react";

export default function Score({ score }) {
  return (
    <h2 className="score" data-testid="score">
      Score: {score}
    </h2>
  );
}
