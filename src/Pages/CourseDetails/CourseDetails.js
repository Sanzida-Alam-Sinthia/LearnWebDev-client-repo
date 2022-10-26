import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = ({ coursedetails }) => {
    const courseInfo = useLoaderData();
    console.log(courseInfo);
    const { id, name, logo, description, total } = courseInfo;
    return (
        <div>
            <h2 className='mt-5 text-primary fs-1 fw-bolder'>{courseInfo.name}</h2>
            <image>{courseInfo.logo}</image>
        </div>
    );
};

export default CourseDetails;