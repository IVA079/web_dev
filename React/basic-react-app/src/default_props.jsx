

function Die({ num=6})
{
    let roll=Math.floor(Math.random()*num)+1;
    return <p> num is: {num} and roll :{roll}</p>
}


export default Die;