import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Courses.css'
import { dblClick } from '@testing-library/user-event/dist/click';

const Courses = () => {
    const courseCards = useLoaderData();
    console.log(courseCards);
    const { name, total, logo, id } = courseCards;
    return (
        <div>
            <h2 className='mt-5'>Courses We Are Offering </h2>
            <div className='row row-cols-2 mt-5  gx-3 gy-5 ml-5 mb-5'>

                {
                    courseCards.map(
                        course => <Card className=''>
                            <Card.Img className='card-img ' variant="top" src={course.logo} />
                            <Card.Body>
                                <Card.Title>{course.name}</Card.Title>
                                <Card.Text>
                                    Price : ${course.total}
                                </Card.Text>
                                <Button variant="primary"> <Link to={`/courses/${course.id}`} >View Course Details</Link></Button>
                                {/* <Link to={`/category/${category_id}`}>
                                <Button variant="primary">All news in this category</Button>
                            </Link> */}
                            </Card.Body>
                        </Card>
                    )
                }

            </div>
        </div>
    )
};

export default Courses;