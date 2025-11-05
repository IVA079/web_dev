

function handleHover()
{
    console.log("hovered")
}

function handleClick() {
    console.log("CLICKED THE BUTTON!!!");
  }


function Example()
{

    return(
      <div>

<button onClick={handleClick}>click on button</button>

<p onMouseOver={handleHover}>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Dolorum, veniam et tenetur ad temporibus facilis, sapiente illum ducimus, tempora doloremque fugiat perferendis cum vel sed similique rem.
     Repellendus, ea quidem!
</p>



      </div>



    )
}



export default Example;