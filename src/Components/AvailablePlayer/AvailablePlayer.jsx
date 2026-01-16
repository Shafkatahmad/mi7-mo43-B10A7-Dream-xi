import { CgProfile } from "react-icons/cg";
import { FaFlag } from "react-icons/fa6";

const AvailablePlayer = ({player, handleChoosePlayer}) => {
  const {image, name, nationality, playerType, rating, battingHand, price} = player
  // console.log(player);
  return (
    <div className="p-6 border border-[#131313]/10 rounded-2xl">
      <figure>
        <img className="w-92 h-60 object-cover mb-6 rounded-2xl" src={image} alt="Photo of Ricky Ponting" />
      </figure>
      <div className="flex items-center gap-4 mb-4">
        <CgProfile className="text-2xl" />
        <p className="text-xl font-semibold">{name}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
        <FaFlag className="text-xl" />
        <p>{nationality}</p>
      </div>
      <div>
        <button className="px-4 py-2 rounded-lg bg-[#131313]/5">{playerType}</button>
      </div>
      </div>
      <hr className="text-[#131313]/10 mb-4" />
      <h4 className="text-sm font-bold mb-4">Rating: {rating}</h4>
      <div className="flex justify-between mb-3">
        <h4 className="font-semibold ">{battingHand}-Hand-Bat</h4>
        <h4 className="text-[#131313]/70">{battingHand}-Hand-Bat</h4>
      </div>
      <div className="flex items-center justify-between">
        <h4>Price: ${price}</h4>
        <button onClick={()=>handleChoosePlayer(player)} className="px-4 py-2 border border-[#131313]/10 rounded-lg">Choose Player</button>
      </div>
    </div>
  );
};

export default AvailablePlayer;