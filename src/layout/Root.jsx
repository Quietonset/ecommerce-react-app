import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/homepage/SideBar';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { AuthContext } from '../context/AuthContext';
import Login from '../pages/Login';

const Root = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className='font-nunito'>
      <Navbar/>
      <SideBar/>
      <Menu/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Root;
