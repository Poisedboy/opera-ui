import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import logo from '../assets/logo_opera.png';

export const NavBar = () => {
    const [expanded, setExpanded] = useState(false);
    const [navbar, setNavbar] = useState(false);

    function changeBg () {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        };
    };
    window.addEventListener('scroll', changeBg);

    return (
        <Navbar fixed="top" bg={(navbar || expanded) ? 'light' : ' '} expanded={expanded} expand="lg">
            <Container>
                <NavLink to="/"><Image src={logo} style={{height: '50px'}} /></NavLink>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : 'expanded')} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavLink onClick={() => setExpanded(false)} to='/'>Головна</NavLink>
                        <NavLink onClick={() => setExpanded(false)} to='/breakfast'>Сніданки</NavLink>    
                        <NavLink onClick={() => setExpanded(false)} to='/about'>Про нас</NavLink>
                        <NavLink onClick={() => setExpanded(false)} to='/extra'>Extra</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}