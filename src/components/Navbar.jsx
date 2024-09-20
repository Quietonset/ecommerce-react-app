import React, { useContext, useEffect, useState } from 'react';
// importing icons
import { CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { PiCaretDownThin, PiCaretRightThin } from 'react-icons/pi';
// importing link
import { Link } from 'react-router-dom';
// importing logo image
import logo from '../assets/images/logo-3.png';
// importing siderbar & cart contexts
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';
import { MenuContext } from '../context/Menucontext';
import SearchBar from './SearchBar';


const Navbar = () => {
  const { cartQuantity } = useContext(CartContext);

 // getting the sidebar context
  const { isOpen, setIsOpen, sidebarRef } = useContext(SidebarContext);

  // getting the menu context
  const { isClicked, setIsClicked } = useContext(MenuContext);

  // navbar state
  const [isActive, setIsActive ] = useState(false);

  // event listener
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });


  return (
    <>
    {/* // navbar */}
    <nav className={`${isActive ? 'shadow-xl py-3' : 'shadow-sm py-1'} bg-[#bad282] flex justify-between items-center px-5 pt-6 text-black sticky top-0 z-20 transition-all`} ref={sidebarRef}>
      {/* logo and nav links */}
      <div className='flex items-center'>
        <img src={logo} className='w-[80px]'/>
        {/* navlinks */}
        <div className='hidden md:block lg:block'>
          <div className='flex gap-6'>
            <Link to={'/'} className='hover:underline hover:text-[#00712D]'>Home</Link>
            <Link to={'/mens'} className='hover:underline hover:text-[#00712D]'>Men</Link>
            <Link to={'/womens'} className='hover:underline hover:text-[#00712D]'>Women</Link>
            <Link to={'/jewelery'} className='hover:underline hover:text-[#00712D]'>Jewelery</Link>
          </div>
        </div>
      </div>
      {/* icons */}
      <div className='flex gap-4 items-center text-[30px] capitalize'>
        <SearchBar/>
        <div className='relative group' >
          <CiShoppingCart className='hover:cursor-pointer hover:text-[#ff9100]' onClick={() => setIsOpen(!isOpen, setIsClicked(false))}/>
          <div className='bg-[#FFFBE6] text-xs rounded-full w-5 h-5 absolute -top-2 -right-3 flex justify-center items-center'>
            { cartQuantity }
          </div>
        </div>
        <div  className='hover:cursor-pointer hover:text-[#FF9100] text-[25px]' onClick={() => setIsClicked(!isClicked, setIsOpen(false))}>
          {isClicked ? <CiMenuBurger className='transition-all rotate-90 duration-200'/> : <CiMenuBurger className='transition-all duration-200 rotate-0'/>}
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar;
