import React from "react";
import { useState } from "react";
import styled from "styled-components";
function Rules() {
    return(
        <>
        <Rulescontainer>
<h2>How to play dice Game!</h2>
<div className="text">
    <p>Select any number</p>
    <p>Click on dice image</p>
    <p>after click on dice if selected number is equal to  dice number you will get same point as dice</p>
    <p>if you get wrong guess then 2 points will be deducted</p>
</div>
        </Rulescontainer>
        </>
    )
}
const Rulescontainer=styled.div`
background-color:#FBF1F1;
padding:10px 20px;
max-width:500px;
margin:8px auto 0;
border-radius:8px;
h2{
font-size:18px;
margin:0;
}
.text{
margin-top:6px;
p { margin: 3px 0; font-size: 14px; }

}
`
export default Rules