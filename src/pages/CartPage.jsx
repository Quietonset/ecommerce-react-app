import React, { useContext } from 'react';
import TitleBar from '../components/TitleBar';
import { CartContext } from '../context/CartContext';
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CiFaceMeh } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const CartPage = () => {
    // cart context
    const { cart, cartQuantity, increaseAmount, decreaseAmount, total } = useContext(CartContext);

  return (
    <div className='bg-[#FFFBE6] h-fit'>
        <TitleBar title={'my cart'}/>
        <div className='flex flex-col justify-center h-screen my-20'>
            <h1 className='my-10 uppercase border-b border-black w-fit mx-auto text-black'>my cart ({ cartQuantity })</h1>
            {cart.length > 0 ? (
            <div className='flex flex-col justify-center items-center'>
                <table className='border border-black w-[75vw] h-[260px]'>
                    <thead className='uppercase bg-[#D5ED9F] border-b border-black'>
                        <tr className=''>
                            <th className='border-r border-black text-start px-2 pt-2'>image</th>
                            <th className='border-r border-black text-start px-2 pt-2'>product</th>
                            <th className='border-r border-black text-start px-2 pt-2'>model</th>
                            <th className='border-r border-black text-start px-2 pt-2'>quantity</th>
                            <th className='text-start px-2 pt-2'>price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cart.map((item) => {
                        return (
                            <tr className='border-b border-black'>
                                <td className='border-r border-black flex justify-center items-center p-3'>
                                    <img src={item.image} alt="Product Images" className='sm:h-14 object-contain'/>
                                </td>
                                <td className='border-r border-black px-2 text-xs sm:text-base'>{item.title}</td>
                                <td className='border-r border-black text-center'>#{item.id}</td>
                                <td className='border-r border-black'>
                                    <div className='flex justify-center items-center gap-2'>
                                        <button onClick={() => increaseAmount(item.id)} className='border border-black p-0.5 hover:bg-[#638414] hover:text-white'><IoMdAdd/></button>
                                        <span>{item.amount}</span>
                                        <button onClick={() => decreaseAmount(item.id)} className='border border-black p-0.5 hover:bg-[#FF9100] hover:text-white'><IoMdRemove/></button>
                                    </div>
                                </td>
                                <td className='text-center'>$ {parseFloat(item.price * item.amount).toFixed(2)} </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <Link to={'/all'} className='mt-4 capitalize text-[#00712D] underline flex justify-center'>
                    back to shop
                </Link>
                {/* order summary */}
                <div className='flex justify-end'>
                <div className="m-8 rounded-lg p-6 w-full sm:w-[300px] flex flex-col justify-center items-center">
                    <h2 className="text-xl font-bold mb-4 capitalize">order summary:</h2>
                    <table className='border border-black'>
                        <tbody>
                            <tr>
                                <td className='border-r border-b border-black px-1.5'>Shipping Fee:</td>
                                <td className='border-b border-black px-3'>$ 4.00</td>
                            </tr>
                            <tr>
                                <td className='border-r border-black border-b px-1.5'>VAT:</td>
                                <td className='border-b border-black px-3'>$ 13.00</td>
                            </tr>
                            <tr>
                                <td className='border-r border-black px-1.5'>Total:</td>
                                <td className='px-3'>{total.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to="/checkout" className="block w-[200px] mt-6 text-center bg-black text-white py-2 rounded hover:bg-[#FF9100]">
                        Proceed to Checkout
                    </Link> 
                </div>
                </div>
            </div>
            
            ) : (
                <div className='mx-auto'>
                    <h2 className='text-xl font-semibold'>Uh Oh! Seems like your cart is empty.</h2>
                    <div className='text-9xl flex justify-center text-[#FF9100]'><CiFaceMeh/></div>
                    <Link to={'/all'} className='mt-4 capitalize text-[#00712D] underline flex justify-center'>
                        back to shop
                    </Link>
                </div>
            )}
        </div>
    </div>
  )
}

export default CartPage
