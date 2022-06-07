import React, { Component } from "react";
import { Button, Container, Row, Col, ListGroup } from "react-bootstrap";

export default class Donate extends Component {
  render() {
    return (
      <div>
        <h1 className="title_heading_magic">Donate</h1>
        <h2 className="h2title_heading">What your donations do for me:</h2>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <ListGroup as="ol" numbered>
                <ListGroup.Item as="li">
                  Buys me a coffee (with 2 kids this is needed)
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Keeps me motivated to improve
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Allows me to fund new features
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Allows me to fund better performance
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Allows me to work on something I am passionate about
                </ListGroup.Item>
              </ListGroup>
              <Button className="paypal_button"
          variant="warning"
          href={"https://www.paypal.com/donate/?hosted_button_id=7J2VHZ7BMY9CG"}
          size="lg"
        >
          Donate Here
        </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>

        <h2 className="h2title_heading">
          I just wanted to say thank you. Any donations do really help
        </h2>
        <h2 className="h2title_heading">
          and I look forward to creating something with you.
        </h2>
        <p className="ptext"> All Donations are via paypal this accepts card and paypal payments. Under the name Scott this is me.</p>
        <p style={{marginBottom: "100px"}}></p>      

      </div>
    );
  }
}
