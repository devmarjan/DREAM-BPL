import { ImUser } from "react-icons/im";
import type { Jersy } from "../../types/player";

interface Singleplayercardprops {
  player: Jersy;
}

const Singleplayercard = ({ player }: Singleplayercardprops) => {
  return (
    <div className="">
      <div className="card bg-base-100 m-2.5 px-2.5 py-2.5  shadow-sm">
        <figure>
          <img className="" src={player.playerImg} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex items-center space-x-1">
            <div className="text-[1.5rem]">
              <ImUser />
            </div>
            <h2 className="card-title font-bold">{player.playerName}</h2>
          </div>

          <div className="flex justify-between">
            <div className="text-gray-400">{player.origin}</div>
            <div>
              <button className="bg-gray-200 text-shadow-black px-2 py-0.5 rounded-md text-[0.9rem]">
                {player.playerType}
              </button>
            </div>
          </div>
          <div className="divider -mt-1.5"></div>
          <div className="-mt-5">
            <h2 className="text-[1rem] font-bold">Ratings</h2>
          </div>
          <div className="flex justify-between">
            <div className="text-[1rem] font-bold">{player.battingStyle}</div>
            <div className="text-[1rem] font-bold">{player.bowlingStyle}</div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-[1rem] font-bold">Price:{player.price}</h2>
            <div>
              <button className="bg-base-100 border-[0.7px] text-shadow-gray-400 px-2 py-0.5 rounded-md text-[0.9rem]">Choose Player</button>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Singleplayercard;
