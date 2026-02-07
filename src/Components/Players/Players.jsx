import React, { useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';
import { toast } from 'react-toastify';

const Players = ({handleCoin, coin}) => {
  const [players, setPlayers] = useState([]);
  const [toggle, setToggle] = useState(true);

  const handleChoosePlayer = player => {
    // console.log(player)
    if(players.includes(player)) {
      console.log('already exits')
      toast.error(`${player.name} is already chossen`)
      // handleCoin(false, player.price)
    }
    else if(coin < player.price) {
      console.log('claim free credit')
      toast.warn("Not enough coins! Claim some free credit.");
    }
    else if(players.length >= 6) {
      console.log('cant take more than 6 players')
      toast.error("Squad full! You can't take more than 6 players.");
    }
    else {
      setPlayers([...players, player]);
      handleCoin(true, player.price)

      toast.success(`Congrats! ${player.name} has been added to your team.`, {
        theme: "colored" // This will use the solid color style we discussed
      });
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
        <div id='sticky' className="sticky top-0">
            <button className={`px-7 py-3 rounded-l-xl ${toggle? 'bg-[#E7FE29] ': ''} ${!toggle? 'rounded-l-xl ': ''}`} onClick={()=>handleToggle(true)}>Available</button>
            <button className={`px-5 py-3 ${!toggle? 'bg-[#E7FE29] ': ''} ${!toggle? 'rounded-r-xl ': ''}`} onClick={()=>handleToggle(false)}>Selected {players.length}</button>
        </div>
      </div>


      {toggle? (<AvailablePlayers
          handleChoosePlayer={handleChoosePlayer}
          handleCoin={handleCoin}
      ></AvailablePlayers>): (<SelectedPlayers
          players={players}
          deleteChossenPlaer={deleteChossenPlaer}
          handleCoin={handleCoin}
          handleToggle={handleToggle}
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