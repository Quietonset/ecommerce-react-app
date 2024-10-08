import React from 'react';
import { CiClock2 } from 'react-icons/ci';

const BankAccount = () => {
  return (
    <div className='rounded-md border border-black shadow-lg px-5 pt-2 pb-5 text-wrap'>
      <div className='bg-red-200 border border-red-400 flex mt-5 rounded-md p-2 gap-1 sm:items-center text-xs sm:text-base'>
        <CiClock2 className='text-lg sm:text-2xl'/>
        <p>Your order will be processed once we receive the funds.</p>
      </div>
      <h2 className='mt-4 font-semibold uppercase'>Bank account</h2>
      <div className='flex flex-col gap-3 mt-3'>
        <p>Please transfer the payment to the bank account details shown below.</p>
        <p>Bank: <span className='font-semibold uppercase'>opay</span></p>
        <p>Account number: <span className='font-semibold'>9016796847</span></p>
        <p>Name: <span className='font-semibold uppercase'>fashion essentials</span></p>
      </div>
    </div>
  )
}

export default BankAccount
