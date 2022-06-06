import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Modal, Table, Image } from "react-bootstrap";

function HousewareModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cardItem = props.card;
  const cardKey = props.cardKey;

  const mystyle = {
    display: "flex",
    justifyContent: "center",
  };

  function boolChecker(bool, content) {
    if (bool) {
      return `${content}`;
    } else {
      return `No ${content}`;
    }
  }

  function nullFinder(value) {
    if (value === null) {
      return "-";
    } else {
      return value || "-";
    }
  }

  return (
    <>
      <Button className="nextButton" onClick={handleShow}>
        More Info..
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} centered fluid>
        <Modal.Header closeButton>
          <Modal.Title>{cardKey}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Object.entries(cardItem).map(([key, value]) => (
            <>
              <div style={mystyle}>
                <Image
                  class="img-thumbnail rounded"
                  src={value.image_uri}
                  alt="id"
                />
              </div>
              <div>
                <h3>House Item Details</h3>
                <Table>
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>
                    <tr key={cardItem.id + 1}>
                      <td>Variant</td>
                      <td>{value.variant || "-"}</td>
                    </tr>
                    <tr key={cardItem.id + 1}>
                      <td>Buy Price</td>
                      <td>{nullFinder(value["buy-price"])}</td>
                    </tr>
                    <tr key={cardItem.id + 1}>
                      <td>Sell Price</td>
                      <td>{nullFinder(value["sell-price"])}</td>
                    </tr>
                    <tr key={cardItem.id + 1}>
                      <td>Body Title</td>
                      <td>{nullFinder(value["body-title"])}</td>
                    </tr>
                    <tr key={cardItem.id + 1}>
                      <td>Pattern</td>
                      <td>{nullFinder(value.pattern)}</td>
                    </tr>
                    <tr key={cardItem.id + 1}>
                      <td>Pattern Title</td>
                      <td>{nullFinder(value["pattern-title"])}</td>
                    </tr>
                    <tr key={cardItem.id + 1}>
                      <td>DIY?</td>
                      <td>{boolChecker(value.isDIY, "DIY")}</td>
                    </tr>
                    <tr key={cardItem.id + 1}>
                      <td>Customiseable?</td>
                      <td>
                        {boolChecker(
                          value.canCustomizeBody,
                          "Customiseable Body"
                        )}
                      </td>
                    </tr>
                    <tr key={cardItem.id + 1}>
                      <td>Can Customize Pattern?</td>
                      <td>
                        {boolChecker(
                          value.canCustomizePattern,
                          "Customiseable Pattern"
                        )}
                      </td>
                    </tr>
                    <tr key={cardItem.id + 1}>
                      <td>Kit Cost</td>
                      <td>{nullFinder(value["kit-cost"])}</td>
                    </tr>

                    <tr key={cardItem.id + 1}>
                      <td>Size</td>
                      <td>{nullFinder(value.size)}</td>
                    </tr>
                    <tr key={cardItem.id + 1}>
                      <td>Source</td>
                      <td>{nullFinder(value.source)}</td>
                    </tr>

                    <tr key={cardItem.id + 1}>
                      <td>Source Detail</td>
                      <td>{nullFinder(value["source-detail"])}</td>
                    </tr>

                    <tr key={cardItem.id + 1}>
                      <td>HHA Concept 1</td>
                      <td>{nullFinder(value["hha-concept-1"])}</td>
                    </tr>

                    <tr key={cardItem.id + 1}>
                      <td>HHA Concept 2</td>
                      <td>{nullFinder(value["hha-concept-2"])}</td>
                    </tr>

                    <tr key={cardItem.id + 1}>
                      <td>HHA Series</td>
                      <td>{nullFinder(value["hha-series"])}</td>
                    </tr>

                    <tr key={cardItem.id + 1}>
                      <td>HHA Set</td>
                      <td>{nullFinder(value["hha-set"])}</td>
                    </tr>

                    <tr key={cardItem.id + 1}>
                      <td>Is Interactive?</td>
                      <td>{boolChecker(value.isInteractive, "Interactive")}</td>
                    </tr>
                    <tr key={cardItem.id + 1}>
                      <td>Tag</td>
                      <td>{nullFinder(value.tag)}</td>
                    </tr>
                    <tr key={cardItem.id + 1}>
                      <td>Outdoor?</td>
                      <td>{boolChecker(value.isOutdoor, "Outdoor")}</td>
                    </tr>
                    <tr key={cardItem.id + 1}>
                      <td>Speaker Type</td>
                      <td>{nullFinder(value["speaker-type"])}</td>
                    </tr>
                    <tr key={cardItem.id + 1}>
                      <td>Lighting Type</td>
                      <td>{nullFinder(value["lighting-type"])}</td>
                    </tr>
                    <tr key={cardItem.id + 1}>
                      <td>Catalog?</td>
                      <td>{boolChecker(value.isCatalog, "Catalog")}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </>
          ))}
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

export default HousewareModal;
