import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav} from 'react-bootstrap';

export const NavBar = () => {

    return (
        <div className="nav_bar">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Opera Passage</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/breakfast'>Breakfast</NavLink>    
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/extra'>Extra</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}