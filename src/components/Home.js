import React, { Component } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="title_heading_magic">
          Simple DB
          <h2 className="h2title_heading">“Always Looking to Improve”</h2>
        </h1>
        <Container>
          <Row>
            <Col>
              <Card style={{ marginTop: "20px" }}>
                <Card.Header as="h5">Yu-gi-oh</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Search and find all Yu-Gi-Oh cards, including the current card price from Amazon, ebay and more...
                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    href={"/yu-gi-oh"}
                  >
                    Click Here
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
              </Card>
              <Card style={{ marginTop: "20px" }}>
                <Card.Header as="h5">Digimon</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Search and find all your Digimon cards, including all set names, card numbers and more...
                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    href={"/digimon"}
                  >
                    Click Here
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
              </Card>
              
              
            </Col>
            
            <Col>
            <Card style={{ marginTop: "20px" }}>
                <Card.Header as="h5">Pokemon</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Search and find all your Pokemon cards, including all sets, promos, card prices and more...
                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    href={"/pokemon"}
                  >
                    Click Here
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
              </Card>
              <Card style={{ marginTop: "20px" }}>
                <Card.Header as="h5">Magic: The Gathering</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Search and find all your Magic: The Gathering cards, including all sets, legalities and more...
                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    href={"/magic-the-gathering"}
                  >
                    Click Here
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
              </Card>
            </Col>
            <Col>
            <Card style={{ marginTop: "20px" }}>
                <Card.Header as="h5">Animal Crossing: New Horizons</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Find everything you need for Animal Crossing, Including Buy and Sell price, and more...
                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    href={"/animal-crossing-new-horizon"}
                  >
                    Click Here
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
        <p style={{marginBottom: "100px"}}></p>      

      </div>
    );
  }
}
