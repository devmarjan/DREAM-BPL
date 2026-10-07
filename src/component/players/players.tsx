

import { use } from "react";
import type { Jersy } from "../../types/player";

interface Playersprops {
    PlayersData: Promise<Jersy[]>;
}

const Players = ({PlayersData}: Playersprops) => {

    const players = use(PlayersData);
  return (
    <div>
      
    </div>
  )
}

export default Players;

