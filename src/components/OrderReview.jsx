import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const OrderReview = () => {
     // cart context
    const { total, cartQuantity } = useContext(CartContext);

    // for button state
    const [ isProceeding, setIsProceeding ] = useState(false);

    // function to control button state 
    const handleBtn = (e) => {
        e.preventDefault();
        setIsProceeding(true);
    }
  return (
    // entire product review section
    <div>
        {/* button */}
        <div className='flex justify-end'>
            <button 
            onClick={handleBtn}
            className='border border-black rounded-md px-4 py-2 bg-[#f0ffcd] hover:bg-[#D5ED9F] transition-all duration-300 font-semibold z-10 mb-5'
            >
                Proceed
            </button>
        </div>
        {/* drop down section */}
            {isProceeding && (
                <div className=''>
                    {/* products, total price and quantity ordered */}
                    <div className='flex items-center justify-between'>
                        <div>
                            <span className='block'>Products</span>
                            <span className='block text-[#4e4e45] text-sm'>{ cartQuantity } selected</span>
                        </div>
                        <div>${parseFloat(total).toFixed(2)}</div>
                    </div>
                    {/* shipping fee */}
                    <div className='flex items-center justify-between'>
                        <div>
                            <span className='block'>Shipping</span>
                            <span className='block text-[#4e4e45] text-sm'>Plus taxes</span>
                        </div>
                        <div>$5.00</div>
                    </div>
                    {/* overall total */}
                    <div className='flex justify-between items-center'>
                        <div>Total</div>
                        <div>${parseFloat(total + 5.00).toFixed(2)}</div>
                    </div>
                    {/* shipment details */}
                    <div className='border-t border-b border-black my-5 py-3 capitalize'>
                        <p className='uppercase font-semibold text-lg mb-4'>Shipment details</p>
                        <p>joe goldberg</p>
                        <p>address</p>
                    </div>
                    {/* payment details */}
                    <div className='pb-3 text-sm'>
                        <p className='uppercase font-semibold text-lg mb-4'>payment details</p>
                        <div>
                            <span className='text-[#4e4e45]'>Card type: </span>
                            <span className='capitalize'>visa</span>
                        </div>
                        <div>
                            <span className='text-[#4e4e45]'>Card holder: </span>
                            <span className='capitalize'>name</span>
                        </div>
                        <div>
                            <span className='text-[#4e4e45]'>Card number: </span>
                            <span>847</span>
                        </div>
                        <div>
                            <span className='text-[#4e4e45]'>Expiry date: </span>
                            <span>77/99</span>
                        </div>
                    </div>
                    {/* button */}
                    <div className='flex justify-center mt-4'>
                        <button className='border border-black rounded-md px-4 py-2 bg-[#f0ffcd] hover:bg-[#D5ED9F] transition-all duration-300 w-full font-semibold uppercase'>Place order</button>
                    </div>
                </div>
            )}
    </div>
  )
}

export default OrderReview
