import React from 'react'
import { useGame } from './Context'

export default function GamePlay() {
  const {phase, setPhase, score, board} = useGame();

  function CreateBoard(){
 const gameBoard = board.map((hole, index)=>{
    if(hole ===false){
      return <li key = {index} className='hole'> </li>
    } else {
      return <li li key = {index} className="mole"> </li>
    }
  })
  return gameBoard;
}

  return (
    <>
    <h1>play game</h1>
    <p>Score: <span>{score}</span></p>
    <button onClick={()=>setPhase("START")}>restart</button>
    <button onClick={()=>setPhase("END")}>GO to end</button>
    <div>
      <ul><CreateBoard /></ul>
    </div>
    </>
  )
}
