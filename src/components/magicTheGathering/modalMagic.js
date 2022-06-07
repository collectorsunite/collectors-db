import { useState } from "react";
import { Modal, Table, Image, Button } from "react-bootstrap";
import magicManaSymbols from "./constants/magicManaSymbols";

function InfoModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cardItem = props.card;

  const mystyle = {
    display: "flex",
    justifyContent: "center",
  };


  return (
    <>
      <Button className="nextButton" onClick={handleShow} variant="outline-dark">
        Card..
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} centered fluid>
        <Modal.Header closeButton>
          <Modal.Title>{cardItem.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={mystyle}>
            <Image
              class="img-thumbnail rounded"
              src={cardItem.imageUrl}
              alt="id"
            />
          </div>
          <div>
            <h3>Card Details</h3>
            <Table>
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                  <tr key={cardItem.id + 1}>
                  <td>Names</td>
                  <td>{cardItem.names?.join(", ") || ("-")}</td>
                </tr>
                <tr key={cardItem.id + 1}>
                  <td>Mana Cost</td>
                  <td>{magicManaSymbols(cardItem.manaCost || ("-"))}</td>
                </tr>
                <tr key={cardItem.id + 1}>
                  <td>CMC</td>
                  <td>{cardItem.cmc || ("-")}</td>
                </tr>    
                <tr key={cardItem.id + 1}>
                  <td>Colors</td>
                  <td>{cardItem.colors?.join(", ") || ("-")}</td>
                </tr>
                <tr key={cardItem.id + 1}>
                  <td>Color Identity</td>
                  <td>{cardItem.colorIdentity?.join(", ") || ("-")}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Type</td>
                  <td>{cardItem.type || ("-")}</td>
                </tr>
                <tr key={cardItem.id + 1}>
                  <td>Supertypes</td>
                  <td>{cardItem.supertypes?.join(", ") || ("-")}</td>
                </tr>
                <tr key={cardItem.id + 1}>
                  <td>Types</td>
                  <td>{cardItem.types?.join(", ") || ("-")}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Subtypes</td>
                  <td>{cardItem.subtypes?.join(", ") || ("-")}</td>
                </tr>
                <tr key={cardItem.id + 1}>
                  <td>Rarity</td>
                  <td>{cardItem.rarity || ("-")}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Set</td>
                  <td>{cardItem.set || ("-")}</td>
                </tr>
                <tr key={cardItem.id + 1}>
                  <td>Set name</td>
                  <td>{cardItem.setName || ("-")}</td>
                </tr>
                <tr key={cardItem.id + 1}>
                  <td>Text</td>
                  <td>{cardItem.text || ("-")}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Artist</td>
                  <td>{cardItem.artist || ("-")}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Number</td>
                  <td>{cardItem.number || ("-")}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Power</td>
                  <td>{cardItem.power || ("-")}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Toughness</td>
                  <td>{cardItem.toughness || ("-")}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Layout</td>
                  <td>{cardItem.layout || ("-")}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Multiverseid</td>
                  <td>{cardItem.multiverseid || ("-")}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Power</td>
                  <td>{cardItem.power || ("-")}</td>
                </tr>
                <tr key={cardItem.id + 1}>
                  <td>Printings</td>
                  <td>{cardItem.printings?.join(", ") || ("-")}</td>
                </tr>                           
              </tbody>
            </Table>
            <h3>Rulings</h3>
            <Table>
            <thead>
                    <tr></tr>
                  </thead>
              {cardItem.rulings?.map((rulings) => (
                <>                 
                  <tbody>
                    <tr key={cardItem.id}>
                      <td>Rulings Text</td>
                      <td>{rulings.text || "-"}</td>
                    </tr>

                    <tr key={cardItem.id}>
                      <td>Rulings Date</td>
                      <td>{rulings.date || "-"}</td>
                    </tr>                    
                  </tbody>
                </>
              ))}
            </Table> 
            <h3>Legalitys</h3>
            <Table>
            <thead>
                    <tr></tr>
                  </thead>
              {cardItem.legalities?.map((legals) => (
                <>                 
                  <tbody>
                    <tr key={cardItem.id}>
                      <td>Format</td>
                      <td>{legals.format || "-"}</td>
                    </tr>

                    <tr key={cardItem.id}>
                      <td>Legality</td>
                      <td>{legals.legality || "-"}</td>
                    </tr>                    
                  </tbody>
                </>
              ))}
            </Table> 
            <h3>Alternative Languages</h3>
            <Table>
            <thead>
                    <tr></tr>
                  </thead>
              {cardItem.foreignNames?.map((rulings) => (
                <>                 
                  <tbody>
                    <tr key={cardItem.id}>
                      <td>Name</td>
                      <td>{rulings.name || "-"}</td>
                    </tr>

                    <tr key={cardItem.id}>
                      <td>Language</td>
                      <td>{rulings.language || "-"}</td>
                    </tr> 

                    <tr key={cardItem.id}>
                      <td>Multiverseid</td>
                      <td>{rulings.multiverseid || "-"}</td>
                    </tr>                      
                  </tbody>
                </>
              ))}
            </Table>                  
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InfoModal;
