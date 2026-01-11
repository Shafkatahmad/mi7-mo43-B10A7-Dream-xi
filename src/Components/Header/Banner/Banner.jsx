import banner from '../../../assets/banner-main.png'
import bgShadow from '../../../assets/bg-shadow.png'

const Banner = () => {
  return (
    <div className='max-w-330 mx-auto mt-6  bg-black rounded-2xl border-2 border-red-500'
          style={{
            backgroundImage: `url(${bgShadow})`,
             backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
    >
      <div className='border-2 border-red-500 flex flex-col items-center text-center sm:px-10 sm:py-14 md:px-16 md:py-20 lg:px-24 lg:py-24 text-white'>
        <figure>
        <img className='mb-6' src={banner} alt="" />
      </figure>
      <h3 className='mb-4 font-bold text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
      <p className='mb-6 text-white/70'>Beyond Boundaries Beyond Limits</p>
      <div className='p-2 border-2 border-[#E7FE29] rounded-2xl'>
        <button className='font-bold text-sm text-black rounded-xl px-5 py-4 bg-[#E7FE29]'>Claim Free Credit</button>
      </div>
      </div>
    </div>
  );
};

export default Banner;