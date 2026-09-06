import React from 'react'
import styled from 'styled-components'
 function Startgame({check}) {
    return (
        <>
       <Container>
        <div>
            <img src="src/images/dices.png" />
        </div>
        <div className="content">
            <h1>Dice game</h1>
            <Button onClick={check}>Play Now</Button>
        </div>
       </Container>
        </>
    )
 }
 const Container=styled.div `
 max-width:1180px;
 display:flex;
 height:100vh;
 align-items:center;
 margin:0 auto;
 padding:0 20px;
 .content{
 h1{
 font-size:96px;
 white-space:nowrap;
 }
 }
 img{
 max-width:100%;
 height:auto;
 }
 @media (max-width:992px){
 .content{
 h1{
 font-size:64px;
 }
 }
 }
 @media (max-width:768px){
 flex-direction:column;
 height:auto;
 text-align:center;
 gap:20px;
 padding:40px 20px;
 .content{
 h1{
 font-size:48px;
 white-space:normal;
 }
 }
 }
 @media (max-width:480px){
 .content{
 h1{
 font-size:36px;
 }
 }
 }
 `
const Button =styled.button `
color:white;
padding:10px 18px;
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
 export default Startgame