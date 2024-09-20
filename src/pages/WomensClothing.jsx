import React, { useContext } from 'react';
// import product context
import { ProductContext } from '../context/ProductContext';
// import components
import Product from '../components/Product';
import TitleBar from '../components/TitleBar';

const WomensClothing = () => {
  // product context
  const { products } = useContext(ProductContext);

  // filtering the womens clothing category
  const womensCategory = products.filter((items) => {
    return items.category === 'women\'s clothing'
  });

  return (
    <div className='bg-[#FFFBE6]'>
      <TitleBar title={'women\'s clothing'}/>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:mx-32 mx-10 md:mx-16 lg:mx-20 py-10 gap-10'>
        {womensCategory.map((items)=>{
          return(
            <Product product={items} key={items.id}/>
          )
        })};
      </section>
    </div>
  )
}

export default WomensClothing;
