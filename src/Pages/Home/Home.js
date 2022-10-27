import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
    return (
        <Carousel className='mb-5  h-100 p-5'>
            <Carousel.Item >
                <img
                    className="d-block w-100  h-700 img-fluid"
                    src="https://ltheme.com/wp-content/uploads/2022/04/photo1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className='bg-dark '>
                    <h3 className='fs-1 align-items-center p-5'>Welcome to Learn WebDev.com</h3>
                    <p className='fs-4'>Learn Online, With Our Popular Courses </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-300 img-fluid"
                    src="https://cdn.i-scmp.com/sites/default/files/styles/og_image_young_post/public/d8/yp/images/b84ba972-8b41-11e9-b2aa-5ba392ab87abimagehires141153.jpg?itok=snQhklNS"
                    alt="Second slide"
                />

                <Carousel.Caption className='bg-dark '>
                    <h3 className='fs-1 align-items-center p-5'>Exiciting and Popular Courses</h3>
                    <p className='fs-4'>We have courses on popular subjects like JavaScript, GiTHuB, HTML, CSS</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-300 img-fluid"
                    src="https://7yearolds.haydenmassage.com/wp-content/uploads/2018/11/computer-1024x683.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className='bg-dark '>
                    <h3 className='fs-1 align-items-center p-5'>Professional Instructors and HelpLine</h3>
                    <p className='fs-4'>
                        We have Professional Instructors and HelpLine to guide you and to provide 24/7 service
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;