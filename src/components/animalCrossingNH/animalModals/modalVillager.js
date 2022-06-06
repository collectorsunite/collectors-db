import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Modal, Table, Image } from "react-bootstrap";


function VillagerModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cardItem = props.card;

  const mystyle = {
    display: "flex",
    justifyContent: "center",
  };

  function allday(allDayBool) {
    if(allDayBool) {
      return "Available all day"
    } else {
      return "Not Available all day"
    }
   }

   function allyear(allYearBool) {
    if(allYearBool) {
      return "Available all year"
    } else {
      return "Not Available all year"
    }
   }


  return (
    <>
      <Button className="nextButton" onClick={handleShow}>
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
            <h3>Villager Details</h3>
            <Table>
              <thead>
                <tr></tr>
              </thead>
              <tbody>

              <tr key={cardItem.id + 1}>
                  <td>Personality</td>                  
                  <td>{cardItem.personality || "-"}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Birthday</td>                  
                  <td>{cardItem["birthday-string"] || "-"}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Species</td>                  
                  <td>{cardItem.species || "-"}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Gender</td>                  
                  <td>{cardItem.gender || "-"}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Subtype</td>                  
                  <td>{cardItem.subtype || "-"}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Hobby</td>                  
                  <td>{cardItem.hobby || "-"}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Catch Phrase</td>                  
                  <td>{cardItem["catch-phrase"] || "-"}</td>
                </tr>
                <tr key={cardItem.id + 1}>
                  <td>Sayings</td>                  
                  <td>{cardItem.saying || "-"}</td>
                </tr>
                <tr key={cardItem.id + 1}>
                  <td>Icon</td>                  
                  <td> <Image
              class="img-thumbnail rounded"
              src={cardItem.icon_uri}
              alt="id"
            /></td>
                </tr>            
                            </tbody>
            </Table>
                              
            <h3>Villager Names Translation</h3>
                <Table> 
                <thead>
                <tr></tr>
              </thead>
              <tbody>
                { Object.entries(cardItem.name).map(([key,value]) => (
                   <tr key={cardItem.id + 1}>
                   <td>{key}</td>                  
                   <td>{value}</td>
                 </tr> 
                ))
                }
                </tbody>
                </Table>

                <h3>Villager Catch Phrase Translation</h3>
                <Table> 
                <thead>
                <tr></tr>
              </thead>
              <tbody>
                { Object.entries(cardItem["catch-translations"]).map(([key,value]) => (
                   <tr key={cardItem.id + 1}>
                   <td>{key}</td>                  
                   <td>{value}</td>
                 </tr> 
                ))
                }
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

export default VillagerModal;
