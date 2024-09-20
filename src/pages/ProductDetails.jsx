import React, { useContext} from 'react';
// import useParams
import { Link, useNavigate, useParams } from 'react-router-dom';
// import cart context
import { CartContext } from '../context/CartContext';
// import product context
import { ProductContext } from '../context/ProductContext';
import { CiHome } from 'react-icons/ci';

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
  const { title, price, description, image } = product;

  //using useNavigate for navigation
  const navigate = useNavigate();
  const backToHome = () => {
    navigate('/');
  };

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center my-24'>
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
            <div className='text-xl text-red-500 font-medium mb-6 '>$ { price }</div>
            <p className='mb-8 px-5 sm:px-0'>{ description }</p>
            <div className='flex justify-center sm:justify-start items-center gap-3'>
              <button onClick={() => addToCart(product, product.id)} className='uppercase bg-[#D5ED9F] py-4 px-8 text-black hover:bg-[#FF9100] hover:text-black active:scale-105 w-fit rounded-md'>add to my cart</button>
              <button onClick={() => backToHome} className='uppercase bg-[#D5ED9F] p-4 text-black hover:bg-[#FF9100] hover:text-black active:scale-105 w-fit rounded-md text-2xl'><CiHome/></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails;
