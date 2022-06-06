import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Modal, Table, Image } from "react-bootstrap";


function SeaModal(props) {
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
            <h3>Fish Details</h3>
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
                  <td>Speed</td>                  
                  <td>{cardItem.speed || "-"}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Shadow</td>                  
                  <td>{cardItem.shadow || "-"}</td>
                </tr>
                <tr key={cardItem.id + 1}>
                  <td>Catch Phrase</td>                  
                  <td>{cardItem["catch-phrase"] || "-"}</td>
                </tr> 
                <tr key={cardItem.id + 1}>
                  <td>Museum phrase</td>                  
                  <td>{cardItem["museum-phrase"] || "-"}</td>
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

            <h3>Availability</h3>
                <Table> 
                <thead>
                <tr></tr>
              </thead>
              <tbody>              
                <tr key={cardItem.id + 1}>
                   <td>Month Northern</td>                  
                   <td>{cardItem.availability["month-northern"] + " months" || "-"}</td>
                 </tr> 
                 <tr key={cardItem.id + 1}>
                   <td>Month Southern</td>                  
                   <td>{cardItem.availability["month-southern"] + " months" || "-"}</td>
                 </tr>                              
                 <tr key={cardItem.id + 1}>
                   <td>All Day</td>                  
                   <td>{allday(cardItem.availability.isAllDay)}</td>
                 </tr> 
                 <tr key={cardItem.id + 1}>
                   <td>Time</td>                  
                   <td>{cardItem.availability.time || "-"}</td>
                 </tr>
                 <tr key={cardItem.id + 1}>
                   <td>All Year</td>                  
                   <td>{allyear(cardItem.availability.isAllYear)}</td>
                 </tr>  
                </tbody>
                </Table>       
            
            <h3>Sea Creature Names</h3>
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

export default SeaModal;
