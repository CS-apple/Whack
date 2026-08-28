import { Children, createContext, useContext, useState } from "react";
import React from 'react'



const GameContext = createContext();



//STATES
export function GameProvider({children}) {
  const[phase, setPhase] = useState("START")
  const[score, setScore] = useState(0)
  const[board, setBoard] = useState(new Array(9).fill(false))

//place mole
function placeMole(){
  const gameboard = board.map(()=>false);
  const random = Math.floor(Math.random()* gameboard.length);
  gameboard[random] = true;
  setBoard(gameboard);
}
//function 

//reset board 



  //provide the context to export     
  const value = {phase, setPhase, score, setScore, board, placeMole};
  return (<GameContext.Provider value={value}>{children}</GameContext.Provider>)
}


export  function useGame() {
  const context=useContext(GameContext);
    return context;
}
