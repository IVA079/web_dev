import { useState } from "react"

export default function E_e() {

    let [arr, set] = useState([""]);




    let add = () => {



set(  [...arr, "🎶"]);

      
    }







    return (



        <div>
            {
                arr.map(
                    (e) => {
                        
                        return <p>{e}</p>;
                    
                    }
                )

            }

            <button onClick={add}>add </button>
        </div>
    )
}







