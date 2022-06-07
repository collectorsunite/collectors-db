import { useState } from "react";
import { Modal, Table, Image, Button } from "react-bootstrap";

function FossilModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cardItem = props.card;

  const mystyle = {
    display: "flex",
    justifyContent: "center",
  };

  function allday(allDayBool) {
    if (allDayBool) {
      return "Available all day";
    } else {
      return "Not Available all day";
    }
  }

  function allyear(allYearBool) {
    if (allYearBool) {
      return "Available all year";
    } else {
      return "Not Available all year";
    }
  }

  return (
    <>
      <Button className="nextButton" onClick={handleShow} variant="outline-dark">
        More Info..
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} centered fluid>
        <Modal.Header closeButton>
          <Modal.Title>{cardItem.name["name-EUen"]}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={mystyle}>
            <Image
              class="img-thumbnail rounded"
              src={cardItem.image_uri}
              alt="id"
            />
          </div>
          <div>
            <h3>Fossil Details</h3>
            <Table>
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr key={cardItem.id + 1}>
                  <td>Price</td>
                  <td>{cardItem.price || "-"}</td>
                </tr>                
                <tr key={cardItem.id + 1}>
                  <td>Museum phrase</td>
                  <td>{cardItem["museum-phrase"] || "-"}</td>
                </tr>
              </tbody>
            </Table>
          

            <h3>Fossil Names</h3>
            <Table>
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                {Object.entries(cardItem.name).map(([key, value]) => (
                  <tr key={cardItem.id + 1}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
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

export default FossilModal;
