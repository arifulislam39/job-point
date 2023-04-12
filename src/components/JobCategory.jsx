import React from 'react';

const JobCategory = ({categoryList}) => {
   // console.log(categoryList)
    return (
        <div className='ml-56 me-56 mt-28 text-center'>
            <h1 className='font-bold text-3xl mb-3'>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className='grid gap-2 lg:grid-cols-4 sm:grid-cols-2'>
            {categoryList.map(item=>
                <div className='mt-10 w-40 h-40 border-2 rounded-md p-5 bg-gray-200 text-left'
                key={item.id}>
                    
                    <img src={item.img} alt="" />
                    <h2>{item.category_title}</h2>
                    <p>{item.ava_job}</p>
                </div>)}

           </div>
        </div>
    );
};

export default JobCategory;