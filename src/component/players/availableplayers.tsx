import type { Jersy } from "../../types/player";
import Singleplayercard from "./singleplayercard";

interface Availableplayersprops {
  players: Jersy[];
}

const Availableplayers = ({ players }: Availableplayersprops) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center container mx-auto my-16">
      {players.map((player) => {
        return (
          <div>
            <Singleplayercard player={player} />
          </div>
        );
      })}
    </div>
  );
};

export default Availableplayers;
