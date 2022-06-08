import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'; 

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
    <Router>
    <div>
    <div>
      <Navbar bg="dark" variant="dark" >
        <Container fluid>
        <Nav className="me-auto">
        <Nav.Link className="nav_title" Link as={Link} to={"/collectors-db"}>Simple DB</Nav.Link>    
        <NavDropdown className="nav_heading" title="Collectors Search" id="basic-nav-dropdown">
          <NavDropdown.Item Link as={Link} to={"/collectors-db/yu-gi-oh"}>Yu-Gi-Oh</NavDropdown.Item>
          <NavDropdown.Item Link as={Link} to={"/collectors-db/digimon"}>Digimon</NavDropdown.Item>
          <NavDropdown.Item Link as={Link} to={"/collectors-db/pokemon"}>Pokemon</NavDropdown.Item>
          <NavDropdown.Item Link as={Link} to={"/collectors-db/magic-the-gathering"}>Magic The Gathering</NavDropdown.Item>
          <NavDropdown.Item Link as={Link} to={"/collectors-db/animal-crossing-new-horizon"}>Animal Crossing: NH</NavDropdown.Item>
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
        <Route path='/collectors-db/pokemon' element={<Pokemon/>}></Route>
        <Route path='/collectors-db/yu-gi-oh' element={<Yugioh/>}></Route>
        <Route path='/collectors-db/digimon' element={<Digimon/>}></Route>
        <Route path='/collectors-db/magic-the-gathering' element={<MagicTheGatering/>}></Route>
        <Route path='/collectors-db/animal-crossing-new-horizon' element={<AnimalCrossingNH/>}></Route>
        <Route path='/collectors-db/animal-crossing-new-horizon/:id' element={<AnimalNav/>}></Route>
        <Route path='/collectors-db/contact-us' element={<ContactUs/>}></Route>
        <Route path='/collectors-db/about-us' element={<AboutUs/>}></Route>
        <Route path='/collectors-db/donate' element={<Donate/>}></Route>

        <Route exact path='/collectors-db' element={<Home/>}></Route>
      </Routes>
    
      </div>
    </div>
    </Router>
        )
}

export default Navigatorbar;
