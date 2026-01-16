import React, { useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = () => {
  const [players, setPlayers] = useState([]);

  const handleChoosePlayer = player => {
    // console.log(player)
    setPlayers([...players, player]);
    
  }
  return (
    <div className="max-w-330 mx-auto mb-50">
      <div className="flex justify-between mb-8 items-center border border-red-500">
        <h3 className="font-bold text-2xl">Available Players</h3>
        <h3 className="font-bold text-2xl">Selected Players(0/6)</h3>
        <div>
            <button className="px-7 py-3 bg-[#E7FE29] rounded-l-xl">Available</button>
            <button className="px-5 py-3 rounded-r-xl">Selected</button>
        </div>
      </div>


      <AvailablePlayers
          handleChoosePlayer={handleChoosePlayer}
      ></AvailablePlayers>
      <SelectedPlayers
          players={players}
      ></SelectedPlayers>
    </div>
  );
};

export default Players;