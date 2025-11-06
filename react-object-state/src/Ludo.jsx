import { useState } from "react";
import "./LudoBoard.css"; // 🎨 import the separate CSS file

function LudoBoard() {
  let [move, set] = useState({
    blue: 0,
    red: 0,
    yellow: 0,
    green: 0,
  });


  let [count,setcount]=useState(0);
let updateBlue=()=>
{
   // move.blue=move.blue+1;
    console.log(move);

  set({ ...move, blue: move.blue + 1 });

}





  return (
    <>
      <h2 className="title">🎲 Game Begins 🎲</h2>

      <div className="board">
        <div className="cell blue">
          <p>Blue move = {move.blue}</p>
          <button onClick={updateBlue}>+1</button>
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
