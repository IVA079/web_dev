import { useState } from "react";

export default function EmojiClickerA() {
  const [emojis, setEmojis] = useState(["☺️"]);

  const allEmojis = ["😀", "😂", "🥰", "😎", "😜", "🤩"];
  
  const randomEmoji = allEmojis[Math.floor(Math.random() * allEmojis.length)];






  const addEmoji = () => {
    // This closure remembers whatever randomEmoji was during the render
    setEmojis((prev) => [...prev, randomEmoji]);
  };





  


  console.log("🎬 Component re-rendered, randomEmoji:", randomEmoji);

  return (
    <div style={{ textAlign: "center" }}>
      <h2> Version A (random outside)</h2>

      <button onClick={addEmoji}>Add Emoji</button>


      <p style={{ fontSize: "2rem" }}>{emojis.join(" ")}</p>
    </div>
  );
}



/**
 * if random variavle stay outside then the will it run 2 time automatically
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */