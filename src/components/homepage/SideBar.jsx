import React, { useContext } from "react";
// import icons
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiTrash, CiCircleInfo } from "react-icons/ci";
// import components
import CartItem from "./CartItem";
// import sider bar context
import { SidebarContext } from "../../context/SidebarContext";
// import cart context
import { CartContext } from "../../context/CartContext";

// import link
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, cartQuantity, clearCart, total } = useContext(CartContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {isOpen && (<div onClick={handleClose} className="bg-black h-full w-full opacity-20 fixed top-0 z-30 transition-all duration-300"></div>)}
      <div className= {`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl sm:w-[60vw] md:w-[50vw] xl:max-w-[30vw] transition-all duration-200 z-40 px-4 lg:px-[35px] overflow-auto`}>
     <div className="flex items-center justify-between pt-6 pb-2 border-b border-black">
      <div  className="text-sm uppercase hover:text-[#FF9100] font-semibold">My cart ({ cartQuantity })</div>
      {/* icon for closing siderbar */}
      <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center hover:text-[#FF9100]">
        <IoIosCloseCircleOutline className="text-2xl"/>
      </div>
     </div>
     {/* items in cart */}
     <div className="flex flex-col gap-y-2 h-[350px] overflow-y-auto overflow-x-hidden border-b scrollbar-none">
      {cart.map(item => {
        return <CartItem item={ item } key={item.id} />
      })}
     </div>
     <div>
      {/* help text */}
      <div className="text-xs mt-4 text-[#4e4e45] flex relative group">
        <CiCircleInfo className="text-lg"/>
        <p>To view more details about the products, click <Link to={'/cart'} onClick={handleClose} className="hover:underline hover:cursor-pointer hover:text-[#ff9100]">Here</Link>.</p>
        <p className='absolute -right-5 -top-8 transform -translate-x-2/4 mb-2 hidden group-hover:block bg-white text-black border border-black text-xs py-0.5 px-1.5 z-10'>View Cart</p>
      </div>
      <div className="flex justify-between items-end my-5">
        {/* total */}
        <div>
          <span className="uppercase">total: </span>
          <span className="text-green-800">${ parseFloat(total).toFixed(2) }</span>
        </div>
        {/* clear cart icon and tooltip text */}
        <div className="relative group">
          {/* clear cart icon */}
          <div onClick={clearCart} className="bg-red-600 text-white p-1.5 cursor-pointer text-2xl rounded-sm">
            <CiTrash/>
          </div>
          <div className='absolute left-1/2 -bottom-10 transform -translate-x-2/4 mb-2 hidden group-hover:block bg-white text-black border border-black text-xs p-1 z-10 w-16'>Delete all</div>
        </div>
      </div>
      <div className="flex items-end justify-center mb-4 gap-4">
        <Link to={`${isLoggedIn ? '/checkout' : '/login'}`} onClick={handleClose} className="bg-[#D5ED9F] hover:bg-[#FF9100] flex p-4 justify-center items-center text-black w-full uppercase rounded-md">checkout</Link>
      </div>
     </div>
    </div>
    </div>
  )
};

export default SideBar;