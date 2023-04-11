import React, { useContext, useEffect, useState } from 'react';
import { getShoppingCart } from '../utilities/fakeDb';
import { useLoaderData } from 'react-router-dom';

const AppliedJob = () => {
    const [products, setProducts] = useState([]);
    const [mal, setMal] = useState([]);

    const data = useLoaderData();

    useEffect(() => {
        fetch('/featuredJobs.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

    return (
        <div>
            <h1>from applied job :</h1>
        </div>
    );
};

export default AppliedJob;