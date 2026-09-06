import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
function Numberselector({error,selectednumber,setselectednumber,seterror}) {
    let arr=[1,2,3,4,5,6]
function numberhandler(val) {
    setselectednumber(val);
    seterror(" ");
}
    return(
        <>
        <Number>
            <p style={{color:"red"}}>{error}</p>
    <div className="flex">
        {arr.map((val,i)=>(
                <Box key={i}
                onClick={()=>
                    numberhandler(val)
                }
                $isselected={selectednumber===val}
                >{val}</Box>
            ))}
    </div>
    <p>Select Number </p>
        </Number>
        </>
    )
}
const Number=styled.div`

display:flex;
flex-direction:column;
align-items:end;
.flex{
display:flex;
gap:20px;
flex-wrap:wrap;
justify-content:center;
}
p{
font-size:24px;
font-weight:700px;
}

@media (max-width:768px){
align-items:center;
}

@media (max-width:480px){
.flex{
gap:10px;
}
p{
font-size:18px;
}
}
`
const Box =styled.div `
height:65px;
width:65px;
cursor:pointer;
border:1px solid black;
display:grid;
place-items:center;
font-size:24px;
background: ${(props)=>(props.$isselected ? "black" : "white")};
color: ${(props)=>(props. $isselected ? "white" : "black")};
font-weight:700;
@media (max-width:480px){
height:45px;
width:45px;
font-size:18px;
}
`
export default Numberselector