import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
// import ActiveLink from '../../../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div>
            <Navbar bg="light " expand="lg">
                <Container fluid className='mx-5'>
                    <Navbar.Brand href="#" className='fw-bold text-black fs-4'>eatingwell.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" >
                        <Nav
                            className="ms-auto my-2 my-lg-0  d-flex align-items-center fw-bold gap-4 nav-bar "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to='/'className='text-decoration-none '
                            >
                            Home
                            </NavLink>
                        <NavLink to='/blogs' className='text-decoration-none '>
                            Blogs
                        </NavLink>
                           
                           <NavLink to='/pto' className='text-decoration-none'>
                           Profile
                           </NavLink>
                           
                        </Nav>
                      
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           
        </div>
    );
};

export default Header;