import React from 'react';
import logo from  '../../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-between max-w-330 mx-auto'>
      <figure>
        <img className='w-16' src={logo} alt="" />
      </figure>
        <ul className='flex w-140 text-black/70 border-2 border-red-500 items-center justify-between'>
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
          <button className='border-2 border-red-500 font-bold px-5 py-4'>0 Coin</button>
        </ul>
    </div>
  );
};

export default Navbar;