import React, { useContext } from 'react';
// import product context 
import { ProductContext } from '../context/ProductContext';
// import components
import Category from '../components/Category';
import Product from '../components/Product';

const AllProducts = () => {
    // import products using useContext
    const { products } = useContext(ProductContext);
    // filtering out men, women, and jewelery category
    const filteredProducts = products.filter((item) => {
        return item.category === 'men\'s clothing' || item.category === 'women\'s clothing' || item.category === 'jewelery'
    })
    return (
        <div className='bg-[#FFFBE6]'>
            <h2 className='uppercase text-4xl text-black text-center pt-10 underline'>shop</h2>
            <div className='block sm:hidden'><Category title={'all'}/></div>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-10 md:mx-16 lg:mx-20 py-10 gap-10'>
                {filteredProducts.map((items)=>{
                    return(
                        <Product product={items} key={items.id}/>
                    )
                })};
            </section>
        </div>
    )
}

export default AllProducts
