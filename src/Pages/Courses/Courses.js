import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import './Courses.css';

import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    const courseCards = useLoaderData();
    console.log(courseCards);
    const { name, total, logo, id } = courseCards;
    return (
        <div>
            <h2 className='mt-5'> Popular Courses We Are Offering </h2>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="10">
                        <div className='row row-cols-2 mt-2  gx-3 gy-5 ml-5 mb-5'>

                            {
                                courseCards.map(
                                    course => <Card className='cards'>
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
                    </Col>

                </Row>
            </Container>

        </div>
    )
};

export default Courses;