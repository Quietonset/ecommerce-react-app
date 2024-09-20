
import React, { createContext, useState, useEffect } from "react";
// create context
export const CartContext = createContext();


const CartProvider = ({ children })=>{
  // cart state
  const [ cart, setCart ] = useState([]);
  // item amount state
  const [ cartQuantity, setCartQuantity ] = useState(0);
  // total price state
  const [ total, setTotal ] = useState(0);

  // calculate total
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });

  // update item amount
  useEffect(() => {
    if ( cart ) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0);
      setCartQuantity(amount);
    }
  }, [cart])

  // add to cart
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1};

    // check if the item is already in the cart
    const cartItem = cart.find(item => {
      return item.id === id;
    });
    // if cart item is already in the cart
    if (cartItem){
      const newCart = [...cart].map(item => {
        if (item.id === id){
          return {...item, amount: cartItem.amount + 1};
        } else {
          return item;
        };
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    };
  };


  // remove from cart
  const removeFromCart = (id) => {
    if (cartQuantity > 0) {
      setCartQuantity(cartQuantity - 1);
      } else {
        return cartQuantity;
      }
    const newCart = cart.filter(item => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // to clear cart
  const clearCart = () => {
    setCart([]);
    setCartQuantity(0);
  };

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };
  
  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
           return {...item, amount: cartItem.amount - 1}
        } else {
          return item;
        };
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartQuantity, clearCart, increaseAmount, decreaseAmount, total }}>
      { children }
    </CartContext.Provider>
  )
};

export default CartProvider;

