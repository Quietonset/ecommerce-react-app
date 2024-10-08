import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../src/index.css';
import ProductProvider from './context/ProductContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SidebarProvider } from './context/SidebarContext.jsx'
import CartProvider from './context/CartContext.jsx';
import { MenuProvider } from './context/Menucontext.jsx';
import { WishListProvider } from './context/WishListContext.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <QueryClientProvider client={queryClient}>
      <MenuProvider>
        <SidebarProvider>
          <CartProvider>
            <WishListProvider>
              <App />
            </WishListProvider>
          </CartProvider>
        </SidebarProvider>
      </MenuProvider>
    </QueryClientProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
