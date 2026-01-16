import { RiDeleteBinLine } from "react-icons/ri";

const SelectedPlayer = ({player}) => {
  const {image, name, battingHand} = player;
  return (
    <div className="flex justify-between p-6 border border-[#131313]/10 rounded-2xl mb-6">
        <div className="flex gap-6">
          <figure>
          <img className="w-20 h-20 object-cover rounded-2xl" src={image} alt="" />
        </figure>
        <div>
          <h3 className="text-2xl font-semibold mb-3">{name}</h3>
          <p className="text-[#131313]/60">{battingHand}</p>
        </div>
        </div>
        <RiDeleteBinLine className="text-2xl text-[#F14749]" />
    </div>
  );
};

export default SelectedPlayer;