import { useState } from "react";
import { Modal, Table, Button } from "react-bootstrap";
import NumberFormat from "react-number-format";
import MultipleImages from "./multipleImages";

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
        <Button className="nextButton" onClick={handleShow} variant="outline-dark">
          Card..
        </Button>
  
        <Modal size="lg" show={show} onHide={handleClose} centered fluid>
          <Modal.Header closeButton>
            <Modal.Title>{cardItem.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={mystyle} >
              {MultipleImages({imageData: cardItem.card_images})}
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
                                <td>Description</td>
                                <td>{cardItem.desc}</td>                                
                            </tr>   
                            <tr key={cardItem.id +2 }>
                                <td>Race</td>
                                <td>{cardItem.race}</td>                                
                            </tr> 
                            <tr key={cardItem.id}>
                                <td>Type</td>
                                <td>{cardItem.type}</td>                                
                            </tr> 
                            <tr key={cardItem.id}>
                                <td>Attack</td>
                                <td>{cardItem.atk}</td>                                
                            </tr> 
                            <tr key={cardItem.id}>
                                <td>Defense</td>
                                <td>{cardItem.def}</td>                                
                            </tr> 
                            <tr key={cardItem.id}>
                                <td>Attribute</td>
                                <td>{cardItem.attribute}</td>                                
                            </tr>                 
                            <tr key={cardItem.id}>
                                <td>Archetype</td>
                                <td>{cardItem.archetype}</td>                                
                            </tr>  
                            <tr key={cardItem.id}>
                                <td>Linkval</td>
                                <td>{cardItem.linkval}</td>                                
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
                                                <td>{cardSetItem.set_name || "-"}</td>                                
                                            </tr>   
                                            <tr key={cardItem.id}>
                                                <td>Set Code</td>
                                                <td>{cardSetItem.set_code || "-"}</td>                                
                                            </tr> 
                                            <tr key={cardItem.id}>
                                                <td>Set Rarity</td>
                                                <td>{cardSetItem.set_rarity || "-"}</td>                                
                                            </tr> 
                                            <tr key={cardItem.id}>
                                                <td>Set Rarity Code</td>
                                                <td>{cardSetItem.set_rarity_code || "-"}</td>                                
                                            </tr>                                                                                                                                
                                </tbody>                                                      
              ))}
                </Table>

              <h3>Current Card Price</h3>

              <Table>
              <thead>
                                <tr>                                 
                                </tr>
                                </thead>
              {cardItem.card_prices.map((cardSetItem) => (                                                           
                                <tbody>                                
                                            <tr key={cardItem.id}>
                                                <td>Card Market Price:</td>
                                                <td><NumberFormat
                                                  value={cardSetItem.cardmarket_price}
                                                  displayType={"text"}
                                                  thousandSeparator={true}
                                                  prefix={"£"}/></td>                                
                                            </tr>   
                                            <tr key={cardItem.id}>
                                                <td>TCG Plater Price:</td>
                                                <td>
                                                <NumberFormat
                                                  value={cardSetItem.tcgplayer_price}
                                                  displayType={"text"}
                                                  thousandSeparator={true}
                                                  prefix={"£"}/></td>                                
                                            </tr> 
                                            <tr key={cardItem.id}>
                                                <td>Ebay Price:</td>
                                                <td>
                                                <NumberFormat
                                                  value={cardSetItem.ebay_price}
                                                  displayType={"text"}
                                                  thousandSeparator={true}
                                                  prefix={"£"}/></td>                                
                                            </tr> 
                                            <tr key={cardItem.id}>
                                                <td><a href="https://amzn.to/3MCcxVC">Amazon Price:</a></td>
                                                <td>
                                                <NumberFormat
                                                  value={cardSetItem.amazon_price}
                                                  displayType={"text"}
                                                  thousandSeparator={true}
                                                  prefix={"£"}/></td>                                
                                            </tr>   
                                            <tr key={cardItem.id}>
                                                <td>CoolStuffInc Price:</td>
                                                <td>                                                  
                                                <NumberFormat
                                                  value={cardSetItem.coolstuffinc_price}
                                                  displayType={"text"}
                                                  thousandSeparator={true}
                                                  prefix={"£"}/></td>                                
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