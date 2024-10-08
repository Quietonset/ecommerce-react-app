/* eslint-disable no-unused-vars */
import React, { createContext } from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { IoHourglassOutline } from "react-icons/io5";
export const ProductContext = createContext();

const fetchProducts = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
};


export const ProductProvider = ({ children }) => {
  const { data: products = [], isPending, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  // console.log(products);
  

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#D5ED9F] scale-2">
          <IoHourglassOutline className="mr-3 text-[#FF9100] animate-[rotate_4s_ease-in-out_infinite] w-[100px] h-[100px]" />
      </div>
    );
    
  }

  if (error) {
    return <div className="flex flex-col items-center justify-center min-h-screen bg-[#D5ED9F] text-red-700">
      <p className="font-bold capitalize">ERROR: {error.message}.</p>
      <div className="px-10 sm:px-0">
        <p>Try:</p>
        <ul className="list-disc ml-10">
          <li>Turning off Aeroplane Mode.</li>
          <li>Reloading the page.</li>
          <li>Ensure that you are properly connected to a Mobile Data or Wi-Fi.</li>
          <li>Check the signal in your area.</li>
        </ul>
      </div>
      </div>
  };
  

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};


export default ProductProvider;



