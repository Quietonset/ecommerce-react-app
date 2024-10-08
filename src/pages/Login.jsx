import React, { useContext, useState } from 'react';
import { CiUser } from "react-icons/ci";
import { CiUnread } from "react-icons/ci";
import { CiRead } from 'react-icons/ci';
import { useForm } from "react-hook-form";
import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginValidationSchema } from '../validations/LoginValidations';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Login = () => {
    const form = useForm({resolver: zodResolver(loginValidationSchema)});
    const { register, handleSubmit, control, formState: { errors } } = form;
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [ showPassword, setShowPassword ] = useState(false);

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    const handlePasswordVisibility = ()=>{
        setShowPassword((show) => !show);
    };

    const navigate = useNavigate();
    const submitForm = ()=>{
        setTimeout(()=>{
            setIsPopupVisible(true);
            setTimeout(()=>{
                navigate('/checkout');
            }, 1000);
        }, 2000);
        setIsLoggedIn(true);
    };
  return (
    <div className='flex justify-center items-center h-fit py-[83px] bg-[#FFFBE6]'>
        <div className='w-[420px] bg-transparent py-7 px-10'>
            <form action="" onSubmit={handleSubmit(submitForm)} className='flex flex-col gap-2'>
                <h1 className='text-4xl text-center font-bold uppercase text-[#FF9100]'>login</h1>
                {/* input box */}
                <div className='flex w-full h-12 mt-7 mb-2 relative'>
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
                        <div className='text-red-500 text-sm text-center'>
                            {errors.username.message}
                        </div>
                    )}
                </div>
                <div className='flex w-full h-12 my-2 relative'>
                    <input 
                    type={ showPassword ? 'text' : 'password' } 
                    id='password' 
                    {...register('password')}
                    placeholder='Password'
                    className='w-full border border-black hover:border-black focus:outline-1 focus:outline-[#a1b86d] rounded py-5 pl-2 pr-11'
                    />
                    <div onClick={handlePasswordVisibility} className='absolute right-4 top-3 text-2xl'>
                        { showPassword ? <CiRead/> : <CiUnread/> }
                    </div>
                </div>
                <div className='h-[20px] mb-4'>
                    {errors.password && (
                        <p className='text-red-500 text-sm text-center'>
                            {errors.password.message}
                        </p>
                    )}
                </div>
                <div className='flex justify-between text-sm mx-3.5'>
                    <label className='accent-[#ff9100] flex items-center gap-2 capitalize'>
                        <input type="checkbox" /> remember me 
                    </label>
                    <a href="#" className='hover:underline hover:text-[#ff9100]'>Forgot password?</a>
                </div>
                <button 
                type='submit'
                onSubmit={submitForm} 
                className='uppercase w-full h-11 bg-[#D5ED9F] text-black hover:bg-[#ff9100] transition-all outline-none border-none shadow text-sm active:scale-105 my-3'>login</button>
                <div className='text-sm text-center mt-5'>
                    <p>don't have an account?
                        <Link to='/signUp' className='hover:underline mx-1 hover:text-[#ff9100]'>Sign Up</Link>
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

export default Login;
