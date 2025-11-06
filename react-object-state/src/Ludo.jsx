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

  //set({ ...move, blue: move.blue + 1 });
set((prevmove)=>
{
return {...prevmove,blue:move.blue+1};
})
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





/**
 * First: how JavaScript stores objects

Imagine this simple object:

let move = { blue: 0, red: 0, yellow: 0, green: 0 };


This object lives in memory —
let’s say its address is #1000 (just an example).

move ──▶ 🧱 Object #1000
          blue: 0
          red: 0
          yellow: 0
          green: 0

💥 Now we do:
set({ ...move, blue: move.blue + 1 });

Step 1️⃣ — ...move

...move means copy all properties from the old object
but put them into a new object in a new address.

So React internally makes something like:

🧱 Object #2000
blue: 0
red: 0
yellow: 0
green: 0


Now we update blue to 1:

🧱 Object #2000
blue: 1
red: 0
yellow: 0
green: 0


So now there are two objects in memory:

Name	Address	Values
old move	#1000	{ blue: 0, red: 0, yellow: 0, green: 0 }
new move	#2000	{ blue: 1, red: 0, yellow: 0, green: 0 }
🔍 Step 2️⃣ — React compares them

React checks:

if (oldAddress !== newAddress) {
   re-render component;
}


✅ #1000 !== #2000, so React knows it changed!
and re-renders the screen with updated values.

❌ If you did this:
move.blue = move.blue + 1;


You are not creating a new object,
so it’s still the same address (#1000).

React compares and finds:

#1000 === #1000


→ so it thinks nothing changed,
→ and does not re-render 😅

🎯 In short
Code	Address Changes?	React Re-Renders?
move.blue = move.blue + 1	❌ same address (#1000)	❌ no
set({ ...move, blue: move.blue + 1 })	✅ new address (#2000)	✅ yes
 */