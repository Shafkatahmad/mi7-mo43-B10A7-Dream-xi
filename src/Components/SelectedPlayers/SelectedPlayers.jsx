import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";


const SelectedPlayers = ({players}) => {
  console.log(players);
  return (
    <div>
      {
        players.map(player => <SelectedPlayer
            player={player}
        ></SelectedPlayer>)
      }
      <div className="">
        <button className="font-bold bg-[#E7FE29] rounded-xl px-5 py-3">Add More Player</button>
      </div>
    </div>
  );
};

export default SelectedPlayers;