import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import AnimalNHPage from "./AnimalPage"

export default class AnimalCrossingNH extends Component {
  render() {
    return (   
        <div>
        <Container fluid>
        <Row className="g-4">      
        <Col>
        {/* <Image src="/pngwing.com.png" alt="yugi" fluid/> */}
        </Col>        
        <Col xs={7}> 
        <h1 className="title_heading_magic">Animal Crossing: New Horizons</h1>
        <small className="h2title_heading">“You never get a second chance to make a first impression.”</small>
        <AnimalNHPage />
        </Col>
        <Col>3</Col>
        </Row>
        </Container>
      </div>
    )
  }
}