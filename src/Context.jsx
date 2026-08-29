import { Children, createContext, useContext, useState, useEffect } from "react";
import React from 'react'


const HOLES = 9;
const TIME_TOTAL=15;
const LEADERBOARD_POSITIONS=5

const GameContext = createContext();



//STATES
export function GameProvider({children}) {
  const[phase, setPhase] = useState("START")
  const[score, setScore] = useState(0)
  const[board, setBoard] = useState(new Array(HOLES).fill(false))
  const[timer, setTimer] = useState(TIME_TOTAL)
  const[highScores, setHighScores] = useState([])

//place mole
function placeMole(){
  const gameboard = board.map(()=>false);
  const random = Math.floor(Math.random()* gameboard.length);
  gameboard[random] = true;
  setBoard(gameboard);
}

//reset play state
function play(){
  if (phase==="PLAY"){
    setScore(0)
  }
}

//highscore
//if no scores in array just add the score 
//else add new score to array 
//sort array high low
//split array for the top 5
//return high score list
// useEffect(()=>{
//   if(phase === "END"){
//     const newHighScores= [...highScores, score]
//     newHighScores.sort((a,b)=> b-a)
//     const leaderboard = newHighScores.slice(0,LEADERBOARD_POSITIONS)
//     setHighScores(leaderboard)
//   }
// }, [phase])


//HSlist component
// function HighScoreList(scores){
//   const list = scores.map((score, index)=>{
//     return(
//     <>
//     <li
//     key={score[index]}
//     >
//       {score}
//     </li>
//     </>
//   )
// })
// }


  //provide the context to export     
  const value = {
    phase, 
    setPhase, 
    score, 
    setScore, 
    board, 
    placeMole,
    play
  };

  return (<GameContext.Provider value={value}>{children}</GameContext.Provider>)
}


export  function useGame() {
  const context=useContext(GameContext);
    return context;
}
