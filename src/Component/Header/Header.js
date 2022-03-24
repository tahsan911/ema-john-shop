import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap'
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='position-sticky sticky-top'>
            <Navbar  className="nav-color">
            <Container>
                <Navbar.Brand href="#home">
                    <a href="#logo">
                        <img src={logo} alt="" />
                    </a>
                </Navbar.Brand>
                <Nav className="ms-auto">
                <Nav.Link className="text-white" href="#home">Order</Nav.Link>
                <Nav.Link className="text-white ps-4" href="#features">Order Preview</Nav.Link>
                <Nav.Link className="text-white ps-4" href="#pricing">Manage Inventory</Nav.Link>
                </Nav>
            </Container>
  </Navbar> 
        </div>
    );
};

export default Header;
