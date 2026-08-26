import React from 'react'
import { useGame } from './Context'

export default function GamePlay() {
  const {phase, setPhase} = useGame();
  return (
    <>
    <h1>play game</h1>
    <button onClick={()=>setPhase("END")}>GO to end</button>
    </>
  )
}
