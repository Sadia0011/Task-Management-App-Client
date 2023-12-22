import React from 'react';

const Benifits = () => {
    return (
       <div className='space-y-4 mb-10'>
        <div className='flex flex-col items-center justify-center mt-10'>
            <h2 className='text-4xl font-bold'>Users</h2>
            <p>Registration Users</p>
        </div>
         <div className='flex flex-col lg:flex-row justify-center items-center gap-3'>
        <div className="card card-compact lg:w-[400px] lg:h-[220px] bg-base-100 shadow-xl">
            <div className="flex items-center"> {/* Flex container */}
                <figure><img className='w-full h-full object-cover' src="https://i.ibb.co/0M8Gg71/developer.jpg" alt="developer" /></figure>
                <div className="card-body flex-grow">
                    <h2 className="card-title">Developer!</h2>
                </div>
            </div>
        </div>

        <div className="card card-compact lg:w-[400px] lg:h-[220px] bg-base-100 shadow-xl">
            <div className="flex items-center">
                <figure><img className='w-full h-full object-cover' src="https://i.ibb.co/8XXKjyV/corporate.png" alt="corporate" /></figure>
                <div className="card-body flex-grow">
                    <h2 className="card-title">Corporate!</h2>
                </div>
            </div>
        </div>

        <div className="card card-compact lg:w-[400px] lg:h-[220px] bg-base-100 shadow-xl">
            <div className="flex items-center">
                <figure><img className='w-full h-full object-cover' src="https://i.ibb.co/k4nD8gb/bankers.jpg" alt="bankers" /></figure>
                <div className="card-body flex-grow">
                    <h2 className="card-title">Bankers!</h2>
                </div>
            </div>
        </div>
    </div>
       </div>
    );
};

export default Benifits;