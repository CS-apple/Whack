import React from 'react'
import { useGame } from "./Context"


export default function GameEnd() {
  const {phase, setPhase, score, highscores,  HighScoreList} = useGame()

  return (
    <>
    <h2>
        Game Over!
    </h2>
    <p>Your score: {score}</p>
    <button onClick={()=>setPhase("START")}>Restart</button>
    
    </>
  )
}
