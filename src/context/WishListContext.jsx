/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  // wishlist state
  const [ wishlist, setWishlist ] = useState(()=>{
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [ wishlistCount, setWishlistCount ] = useState(0);

  useEffect(() => {
    // Update wishlistCount whenever wishlist is updated
    setWishlistCount(wishlist.length);
    // save to cart whenever the cart changes
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      
      const productExists = prev.some(item => item.id === product.id);
      
      if (!productExists) {
        return [...prev, product];
      }
    
      return prev;
    });
  };
  
  
   // Remove from wishlist
   const removeFromWishlist = (id) => {
    const newWishlist = wishlist.filter(item => item.id !== id);
    setWishlist(newWishlist);
  };

  // Clear cart
  const clearWishlist = () => {
    setWishlist([]);
  };

  const isInWishlist = (id) => {
    return wishlist.some(item => item.id === id);
  };


  return (
    <WishListContext.Provider
      value={{ wishlist, setWishlist, addToWishlist, removeFromWishlist, clearWishlist, isInWishlist }}>
      {children}
    </WishListContext.Provider>
  );
};
