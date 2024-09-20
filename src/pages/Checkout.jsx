import React, { useContext, useState } from 'react';
import { CiCreditCard1, CiBank, CiCreditCard2 } from "react-icons/ci";
import Card from '../components/Card';
import BankAccount from '../components/BankAccount';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';

const Checkout = () => {
  // setting a state for data in input tags
  const [ inputs, setInputs ] = useState({
    firstName: '',
    lastName: '',
    address: '',
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = (d) => {
    alert(JSON.stringify)
  }

  // handles changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  // state for toggling card or bank account
  const [ content, setContent ] = useState(<Card/>);

  // function to display card features
  const showCardDisplay = (e) => {
    e.preventDefault();
    setContent(<Card/>);
  };
  // function to display bank account features
  const showBankAccountDisplay = (e) => {
    e.preventDefault();
    setContent(<BankAccount/>);
  };

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
    <div className='flex items-center justify-center h-fit bg-[#FFFBE6]'>
      {/* cart display */}
      <div>
        {/* <CartPage/> */}
      </div>
      {/* checkout display */}
      <div className='m-20'>
        <form className="rounded-lg p-10 flex flex-col gap-4 w-[70vw] h-fit">
          <div className='flex gap-4'>
            <div className='flex flex-col w-full'>
              <label htmlFor="first-name" className='text-[#4e4e54]'>First name <span className='text-red-500'>*</span></label>
              <input 
              type="text"
              id='firstName'
              name='firstName'
              value={inputs.firstName}
              onChange={handleChange}
              placeholder='Joe' 
              className='border border-black rounded hover:border-black focus:outline-1 focus:outline-[#a1b86d] pl-2 h-10' />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor="last-name" className='text-[#4e4e54]'>Last name <span className='text-red-500'>*</span></label>
              <input 
              type="text"
              id='lasttName'
              name='lasttName'
              value={inputs.lastName}
              onChange={handleChange}
              placeholder='Goldberg' 
              className='border border-black rounded hover:border-black focus:outline-1 focus:outline-[#a1b86d] pl-2 h-10' />
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="address" className='text-[#4e4e54]'>Address <span className='text-red-500'>*</span></label>
            <input type="text" placeholder='71 Golden Avenue, Off Agip Junction, Port Harcourt' className='border border-black rounded hover:border-black focus:outline-1 focus:outline-[#a1b86d] pl-2 h-10'/>
          </div>
          <div className='flex gap-4'>
            <div className='flex flex-col w-full'>
              <label htmlFor="city" className='text-[#4e4e54]'>City <span className='text-red-500'>*</span></label>
              <input type="text" placeholder='Port Harcourt' className='border border-black rounded hover:border-black focus:outline-1 focus:outline-[#a1b86d] pl-2 h-10' />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor="state" className='text-[#4e4e54]'>State <span className='text-red-500'>*</span></label>
              <input type="text" placeholder='Rivers State' className='border border-black rounded hover:border-black focus:outline-1 focus:outline-[#a1b86d] pl-2 h-10' />
            </div>
          </div>
          <p className='mt-4'>Please select a mode of payment <span className='text-red-500'>*</span></p>
          <div className="flex gap-4">
            <button onClick={showCardDisplay} className='shadow-md h-12 pl-5 py-5 bg-[#D5ED9F] hover:bg-[#c5dc8e] hover:cursor-pointer flex items-center gap-1 w-full font-semibold border border-black rounded-md'>
              <CiCreditCard1 className='text-xl'/>
              <p>Card</p>
            </button>
            <button onClick={showBankAccountDisplay} className='shadow-md h-12 pl-5 py-5 bg-[#D5ED9F] hover:bg-[#c5dc8e] hover:cursor-pointer flex items-center gap-1 w-full font-semibold border border-black rounded-md'>
              <CiBank className='text-xl'/> 
              <p>Bank account</p>
            </button>
          </div>
          {content}
          {/* entire order review section */}
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
                    <span>{inputs.firstName}</span> 
                    <span>{inputs.lastName}</span>
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
        </form>
      </div>
    </div>
  )
}

export default Checkout
