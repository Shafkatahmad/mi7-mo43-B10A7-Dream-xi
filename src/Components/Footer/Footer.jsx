import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-16 bg-[#06091A] text-white'>
      <figure>
        <img className='w-35 mt-60' src={logo} alt="" />
      </figure>
      <div className='max-w-330 mx-auto md:grid md:grid-cols-3 md:justify-between gap-35 p-10'>
        <div>
          <h4>About Us</h4>
          <p>We are a passionate team dedicated to providing the best services to our customers.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4>Subscribe</h4>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <div className='flex'>
            <input className='w-2/3 text-[#131313]/40 rounded-l-xl border border-[#131313]/15 px-7 py-4 bg-white' type="email" placeholder='Enter your email' />
          <button className='font-bold rounded-r-xl bg-orange-400 px-7 py-4'>Subscribe</button>
          </div>
        </div>
      </div>
      <div className='p-10'>
          <p>@2026 Your Company All Rights Reserved.</p>
        </div>
    </div>
  );
};

export default Footer;