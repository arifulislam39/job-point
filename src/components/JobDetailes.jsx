import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import AppliedJob from './AppliedJob';
import { addToDb } from '../utilities/fakeDb';

const JobDetailes = () => {

    const [cart, setCart] = useState([]);
    const [detailes, setDetailes] = useState([]);

    const handleAddToCart = (detailes) => {
        let newCart = [];
        // const newCart = [...cart, product]
        //if product doesn't exists in the cart,then set quantity =1;
        //if exist update quantity by 1;
        const exists = cart.find(pd => pd.id === detailes.id);
        if (!exists) {
            detailes.quantity = 1;
            newCart = [...cart, detailes]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== detailes.id);
            newCart = [...remaining, exists];
        }



        setCart(newCart);
        addToDb(detailes.id);
    }

    const { id } = useParams();

    const data = useLoaderData();
    //console.log(data)



    useEffect(() => {
        const detailesData = data.find(dt => dt.id == id)

        setDetailes(detailesData)
    }, [])



    return (
        <div className='ml-56 me-56 mt-20 flex gap-6'>
            <div className='w-3/5'>
                <h2 className='font-bold'>Job Description</h2>
                <p>{detailes.job_des}</p>
                <h2 className='font-bold mt-7'>Job Responsibility</h2>
                <p>{detailes.job_res}</p>

                <h2 className='font-bold mt-7'>Educational Requirements:</h2>
                <p>{detailes.edu_req}</p>

                <h2 className='font-bold mt-7'>Experiences:</h2>
                <p>{detailes.experience}</p>

            </div>
            <div className='w-2/5 border-2 rounded-md bg-gray-200 p-6'><h2 className='font-bold'>Job Detailes</h2>
                <hr className='border-zinc-950 mt-4' />
                <div className='flex mt-3'>
                    <h3 className='font-bold'>Salary :</h3>
                    <span className='ml-2'>{detailes.salary}</span>
                </div>
                <div className='mt-3 mb-10 flex'>
                    <h3 className='font-bold'>Job Title :</h3>
                    <span className='ml-3'>{detailes.job_title}</span>
                </div>

                <h3 className='font-bold mb-3'>Contact Information</h3>
                <hr className='border-zinc-950 ' />

                <div className='mt-3 flex'>
                    <p className='font-bold '>Phone :</p>
                    <p className='ml-3'>{detailes.phone}</p>
                </div>
                <div className='mt-3 flex'>
                    <p className='font-bold '>Emali :</p>
                    <p className='ml-3'>{detailes.email}</p>
                </div>
                <div className='mt-3 flex
                '>
                    <p className='font-bold '>Address :</p>
                    <p className='ml-3'>{detailes.location}</p>
                </div>
                <button onClick={() => handleAddToCart(detailes)} className="bg-indigo-500 rounded-lg p-3 text-white w-full mt-5">
                    Apply Now
                </button>
            </div>
            <div>
            </div>
            {/* <AppliedJob /> */}
        </div>
    );
};

export default JobDetailes;