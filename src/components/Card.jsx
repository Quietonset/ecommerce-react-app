import React from 'react';
import { CiCreditCard2 } from 'react-icons/ci';

const Card = () => {
  return (
    <div className='w-full h-[260px] rounded-md border border-black shadow-lg'>
        <div className='flex justify-between mx-5 my-5'>
            <p className='uppercase font-semibold'>Credit card</p>
            <CiCreditCard2 className='text-3xl'/>
        </div>
        <div className='flex gap-4 mx-5'>
            <div className='flex flex-col w-4/5'>
                <label htmlFor="first-name" className='text-[#4e4e54]'>Card number <span className='text-red-500'>*</span></label>
                <input 
                type="number" 
                placeholder='0000 0000 0000 0000' 
                minLength={16} 
                className='border border-black rounded hover:border-black focus:outline-1 focus:outline-[#a1b86d] pl-2 h-10' />
            </div>
            <div className='flex flex-col w-1/5'>
                <label htmlFor="last-name" className='text-[#4e4e54]'>CVV <span className='text-red-500'>*</span></label>
                <input 
                type="number" 
                placeholder='123'
                maxLength={3} 
                className='border border-black rounded hover:border-black focus:outline-1 focus:outline-[#a1b86d] pl-2 h-10' />
            </div>
        </div>
        <div className='flex gap-4 mx-5 my-3'>
            <div className='flex flex-col w-full'>
                <label htmlFor="name" className='text-[#4e4e54]'>Name <span className='text-red-500'>*</span></label>
                <input type="text" placeholder='Joe Goldberg' className='border border-black rounded hover:border-black focus:outline-1 focus:outline-[#a1b86d] pl-2 h-10' />
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor="expiration-date" className='text-[#4e4e54]'>Expiration date <span className='text-red-500'>*</span></label>
                <input type="month" className='border border-black rounded hover:border-black focus:outline-1 focus:outline-[#a1b86d] pl-2 h-10' />
            </div>
        </div>
    </div>
  )
}

export default Card
