
import { useState } from "react";





function MultiState2()
{

    //////////////////state 1//////////////////////////

    let[mood,setmood]=useState(false);
   let happy=()=>
    {
    setmood(!mood);
    }



    let face;


    if(mood)
    {
        face="😡";
    }

    else{
        face="☺️";
    }


    ////////////////////////state 2///////////////////////////

    let[num,setnum]=useState(0);
    let setvalue=()=>
    {
        setnum(num+1);
    }


let all=()=>
{
    happy();
    setvalue();
}

return(


        <>
        <p>num:{num}</p>
         <p>face:{face}</p>
        
         <button onClick={all}> click to execute all</button>
         
        </>
     
      
    )


}







export default MultiState2;