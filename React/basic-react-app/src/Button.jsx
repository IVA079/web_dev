function doSomething()
{
    console.log("hello")
}



function printBye()
{
    console.log("bye")
}

function Button()
{


    return(



        <div>
            <button onClick={doSomething}>
             click   
            </button>

            <p onClick={printBye}> 

             this parah is for event demo   
            </p>
        </div>
    )
}


export default Button;
