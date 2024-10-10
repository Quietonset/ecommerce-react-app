import React, { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { CiMail } from 'react-icons/ci';
import { CiPhone } from 'react-icons/ci';
import { PiEyeLight } from 'react-icons/pi';
import { PiEyeSlashLight } from 'react-icons/pi';
import { useForm } from "react-hook-form";
import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { signupValidationSchema } from '../validations/SignupValidation';

const SignUpPage = () => {
  const form = useForm({resolver: zodResolver(signupValidationSchema)});
  const { register, handleSubmit, control, formState: { errors } } = form;
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [ showPassword, setShowPassword ] = useState(false);

  const handlePasswordVisibility = ()=>{
    setShowPassword((show) => !show);
};

  const navigate = useNavigate();
  const onSubmit = ()=>{
    setTimeout(()=>{
        setIsPopupVisible(true);
        setTimeout(()=>{
            navigate('/');
        }, 1000);
    }, 2000);
};

  return (
    <div className='flex justify-center items-center h-full bg-[#FFFBE6] py-10'>
        <div className='w-[420px] bg-transparent text-black rounded-md py-7 px-10'>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-4xl text-center font-bold uppercase text-[#FF9100]'>sign up</h1>
                {/* input box */}
                <div className='flex w-full h-12 mt-7 mb-3 relative'>
                    <input 
                    type="text"
                    placeholder='Username'
                    id='username'
                    {...register('username')}
                    className='w-full border border-black hover:border-black focus:outline-1 focus:outline-[#a1b86d] rounded py-5 pl-2 pr-11'
                    />
                    <CiUser className='absolute right-4 top-3 text-2xl'/>
                </div>
                <div className='h-[20px]'>
                    {errors.username && (
                        <div className='text-red-600 text-sm text-center'>
                            {errors.username.message}
                        </div>
                    )}
                </div>
                <div className='flex w-full h-12 mt-3 mb-3 relative'>
                    <input 
                    type="email"
                    placeholder='Email'
                    id='username'
                    {...register('email')}
                    className='w-full border border-black hover:border-black focus:outline-1 focus:outline-[#a1b86d] rounded py-5 pl-2 pr-11'
                    />
                    <CiMail className='absolute right-4 top-3 text-2xl'/>
                </div>
                <div className='h-[20px]'>
                    {errors.email && (
                        <div className='text-red-600 text-sm text-center'>
                            {errors.email.message}
                        </div>
                    )}
                </div>
                <div className='flex w-full h-12 mt-3 mb-3 relative'>
                    <input 
                    type="number" 
                    placeholder='Phone'
                    id='phone' 
                    {...register('phone')}
                    className='w-full border border-black hover:border-black focus:outline-1 focus:outline-[#a1b86d] rounded py-5 pl-2 pr-11'
                    />
                    <CiPhone className='absolute right-4 top-3 text-2xl'/>
                </div>
                <div className='h-[20px]'>
                    {errors.phone && (
                        <div className='text-red-600 text-sm text-center'>
                            {errors.phone.message}
                        </div>
                    )}
                </div>
                <div className='flex w-full h-12 mt-3 mb-3 relative'>
                    <input 
                    type={ showPassword ? 'text' : 'password' } 
                    placeholder='Password'
                    id='password'
                    {...register('password')}
                    className='w-full border border-black hover:border-black focus:outline-1 focus:outline-[#a1b86d] rounded py-5 pl-2 pr-11'
                    />
                    <div onClick={handlePasswordVisibility} className=' absolute right-4 top-3 text-2xl'>
                        { showPassword ? <PiEyeLight/> : <PiEyeSlashLight/> }
                    </div>
                </div>
                <div className='h-[20px] mb-3'>
                    {errors.password && (
                        <p className='text-red-600 text-sm text-center'>
                            {errors.password.message}
                        </p>
                    )}
                </div>
                <button 
                type='submit'
                onSubmit={onSubmit} 
                className='uppercase w-full h-11 bg-[#D5ED9F] text-black hover:bg-[#ff9100] transition-all outline-none border-none shadow text-sm active:scale-105 my-3'>
                  sign up
                </button>
                <div className='text-sm text-center mt-5'>
                    <p>Already have an account? 
                      <Link to='/login' className='hover:underline mx-1 hover:text-[#ff9100] capitalize'>sign in</Link>
                    </p>
                </div>
            </form>
            <DevTool control={control}/>
            {/* pop-up message */}
            {isPopupVisible && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-[#D5ED9F] p-6 rounded shadow-lg h-[100px]'>
                        <p className='text-gray-700 text-lg'>Form submitted successfully!</p>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default SignUpPage
