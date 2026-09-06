import React from 'react'
import styled from 'styled-components' 
import { useState } from 'react'
function Rolldice({currentdice,setcurrentdice,getnum}) {
    return (
        <>
        <Dicecontainer>
            <div className="dic" onClick={getnum}>
                <img src={`src/images/dice/dice_${currentdice}.png`}/>
            </div>
            <p>Click here to roll the dice!</p>
        </Dicecontainer>
        </>
    )
}
export default Rolldice
const Dicecontainer =styled.div`
margin-top:10px;
display:flex;
flex-direction:column;
align-items:center;
p{
font-size:18px;
margin:8px 0;
}
.dic{
cursor:pointer;
  img {
    width: 150px;
    height: 150px;
  }
}
@media (max-width:480px){
.dic{
img{
width:100px;
height:100px;
}
}
p{
font-size:15px;
text-align:center;
}
}

`