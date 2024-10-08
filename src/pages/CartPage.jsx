import React, { useContext } from 'react';
import TitleBar from '../components/TitleBar';
import { CartContext } from '../context/CartContext';
// import icons
import { IoAddOutline, IoRemoveOutline, IoCloseOutline } from 'react-icons/io5';
import { CiFaceMeh } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const CartPage = () => {
    // cart context
    const { cart, setCart, cartQuantity, decreaseAmount, total, removeFromCart } = useContext(CartContext);

    const handleIncrease = (item) => {
        setCart((prev) =>
          prev.map((x) => {
            return x.id === item.id ? { ...x, amount: x.amount + 1 } : x;
          })
        );
      };

  return (
    <div className='bg-[#FFFBE6]'>
        <TitleBar title={'my cart'}/>
        <div className='flex-col flex items-center w-full'>
            <h1 className='my-10 uppercase border-b border-black w-fit mx-auto text-black'>my cart ({ cartQuantity })</h1>
            {cart.length > 0 ? (
            <div className='flex flex-col justify-center items-center'>
                <table className='border border-black w-11/12 sm:w-[75vw] md:w-[85vw]'>
                    <thead className='uppercase bg-[#D5ED9F] border-b border-black text-xs sm:text-base'>
                        <tr className=''>
                            <th className='border-r border-black pt-2 font-mono hidden sm:block'>image</th>
                            <th className='border-r border-black pt-2 font-mono'>product</th>
                            <th className='border-r border-black pt-2 font-mono'>product num</th>
                            <th className='border-r border-black pt-2 font-mono'>quantity</th>
                            <th className='border-r border-black px-2 pt-2 font-mono'>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {cart.map((item) => {
                        return (
                            <tr className='border-b border-black text-xs sm:text-base'>
                                <td className='border-r border-black hidden sm:flex justify-center items-center p-3 bg-white'>
                                    <img src={item.image} alt="Product Images" className='sm:h-14 object-contain'/>
                                </td>
                                <td className='border-r border-black py-3 px-1 sm:py-0 sm:px-2 text-xs sm:text-base bg-white'>{item.title}</td>
                                <td className='border-r border-black text-center bg-white'>#{item.id}</td>
                                <td className='border-r border-black bg-white p-3'>
                                    <div className='flex justify-center items-center gap-2'>
                                        <button onClick={() => decreaseAmount(item.id)} className='rounded-full hover:text-white hover:scale-110 transition-all duration-200 border-black p-1.5 bg-[#FFAD60] hover:bg-[#FF9100]'><IoRemoveOutline/></button>
                                        <span>{item.amount}</span>
                                        <button onClick={() => handleIncrease(item)} className='rounded-full hover:text-white hover:scale-110 transition-all duration-200 border-black p-1.5 bg-[#D5ED9F] hover:bg-[#a7bf6e]'><IoAddOutline/></button>
                                    </div>
                                </td>
                                <td className='border-r border-black text-center bg-white p-3'>$ {parseFloat(item.price * item.amount).toFixed(2)} </td>
                                <td className='p-1.5 text-center bg-white'>
                                    <button onClick={() => removeFromCart(item.id)} className='p-1 hover:text-[#00712d]'><IoCloseOutline/></button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <Link to={'/all'} className='mt-4 capitalize text-[#00712D] underline flex justify-center'>
                    continue shopping
                </Link>
                {/* order summary */}
                <div className='flex justify-center sm:justify-end w-full'>
                <div className="m-8 p-6 bg-white border border-black">
                    <h2 className="text-xl font-sans mb-4 capitalize">order summary:</h2>
                    <table className=''>
                        <tbody className='flex flex-col gap-3'>
                            <tr className='border-b border-black'>
                                <td className='px-1.5'>Shipping:</td>
                                <td className='px-3'>$ 10.00</td>
                            </tr>
                            <tr className='border-b border-black'>
                                <td className='px-1.5'>VAT:</td>
                                <td className='px-3'>$ 8.00</td>
                            </tr>
                            <tr className='border-b border-black'>
                                <td className='px-1.5'>Total:</td>
                                <td className='px-3'>{parseFloat(total + 10.00 + 8.00).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to="/checkout" className="mt-4 capitalize bg-[#D5ED9F] hover:bg-[#ff9100] p-2 transition-all duration-200 rounded-md flex justify-center">
                        Proceed to Checkout
                    </Link> 
                </div>
                </div>
            </div>
            ) : (
                <div className='mx-auto my-10'>
                    <h2 className='text-xl font-semibold font-sans'>Uh Oh! Seems like your cart is empty.</h2>
                    <div className='text-9xl flex justify-center text-[#FF9100]'><CiFaceMeh/></div>
                    <Link to={'/all'} className='mt-4 capitalize text-[#00712D] underline flex justify-center'>back to shop</Link>
                </div>
            )}
        </div>
    </div>
  )
}

export default CartPage
