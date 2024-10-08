import React, { createContext, useState, useEffect, useContext } from "react";
// create context
export const CartContext = createContext();


const CartProvider = ({ children })=>{
  // cart state
  const [ cart, setCart ] = useState(()=>{
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  // item amount state
  const [ cartQuantity, setCartQuantity ] = useState(0);
  // total price state
  const [ total, setTotal ] = useState(0);
  // cart count state
  const [ cartCount, setCartCount ] = useState(0);


  // calculate total price
  useEffect(() => {
    const total = cart.reduce((previousItem, currentItem) => {
      return previousItem + (currentItem.price * currentItem.amount);
    }, 0);
    setTotal(total);
  }, [cart]);

  // update item amount
  useEffect(() => {
    if ( cart ) {
      const amount = cart.reduce((previousItem, currentItem) => {
        return previousItem + currentItem.amount
      }, 0);
      setCartQuantity(amount);
    }
  }, [cart]);

  // Check if item is already in the cart
  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  };

  useEffect(() => {
    // Update cartCount whenever cart changes
    setCartCount(cart.length);
    // save to cart whenever the cart changes
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart]);

  const addToCart = (product, id) => {
    const cartItem = cart.find(item => item.id === id);
  
    // If the item is already in the cart, do nothing
    if (!cartItem) {
      const newItem = { ...product, amount: 1 };
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  };


  // to clear cart
  const clearCart = () => {
    setCart([]);
    setCartQuantity(0);
  };

  // const increaseAmount = (id) => {
  //   const cartItem = cart.find((item) => item.id === id);
  //   addToCart(cartItem, id);
  // };
  
  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
      if (cartItem.amount > 1) {
        const newCart = cart.map(item => {
          if (item.id === id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        });
        setCart(newCart);
      }
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, cartQuantity, clearCart, decreaseAmount, total, isInCart }}>
      { children }
    </CartContext.Provider>
  )
};

export default CartProvider;

