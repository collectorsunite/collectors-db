import { Navbar, Container, Nav } from "react-bootstrap";


import React from "react";

function Footer() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container>
        <Nav.Link className="nav_title" href="/#/">Home</Nav.Link>
        <Nav.Link className="nav_title" href="/#/contact-us">Contact Us</Nav.Link>   
        <Nav.Link className="nav_title" href="/#/about-us">About Us</Nav.Link>    
        <Nav.Link className="nav_title" href="/#/donate">Donate</Nav.Link>             
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
