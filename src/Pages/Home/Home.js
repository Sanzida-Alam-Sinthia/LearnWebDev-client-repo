import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner from './Banner/Banner';
import Whatweoffer from './Whatweoffer/Whatweoffer';

const Home = () => {
    return (
        // <Carousel className='mb-5   p-5'>
        //     <Carousel.Item >
        //         <img
        //             className="d-block w-100  h-700 img-fluid"
        //             src="https://ltheme.com/wp-content/uploads/2022/04/photo1.jpg"
        //             alt="First slide"
        //         />
        //         <Carousel.Caption className='bg-dark '>
        //             <h3 className='fs-1 align-items-center lg:p-2'>Welcome to Learn WebDev.com</h3>
        //             <p className='fs-4'>Learn Online, With Our Popular Courses </p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100 h-300 img-fluid"
        //             src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/95541191/original/eb7f0673f349d65f0de491642bda554337b9532f/fixed-bug-your-html-css-javascript-react-redux-code.png"
        //             alt="Second slide"
        //         />

        //         <Carousel.Caption className='bg-dark '>
        //             <h3 className='fs-2 align-items-center '>Exiciting and Popular Courses</h3>
        //             <p className='fs-5'>We offer popular courses like JavaScript, HTML, CSS</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100 h-300 img-fluid"
        //             src="https://7yearolds.haydenmassage.com/wp-content/uploads/2018/11/computer-1024x683.jpg"
        //             alt="Third slide"
        //         />

        //         <Carousel.Caption className='bg-dark '>
        //             <h3 className='fs-1 align-items-center '>Professional Instructors and HelpLine</h3>
        //             <p className='fs-4'>
        //                 We have Professional Instructors and HelpLine to provide 24/7 service
        //             </p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>
        <div>
            <Banner></Banner>
            <Whatweoffer></Whatweoffer>
        </div>
    );
};

export default Home;