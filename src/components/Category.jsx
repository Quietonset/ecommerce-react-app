import React, { useState } from 'react';
// import icon
import { IoChevronDown, IoChevronUp, IoBagHandleOutline } from "react-icons/io5";
// import link
import { Link } from 'react-router-dom';

const Category = ({ title }) => {
    // state of dropdowns
  const [isHoveredOn, setIsHoveredOn ] = useState(false);


  return (
    <div className='flex justify-center items-center'>
    <div className='border border-black bg-[#D5ED9F] hover:bg-[#cce19b] p-2 rounded-md flex justify-center my-3 py-0.5 uppercase font-bold items-center relative cursor-pointer' onMouseOver={() => setIsHoveredOn(true)} onMouseOut={() => setIsHoveredOn(false)}>
      <div className='flex items-center'>
        <div>{ title }</div>
        <div className="relative inline-block text-left">
          {/* changing the display of icons depending on if its open or not */}
          <button className="py-2 px-4 rounded text-xl active:text-[#00712D]">
            {isHoveredOn ? <IoChevronUp/> : <IoChevronDown/>}
          </button>
          {isHoveredOn && (
            <div className="absolute -right-2 mt-2 w-[189px] bg-[#D5ED9F] shadow-lg z-10 text-sm capitalize py-3 rounded-md">
                <Link to={'/mens'} className="block mx-4 py-2 hover:text-[#FF9100] border-b border-black">
                    men's clothing
                </Link>
                <Link to={'/womens'} className="block mx-4 py-2 hover:text-[#FF9100] border-b border-black">
                    women's clothing
                </Link>
                <Link to={'/jewelery'} className="block mx-4 py-2 hover:text-[#FF9100] border-b border-black">
                    jeweleries
                </Link>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Category
