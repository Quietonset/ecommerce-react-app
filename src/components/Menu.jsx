import React, { useContext, useEffect, useState } from 'react';
// import menu context
import { MenuContext } from './context/Menucontext';
// import icons
import { CiUser, CiShop, CiShoppingTag, CiHome, CiStar } from 'react-icons/ci';
import { IoChevronDown, IoChevronUp, IoShirt, IoBagCheckOutline } from 'react-icons/io5';
import { GiDropEarrings, GiPoloShirt } from "react-icons/gi";
import { MdOutlineAssignment, MdOutlineAssignmentInd, MdLogout } from "react-icons/md";
// import link
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Menu = () => {
    // menu context
    const { isClicked, handleMenuClose } = useContext(MenuContext);
    // authentication context
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    // state of menu tabs - account
    const [ isAccountClicked, setIsAccountClicked ] = useState(false);

    // state of menu tabs - settings
    const [ isShopClicked, setIsShopClicked ] = useState(false);

  return (
    <div className=''>
        {isClicked && (<div onClick={handleMenuClose} className="bg-black h-full w-full opacity-20 fixed z-20 transition-all duration-300"></div>)}
        <section className={`${isClicked ? 'translate-x-0' : 'translate-x-[100%]'} h-screen w-full sm:w-[300px] md:w-[300px] xl:max-w-[300px] fixed right-0 bg-[#FFFBE6] z-30 transition-all duration-200 transform shadow-2xl`}>
            <div className='my-10'>
              <div className='relative'>
                <div className='flex items-center capitalize gap-2 m-2 p-2'>
                    <CiUser className='text-2xl'/>
                    <div onClick={() => setIsAccountClicked(!isAccountClicked, setIsShopClicked(false))}  className='relative border-b border-black flex items-center justify-start gap-2 w-full hover:text-[#FF9100] hover:border-[#FF9100] hover: cursor-pointer'>
                      <span>account</span>
                      <span>
                        { isAccountClicked ? <IoChevronUp/> : <IoChevronDown/>}
                      </span>
                    </div>
                </div>
              </div>
                {isAccountClicked && (
                  <div className='capitalize mx-12 py-1.5 flex flex-col gap-1.5'>
                    <Link to={'/login'} onClick={() => handleMenuClose()} className={`${isLoggedIn ? 'hidden' : 'block'} hover:text-[#F99100] flex items-center gap-1.5`}><MdOutlineAssignment/>log in</Link>
                    <Link to={'/signUp'} onClick={() => handleMenuClose()} className='hover:text-[#F99100] flex items-center gap-1.5'><MdOutlineAssignmentInd/>Create an account</Link>
                    <Link to={'/'} onClick={() => {handleMenuClose(), setIsLoggedIn(false)}} className='hover:text-[#F99100] flex items-center gap-1.5'><MdLogout/>log out</Link>
                  </div>
                )}

                <div className='relative block md:hidden lg:hidden'>
                <div className='flex items-center capitalize gap-2 m-2 p-2'>
                    <CiShop className='text-2xl'/>
                    <div onClick={() => setIsShopClicked(!isShopClicked, setIsAccountClicked(false))}  className='relative border-b border-black flex items-center justify-start gap-2 w-full hover:text-[#FF9100] hover:border-[#FF9100] hover: cursor-pointer'>
                      <span>shop</span>
                      <span>
                        { isShopClicked ? <IoChevronUp/> : <IoChevronDown/>}
                      </span>
                    </div>
                </div>
              </div>
                {isShopClicked && (
                  <div className='capitalize mx-12 py-1.5 flex flex-col gap-1.5'>
                    <Link to={'/mens'} onClick={() => handleMenuClose()} className='hover:text-[#F99100] flex items-center gap-1.5'><IoShirt/>men's clothing</Link>
                    <Link to={'/womens'} onClick={() => handleMenuClose()} className='hover:text-[#F99100] flex items-center gap-1.5'><GiPoloShirt/>women's clothing</Link>
                    <Link to={'/jewelery'} onClick={() => handleMenuClose()} className='hover:text-[#F99100] flex items-center gap-1.5'><GiDropEarrings/>jeweleries</Link>
                  </div>
                )}
                <Link to={'/cart'} onClick={() => handleMenuClose()} className='flex items-center capitalize gap-2 m-2 p-2'>
                    <CiShoppingTag className='text-2xl'/>
                    <p className='font-thin border-b border-black w-full hover:text-[#FF9100] hover:border-[#FF9100] hover:cursor-pointer'>my cart</p>
                </Link>
                <Link to={'/wishlist'} onClick={() => handleMenuClose()} className='flex items-center capitalize gap-2 m-2 p-2'>
                    <CiStar className='text-2xl'/>
                    <p className='font-thin border-b border-black w-full hover:text-[#FF9100] hover:border-[#FF9100] hover:cursor-pointer'>wishlist</p>
                </Link>
                <Link to={'/'} onClick={() => handleMenuClose()} className='flex items-center capitalize gap-2 m-2 p-2'>
                    <CiHome className='text-2xl'/>
                    <p className='font-thin border-b border-black w-full hover:text-[#FF9100] hover:border-[#FF9100] hover:cursor-pointer'>home</p>
                </Link>
                <Link to={'/checkout'} onClick={() => handleMenuClose()} className='flex items-center capitalize gap-2 m-2 p-2'>
                    <IoBagCheckOutline className='text-2xl'/>
                    <p className='font-thin border-b border-black w-full hover:text-[#FF9100] hover:border-[#FF9100] hover:cursor-pointer'>Checkout</p>
                </Link>
            </div>
        </section>
    </div>
  );
};

export default Menu;
