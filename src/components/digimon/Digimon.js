import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import DigimonPage from "./DigimonPage"

export default class Digimon extends Component {
  render() {
    return (   
        <div>
        <Container fluid>
        <Row className="g-4">      
        <Col>
        {/* <Image src="/pngwing.com.png" alt="yugi" fluid/> */}
        </Col>        
        <Col xs={7}> 
        <h1 className="title_heading_magic">Digimon</h1>
        <small className="h2title_heading">“Digimon! Digital Monsters! Digimon are the Champions!”</small>
        <DigimonPage />
        </Col>
        <Col>3</Col>
        </Row>
        </Container>
      </div>
    )
  }
}