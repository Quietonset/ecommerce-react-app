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
    
    const extraFilteredProducts = filteredProducts.filter((item) => {
        return item.category === "men's clothing" || item.category === "women's clothing" || item.category === "jewelery"
    });

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
                <div className='h-screen w-[305px] bg-[#FFFBE6] absolute top-20 overflow-scroll scrollbar-none py-2 px-4 rounded-md'>
                    <div>
                        {query !== '' ? extraFilteredProducts.map(product => (
                            <div>
                                <Link to={`/product/${product.id}`} onClick={() => { setIsSearchBarUsed(false), setQuery('')}} className='text-sm hover:bg-[#D5ED9F] hover:font-semibold block my-4 border border-black p-2 rounded-md'>
                                    {product.title}
                                </Link>
                            </div>
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
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                        {/* search bar box */}
                        <div className='bg-[#bad282] h-40 w-60 rounded-md flex justify-center items-center z-30'>
                            {/* input */}
                            <div className='relative h-full w-full'>
                                <input 
                                type="text"
                                value={query}
                                placeholder='Search'
                                className='px-2 h-8 mx-3 w-[85%] outline-none text-xs rounded-lg'
                                onChange={(e) => setQuery(e.target.value)}
                                />
                                {/* closing button */}
                                <button onClick={() => setIsSearchBarUsed(false)} className='absolute -top-3 -right-3 text-xl bg-white rounded-full p-1.5 hover:bg-[#ff9100] hover:text-white'>
                                    <IoCloseOutline/>
                                </button>
                                {query !== '' ? (
                                    <div>
                                        <div className='flex justify-center items-center flex-col'>
                                            <p className='text-sm text-center mt-4'>{extraFilteredProducts.length} items found</p>
                                            <button  onClick={() => setSearchBarItems(true)} className={`${extraFilteredProducts.length === 0 ? 'hidden' : 'block'} bg-black text-white py-1 px-2 rounded-md text-xs text-center font-sans hover:bg-[#ff9100] mt-4`}>View</button>
                                        </div>
                                        {searchBarItems && (
                                            <div className='bg-white h-52 w-80 rounded-md absolute -top-12 -right-11 z-40 px-8 py-5'>
                                                <div className='h-4/5 overflow-auto'>
                                                    {extraFilteredProducts.map(items => (
                                                        <Link to={`product/${items.id}`} onClick={() => { setIsSearchBarUsed(false), setQuery('') }} className='text-xs my-3.5 hover:text-[#ff9100] block'>{items.title}</Link>
                                                    ))}
                                                </div>
                                                <div className='flex justify-end mt-3'>
                                                    <button onClick={() => {setSearchBarItems(false), setIsSearchBarUsed(false)}} className='text-xs p-1 bg-black hover:bg-[#ff9100] text-white rounded-md font-sans text-center'>Close</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div>
                                        <p className='text-sm text-center mt-4'>No results...</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
        </div>
        </>
  )
}

export default SearchBar
