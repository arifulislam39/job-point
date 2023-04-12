import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between ml-56 me-56 mt-5 items-center sm:grid-cols-1'>
            <div className=''>
                <h1 className='font-bold text-5xl'>One Step Closer To Your <span className='text-indigo-500'>Dream Job</span></h1>
                <p className='mt-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button class="bg-indigo-500 rounded-lg p-3 text-white mt-4">
                    Get Started
                </button>
            </div>
            <div>
                <img src="https://i.ibb.co/n64BNtw/profile.png" alt="" />

            </div>


        </div>
    );
};

export default Header;