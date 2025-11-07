import { useState } from "react";





function E3State()
{
    let [text,set]=useState("");




    let handlechange=(e)=>
    {

     set(e.target.value);

    }



    return(



        <>
        <h3>Example 3: Controlled input</h3>
      <input
        placeholder="Type here"
        value={text}
        onChange={handlechange}
      />
      <p>💬 You typed: {text}</p>
        
        
        
        </>
    )
}



export default E3State;