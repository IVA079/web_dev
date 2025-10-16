let x = 5;
let y = 10;
let sum = x + y; // ← set a breakpoint here
console.log(sum);






function one()
{
    return 1;
}

function two()
{
    return one()+one();
}


function three()
{
    let ans=two()+one();
    console.log(ans);
}


three();