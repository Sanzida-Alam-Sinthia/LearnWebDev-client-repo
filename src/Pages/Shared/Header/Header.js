import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import { BsToggleOn } from 'react-icons/bs';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
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
                            <ToggleTheme>
                                < BsToggleOn>
                                </BsToggleOn>
                            </ToggleTheme>

                        </Nav>
                        <Form className="d-flex  m-2">
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            {user?.photoURL ?
                                                <Image
                                                    style={{ height: '40px' }}
                                                    roundedCircle
                                                    src={user?.photoURL}>
                                                </Image>
                                                : <FaUser></FaUser>
                                            }
                                            <span className='text-light fw-semibold fs-5 m-2'>{user?.displayName}</span>
                                            <Button className='btn btn-primary m-2' onClick={handleLogOut}>Log out</Button>
                                        </>
                                        :
                                        <>
                                            <Button className='gx-2 m-2' variant="outline-success">
                                                <Link to='/login'>Log In</Link>
                                            </Button>
                                            <Button className='gx-2 m-2' variant="outline-success">

                                                <Link to='/register'>Register</Link>
                                            </Button>
                                        </>
                                }

                                {/* <ToggleTheme>
                                    < BsToggleOn>
                                    </BsToggleOn>
                                </ToggleTheme> */}
                            </>



                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;