import React from 'react'
import styled from 'styled-components'
function Totalscore({score}) {
return (
    <>
    <Scorecontainer>
                <h1>{score}</h1>
                <p>Total Score</p>
            </Scorecontainer>
    </>
)
}
const Scorecontainer=styled.div `
text-align:center;
max-width:200px;
h1{
font-size:80px;
}
p{
font-size:18px;
font-weight:500px;
}
`
export default Totalscore