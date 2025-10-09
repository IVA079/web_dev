// this keyword
const cat={
    name:"cat name",
    color:'grey',
    breed:'scottish fold',
    meow()
    {


        //main line

       console.log("this"+this);

       //..........................
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
     console.log(this );
}






//now call  

console.log("//now call  ");

console.log("cat.meow();");
cat.meow();


console.log("meow2_outside_cat_object()");
meow2_outside_cat_object();


console.log("m3();");
m3();




