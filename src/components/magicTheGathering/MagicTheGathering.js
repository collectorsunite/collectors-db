import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import MagicPage from "./MagicPage"

export default class MagicTheGatering extends Component {
  render() {
    return (   
        <div>
        <Container fluid>
        <Row className="g-4">      
        <Col>
        </Col>        
        <Col xs={7}> 
        <h1 className="title_heading_magic">Magic: The Gathering</h1>
        <small className="h2title_heading">“Sorry I burned down your village. ...”</small>
        <MagicPage />
        </Col>
        <Col>3</Col>
        </Row>
        </Container>
      </div>
    )
  }
}