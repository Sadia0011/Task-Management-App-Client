import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='container mx-auto'>
            <Outlet></Outlet>
            </div>
            <div className='mt-auto'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;