import React from 'react';
import { Link } from 'react-router-dom';
import web from '../../../assests/Web.jpg'
const Whatweoffer = () => {
    return (

        <div class="container text-center mb-5 mt-5">
            <div class="row">
                <div class="col ">
                    <img src={web} className="img-fluid" alt="" />
                </div>
                <div class="col">
                    <h2 className='fw-bolder'>Want to Start Your Career as a Web Developer?</h2>
                    <br />
                    <p className='fw-bold'>In Learn WebDev.com,  we offer popular courses on HTML, CSS, JavaScript, GitHub, React. By enrolling yourself into these courses, you will be able to be a professional Full-Stack Web Developer</p>

                    <button className='btn btn-primary'>
                        <Link to='/courses'>Explore Our Popular Courses</Link>
                    </button>
                </div>
            </div>
        </div>


    );
};

export default Whatweoffer;
