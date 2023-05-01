import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid className='mx-5'>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" >
                        <Nav
                            className="ms-auto my-2 my-lg-0  d-flex align-items-center fw-bold"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to='/'className='text-decoration-none text-black ' >
                            Home
                            </Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                           
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                      
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;