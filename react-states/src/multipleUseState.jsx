import { useState } from "react";



function ToggleCounter()
{


    let [happy,sethappy]=useState(true);

    let [count,setcount]=useState(0);



    let mood=()=>
    {
        sethappy(!happy);
    };


    //using happy check true flase ,mood trst for setting text
let moodText;
  if (happy) {
    moodText = "😊 I am happy!";
  } else {
    moodText = "😢 I am sad!";
  }










    let ince=()=>
    {
        setcount(count+1);
    };


 return(



    <>
    <p> count:{count}    </p>
    <button onClick={ince}>
     increment
    </button>
    

<p onClick={mood}>

{moodText}
</p>

    
    </>
 )



}


export default ToggleCounter;