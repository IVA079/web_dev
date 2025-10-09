// this keyword
const cat={
    name:"cat name",
    color:'grey',
    breed:'scottish fold',
    meow()
    {
        console.log("meow function call inside cat object");
        console.log(`${this.name}meow function call inside cat object`);
        console.log("next line");
        console.log(`${this.name}"meow function call inside cat object"`);
    }
}




let meow2_outside_cat_object=cat.meow;



function m3()
{
     console.log("3rd function");
}

