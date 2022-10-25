import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (

        <div>

            <Navbar expand="lg" bg="dark" variant="dark" >
                <Container fluid>
                    <Navbar.Brand href="#">Learn WebDev.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '200px' }}
                            navbarScroll
                        >
                            <Nav.Link > <Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link> <Link to='/courses'>Courses</Link></Nav.Link>
                            <Nav.Link > <Link to='/blogs'>Blogs</Link></Nav.Link>
                            <Nav.Link> <Link to='/faqs'>FAQ</Link></Nav.Link>


                        </Nav>
                        <Form className="d-flex">

                            <Button variant="outline-success">Log In </Button>
                            <Button variant="outline-success">Register</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;