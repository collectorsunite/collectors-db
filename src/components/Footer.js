import { Navbar, Container, Nav } from "react-bootstrap";


import React from "react";

function Footer() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container>
        <Nav.Link className="nav_title" href="/collectors-db/#/">Home</Nav.Link>
        <Nav.Link className="nav_title" href="/collectors-db/#/contact-us">Contact Us</Nav.Link>   
        <Nav.Link className="nav_title" href="/collectors-db/#/about-us">About Us</Nav.Link>    
        <Nav.Link className="nav_title" href="/collectors-db/#/donate">Donate</Nav.Link>             
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
