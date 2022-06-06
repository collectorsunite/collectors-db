import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Modal, Table, Image } from "react-bootstrap";

function InfoModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const cardItem = props.card

    const mystyle = {
      display: "flex",
      justifyContent: 'center'
    };

    return (
      <>
        <Button className="nextButton" onClick={handleShow}>
          Card..
        </Button>
  
        <Modal size="lg" show={show} onHide={handleClose} centered fluid>
          <Modal.Header closeButton>
            <Modal.Title>{cardItem.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={mystyle} >
            <Image                        
                            class="img-thumbnail rounded"
                            src={cardItem.image_url}
                            alt="id"
                            />   
            </div>
            <div>
              <h3>Card Details</h3>
              <Table>
              <thead>
                <tr>                                 
                </tr>
                </thead>
                <tbody>             
                                                     
                            <tr key={cardItem.id + 1}>
                                <td>Type</td>
                                <td>{cardItem.type}</td>                                
                            </tr>   
                            <tr key={cardItem.id +2 }>
                                <td>Color</td>
                                <td>{cardItem.color}</td>                                
                            </tr> 
                            <tr key={cardItem.id}>
                                <td>Stage</td>
                                <td>{cardItem.stage}</td>                                
                            </tr> 
                            <tr key={cardItem.id}>
                                <td>Digi type</td>
                                <td>{cardItem.digi_type}</td>                                
                            </tr> 
                            <tr key={cardItem.id}>
                                <td>Attribute</td>
                                <td>{cardItem.attribute}</td>                                
                            </tr> 
                            <tr key={cardItem.id}>
                                <td>Level</td>
                                <td>{cardItem.level}</td>                                
                            </tr>                 
                            <tr key={cardItem.id}>
                                <td>Play cost</td>
                                <td>{cardItem.play_cost}</td>                                
                            </tr>  
                            <tr key={cardItem.id}>
                                <td>Evolution cost</td>
                                <td>{cardItem.evolution_cost}</td>                                
                            </tr>
                            <tr key={cardItem.id}>
                                <td>Card Rarity</td>
                                <td>{cardItem.cardrarity}</td>                                
                            </tr>  
                            <tr key={cardItem.id}>
                                <td>Evolution cost</td>
                                <td>{cardItem.evolution_cost}</td>                                
                            </tr>  
                            <tr key={cardItem.id}>
                                <td>Artist</td>
                                <td>{cardItem.artist}</td>                                
                            </tr>  
                            <tr key={cardItem.id}>
                                <td>DP</td>
                                <td>{cardItem.dp}</td>                                
                            </tr> 
                            <tr key={cardItem.id}>
                                <td>Card Number</td>
                                <td>{cardItem.cardnumber}</td>                                
                            </tr> 
                            <tr key={cardItem.id}>
                                <td>Main Effect</td>
                                <td>{cardItem.maineffect}</td>                                
                            </tr>  
                            <tr key={cardItem.id}>
                                <td>Soure Effect</td>
                                <td>{cardItem.soureeffect}</td>                                
                            </tr> 
                            <tr key={cardItem.id}>
                                <td>Set Name</td>
                                <td>{cardItem.set_name}</td>                                
                            </tr>                                                                                                               
                </tbody>
              </Table>
              <h3>Card Sets</h3>
              <Table>
              <thead>
                                <tr>                                 
                                </tr>
                                </thead>
              {cardItem.card_sets?.map((cardSetItem) => (                                                              
                                <tbody>                                
                                            <tr key={cardItem.id}>
                                                <td>Set Name</td>
                                                <td>{cardSetItem || "-"}</td>                                
                                            </tr>                                                                                                                                                                            
                                </tbody>                                                      
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

  export default InfoModal