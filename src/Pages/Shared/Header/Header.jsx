import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../../../Provider/AuthProvider';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";


const Header = () => {
    const {user,logOut}=useContext(authContext)
    return (
        <div>
            <Navbar bg="light " expand="lg">
                <Container fluid className='mx-5'>
                    <Navbar.Brand className='fw-bold text-black fs-4'>eatingwell.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" >
                        <Nav
                            className="ms-auto my-2 my-lg-0  d-flex align-items-center fw-bold gap-4 nav-bar "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                
                            <NavLink to='/'className='text-decoration-none'
                            >
                            Home
                            </NavLink>
                        <NavLink to='/blogs' className='text-decoration-none '>
                            Blogs
                        </NavLink>
                           
                 
                              {user ? <div className="d-flex gap-3 " >
                                <img id='title' src={user?.photoURL} className='rounded-circle' style={{width:"40px",height:"40px"}} alt="" />
                                <ReactTooltip anchorId='title' place='bottom' content={user?.displayName}></ReactTooltip>
                              <button className='btn btn-success text-white fw-bold' onClick={logOut}>Logout</button>

                              </div>
                              :
                              <Link to='/login' className='text-decoration-none'>
                              <button className='btn btn-success text-white fw-bold'>Login</button>
                              </Link>
                              }
                 
                           
                        </Nav>
                      
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           
        </div>
    );
};

export default Header;