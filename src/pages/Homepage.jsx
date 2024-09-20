import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext';
import Hero from '../components/Hero';
import Product from '../components/Product';
const Homepage = () => {
  // product context
  const { products } = useContext(ProductContext);

  return (
    <div className='bg-[#FFFBE6]'>
      <Hero key={products.id} product={products}/>
      <h2 className='uppercase text-xl md:text-2xl xl:text-4xl text-black text-center pt-10 underline font-sans'>popular products</h2>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-10 md:mx-16 lg:mx-20 py-10 gap-10'>
        {products.slice(0,8).map((items)=>{
          return(
            <Product product={items} key={items.id}/>
          )
        })}
      </section>
    </div>
  )
}

export default Homepage
