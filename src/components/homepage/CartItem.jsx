import React, { useContext } from 'react';
// importing link
import { Link } from 'react-router-dom';
// import icons
import { IoMdClose } from 'react-icons/io';
// import cart context
import { CartContext } from '../../context/CartContext';
import { SidebarContext } from '../../context/SidebarContext';

const CartItem = ({ item }) => {
    // cart context
    const { removeFromCart } = useContext(CartContext);

    // sidebar context
    const { handleClose } = useContext(SidebarContext);

    // destructuring the items in the product
    const { image, title, id, price } = item;
  return (
    <div className='flex mt-7 mb-3 pb-2 mr-2 gap-3 relative'>
        {/* image */}
        <div>
            <img src={ image } className='max-w-[80px] max-h-[80px] object-cover' />
        </div>
        <div className='w-full flex flex-col justify-between'>
            {/* title */}
            <div className='w-full font-bold text-sm hover:underline hover:text-[#FF9100] mx-2'>
                <Link to={`/product/${id}`} onClick={handleClose}>
                    { title }
                </Link>
            </div>
            {/* price and final price */}
            <div className='flex justify-between items-end mx-2 mb-0.5'>
                {/* item price */}
                <div className='text-[#636359]'>
                    ${ price }
                </div>
               {/* remove icon */}
               <div onClick={() => removeFromCart(id)} className='cursor-pointer hover:bg-red-600 hover:text-white text-lg p-0.5'>
                    <IoMdClose/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem
