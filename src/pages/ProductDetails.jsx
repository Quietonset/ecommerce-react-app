import React, { useContext, useState} from 'react';
// import useParams
import { Link, useNavigate, useParams } from 'react-router-dom';
// import cart context
import { CartContext } from '../context/CartContext';
// import product context
import { ProductContext } from '../context/ProductContext';
// import icons
import { CiHome } from 'react-icons/ci';
import { FcOk } from 'react-icons/fc';

const ProductDetails = () => {
  // getting the product id from the api
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // getting the individual products based on its id
  const product = products.find(item => {
    return item.id === parseInt(id);
  });

  // destructure product
  const { title, price, description, image, rating } = product;

  // state for pop-up message
  const [ isPopupVisible, setIsPopupVisible ] = useState(false);

  const handlePopup = () => {
    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false)
    }, 1000);
  };


  return (
    <section className='h-screen flex items-center my-24'>
      <div className="container mx-auto">
        {/* image and text wrapper */}
        <div className='flex flex-col lg:flex-row items-center'>
          {/* image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:my-0'>
            <img className='max-w-[200px] lg:max-w-xs' src={ image } alt="Product Image" />
          </div>
          {/* text */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[18px] sm:text-[26px] font-light mb-2 pb-2 mx-auto lg:mx-0 uppercase sm:border-b border-black w-fit'>{ title }</h1>
            <div className="flex gap-5 text-xl justify-center lg:justify-start">
              <div className='text-red-500 font-medium mb-6 '>$ { price }</div>
              <div>Rating: {rating.rate} / 5 Stars</div>
            </div>
            <p className='mb-8 px-5 sm:px-0'>{ description }</p>
            <div className='flex justify-center sm:justify-start items-center gap-3'>
              <button onClick={() =>{ addToCart(product, product.id), handlePopup()}} className='uppercase bg-[#D5ED9F] py-4 px-8 text-black hover:bg-[#FF9100] hover:text-black active:scale-105 w-fit rounded-md'>add to my cart</button>
              <Link to={'/'} className='uppercase bg-[#D5ED9F] p-4 text-black hover:bg-[#FF9100] hover:text-black active:scale-105 w-fit rounded-md text-2xl'><CiHome/></Link>
            </div>
          </div>
        </div>
      </div>
      {isPopupVisible && (
        <div className='fixed inset-0 flex items-end justify-end bg-black bg-opacity-20 z-20'>
          <div className={`bg-[#D5ED9F] p-6 rounded-l-full shadow relative mx-4 mb-20 slide transition-transform duration-500`}>
            <div className='flex items-center gap-2'>
              <p className='uppercase font-semibold'>Item added to cart!</p>
              <FcOk/>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductDetails;
