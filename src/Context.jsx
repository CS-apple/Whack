import { Children, createContext, useContext, useState } from "react";
import React from 'react'



const GameContext = createContext();

//establich game board 


//STATES
export function GameProvider({children}) {
  const[phase, setPhase] = useState("START")
  const[score, setScore] = useState(0)
  const[board, setBoard] = useState(new Array(9).fill(false))

  //creat the play space

//function 

//reset board 

function placeMole(board){
  const random = Math.floor(Math.random()* board.length)
  board[random] = true
}

  //provide the context to export     
  const value = {phase, setPhase, score, setScore, board, setBoard};
  return (<GameContext.Provider value={value}>{children}</GameContext.Provider>)
}


export  function useGame() {
  const context=useContext(GameContext);
    return context;
}
