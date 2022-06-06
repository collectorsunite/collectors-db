import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Modal, Table, Image } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";

function MusicModal(props) {
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
      <Button className="nextButton" onClick={handleShow}>
        More Info..
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} centered fluid>
        <Modal.Header closeButton>
          <Modal.Title>{cardItem["file-name"]}</Modal.Title>
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
            <h3>Music Details</h3>
            <Table>
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr key={cardItem.id + 1}>
                  <td>Buy Price</td>
                  <td>{cardItem["buy-price"] || "-"}</td>
                </tr>
                <tr key={cardItem.id + 1}>
                  <td>Sell Price</td>
                  <td>{cardItem["sell-price"] || "-"}</td>
                </tr>
                <tr key={cardItem.id + 1}>
                  <td>Music Audio</td>
                  <td>
                    <ReactAudioPlayer
                      src={cardItem.music_uri || "-"}
                      autoPlay
                      controls
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
            <h3>Music Names</h3>
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

export default MusicModal;
