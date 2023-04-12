import React, { useEffect, useState } from 'react';
import Header from './Header';
import JobCategory from './JobCategory';
import { useLoaderData } from 'react-router';
import FeaturedJob from './FeaturedJob';

const Home = () => {
    const categoryList = useLoaderData();
   //console.log(categoryList)


    return (
        <div>
            <Header />
            <JobCategory
                categoryList={categoryList}
            >

            </JobCategory>
            <FeaturedJob />
        </div>
    );
};

export default Home;