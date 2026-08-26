import GameStart from "./GameStart";
import GamePlay from "./GamePlay";
import GameEnd from "./GameEnd";

import { useGame } from './Context'

export default function App() {
  const {phase} = useGame();
  if(phase === "START") return <GameStart/>
  if(phase === "END") return <GameEnd />
  return <GamePlay/>
}
