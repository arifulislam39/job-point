import React, {useEffect, useState } from 'react';
import { getShoppingCart } from '../utilities/fakeDb';
import { Link, useLoaderData } from 'react-router-dom';

const AppliedJob = () => {
    const [cart, setCart] = useState([]);
    const jData = useLoaderData();
    //console.log(jData)

    useEffect(() => {
        const savedCart = getShoppingCart();
        //console.log(savedCart)
        let newArr = []
        for (const id in savedCart) {
            const foundJob = jData.find(job => job.id === id)
            if (foundJob) {
                foundJob.quantity = savedCart[id]
                newArr.push(foundJob)
            }
        }
        setCart(newArr)
    }, [])

    //onsite jobs
    const handleOnsite = () => {
        const jobData = jData.filter(jb => jb.job_type === "Onsite")
        setCart(jobData)
    };

    //remote jobs

    const handleRemote = () => {
        const jobData = jData.filter(jb => jb.job_type === "Remote")
        setCart(jobData)
    };

    return (
        <div className='ml-56 me-56 mt-10 '>
            <div className='text-right mb-3 p-5 bg-gray-100 '>
                <h3 className='text-center font-bold text-xl'>Applied Jobs</h3>
                <span onClick={handleRemote}>
                    <button className='border-2 rounded p-1 text-blue-700 border-blue-500'>Remote Job</button>
                </span>
                <span onClick={handleOnsite}>
                    <button className='border-2 rounded p-1 text-blue-700 border-blue-500'>Onsite Job</button>
                </span>
            </div>
            <div className='grid gap-7'>
                {
                    cart.map(pt => <div className='border-2 rounded-md flex justify-between items-center p-10'>

                        <div className='flex'>
                            <img className='p-6 w-36 h-36 rounded-md border bg-gray-200' src={pt.img_logo} />
                            <div className='ml-5'>
                                <h2>{pt.job_title}</h2>
                                <h3>{pt.company_name}</h3>
                                <div className='flex gap-3 text-blue-700 mt-3'>
                                    <button className='border-2 rounded p-1'>{pt.job_type}</button>
                                    <button className='border-2 rounded p-1'>{pt.job_hour}</button>
                                </div>

                                <div className='flex gap-6 mt-3'>
                                    <div className='flex items-center'><img src={pt.location_logo} alt="" />
                                        <p>{pt.location}</p></div>

                                    <div className='flex items-center'><img src={pt.salary_logo} alt="" />
                                        <p>{pt.salary}</p>
                                    </div>

                                </div>


                            </div>

                        </div>
                        <Link to={`/jobdetaile/${pt.id}`}><button class="bg-indigo-500 rounded-lg p-3 text-white mt-3">
                            View Details
                        </button></Link>

                    </div>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;