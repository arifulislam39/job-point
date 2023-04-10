import React from 'react';
import Header from './Header';
import JobCategory from './JobCategory';
import { useLoaderData } from 'react-router';
import FeaturedJob from './FeaturedJob';

const Home = () => {
    const categoryList = useLoaderData();

    return (
        <div>
            <Header />
            <JobCategory
            categoryList={categoryList}
            >

            </JobCategory>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;