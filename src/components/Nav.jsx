import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='bg-gray-200'><div className='flex justify-between ml-56 me-56 mt-5 items-center'>
            <h2 className='font-bold text-lg'>JOB POINT</h2>
            <div className='flex gap-5'>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600' : '')}>Home</NavLink>
                <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'text-blue-600' : '')}>Statistic</NavLink>
                <NavLink to='/appliedJob' className={({ isActive }) => (isActive ? 'text-blue-600' : '')}>Applied Jobs</NavLink>
                <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-blue-600' : '')}>Blog</NavLink>

            </div>
            <button class="bg-indigo-500 rounded-lg p-3 text-white">
                Star Applying
            </button>
        </div></div>
    );
};

export default Nav;