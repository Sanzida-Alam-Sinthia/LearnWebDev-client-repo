import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <Carousel className='mb-5'>
                <Carousel.Item >
                    <img
                        className="banner-img d-block w-100  h-700 img-fluid"
                        src="https://ltheme.com/wp-content/uploads/2022/04/photo1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className=''>
                        <div className='bg-dark bg-gradient p-1'>
                            <h3 className='fs-1 align-items-center lg:p-2 '>Welcome to Learn WebDev.com</h3>
                            <p className='fs-5 align-items-center '>Learn Online, With Our Popular Courses</p>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-300 img-fluid"
                        src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/95541191/original/eb7f0673f349d65f0de491642bda554337b9532f/fixed-bug-your-html-css-javascript-react-redux-code.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption className=''>
                        <div className='bg-dark bg-gradient p-1'>
                            <h3 className='fs-2 align-items-center '>Exiciting and Popular Courses</h3>
                            <p className='fs-5 align-items-center '>We offer popular courses like JavaScript, HTML, CSS</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-300 img-fluid"
                        src="https://7yearolds.haydenmassage.com/wp-content/uploads/2018/11/computer-1024x683.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className=''>
                        <div className='bg-dark bg-gradient p-1'>
                            <h3 className='fs-2 align-items-center '>Professional Instructors and HelpLine</h3>
                            <p className='fs-5 align-items-center '> We have Professional Instructors to provide 24/7 service</p>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;