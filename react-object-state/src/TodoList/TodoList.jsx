import { useState } from "react";




export default function TodoList() {


    let [arr, set] = useState([" "]);
    
    let [text, setText] = useState("");


       let add=()=>


        {



            set([...arr,"a"])
        }






    return (
        <div>

            <input placeholder="add a tak" value={text}></input>
            <button onClick={add}>add a task</button>
            <hr></hr>

            <h2>task todo</h2>





            

             {

                     arr.map(


                      (e) => {
                        
                        return <p>{e}</p>;
                    
                    }


                )






             }   

        




        </div>



    )
}