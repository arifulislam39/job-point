import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JobDetailes from './JobDetailes';

const FeaturedJob = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/featuredJobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);
    return (
        <div className='ml-56 me-56 text-center mt-28'>
            <h1 className='font-bold text-3xl mb-3'>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid gap-6 lg:grid-cols-2 sm:grid-cols-1 mt-10'>
                {
                    jobs.map(job => <div className='text-left border-2 w-auto h-96 rounded-md p-6'
                        key={job.id}>
                        <img className='w-36 h-20 mb-5' src={job.img_logo} alt="" />
                        <h2>{job.job_title}</h2>
                        <h3>{job.company_name}</h3>
                        <div className='flex gap-3 text-blue-700 mt-3'>
                            <button className='border-2 rounded p-1'>{job.job_type_onsite}</button>
                            <button className='border-2 rounded p-1'>{job.job_type_remote}</button>
                        </div>
                        <div className='flex gap-6 mt-3'>
                            <div className='flex items-center'><img src={job.location_logo} alt="" />
                                <p>{job.location}</p></div>

                            <div className='flex items-center'><img src={job.salary_logo} alt="" />
                                <p>{job.salary}</p></div>
                        </div>


                        <Link to={`/jobdetaile/${job.id}`}><button class="bg-indigo-500 rounded-lg p-3 text-white mt-3">
                            View Details
                        </button></Link>


                    </div>)
                }
            </div>

        </div>
    );
};

export default FeaturedJob;