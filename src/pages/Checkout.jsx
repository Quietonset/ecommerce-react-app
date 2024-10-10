import React, { useContext, useState } from 'react';
import { CiCreditCard1, CiBank, CiCreditCard2 } from "react-icons/ci";
import Card from '../components/Card';
import BankAccount from '../components/BankAccount';
import { CartContext } from '../context/CartContext';
// importing logo image
import logo from '../assets/images/logo-3.png';
import { AuthContext } from '../context/AuthContext';
import Login from './Login';

const Checkout = () => {
  // state to hold input values to be displayed
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    cardName: '',
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // state for toggling card or bank account
  const [ content, setContent ] = useState(<Card/>);
  const [ focusState, setFocusState ] = useState(false);

  // function to display card features
  const showCardDisplay = (e) => {
    e.preventDefault();
    setContent(<Card/>);
  };
  // function to display bank account features
  const showBankAccountDisplay = (e) => {
    e.preventDefault();
    setContent(<BankAccount/>);
    setFocusState(true);
  };

   // cart context
   const { total, cartQuantity, cart } = useContext(CartContext);

   // for button state
   const [ isProceeding, setIsProceeding ] = useState(false);

   // function to control button state 
   const handleBtn = (e) => {
       e.preventDefault();
       for (const names in inputs){
        console.log(names);
        if (inputs, names) {
          const element = inputs[names];
          console.log(element);
          
        }
       }
        setIsProceeding(true);
   };
   
   const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? (
    <div className='flex gap-2 bg-[#FFFBE6] h-full'>
      {/* cart display */}
      <div className='hidden sm:block border-r border-black p-4 bg-white pt-20 w-[35vw] h-screen sticky top-0'>
        {/* for logo */}
        <div className='flex items-center gap-0.5 bg-[#b9d182] w-fit px-2 border border-black relative'>
          <div className='w-[5px] md:h-[92vh] lg:h-[85vh] bg-[#5c5c52] absolute -top-2 -z-10'></div>
          <img src={ logo } alt="Logo Image" className='w-[30px] h-[30px] object-contain' />
          <h1 className='uppercase font-sans font-semibold'>fashion essentials</h1>
        </div>
        <div className='absolute bottom-0 left-2 w-[40px] h-[30px] border-t-[8px] border-l-[8px] border-r-[8px] border-b-[20px] border-r-transparent border-l-transparent border-t-transparent border-b-black'></div>
        {/* display */}
        <div className='my-10 ml-3'>
          <h2 className='mx-3 font-sans text-[#4e4e45]'>Total</h2>
          <div className='text-2xl mx-4'>$ {parseFloat(total).toFixed(2)}</div>
          <h2 className='mx-3 mt-5 font-sans text-[#4e4e45]'>Summary</h2>
          {cart.map((product) => {
            return (
              <div className='m-3 flex justify-between items-end' key={product.id}>
                <p className='ml-3 text-sm'>{product.title}</p>
                <p className='mr-3 text-sm'>${product.price}</p>
              </div>
            )
          })}
        </div>
      </div>
      {/* checkout display */}
      <div className='my-10 sm:my-20'>
        <form className="rounded-lg pr-10 pl-5 flex flex-col gap-4 w-[85%] sm:w-[65vw]">
          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col w-full'>
              <label htmlFor="first-name" className='text-[#4e4e54]'>First name <span className='text-red-500'>*</span></label>
              <input 
              type="text"
              name='firstName'
              value={inputs.firstName}
              onChange={handleChange}
              placeholder='Joe' 
              className='border border-black rounded hover:border-black focus:outline-1 focus:outline-[#a1b86d] pl-2 h-10 placeholder:text-xs sm:placeholder:text-base w-[90%]' />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor="last-name" className='text-[#4e4e54]'>Last name <span className='text-red-500'>*</span></label>
              <input 
              type="text"
              name='lastName'
              value={inputs.lastName}
              onChange={handleChange}
              placeholder='Goldberg' 
              className='border border-black rounded hover:border-black focus:outline-1 focus:outline-[#a1b86d] pl-2 h-10 placeholder:text-xs sm:placeholder:text-base w-[90%]' />
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="address" className='text-[#4e4e54]'>Address <span className='text-red-500'>*</span></label>
            <input 
            type="text" 
            name='address'
            value={inputs.address}
            onChange={handleChange}
            placeholder='71 Golden Avenue, Off Agip Junction, Port Harcourt' 
            className='border border-black rounded hover:border-black focus:outline-1 focus:outline-[#a1b86d] pl-2 h-10 placeholder:text-xs sm:placeholder:text-base w-[95%]'/>
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col w-full'>
              <label htmlFor="city" className='text-[#4e4e54]'>City <span className='text-red-500'>*</span></label>
              <input 
              type="text"
              name='city'
              value={inputs.city}
              onChange={handleChange}
              placeholder='Port Harcourt'
              className='border border-black rounded hover:border-black focus:outline-1 focus:outline-[#a1b86d] pl-2 h-10 placeholder:text-xs sm:placeholder:text-base w-[90%]' />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor="state" className='text-[#4e4e54]'>State <span className='text-red-500'>*</span></label>
              <input 
              type="text"
              name='state'
              value={inputs.state}
              onChange={handleChange} 
              placeholder='Rivers State' 
              className='border border-black rounded hover:border-black focus:outline-1 focus:outline-[#a1b86d] pl-2 h-10 placeholder:text-xs sm:placeholder:text-base w-[90%]' />
            </div>
          </div>
          <p className='mt-4'>Please select a mode of payment <span className='text-red-500'>*</span></p>
          <div className="grid grid-cols-2 sm:flex sm:gap-4">
            <button onClick={showCardDisplay} className={`${focusState ? 'border border-black' : 'border-2 border-[#ff9100]'} shadow-md h-12 pl-5 py-5 bg-[#D5ED9F] hover:bg-[#c5dc8e] hover:cursor-pointer flex items-center gap-1 w-[150px] sm:w-full font-semibold rounded-md focus:border-2 focus:border-[#ff9100] transition-all duration-200`}>
              <CiCreditCard1 className='text-xl'/>
              <p>Card</p>
            </button>
            <button onClick={showBankAccountDisplay} className='shadow-md h-12 pl-5 py-5 bg-[#D5ED9F] hover:bg-[#c5dc8e] hover:cursor-pointer flex items-center gap-1 w-[150px] sm:w-full font-semibold border border-black rounded-md focus:border-[#ff9100] focus:border-2 transition-all duration-200'>
              <CiBank className='text-xl'/> 
              <p>Bank account</p>
            </button>
          </div>
          <div className='w-[93%] sm:w-full sm:h-[260px] mb-3'>
            {content}
          </div>
          {/* entire order review section */}
          <div>
            {/* button */}
            <div className='flex sm:justify-end'>
              <button 
              type='submit'
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
                    <div>$10.00</div>
                  </div>
                  {/* overall total */}
                  <div className='flex justify-between items-center'>
                    <div>Total</div>
                    <div>${parseFloat(total + 10.00).toFixed(2)}</div>
                  </div>
                  {/* shipment details */}
                  <div className='border-t border-b border-black my-5 py-3 capitalize'>
                    <p className='uppercase font-semibold text-lg mb-4'>Shipment details</p>
                    {/* display the submitted data */}
                      <div className='capitalize'>
                        <div>
                          <span>To: </span>
                          <span className='text-[#4e4e45]'>{inputs.firstName}</span>
                          <span className='text-[#4e4e45]'> {inputs.lastName}</span>
                        </div>
                        <p>{inputs.address}.</p>
                        <p>{inputs.city}, {inputs.state}.</p>
                      </div>
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
        </form>
      </div>
    </div>
  ) : (<Login/>)
}

export default Checkout
