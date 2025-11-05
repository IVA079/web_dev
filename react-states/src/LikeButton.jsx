import { useState } from "react";

function click()
{
    console.log("click");
}

function LikeButton()
{

let [isLiked,set]=useState(false);

let toggle_is_happy=()=>
{
    set(!isLiked);
    console.log("after clicking print")
};

let face;

if(isLiked)
{
    face=<i class="fa-regular fa-thumbs-up"></i>;
}

else{
face=<i class="fa-solid fa-life-ring"></i>;
}
    return(
<>




<p>{face}</p>

<p onClick={toggle_is_happy}> like button</p>

<i className="fa-solid fa-heart"></i>
</>

    )

}

export default LikeButton;