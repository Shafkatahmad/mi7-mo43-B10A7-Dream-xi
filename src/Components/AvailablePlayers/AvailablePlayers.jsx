import { useEffect, useState } from "react";
import AvailablePlayer from "../AvailablePlayer/AvailablePlayer";

const AvailablePlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('players.json')
    .then(res => res.json())
    .then(data => setPlayers(data));
  },[])
  return (
    <div className="max-w-330 mx-auto">
        <div className="flex justify-between mb-8 items-center">
          <h3 className="font-bold text-2xl">Available Players</h3>
          <div>
            <button className="px-7 py-3 bg-[#E7FE29] rounded-l-xl">Available</button>
            <button className="px-5 py-3 rounded-r-xl">Selected</button>
          </div>
        </div>
        <div className="grid grid-cols-3">
          {
          players.map(player => <AvailablePlayer
            key={player.id}
            player={player}
          ></AvailablePlayer>)
        }
        </div>
    </div>
  );
};

export default AvailablePlayers;