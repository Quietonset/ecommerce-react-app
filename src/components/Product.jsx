import React, {useContext, useState, } from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { CgMathPlus } from "react-icons/cg";
import { HiViewfinderCircle } from "react-icons/hi2";
import { CiStar } from "react-icons/ci";
import { FcOk } from "react-icons/fc";
// import cart context
import { CartContext } from '../context/CartContext';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    // destructure product
    const { id, image, category, title, price } = product;

    // state for pop-up message
    const [ isPopupVisible, setIsPopupVisible ] = useState(false);

    const handlePopup = () => {
      setIsPopupVisible(true);
      setTimeout(() => {
        setIsPopupVisible(false)
      }, 1000);
    }

  return (
    <div>
      <div className='border-2 bg-white border-black px-1.5 flex items-center justify-center relative w-full h-[320px] max-w-sm mx-auto md:max-w-none md:mx-0 rounded-md'>
        <div className='flex justify-center items-center flex-col group p-10'>
          <img src={image} className='rounded-md mb-2 h-[200px] w-[200px] object-contain'/>
          <div className='flex flex-col justify-center items-center gap-2 bg-black w-full h-[316px] opacity-0 absolute group-hover:opacity-40 hover:cursor-pointer text-3xl transition-all duration-300'></div>
          <div className='flex flex-col justify-center items-center w-full h-[316px] absolute hover:cursor-pointer text-3xl overflow-hidden'>
            <button onClick={() => { addToCart(product, id), handlePopup() }} title='Add to cart' className='bg-[#D5ED9F] absolute bottom-[100px] -right-28 opacity-0 translate-x-0 group-hover:-translate-x-[225%] group-hover:opacity-100 transition-all transform hover:scale-110 duration-300 capitalize px-2 py-0.5 mx-1 mb-3.5 w-[50px] h-[50px] flex justify-center items-center text-xl hover:text-[#FF9100] rounded-full'>
              <CgMathPlus/>
            </button>
            <Link to={`/product/${id}`} title='View product' className='bg-[#FF9100] absolute bottom-[53px] -right-28 opacity-0 translate-x-0 group-hover:-translate-x-[225%] group-hover:opacity-100 transition-all transform hover:scale-110 duration-300 capitalize px-2 py-0.5 mx-1 mb-1.5 w-[50px] h-[50px] flex justify-center items-center text-xl hover:text-white rounded-full'>
              <HiViewfinderCircle/>
            </Link>
            <button onClick={() => addToCart()} title='Add to wishlist' className='bg-[#FFEAC5] absolute bottom-[4px] -right-28 opacity-0 
            translate-x-0 group-hover:-translate-x-[225%] group-hover:opacity-100 transition-all transform hover:scale-110 duration-300 capitalize px-2 py-0.5 mx-1 w-[50px] h-[50px] flex justify-center items-center text-2xl hover:text-[#FF9100] rounded-full'>
              <CiStar/>
            </button>
          </div>
        </div>
      </div>
      {/* price, title, category */}
      <div className='my-2 sm:mx-24 md:mx-0 lg:mx-0 relative lg:block'>
        <div className='text-[#4e4e54] capitalize text-xs'>{category}</div>
        <div className='w-full'>{title}</div>
        <div className='text-[#FF9100] absolute sm:top-10 lg:top-16 right-0 border border-black bg-white rounded-md p-1.5'>
          $ {price}
        </div>
      </div>
      {isPopupVisible && (
        <div className='fixed inset-0 flex items-end justify-end bg-black bg-opacity-20 z-20'>
          <div className={`bg-[#D5ED9F] p-6 rounded-l-full shadow relative mx-4 mb-20 slide transition-transform duration-500 ${isPopupVisible ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex items-center gap-2'>
              <p className='uppercase font-semibold'>Item added to cart!</p>
              <FcOk/>
            </div>
            {/* <button onClick={() => setIsPopupVisible(false)} className="absolute -top-3 -right-3 text-lg bg-white rounded-full p-1 hover:bg-[#ff9100] hover:text-white">
              <IoCloseOutline/>
            </button> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default Product
