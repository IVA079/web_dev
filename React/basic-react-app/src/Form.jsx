
function handleSubmit(e)
{
    e.preventDefault();
    console.log("submitted")
}

function Form()
{
  return (

<form onSubmit={handleSubmit}> 

<button >

    submit the form
</button>

</form>


  )
}

export default Form;