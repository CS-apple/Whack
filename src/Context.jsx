import { Children, createContext, useContext, useState } from "react";
import React from 'react'

const GameContext = createContext();

//STATES
export function GameProvider({children}) {
  const[phase, setPhase] = useState("START")


  //provide the context to export     
  const value = {phase, setPhase};
  return (<GameContext.Provider value={value}>{children}</GameContext.Provider>)
}


export  function useGame() {
  const context=useContext(GameContext);
    return context;
}
