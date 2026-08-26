import React from 'react'
import { useGame } from "./Context"


export default function GameEnd() {
  const {phase, setPhase} = useGame()
  return (
    <>
    <h2>
        Game end
    </h2>
    <button onClick={()=>setPhase("START")}>Restart</button>
    </>
  )
}
