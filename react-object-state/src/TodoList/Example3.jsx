import { useState } from "react";





function Example3() {




    let handlechange = (e) => {




        console.log(e.target.value);
    }


    return (


        <>

            <input placeholder="Type here" onChange={handlechange} />

        </>
    )
}


/**
 * e.target → the input box

e.target.value → what’s inside it
 */


export default Example3