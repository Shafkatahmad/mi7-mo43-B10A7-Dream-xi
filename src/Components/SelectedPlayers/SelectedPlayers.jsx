import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";


const SelectedPlayers = ({players, deleteChossenPlaer, handleCoin, handleToggle}) => {
  console.log(players);
  return (
    <div>
      {
        players.map(player => <SelectedPlayer
            player={player}
            deleteChossenPlaer={deleteChossenPlaer}
            handleCoin={handleCoin}
        ></SelectedPlayer>)
      }
      <div className="">
        <button className="font-bold bg-[#E7FE29] rounded-xl px-5 py-3" onClick={()=>handleToggle(true)}>Add More Player</button>
      </div>
    </div>
  );
};

export default SelectedPlayers;