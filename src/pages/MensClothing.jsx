import React, { useContext } from 'react';
// import product context
import { ProductContext } from '../context/ProductContext';
// import components
import Product from '../components/Product';
// import icons
import TitleBar from '../components/TitleBar';

const MensClothing = () => {
  // product context
  const { products } = useContext(ProductContext);

  // filter out mens category
  const mensCategory = products.filter((items) => {
    return items.category === 'men\'s clothing'
  });

  // for reversing the order in which the products are displayed
  const reversedMensCategory = mensCategory.reverse();
  return (
    <div className='bg-[#FFFBE6]'>
      <TitleBar title={'men\'s clothing'}/>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-10 md:mx-16 lg:mx-20 py-10 gap-10'>
        {reversedMensCategory.map((items)=>{
          return(
            <Product product={items} key={items.id}/>
          )
        })};
      </section>
    </div>
  )
}

export default MensClothing;
