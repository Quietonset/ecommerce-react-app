import React from 'react';
import { Route, createHashRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Root from './layout/Root';
import Login from './pages/Login';
import SignUpPage from './pages/SignUpPage';
import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import MensClothing from './pages/MensClothing';
import WomensClothing from './pages/WomensClothing';
import Jewelery from './pages/Jewelery';
import CartPage from './pages/CartPage';
import AllProducts from './pages/AllProducts';
import WishList from './pages/WishList';
import Checkout from './pages/Checkout';
import ProductProvider from './context/ProductContext';


const router = createHashRouter(
  createRoutesFromElements(
        <Route path="/" element={ <Root/> }>
          <Route index element={ <Homepage/> }/>
          <Route path='/all' element={ <AllProducts/> }/>
          <Route path='/mens' element={ <MensClothing/> }/>
          <Route path='/womens' element={ <WomensClothing/> }/>
          <Route path='/jewelery' element={ <Jewelery/> }/>
          <Route path='/product/:id' element={<ProductDetails/> }/>
          <Route path='/signUp' element={ <SignUpPage/> } />
          <Route path='/login' element={ <Login/> } />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/wishlist' element={ <WishList/> }/>
          <Route path='/checkout' element={ <Checkout/> } />
        </Route>
  )
)

const App = () => {

  return (
    <ProductProvider>
      <RouterProvider router={router}/>
    </ProductProvider>
  )
}

export default App;
