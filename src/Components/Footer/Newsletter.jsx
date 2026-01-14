import React from 'react';

const Newsletter = () => {
  return (
    <div className='max-w-335 mx-auto p-6 border border-orange-300 rounded-3xl'>
      <div className=' text-center border border-[#131313]/10 rounded-3xl'>
      <h3 className='text-3xl font-bold mb-4'>Subscribe to our Newsletter</h3>
      <p className='text-xl font-medium text-[#131313]/70 mb-6'>Get the latest updates and news right in your inbox!</p>
      <div>
        <input className='w-100 rounded-xl border border-[#131313]/15 px-7 py-4 mr-4' type="email" placeholder='Enter your email' />
        <button className='font-bold rounded-xl bg-orange-400 px-7 py-4'>Subscribe</button>
      </div>
    </div>
    </div>
  );
};

export default Newsletter;