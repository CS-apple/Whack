import React from 'react'
import { useGame } from './Context'
import { useEffect } from 'react';

export default function GamePlay() {
  const {phase, 
        setPhase, 
        score, 
        placeMole, 
        board, 
        setScore, 
        timer,
        play,
      } = useGame();

useEffect(()=>{
  placeMole();
},[score])

useEffect(()=>{
  play();
},[phase])
// useEffect(()=> {
//   if(timer <= 0){
//   setPhase("END")
//   return ;
//   }
//   const interval = setInterval(()=>{
//     setTimer((prevTimer)=>prevTimer - 1)
//   }, 1000);
//   return () => clearInterval(interval);}, [timer]);

function CreateBoard(){
 const gameBoard = board.map((hole, index)=>{
    if(hole === false){
      return <li key = {index} className='hole'> </li>
    } else {
      return <li key = {index} className="mole"
      onClick={()=>setScore(score+1)}> </li>
    }
  })
  return gameBoard;
}

  return (
    <>
    <h1>play game</h1>
    <p>Score: <span>{score}</span></p>
    <p>Time: <span>{timer}</span></p>
    <button onClick={()=>setPhase("START")}>Restart</button>
    <button onClick={()=>setPhase("END")}>End Game</button>
    <div>
      <ul><CreateBoard /></ul>
    </div>
    </>
  )
}
