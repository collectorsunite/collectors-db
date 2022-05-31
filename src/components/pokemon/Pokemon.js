import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import PokemonPage from "./PokemonPage"

export default class Pokemon extends Component {
  render() {
    return (   
        <div>
        <Container fluid>
        <Row className="g-4">      
        <Col>
        {/* <Image src="/pngwing.com.png" alt="yugi" fluid/> */}
        </Col>        
        <Col xs={7}> 
        <h1 className="title_heading">Pokemon</h1>
        <small className="h2title_heading">“Pikachu, I Choose You!”</small>
        <PokemonPage />
        </Col>
        <Col>3</Col>
        </Row>
        </Container>
      </div>
    )
  }
}