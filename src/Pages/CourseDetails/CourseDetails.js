
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css';
import Pdf from "react-to-pdf";
const CourseDetails = ({ coursedetails }) => {
    const courseInfo = useLoaderData();
    console.log(courseInfo);
    const ref = React.createRef();
    const { id, name, logo, description, total } = courseInfo;
    return (
        <div>
            <div ref={ref}>
                <h2 className='mt-5 text-primary fs-1 fw-bolder'>{courseInfo.name}</h2>
                <div className='details-image mt-4'>
                    <img src={courseInfo.logo} className="img-fluid" alt="..." />
                </div>
                <div className='text-bg-dark p-3 mt-4'>
                    {courseInfo.description}


                </div>
            </div>
            <div className='d-flex justify-content-between mt-5 '>

                <button className='btn btn-primary'>
                    <Link to={`/checkout/${courseInfo.id}`}>Get Premium Access</Link>
                </button>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className='btn btn-primary' onClick={toPdf}>Want to Download? Click Here! </button>}
                </Pdf>


            </div>

        </div>
    );
};

export default CourseDetails;