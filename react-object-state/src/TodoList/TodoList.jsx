import { useState } from "react";




export default function TodoList() {


    let [arr, setArr] = useState([]);

    let [text, settext] = useState("");



    let handlechange = (e) => {
        settext(e.target.value);
        console.log(e.target.value)
    }


    let add = () => {
        setArr([...arr, text]);
    }





    return (
        <>
            <h2>📝 Todo List</h2>

            <input
                placeholder="Add a task"
                value={text}
                onChange={handlechange}
                style={{ padding: "8px", width: "200px", marginRight: "10px" }}
            />





            <button
                onClick={add}
                style={{
                    padding: "8px 12px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Add Task
            </button>








            <hr style={{ width: "300px", margin: "20px auto" }} />

            <h3>📋 Tasks to do:</h3>



            {
                arr.map(
                    (e) => {
                        return <p>{e}</p>;
                    }

                )
            }



        </>


    )

}





