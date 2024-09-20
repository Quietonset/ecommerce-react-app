import React, { useContext } from 'react';
// import product context
import { ProductContext } from '../context/ProductContext';
// import components
import Product from '../components/Product';
import TitleBar from '../components/TitleBar';

const Jewelery = () => {
  // product context
  const { products } = useContext(ProductContext);

  // filtering the category for jewelery
  const jewelery = products.filter((items) => {
    return items.category === 'jewelery'
  });


  return (
     <div className='bg-[#FFFBE6]'>
      <TitleBar title={'jeweleries'}/>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-10 md:mx-16 lg:mx-20 py-10 gap-10'>
        {jewelery.map((items)=>{
          return(
            <Product product={items} key={items.id}/>
          )
        })};
      </section>
    </div>
  )
}

export default Jewelery
