import React, { useContext, useEffect, useState } from 'react';
// import icons
import { CiSearch } from 'react-icons/ci';
import { FaSpinner } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
// import product context
import { ProductContext } from '../context/ProductContext';
// import link
import { Link } from 'react-router-dom';

const SearchBar = () => {
    // state for query
    const [ query, setQuery ] = useState('');
    // setting a state to filter products in search
    const [ filteredProducts, setFilteredProducts ] = useState([]);
    // product context
    const { products } = useContext(ProductContext);


    useEffect(() => {
        // filter products if based on query
        if ( query ) {
            const results = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
            setFilteredProducts(results);
        } else {
            setFilteredProducts(products);
        }
    }, [query, products]);

    // searchbar query
    const [ isSearchBarUsed, setIsSearchBarUsed ] = useState(false);
    const [ searchBarItems, setSearchBarItems ] = useState(false);
    

    return (
        <>
        {/* search design for screen sizes within 768px and above */}
        <div className='hidden md:block lg:block'>
            <div className='rounded-full text-sm w-[200px] bg-white flex justify-around items-center h-11'>
                <input
                type="text"
                value={ query }
                placeholder='Search'
                className='px-2 h-8 mx-3 w-[70%] outline-none'
                onClick={() => setIsSearchBarUsed(!isSearchBarUsed)}
                onChange={(e) => setQuery(e.target.value, setIsSearchBarUsed(true))}
                />
                <CiSearch 
                className='mr-4 text-2xl'
                />
            </div>
            {/* space to display results */}
            {isSearchBarUsed && (
                <div className='h-[200px] w-[200px] bg-[#FFFBE6] absolute top-20 overflow-scroll scrollbar-none py-2 pl-4 pr-2 rounded-md'>
                    <div>
                        {query !== '' ? filteredProducts.map(product => (
                            <Link to={`/product/${product.id}`} onClick={() => setIsSearchBarUsed(false)} className='text-sm hover:text-[#FF9100] block my-4'>
                                {product.title}
                            </Link> 
                        )) : (
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-sm text-[#4e4e54]'>search for a product...</div>
                                <FaSpinner className='animate-spin text-2xl'/>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
        {/* search design for screen sizes below 768px */}
        <div className='block md:hidden lg:hidden'>
            <CiSearch onClick={() => setIsSearchBarUsed(true)} className='-mr-1 text-3xl hover:text-[#ff9100]'/>
                {isSearchBarUsed && (
                    <>
                        <div onClick={() => setIsSearchBarUsed(false)} className='bg-black opacity-80 h-full w-screen fixed inset-0 z-20'></div>
                        <div className='bg-[#bad282] h-40 w-60 rounded-md flex justify-center items-center absolute top-[280px] right-[20%] z-30'>
                            <div className='relative w-full h-full'>
                                <input
                                type="text"
                                value={ query }
                                placeholder='Search'
                                className='px-2 h-8 mx-3 w-[85%] outline-none text-xs rounded-lg'
                                onChange={(e) => setQuery(e.target.value)}
                                />
                                <button 
                                onClick={() => setIsSearchBarUsed(false)} 
                                className="absolute -top-3 -right-3 text-xl bg-white rounded-full p-1.5 hover:bg-[#ff9100] hover:text-white">
                                    <IoCloseOutline/>
                                </button>
                                {query !== '' ? (
                                    <div>
                                        <div className='flex justify-center items-center flex-col'>
                                            <p className='text-sm text-center mt-4'>{filteredProducts.length} items found</p>
                                            <button onClick={() => setSearchBarItems(true)} className={`${filteredProducts.length === 0 ? 'hidden' : 'block'} bg-black text-white py-1.5 px-2 rounded-md text-sm text-center hover:bg-[#ff9100]`}>View</button>
                                        </div>
                                        {/* space to display results */}
                                        {searchBarItems && (
                                            <div className='bg-white h-52 w-80 rounded-md absolute -top-12 -right-11 z-40 px-8 py-5'>
                                                <div className='h-3/4 w-4/5 overflow-auto'>
                                                    {filteredProducts.map(items => (
                                                        <Link to={`product/${items.id}`} onClick={() => setIsSearchBarUsed(false)} className='text-sm my-1.5'>{items.title}</Link>
                                                    ))}
                                                </div>
                                                <div className='flex justify-end mt-3'>
                                                    <button onClick={() => setSearchBarItems(false)} className='text-sm p-1.5 bg-black hover:bg-[#ff9100] text-white rounded-md'>Close</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <p className='text-sm text-center mt-4'>No results...</p>
                                )}
                            </div>
                        </div>
                        </>
                )}
        </div>
        </>
  )
}

export default SearchBar
