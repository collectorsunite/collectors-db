import React from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { useState } from "react";
import { Modal, Table, Button } from "react-bootstrap";
import NumberFormat from "react-number-format";
import MultipleImages from "./multipleImages";

const CardRender = (props) => {
    const [modalInfo, setModalInfo] = useState([]);
    const [showModal, setShowModal] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const toggleTrueOrFalse= () => {
        setShowModal(handleShow)
    }

    const columns = [
        {
          dataField: "data.name",
          text: "Name",
          sort: true
        },
        {
          dataField: "data.type",
          text: "Type"
        },
        {
          dataField: "data.race",
          text: "Race"
        }
      ];
    
      const items = props => {
          const data = [];
        props.cards?.map((item) => (
            data.push({ data: item}) 
          ))
          return data
      }
    
      const rowevents = {
          onClick: (e, row) => {   
            setModalInfo(row.data)
            toggleTrueOrFalse()       
          }
      }

      const mystyle = {
        display: "flex",
        justifyContent: 'center'
      };

    const ModalContent = () => {
        return (
            <Modal size="lg" show={show} onHide={handleClose} centered fluid>
            <Modal.Header closeButton>
              <Modal.Title>{modalInfo.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={mystyle} >
                {MultipleImages({imageData: modalInfo.card_images})}
              </div>
              <div>
                <h3>Card Details</h3>
                <Table>
                <thead>
                  <tr>                                 
                  </tr>
                  </thead>
                  <tbody>                                
                              <tr key={modalInfo.id + 1}>
                                  <td>Description</td>
                                  <td>{modalInfo.desc}</td>                                
                              </tr>   
                              <tr key={modalInfo.id +2 }>
                                  <td>Race</td>
                                  <td>{modalInfo.race}</td>                                
                              </tr> 
                              <tr key={modalInfo.id}>
                                  <td>Type</td>
                                  <td>{modalInfo.type}</td>                                
                              </tr> 
                              <tr key={modalInfo.id}>
                                  <td>Attack</td>
                                  <td>{modalInfo.atk}</td>                                
                              </tr> 
                              <tr key={modalInfo.id}>
                                  <td>Defense</td>
                                  <td>{modalInfo.def}</td>                                
                              </tr> 
                              <tr key={modalInfo.id}>
                                  <td>Attribute</td>
                                  <td>{modalInfo.attribute}</td>                                
                              </tr>                 
                              <tr key={modalInfo.id}>
                                  <td>Archetype</td>
                                  <td>{modalInfo.archetype}</td>                                
                              </tr>  
                              <tr key={modalInfo.id}>
                                  <td>Linkval</td>
                                  <td>{modalInfo.linkval}</td>                                
                              </tr>                                                                                     
                  </tbody>
                </Table>
                <h3>Card Sets</h3>
                <Table>
                <thead>
                                  <tr>                                 
                                  </tr>
                                  </thead>
                {modalInfo.card_sets?.map((cardSetItem) => (                                                              
                                  <tbody>                                
                                              <tr key={modalInfo.id}>
                                                  <td>Set Name</td>
                                                  <td>{cardSetItem.set_name || "-"}</td>                                
                                              </tr>   
                                              <tr key={modalInfo.id}>
                                                  <td>Set Code</td>
                                                  <td>{cardSetItem.set_code || "-"}</td>                                
                                              </tr> 
                                              <tr key={modalInfo.id}>
                                                  <td>Set Rarity</td>
                                                  <td>{cardSetItem.set_rarity || "-"}</td>                                
                                              </tr> 
                                              <tr key={modalInfo.id}>
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
                {modalInfo.card_prices.map((cardSetItem) => (                                                           
                                  <tbody>                                
                                              <tr key={modalInfo.id}>
                                                  <td>Card Market Price:</td>
                                                  <td><NumberFormat
                                                    value={cardSetItem.cardmarket_price}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"£"}/></td>                                
                                              </tr>   
                                              <tr key={modalInfo.id}>
                                                  <td>TCG Plater Price:</td>
                                                  <td>
                                                  <NumberFormat
                                                    value={cardSetItem.tcgplayer_price}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"£"}/></td>                                
                                              </tr> 
                                              <tr key={modalInfo.id}>
                                                  <td>Ebay Price:</td>
                                                  <td>
                                                  <NumberFormat
                                                    value={cardSetItem.ebay_price}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"£"}/></td>                                
                                              </tr> 
                                              <tr key={modalInfo.id}>
                                                  <td><a href="https://amzn.to/3MCcxVC">Amazon Price:</a></td>
                                                  <td>
                                                  <NumberFormat
                                                    value={cardSetItem.amazon_price}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    prefix={"£"}/></td>                                
                                              </tr>   
                                              <tr key={modalInfo.id}>
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
        )
    }

  return(    
      <div className="card_details">       
      <BootstrapTable
        hover      
        keyField="name"
        data={items({cards: props.cardDetails})}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 15, hideSizePerPage: true, nextPageText: '>', prePageText: '<' })}
        rowEvents={rowevents}
      />

      {show ? <ModalContent /> : null}
      </div>           
  )
}

export default CardRender