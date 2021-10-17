import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import './Header.css'
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg"  bg="" className="p-3" variant="dark" style={{background:'#6047EC'}}>
            <Container>
                <Navbar.Brand href="/">Legends Team</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto navigation">
                      <li><a href="/">Home</a></li>
                       <li> <a href="/">About</a></li>
                       <li> <a href="/">Team</a></li>
                       <li> <a href="/">Login</a></li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;