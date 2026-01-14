import React from 'react';

const Newsletter = () => {
  return (
    <div>
      <h3>Subscribe to our Newsletter</h3>
      <p>Get the latest updates and news right in your inbox!</p>
      <div>
        <input type="email" placeholder='Enter your email' />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;