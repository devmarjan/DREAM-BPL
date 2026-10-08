import { use } from "react";
import type { Jersy } from "../../types/player"
import Availableplayers from "./availableplayers";

interface Playersprops{
    Playersinfo: Promise<Jersy[]>
}

const Players = ({Playersinfo}:Playersprops) => {
    const players = use(Playersinfo);
  return (
    <div>
      <Availableplayers players={players}/>
    </div>
  )
}

export default Players;



