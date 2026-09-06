import React from 'react'
import styled from 'styled-components'
import Totalscore from './Totalscore.jsx'
import Numberselector from './Numberselector.jsx'
import Rolldice from './Rolldice.jsx'
import {useState} from 'react'
import Rules from './Rules.jsx'
function Gameplay() {
     let [selectednumber,setselectednumber] =useState("")
     const [score,setscore] =useState(0)
      const [currentdice,setcurrentdice] =useState(1)
      const [error,seterror] =useState("")
      let [rules,showrules] =useState(false)
      function resetscore() {
        setscore(0);
      }
    function setrules() {
        showrules(!rules);
    }
function getnum() {
         let randomNumber = Math.floor(Math.random() * 6) + 1;
         if(!selectednumber) {
            seterror("you have not selected any number");
            return;
         }
         seterror(" ")
        setcurrentdice(randomNumber)
        if(randomNumber===selectednumber) {
            setscore((prev)=>prev+randomNumber)
        }else{
            setscore((prev)=>prev-2)
        }
        setselectednumber(undefined)
    }

    return(
        <>
        <Maincontainer>
            <div className="topsection">
                           <Totalscore score={score} />
           <Numberselector selectednumber={selectednumber} setselectednumber={setselectednumber} error={error} seterror={seterror}/>
            </div>
            <Rolldice currentdice={currentdice} setcurrentdice={setcurrentdice} getnum={getnum} />
            <div className="btns">
        <Button   className="reset-btn" onClick={resetscore}>Reset Button</Button>
        <Button onClick={setrules}>{rules? "Hide rules":"show rules"}</Button>
            </div>
          {rules? <Rules/>:null} 
        </Maincontainer>
        </>
    )
}
const Maincontainer=styled.main `
max-width: 900px;
margin: 0 auto;
padding: 8px 20px 15px;
display: flex;
flex-direction: column;
gap:4px;
.topsection{
display:flex;
justify-content:space-around;
align-items:end;
}
.reset-btn{
background:white;
color:black;
border:1px solid gray;
}
.reset-btn:hover{
background:black;
color:white;
}
.btns{
display:flex;
gap:10px;
margin-top:8px;
flex-direction:column;
justify-content:center;
gap:8px;
align-items:center;
}

`
const Button =styled.button `
color:white;
padding:6px 18px;
background:black;
border-radius:5px;
min-width:220px;
border:none;
font-size:16px;
cursor:pointer;
border:1px solid transparent;
&:hover{
color:black;
background:white;
border:1px solid black;
}
`


export default Gameplay