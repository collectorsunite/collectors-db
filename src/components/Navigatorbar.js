import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom'; 

import React from 'react'
import Yugioh from './yugioh/Yugioh';
import Digimon from './digimon/Digimon';
import Home from './Home';
import Pokemon from './pokemon/Pokemon';
import MagicTheGatering from './magicTheGathering/MagicTheGathering';
import AnimalCrossingNH from './animalCrossingNH/AnimalCrossingNH';
import AnimalNav from './animalCrossingNH/animalNavigator';
import ContactUs from './ContactUsPage';
import AboutUs from './AboutUsPage';
import Donate from './DonatePage';


function Navigatorbar() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div>
    <div>
      <Navbar bg="dark" variant="dark" >
        <Container fluid>
        <Nav className="me-auto">
        <Nav.Link className="nav_title" Link as={Link} to={"/"}>Simple DB</Nav.Link>    
        <NavDropdown className="nav_heading" title="Collectors Search" id="basic-nav-dropdown">
          <NavDropdown.Item Link as={Link} to={"/yu-gi-oh"}>Yu-Gi-Oh</NavDropdown.Item>
          <NavDropdown.Item Link as={Link} to={"/digimon"}>Digimon</NavDropdown.Item>
          <NavDropdown.Item Link as={Link} to={"/pokemon"}>Pokemon</NavDropdown.Item>
          <NavDropdown.Item Link as={Link} to={"/magic-the-gathering"}>Magic The Gathering</NavDropdown.Item>
          <NavDropdown.Item Link as={Link} to={"/animal-crossing-new-horizon"}>Animal Crossing: NH</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className="nav_heading" Link as={Link} to={"/contact-us"}>Contact us</Nav.Link>
        <Nav.Link className="nav_heading" Link as={Link} to={"/about-us"}>About us</Nav.Link>
        <Nav.Link className="nav_heading" Link as={Link} to={"/donate"}>Donate</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      </div>
      <div>
      <Routes>
        <Route path='/pokemon' element={<Pokemon/>}></Route>
        <Route path='/yu-gi-oh' element={<Yugioh/>}></Route>
        <Route path='/digimon' element={<Digimon/>}></Route>
        <Route path='/magic-the-gathering' element={<MagicTheGatering/>}></Route>
        <Route path='/animal-crossing-new-horizon' element={<AnimalCrossingNH/>}></Route>
        <Route path='/animal-crossing-new-horizon/:id' element={<AnimalNav/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/donate' element={<Donate/>}></Route>

        <Route exact path='/' element={<Home/>}></Route>
      </Routes>
    
      </div>
    </div>
    </Router>
        )
}

export default Navigatorbar;
