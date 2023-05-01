import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary " expand="lg">
                <Container fluid className='mx-5'>
                    <Navbar.Brand href="#" className='fw-bold text-white fs-4'>eatingwell.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" >
                        <Nav
                            className="ms-auto my-2 my-lg-0  d-flex align-items-center fw-bold gap-4 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to='/'className='text-decoration-none text-white ' >
                            Home
                            </Link>
                        <Link to='/blogs' className='text-decoration-none text-white'>
                            Blogs
                        </Link>
                           
                           <Link className='text-decoration-none text-white '>
                           Profile
                           </Link>
                        </Nav>
                      
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;