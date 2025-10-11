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




////////try and catch///////////////////////////////////////////////

console.log("test try and catch ")
function func_name(msg)
{
try{
//msg.toUpperCase().repeat(2);

console.log(msg.toUpperCase().repeat(2));
}
catch(e)
{
console.log("error.enter String ");//this block will catch any sort of error then print this
}

}


// now call function func_name("message")
//func_name(12345)







////////////''''''''Arrow function''''''''''''''''''''/////////////
const sum=(a,b)=>
{
    console.log(a+b);
}



//////////////set time out//////////////////////
console.log(" befor time out ");
setTimeout(() => {
    console.log(" set time out  is 4 s");
}, 4000);// you will see "set time out  is 4 s" this line after 4 s








///////////arrow  function with  this kwyword

const student=
{
    name:"newvy",
    marks:90,
    prop:this,
    getName:function()
    {
        console.log(this);
        console.log(this.name);   //this  keyword point to student object
                                  //what is the scope of student object?global
                                  //for normal function this  keyword means object scope
        
    },

    getnameByArrowFunc:()=>
    {
     
        console.log(`the name is ${this.name}`);
        console.log(this);            
        console.log(this.name);
        ///rule of this " this keyword" for arrow function: parents scope
        //who is the parent of "getnameByArrowFunc:()" function?student
        //what is the scope of student object?global
        //for arrow function this means parent's scope


    },
    funcname3:function()
    {
setTimeout(()=>
{
    console.log("set time out function inside fun3 ");
    console.log(this);
    ///.   parent of set time out function  is func3
    //the scope of func 3 is student 
    console.log(this);///.   parent of set time out function  is func3
    //the scope of func3 is student 
},3000
);
    },

 funcname4:function()
    {

        setTimeout(function()
    {
        console.log(this);//this global object .as settimeout function inside window object
    },2000);

}
};






///////////////array method////////////////////////////////////

let arr=[1,2,3,4];
function print(el)
{
    console.log(el)
}



arr.forEach(print);




console.log("example 2");
let arr2=[{name:"a",
    marks:100
},
{
    name:'b',
    marks:90
}];



console.log("arrow function take arguments 0 to n")
arr2.forEach((e)=>
{
    console.log(e.marks);
})

//call function for each element 


console.log("normal function ")
function fun_arr2(e)
{
console.log(e);
}

arr2.forEach(fun_arr2);

//map : same like prev  but diff is it create new array with return values


let texts=['msg','good morning','iva'];

let newarr=texts.map(funcname5);

function funcname5(t)
{
return t.toUpperCase();
}


texts;
newarr;



//filter: creates a new array with all elements that pass the test implemented by the provided function
let nums=[1,2,3,4];

let ans=nums.filter(funcname6);

function funcname6(n)
{

if( n%2==1)
{
    return n;
}


}



//every: returns true if every element of array gives true for some function .else returns false

let words=['abc','zxc','mnb'];
let result=words.every((e)=>
{
   return e.length==3;
})

console.log(result);