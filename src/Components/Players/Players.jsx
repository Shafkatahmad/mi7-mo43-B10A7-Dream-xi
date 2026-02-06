import React, { useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({handleCoin}) => {
  const [players, setPlayers] = useState([]);
  const [toggle, setToggle] = useState(true);

  const handleChoosePlayer = player => {
    // console.log(player)
    if(players.includes(player)) {
      console.log('already exits')
    }
    else {
      setPlayers([...players, player]);
    }
  }

  const handleToggle = status => {
    setToggle(status);
  }

  const deleteChossenPlaer = id => {
    setPlayers(players.filter(player => player.id !== id))
  }
  return (
    <div className="max-w-330 mx-auto mb-50">
      <div className="flex justify-between mb-8 items-center border border-red-500">
        <h3 className={`font-bold text-2xl ${!toggle? `hidden`: ''}`}>Available Players</h3>
        <h3 className={`font-bold text-2xl ${toggle? `hidden`: ''}`}>Selected Players({players.length}/6)</h3>
        <div>
            <button className={`px-7 py-3 rounded-l-xl ${toggle? 'bg-[#E7FE29] ': ''} ${!toggle? 'rounded-l-xl ': ''}`} onClick={()=>handleToggle(true)}>Available</button>
            <button className={`px-5 py-3 ${!toggle? 'bg-[#E7FE29] ': ''} ${!toggle? 'rounded-r-xl ': ''}`} onClick={()=>handleToggle(false)}>Selected</button>
        </div>
      </div>


      {toggle? (<AvailablePlayers
          handleChoosePlayer={handleChoosePlayer}
      ></AvailablePlayers>): (<SelectedPlayers
          players={players}
          deleteChossenPlaer={deleteChossenPlaer}
          handleCoin={handleCoin}
      ></SelectedPlayers>)}
      {/* <AvailablePlayers
          handleChoosePlayer={handleChoosePlayer}
      ></AvailablePlayers>
      <SelectedPlayers
          players={players}
          deleteChossenPlaer={deleteChossenPlaer}
          handleCoin={handleCoin}
      ></SelectedPlayers> */}
    </div>
  );
};

export default Players;