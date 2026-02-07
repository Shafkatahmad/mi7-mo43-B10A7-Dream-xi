import React from 'react';
import logo from  '../../../assets/logo.png'
import { CiBitcoin } from "react-icons/ci";

const Navbar = ({coin}) => {
  return (
    // <div className='relative'>
      <div className='fixed top-0 left-0 w-full bg-white z-50'>
        <div className='flex justify-between max-w-330 mx-auto'>
          <figure>
        <img className='w-16' src={logo} alt="" />
      </figure>
        <ul className='flex w-140 text-black/70 border-2 border-red-500 items-center justify-between'>
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
          <div className='flex items-center gap-1'>
            <button className='border-2 border-red-500 font-bold px-5 py-4'>${coin} Coin</button>
            <CiBitcoin className='text-3xl font-bold'/>
          </div>
        </ul>
        </div>
      
    </div>
    // </div>
  );
};

export default Navbar;