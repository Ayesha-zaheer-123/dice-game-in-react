import { useState } from 'react'
import styled from "styled-components"
import Gameplay from './Components/Gameplay'
import Startgame from './Components/Startgame'
function App() {
let [toggle,settoggle] =useState(false)
function check() {
  settoggle(!toggle);
}

  return (
    <>
    {
      toggle? <Gameplay/> : <Startgame check={check} />
    }
    </>
  )
}

export default App
