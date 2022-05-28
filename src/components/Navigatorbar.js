import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'; 

import React from 'react'
import Yugioh from './yugioh/Yugioh';
import Digimon from './digimon/Digimon';
import Home from './Home';


function Navigatorbar() {
  return (
    <Router>
    <div>
    <div>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
        <Nav className="me-auto">
        <Nav.Link className="nav_title" Link as={Link} to={"/"}>Simple DB</Nav.Link>    
        <NavDropdown className="nav_heading" title="Collectors Search" id="basic-nav-dropdown">
          <NavDropdown.Item Link as={Link} to={"/yu-gi-oh"}>Yu-Gi-Oh</NavDropdown.Item>
          <NavDropdown.Item Link as={Link} to={"/digimon"}>Digimon</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className="nav_heading" Link as={Link} to={"/"}>Contact us</Nav.Link>
        <Nav.Link className="nav_heading" Link as={Link} to={"/"}>About us</Nav.Link>
        <Nav.Link className="nav_heading" Link as={Link} to={"/"}>Donate</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      </div>
      <div>
      <Routes>
        <Route path='/yu-gi-oh/:id' element={<Digimon/>}></Route>
        <Route path='/yu-gi-oh' element={<Yugioh/>}></Route>
        <Route path='/digimon' element={<Digimon/>}></Route>
        <Route exact path='/' element={<Home/>}></Route>
      </Routes>
    
      </div>
    </div>
    </Router>
        )
}

export default Navigatorbar;
