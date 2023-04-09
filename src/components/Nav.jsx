import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='flex justify-between ml-56 me-56 mt-5 items-center'>
            <h2 className='font-bold text-lg'>JOB POINT</h2>
            <div className='flex gap-5'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistic</Link>
                <Link to='/appliedJob'>Applied Jobs</Link>
                <Link to='/blog'>Blog</Link>

            </div>
            <button class="bg-indigo-500 rounded-lg p-3 text-white">
                Star Applying
            </button>
        </div>
    );
};

export default Nav;