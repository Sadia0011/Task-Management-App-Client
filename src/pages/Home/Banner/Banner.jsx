import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
    const bannerStyle = {
        minHeight: '100vh',
        backgroundImage: "url(https://i.ibb.co/nCfr4vs/banner.jpg)",
        backgroundSize: 'cover',
        borderRadius: '0% 0% 0% 50% / 0% 0% 30% 50%', // Adjust these values as needed
    };
    
    return (
        <div className='min-h-screen flex flex-col lg:flex-row mb-5 justify-center items-center p-2 lg:p-20' 
        style={bannerStyle}>
            
<div className='flex-1 space-y-5'>
<h1 className='font-medium mb-4 text-lg lg:text-4xl' >Welcome to SCC Technovision Inc.</h1>
                <p className='text-sm lg:text-base font-normal'>
                    Discover the beauty and excitement that awaits you. Explore our services and enjoy
                    a memorable experience with us.
                </p>
<Link to={"/dashboard"}><button className='btn btn-primary m-5'>Let's Explore</button></Link>
</div>
<div className='flex-1'>
    <img className='w-full' src="https://i.ibb.co/hKqmvGZ/banner2.jpg" alt="" />
</div>
        </div>
    );
};

export default Banner;