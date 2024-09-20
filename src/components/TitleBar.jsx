import React from 'react';
// import icon
import { CiHome } from 'react-icons/ci';
// import link
import { Link } from 'react-router-dom';

const TitleBar = ({ title }) => {
  return (
    <div className='flex flex-col items-center relative'>
      <div className='border border-black flex items-center w-[90%] pl-4 py-2 mt-3 rounded-md text-sm gap-2.5'>
        <Link to={'/'} className='hover:cursor-pointer hover:text-[#FF9100]'>
          <CiHome className='text-xl'/>
        </Link>
        <p>|</p>
        <a className='uppercase font-semibold font-sans'>{title}</a>
      </div>
    </div>
  )
}

export default TitleBar;
