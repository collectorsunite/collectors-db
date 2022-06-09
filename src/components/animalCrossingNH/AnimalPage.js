import React, { Component } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

class AnimalNHPage extends Component {
  render() {
    return (
      <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ marginTop: "20px" }}>
              <Card.Header as="h5">Fish</Card.Header>
              <Card.Body>
                <Card.Text>All the fish in Animal Crossing Horizons</Card.Text>
                <Button
                  variant="outline-dark"
                  href={"/#/collectors-db/animal-crossing-new-horizon/fish"}
                >
                  Go Fishing
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
            <Card style={{ marginTop: "20px" }}>
              <Card.Header as="h5">Sea Creatures</Card.Header>
              <Card.Body>
                <Card.Text>
                  All the sea creatures in Animal Crossing Horizons
                </Card.Text>
                <Button
                  variant="outline-dark"
                  href={"/#/collectors-db/animal-crossing-new-horizon/sea"}
                >
                  Creature Hunters..
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
            <Card style={{ marginTop: "20px" }}>
              <Card.Header as="h5">Bugs</Card.Header>
              <Card.Body>
                <Card.Text>All the bugs in Animal Crossing Horizons</Card.Text>
                <Button
                  variant="outline-dark"
                  href={"/#/collectors-db/animal-crossing-new-horizon/bugs"}
                >
                  Its a Bug Life..
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
            <Card style={{ marginTop: "20px" }}>
              <Card.Header as="h5">Music</Card.Header>
              <Card.Body>
                <Card.Text>All the music in Animal Crossing Horizons</Card.Text>
                <Button
                  variant="outline-dark"
                  href={"/#/collectors-db/animal-crossing-new-horizon/music"}
                >
                  Go listen..
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
          </Col>

          <Col>
            <Card style={{ marginTop: "20px" }}>
              <Card.Header as="h5">Fossils</Card.Header>
              <Card.Body>
                <Card.Text>
                  All the fossils in Animal Crossing Horizons
                </Card.Text>
                <Button
                  variant="outline-dark"
                  href={"/#/collectors-db/animal-crossing-new-horizon/fossils"}
                >
                  Mr Jones..
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
            <Card style={{ marginTop: "20px" }}>
              <Card.Header as="h5">Villagers</Card.Header>
              <Card.Body>
                <Card.Text>
                  All the villagers in Animal Crossing Horizons
                </Card.Text>
                <Button
                  variant="outline-dark"
                  href={"/#/collectors-db/animal-crossing-new-horizon/villagers"}
                >
                  Village People..
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
            <Card style={{ marginTop: "20px" }}>
              <Card.Header as="h5">Art</Card.Header>
              <Card.Body>
                <Card.Text>All the art in Animal Crossing Horizons</Card.Text>
                <Button
                  variant="outline-dark"
                  href={"/#/collectors-db/animal-crossing-new-horizon/art"}
                >
                  Picasoooo..
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card style={{ marginTop: "20px" }}>
              <Card.Header as="h5">Items: Houseware</Card.Header>
              <Card.Body>
                <Card.Text>
                  All the Items: Houseware in Animal Crossing Horizons
                </Card.Text>
                <Button
                  variant="outline-dark"
                  href={"/#/collectors-db/animal-crossing-new-horizon/items-houseware"}
                >
                  New sofa?
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
            <Card style={{ marginTop: "20px" }}>
              <Card.Header as="h5">Items: Wallmounted</Card.Header>
              <Card.Body>
                <Card.Text>
                  All the Items: Wallmounted in Animal Crossing Horizons
                </Card.Text>
                <Button
                  variant="outline-dark"
                  href={"/#/collectors-db/animal-crossing-new-horizon/items-wallmounted"}
                >
                  Wallmount it..
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
            <Card style={{ marginTop: "20px" }}>
              <Card.Header as="h5">Items: Misc</Card.Header>
              <Card.Body>
                <Card.Text>
                  All the Items: Misc in Animal Crossing Horizons
                </Card.Text>
                <Button
                  variant="outline-dark"
                  href={"/#/collectors-db/animal-crossing-new-horizon/items-misc"}
                >
                  What is left?
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

export default AnimalNHPage;
