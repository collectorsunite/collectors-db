import {Navbar, Container, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'; 

import React from 'react'
import Yugioh from './Yugioh';
import Digimon from './Digimon';
import Home from './Home';


function Navigatorbar() {
  return (
    <Router>
    <div>
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand Link as={Link} to={"/"}>Collector Db</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link Link as={Link} to={"/"}>Home</Nav.Link>
          <Nav.Link Link as={Link} to={"/yu-gi-oh"}>Yu-Gi-Oh</Nav.Link>
          <Nav.Link Link as={Link} to={"/digimon"}>Digimon</Nav.Link>
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
