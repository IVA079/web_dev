import { useState } from "react";
import "./LudoBoard.css"; // 🎨 import the separate CSS file

function LudoBoard() {
  let [move, set] = useState({
    blue: 0,
    red: 0,
    yellow: 0,
    green: 0,
  });

  return (
    <>
      <h2 className="title">🎲 Game Begins 🎲</h2>

      <div className="board">
        <div className="cell blue">
          <p>Blue move = {move.blue}</p>
          <button>+1</button>
        </div>

        <div className="cell yellow">
          <p>Yellow move = {move.yellow}</p>
          <button>+1</button>
        </div>

        <div className="cell green">
          <p>Green move = {move.green}</p>
          <button>+1</button>
        </div>

        <div className="cell red">
          <p>Red move = {move.red}</p>
          <button>+1</button>
        </div>
      </div>
    </>
  );
}

export default LudoBoard;
