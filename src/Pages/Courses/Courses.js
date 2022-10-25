import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Courses.css'

const Courses = () => {
    const news = useLoaderData();
    console.log(news);
    const { name, total, logo, id } = news;
    return (
        <div className='row row-cols-2 mt-5  gx-3 gy-5 ml-5 mb-5'>
            {
                news.map(
                    course => <Card className='ml-2'>
                        <Card.Img className='card-img ' variant="top" src={course.logo} />
                        <Card.Body>
                            <Card.Title>{course.name}</Card.Title>
                            <Card.Text>
                                {course.total}
                            </Card.Text>
                            <Button variant="primary"> View Course Details</Button>
                            {/* <Link to={`/category/${category_id}`}>
                                <Button variant="primary">All news in this category</Button>
                            </Link> */}
                        </Card.Body>
                    </Card>
                )
            }

        </div>
    )
};

export default Courses;