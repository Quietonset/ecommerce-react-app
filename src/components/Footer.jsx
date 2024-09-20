import React, { useContext } from 'react';
import { CiFacebook, CiMail, CiInstagram, CiTwitter, CiLocationOn, CiPhone } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className='bg-[#b9d182]'>
      <div className='flex flex-col sm:grid grid-cols-4 px-5 sm:px-20 py-6 gap-3'>
        <div className='hidden sm:block'>
          <h3 className='text-xl font-sans font-semibold mb-3'><span className='border-b border-black pb-1.5'>Our</span> Services</h3>
          <p className='w-4/5'>We offer timeless, versatile pieces designed for everyday wear, blending comfort and style to elevate your wardrobe effortlessly.</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-xl font-sans font-semibold mb-2'><span className='border-b border-black pb-1.5'>Quick</span> Links</h3>
          <p className='hover:cursor-pointer hover:text-[#ff9100]'>Home</p>
          <p className='hover:cursor-pointer hover:text-[#ff9100]'>Blogs</p>
          <p className='hover:cursor-pointer hover:text-[#ff9100]'>Contact Us</p>
          <p className='hover:cursor-pointer hover:text-[#ff9100]'>About Us</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-xl font-sans font-semibold mb-2'><span className='border-b border-black pb-1.5'>Show</span> Now</h3>
          <p className='hover:cursor-pointer hover:text-[#ff9100]'>Collections</p>
          <p className='hover:cursor-pointer hover:text-[#ff9100]'>Trending Products</p>
          <p className='hover:cursor-pointer hover:text-[#ff9100]'>New Arrivals</p>
          <p className='hover:cursor-pointer hover:text-[#ff9100]'>Featured products</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-xl font-sans font-semibold mb-2'><span className='border-b border-black pb-1.5'>Reach</span> Us</h3>
          {/* address */}
          <div className='flex gap-2'>
            <CiLocationOn className='text-4xl'/>
            <p className='capitalize'>45 main road, some area, some street, port harcourt, nigeria.</p>
          </div>
          {/* phone number */}
          <div className='flex items-end'>
            <CiPhone className='text-xl'/>
            <p>+234 802 2654 891</p>
          </div>
          {/* email */}
          <div className='flex items-end gap-2'>
            <CiMail className='text-xl'/>
            <p>contact@fashessentials.com</p>
          </div>
        </div>
      </div>
      <div className='bg-black text-white py-3 px-12 flex justify-between items-center'>
        <p className='capitalize text-sm'>2024 &copy; fashion essentials. all rights reserved. </p>
        <div className='flex text-3xl gap-3'>
          <CiFacebook className='hover:cursor-pointer hover:text-[#ff9100]'/>
          <CiInstagram className='hover:cursor-pointer hover:text-[#ff9100]'/>
          <CiTwitter className='hover:cursor-pointer hover:text-[#ff9100]'/>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
