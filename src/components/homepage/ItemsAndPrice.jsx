import React, { useContext } from 'react';
// import { SidebarContext } from '../../context/SidebarContext';
// import { CartContext } from '../../context/CartContext';
import { SidebarContext } from '../../context/SidebarContext';
import { CartContext } from '../../context/CartContext';

const ItemAndPrice = ({ item, price, oldPrice }) => {
  const { cart, addToCart, removeFromCart  } = useContext(CartContext);
  // const { itemAmount, setItemAmount } = useContext(CartContext);
  // const { isOpen, setIsOpen } = useContext(SidebarContext);


  return (
    <div className='hover:cursor-pointer mb-3 p-2 flex flex-col'>
      <p className='capitalize text-[#4e4e54] hover:text-[#FF9100] text-xl font-extrabold tracking-wider py-2'>{item}</p>
      <div className='flex flex-col'>
        <div>
          <span>Price: </span>
          <span className='text-[#FF9100] capitalize'>${price}</span>
          <span className='text-xs text-[#b5b2b2] ml-2'><s>{oldPrice}</s></span>
        </div>
        <div>
        </div>
        <div className='relative top-2 flex gap-2 items-center justify-between py-3'>
          <button
          onClick={addToCart}
          className='capitalize bg-pink-400 px-2 py-0.5 mx-1 hover:cursor-pointer hover:bg-green-400 text-black hover:text-white text-xs transition-transform active:scale-110 w-[100px] h-[50px]'
          >
            +
          </button>
          <button
          onClick={removeFromCart}
          className='capitalize bg-pink-400 px-2 py-0.5 mx-1 hover:cursor-pointer hover:bg-red-600 text-black hover:text-white text-xs transition-transform active:scale-110 w-[100px] h-[50px]'
          
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemAndPrice;
