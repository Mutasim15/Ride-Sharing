import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/logo.png';
import './Navbar.css'

const Navbars = () =>{
    return (
       <>
        <Navbar expand="lg" className="custom-navbar">
        <Container>
          {/* Logo on the left */}
          <Navbar.Brand href="/">
            <img
              src={logo} // Local or remote logo path
              alt="Logo"
              width="60" // Logo size
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
  
          {/* Toggle button for responsive behavior */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
          {/* Collapsible content */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Links aligned to the right */}
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
              <Nav.Link href="#demo" className="nav-link-custom">Demo</Nav.Link>
              <Nav.Link href="#services" className="nav-link-custom">Services</Nav.Link>
              <Nav.Link href="#registration" className="nav-link-custom">Registration</Nav.Link>
              <Nav.Link href="#dashboard" className="nav-link-custom">Dashboard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
 
       </>
      );
};

export default Navbars;