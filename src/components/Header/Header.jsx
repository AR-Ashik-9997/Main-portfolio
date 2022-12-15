import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { HashLink as Link} from "react-router-hash-link";
const Header = () => {
  const location =useLocation();

  return (
    <Navbar className="navbar-bg" expand="lg"  sticky="top">
      <Container>
        <Navbar.Brand as={Link} className="fs-3 text-white" smooth to="/#home">Ashikur Rahman</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">                      
            <Nav.Link as={Link} className="fs-5 text-white" smooth to={location.pathname!=="/"?"/#home":"#home"}>Home</Nav.Link>            
            <Nav.Link as={Link} className="fs-5 text-white" smooth to={location.pathname!=="/"?"/#services":"#services"}>Services</Nav.Link>            
            <Nav.Link as={Link} className="fs-5 text-white" smooth to={location.pathname!=="/"?"/#skill":"#skill"}>Skils</Nav.Link>
            <Nav.Link as={Link} className="fs-5 text-white" smooth to={location.pathname!=="/"?"/#project":"#project"}>Projects</Nav.Link>
            <Nav.Link as={Link} className="fs-5 text-white" smooth to={location.pathname!=="/"?"/#about":"#about"}>About</Nav.Link>            
            <Nav.Link as={Link} className="fs-5 text-white" smooth to={location.pathname!=="/"?"/blogs":"/blogs"}>My Blogs</Nav.Link>            
            <Nav.Link as={Link} className="fs-5 text-white" smooth to={location.pathname!=="/"?"/#contact-Me":"#contact-Me"}>Contact Me</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
