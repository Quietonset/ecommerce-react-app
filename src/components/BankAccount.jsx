import React from 'react';
import { CiStopwatch } from 'react-icons/ci';

const BankAccount = () => {
  return (
    <div className='w-full h-[260px] rounded-md border border-black shadow-lg px-5'>
      <div className='bg-red-200 border border-red-400 flex mt-5 rounded-md p-2 gap-1 items-center'>
        <CiStopwatch className='text-2xl'/>
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
