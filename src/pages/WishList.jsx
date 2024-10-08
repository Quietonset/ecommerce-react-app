import React, { useContext } from 'react';
import TitleBar from '../components/TitleBar';
// import icons
import { CiHeart } from 'react-icons/ci';
import { LuHeartOff } from "react-icons/lu";
import { IoCloseOutline } from 'react-icons/io5';
// import wishlist context
import { WishListContext } from '../context/WishListContext';
// import link
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const WishList = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useContext(WishListContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className='bg-[#FFFBE6]'>
      <TitleBar title={'my wishlist'}/>
      <div className='flex-col flex items-center w-full'>
      <h1 className='my-10 uppercase border-b border-black w-fit mx-auto text-black flex items-center'>my wishlist <CiHeart className='text-2xl font-semibold'/></h1>
      {wishlist.length > 0 ? (
        <div className='flex flex-col justify-center items-center'>
          <table className='border border-black w-11/12 sm:w-[75vw] md:w-[85vw]'>
            <thead className='uppercase bg-[#D5ED9F] border-b border-black text-xs sm:text-base'>
              <tr className=''>
                <th className='border-r border-black pt-2 font-mono hidden sm:block'>image</th>
                <th className='border-r border-black pt-2 font-mono'>product</th>
                <th className='border-r border-black pt-2 font-mono'>price</th>
                <th className='border-r border-black px-2 pt-2 font-mono'>status</th>
                <th className='border-r border-black'></th>
                <th></th>
              </tr>
              </thead>
              <tbody>
                {wishlist.map((item) => {
                  return (
                    <tr className='border-b border-black text-xs lg:text-base' key={item.id}>
                      <td className='border-r border-black hidden sm:flex justify-center items-center p-3 bg-white'>
                        <img src={item.image} alt="Product Images" className='sm:h-14 object-contain'/>
                      </td>
                      <td className='border-r border-black py-3 px-1 sm:py-0 sm:px-2 text-xs sm:text-base bg-white'>
                        {item.title}
                      </td>
                      <td className='border-r border-black bg-white p-3 text-center'>
                        ${item.price}
                      </td>
                      <td className='border-r border-black text-center bg-white sm:p-3'>In Stock</td>
                      <td className='text-center bg-white p-3 border-r border-black'>
                        <button onClick={() => addToCart(item, item.id)} className='bg-[#FFAD60] hover:bg-[#ff9100] text-xs sm:text-sm p-2 rounded-md transition-all duration-200 hover:scale-105'>Add To Cart</button>
                      </td>
                      <td className='p-1.5 text-center bg-white'>
                        <button onClick={() => removeFromWishlist(item.id)} className='p-1.5 hover:text-[#00712d]'><IoCloseOutline/></button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
          </table>
          <div className='mt-4 capitalize flex justify-between items-center w-full mb-20'>
            <Link to={'/all'} className='text-[#00712d] hover:underline'>continue shopping</Link>
            <button onClick={() => clearWishlist()} className='bg-red-500 hover:bg-red-600 p-1.5 text-white rounded-md hover:scale-105'>Clear all</button>
          </div>
        </div>
      ) : (
        <div className='mx-auto my-10'>
          <h2 className='text-xl font-semibold font-sans'>You have nothing in your wishlist.</h2>
          <div className='text-9xl flex justify-center text-[#FF9100] mt-4'><LuHeartOff/></div>
          <Link to={'/all'} className='mt-4 capitalize text-[#00712D] underline flex justify-center'>back to shop</Link>
        </div>
      )}
      </div>
    </div>
  )
}

export default WishList;
