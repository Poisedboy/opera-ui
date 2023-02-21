import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav} from 'react-bootstrap';

export const NavBar = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Opera Passage</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link><NavLink to='/'>Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/breakfast'>Breakfast</NavLink></Nav.Link>    
                    <Nav.Link><NavLink to='/about'>About</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/extra'>Extra</NavLink></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <nav>
        //     <NavLink to='/'>Home</NavLink>
        //     <NavLink to='/about'>About</NavLink>
        //     {/* {user.username && <NavLink to='/profile'>Profile</NavLink>} */}
        //     <NavLink to='/extra'>Extra</NavLink>
        // </nav>
    )
}