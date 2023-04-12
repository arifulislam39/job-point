import React, { useContext, useEffect, useState } from 'react';
import { getShoppingCart } from '../utilities/fakeDb';
import { Link, useLoaderData } from 'react-router-dom';

const AppliedJob = () => {
    const [cart, setCart] = useState([]);
    //console.log(detailes)
    const pData = useLoaderData();
    //console.log(pData)

    useEffect(() => {
        const savedCart = getShoppingCart();
        //console.log(savedCart)
        let newArr = []
        for (const id in savedCart) {
            const foundProduct = pData.find(product => product.id === id)
            if (foundProduct) {
                foundProduct.quantity = savedCart[id]
                newArr.push(foundProduct)
            }
        }
        setCart(newArr)
    }, [])
    console.log(cart)
    return (
        <div className='ml-56 me-56 mt-10'>
            <div className='grid gap-7'>
                {
                    cart.map(pt => <div className='border-2 rounded-md flex justify-between items-center p-10'>

                        <div className='flex'>
                            <img className='p-6 w-36 h-36 rounded-md border' src={pt.img_logo} />
                            <div className='ml-5'>
                                <h2>{pt.job_title}</h2>
                                <h3>{pt.company_name}</h3>
                                <div className='flex gap-3 text-blue-700 mt-3'>
                                    <button className='border-2 rounded p-1'>{pt.job_type_onsite}</button>
                                    <button className='border-2 rounded p-1'>{pt.job_type_remote}</button>
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