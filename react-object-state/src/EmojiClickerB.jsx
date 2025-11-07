import { useState } from "react";

function EmojiClickerB() {

  const [emojis, setEmojis] = useState(["☺️"]);

  
  const allEmojis = ["😀", "😂", "🥰", "😎", "😜", "🤩"];



console.log(" re")


  const addEmoji = () => {
    const randomEmoji = allEmojis[Math.floor(Math.random() * allEmojis.length)];

    //  Return a new array (so React re-renders)
    setEmojis(
        (oldArr) => [...oldArr, randomEmoji]
    
    );





    console.log(" Added emoji:", randomEmoji);
  };




  
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Version B (random inside)</h2>

      <button onClick={addEmoji}>Add Emoji</button>

      {/* Display emojis */}
      <p style={{ fontSize: "2rem" }}>{emojis.join(" ")}</p>
    </div>
  );
}

export default EmojiClickerB;
