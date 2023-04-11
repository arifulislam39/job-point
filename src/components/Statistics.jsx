import React from 'react';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';




const Statistics = () => {

    const assignmentMark = [
        {
            assignment: 'Assignment: 1',
            mark: 57,
        },
        {
            assignment: 'Assignment: 2',
            mark: 59,
        },
        {
            assignment: 'Assignment: 3',
            mark: 46,
        },
        {
            assignment: 'Assignment: 4',
            mark: 57,
        },
        {
            assignment: 'Assignment: 5',
            mark: 51,
        },
        {
            assignment: 'Assignment: 6',
            mark: 30,
        },
        {
            assignment: 'Assignment: 7',
            mark: 60,
        },
        {
            assignment: 'Assignment: 8',
            mark: 58,
        },
    ];

    return (
        <div className='ml-56 me-56 text-center mt-10'>

            <RadarChart
                data={assignmentMark}
                width={1000}
                height={500}
                cx="50%" cy="50%" outerRadius="80%">
                <PolarGrid />
                <PolarAngleAxis dataKey="assignment" />
                <PolarRadiusAxis />
                <Radar
                    dataKey="mark" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}

                    name="Mike"></Radar>
            </RadarChart>

        </div>
    );
};

export default Statistics;