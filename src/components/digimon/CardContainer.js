import React from 'react'
import { Table } from 'react-bootstrap'
import InfoModal from './modalDigimon'
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useState } from "react";
import { Modal, Image, Button } from "react-bootstrap";

const CardRender = (props) => {
    const [modalInfo, setModalInfo] = useState([]);
    const [showModal, setShowModal] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const toggleTrueOrFalse= () => {
        setShowModal(handleShow)
    }

    const defaultSortedBy = [{
      dataField: "data.name",
      order: "asc"  // or desc
  }];

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
          dataField: "data.color",
          text: "Color"
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
            <Image                        
                            class="img-thumbnail rounded"
                            src={modalInfo.image_url}
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
                                                     
                            <tr key={modalInfo.id + 1}>
                                <td>Type</td>
                                <td>{modalInfo.type}</td>                                
                            </tr>  
                            <tr key={modalInfo.id + 1}>
                                <td>Amazon Price:</td>
                                <td><a href="https://amzn.to/39bwBk8">Check Price?</a></td>                                
                            </tr>  
                            <tr key={modalInfo.id +2 }>
                                <td>Color</td>
                                <td>{modalInfo.color}</td>                                
                            </tr> 
                            <tr key={modalInfo.id}>
                                <td>Stage</td>
                                <td>{modalInfo.stage}</td>                                
                            </tr> 
                            <tr key={modalInfo.id}>
                                <td>Digi type</td>
                                <td>{modalInfo.digi_type}</td>                                
                            </tr> 
                            <tr key={modalInfo.id}>
                                <td>Attribute</td>
                                <td>{modalInfo.attribute}</td>                                
                            </tr> 
                            <tr key={modalInfo.id}>
                                <td>Level</td>
                                <td>{modalInfo.level}</td>                                
                            </tr>                 
                            <tr key={modalInfo.id}>
                                <td>Play cost</td>
                                <td>{modalInfo.play_cost}</td>                                
                            </tr>  
                            <tr key={modalInfo.id}>
                                <td>Evolution cost</td>
                                <td>{modalInfo.evolution_cost}</td>                                
                            </tr>
                            <tr key={modalInfo.id}>
                                <td>Card Rarity</td>
                                <td>{modalInfo.cardrarity}</td>                                
                            </tr>  
                            <tr key={modalInfo.id}>
                                <td>Evolution cost</td>
                                <td>{modalInfo.evolution_cost}</td>                                
                            </tr>  
                            <tr key={modalInfo.id}>
                                <td>Artist</td>
                                <td>{modalInfo.artist}</td>                                
                            </tr>  
                            <tr key={modalInfo.id}>
                                <td>DP</td>
                                <td>{modalInfo.dp}</td>                                
                            </tr> 
                            <tr key={modalInfo.id}>
                                <td>Card Number</td>
                                <td>{modalInfo.cardnumber}</td>                                
                            </tr> 
                            <tr key={modalInfo.id}>
                                <td>Main Effect</td>
                                <td>{modalInfo.maineffect}</td>                                
                            </tr>  
                            <tr key={modalInfo.id}>
                                <td>Soure Effect</td>
                                <td>{modalInfo.soureeffect}</td>                                
                            </tr> 
                            <tr key={modalInfo.id}>
                                <td>Set Name</td>
                                <td>{modalInfo.set_name}</td>                                
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
      defaultSorted={defaultSortedBy}
    />

    {show ? <ModalContent /> : null}
    </div>           
  )
}

export default CardRender