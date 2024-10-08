import React, { useContext, useEffect, useState } from 'react';
// import images
import headphones from '../assets/images/hero/headphones-img.jpg';
import shades from '../assets/images/hero/shades-img.jpg';
import vintageHat from '../assets/images/hero/vintage-img.jpg';
import bracelet from '../assets/images/hero/bracelet-img.jpg';
// import link
import { Link } from 'react-router-dom';


const Hero = () => {

  // create array for images
  const images = [ headphones, shades, bracelet, vintageHat ];

  // array for description
  const text = [ 'comfy headphones', 'dark shades', 'luxury bracelet', 'vintage hat' ];

  // array for price of products
  const price = [ '$99.05', '$34.99', '$56.19', '$120.00']

  const [ index, setIndex ] = useState(0);


  const handleNextImg = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  
  useEffect(() => {
    const intervalId = setInterval(handleNextImg, 3000);

    return () => clearInterval(intervalId);
    }, []);

  return (
    <main className='bg-[#D5ED9F] pt-10 relative h-screen'>
      <div className='flex justify-center items-center lg:mr-10 lg:ml-10'>
        <div className=' w-full sm:w-6/12 md:w-6/12 lg:w-6/12 flex flex-col gap-8 px-10 lg:my-10 overflow-hidden'>
        <div className='overflow-hidden px-3'>
          <div className='uppercase text-xl text-[#4e4e54] border-l pl-3 border-[#4e4e54] slide-in-left'>what's new <br/> 2024</div>
        </div>
        <div className='uppercase font-black text-[30px] md:text-4xl lg:text-5xl slide-in-right'>{text[index]}</div>
        <div className='capitalize my-2 text-xl slide-in-bottom mt-10 border-b border-black w-fit'>from price <br /> {price[index]}</div>
        <Link to={'/all'} className='uppercase transition-all text-white bg-black hover:bg-[#FF9100] hover:text-black hover:font-bold active:scale-105 py-2.5 px-5 w-fit rounded-full my-4 text-sm sm:text-medium md:text-medium lg:text-medium absolute bottom-32 hover:cursor-pointer'>discover more</Link>
        </div>
        <div className='pl-3 w-fit hidden sm:block'>
            <img src={images[index]} alt='Hero Images' key={index} className='h-full object-cover rounded-full sm:w-[265px] sm:h-[265px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] hover:cursor-pointer'/>
        </div>
      </div>
    </main>
  )
}

export default Hero;
