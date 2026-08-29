import React from 'react'
import { useGame } from './Context'

export default function GameStart() {
   const {phase, setPhase} = useGame()
  return (
      <>
        <h1>Whack A Mole</h1>
        <p>Welcome to Whack a Mole!</p>
        <p>Whack a mole to earn points</p>
        <p>How many can you get</p>

        <button onClick={()=>setPhase("PLAY")}>Play</button>

  </>
  )
}
