import React, { Component } from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import YugiohPage from './yugiohPage'

export default class Yugioh extends Component {
  render() { 
    return (
        <div>
          <Container fluid>
          <Row className="g-4">      
          <Col>
          {/* <Image src="/pngwing.com.png" alt="yugi" fluid/> */}
          </Col>        
          <Col xs={7}> 
          <h1 className="title_heading">Yu-Gi-Oh </h1>
          <small className="h2title_heading">“Heart of the Cards, guide me! I draw!”</small>
          <YugiohPage />
          </Col>
          <Col>3</Col>
          </Row>
          </Container>
        </div>
    )
  }
}