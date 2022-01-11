import React from 'react'
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Button from '@restart/ui/esm/Button';


function Header() {
    const { user, logOut } = useAuth();
    return (
        <div className="head ">
            <header>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" >
                    <Container>
                        <Nav.Link as={Link} to='/home' > <Navbar.Brand className="fw-bold fs-5 text-light">Eggy<span className="text-warning fs-1">!</span></Navbar.Brand></Nav.Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-toggle " />

                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto fs-5 eggy-nav">
                                <Nav.Link as={Link} to='/home' className="p-3 text-warning navItem">Home</Nav.Link>
                                <Nav.Link as={Link} to='/items' className="p-3 text-warning navItem">items</Nav.Link>
                                <Nav.Link as={Link} to='/aboutus' className="p-3 text-warning navItem">About Us</Nav.Link>

                            </Nav>

                            {
                                user.email ?
                                    <div className="admin ">
                                        <Nav.Link as={Link} to='/myorders' className="p-3 text-warning">My Orders</Nav.Link>
                                        <Nav.Link as={Link} to='/manageorders' className="p-3 text-warning">Manage All Orders</Nav.Link>
                                        <Nav.Link as={Link} to='/additems' className="p-3 text-warning">Add A New Orders</Nav.Link>
                                        <span className="p-3 text-warning">{user.displayName}  </span>

                                        <Button onClick={logOut} className="py-1 px-2 text-dark logInBtn fs-4">Logout</Button>

                                    </div>

                                    :
                                    <Nav className=" fs-4">
                                        <Nav.Link as={Link} to='/login' className="py-1 px-2 text-dark logInBtn">Log In</Nav.Link>
                                    </Nav>
                            }




                        </Navbar.Collapse>
                    </Container>


                </Navbar>
            </header>
        </div>
    )
}

export default Header
