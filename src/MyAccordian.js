import React, { useState } from "react";
const MyAccordian=({question,answer})=>
{
    const[show,setshow]=useState(false);
    return(
        <>
            {/* <h1>{question}</h1>
            <p>{answer}</p> */}
            <div className="main-heading">
                <p onClick={()=>setshow(!show)}>{ show? "➖":"➕"}</p>
                <h3>{question}</h3>
            </div>
            {
                show &&  <p className="answers">{answer}</p>
            }
           
        </>
    )
}
export default MyAccordian;