import React from 'react'
import { Table } from 'react-bootstrap'
import InfoModal from './modalMagic'
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useState } from "react";
import { Modal, Image, Button } from "react-bootstrap";
import magicManaSymbols from "./constants/magicManaSymbols";


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
          dataField: "data.rarity",
          text: "Rarity"
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
              <div style={mystyle}>
                <Image
                  class="img-thumbnail rounded"
                  src={modalInfo.imageUrl}
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
                      <tr key={modalInfo.id + 1}>
                      <td>Names</td>
                      <td>{modalInfo.names?.join(", ") || ("-")}</td>
                    </tr>
                    <tr key={modalInfo.id + 1}>
                      <td>Mana Cost</td>
                      <td>{magicManaSymbols(modalInfo.manaCost || ("-"))}</td>
                    </tr>
                    <tr key={modalInfo.id + 1}>
                      <td>CMC</td>
                      <td>{modalInfo.cmc || ("-")}</td>
                    </tr>    
                    <tr key={modalInfo.id + 1}>
                      <td>Colors</td>
                      <td>{modalInfo.colors?.join(", ") || ("-")}</td>
                    </tr>
                    <tr key={modalInfo.id + 1}>
                      <td>Color Identity</td>
                      <td>{modalInfo.colorIdentity?.join(", ") || ("-")}</td>
                    </tr> 
                    <tr key={modalInfo.id + 1}>
                      <td>Type</td>
                      <td>{modalInfo.type || ("-")}</td>
                    </tr>
                    <tr key={modalInfo.id + 1}>
                      <td>Supertypes</td>
                      <td>{modalInfo.supertypes?.join(", ") || ("-")}</td>
                    </tr>
                    <tr key={modalInfo.id + 1}>
                      <td>Types</td>
                      <td>{modalInfo.types?.join(", ") || ("-")}</td>
                    </tr> 
                    <tr key={modalInfo.id + 1}>
                      <td>Subtypes</td>
                      <td>{modalInfo.subtypes?.join(", ") || ("-")}</td>
                    </tr>
                    <tr key={modalInfo.id + 1}>
                      <td>Rarity</td>
                      <td>{modalInfo.rarity || ("-")}</td>
                    </tr> 
                    <tr key={modalInfo.id + 1}>
                      <td>Set</td>
                      <td>{modalInfo.set || ("-")}</td>
                    </tr>
                    <tr key={modalInfo.id + 1}>
                      <td>Set name</td>
                      <td>{modalInfo.setName || ("-")}</td>
                    </tr>
                    <tr key={modalInfo.id + 1}>
                      <td>Text</td>
                      <td>{modalInfo.text || ("-")}</td>
                    </tr> 
                    <tr key={modalInfo.id + 1}>
                      <td>Artist</td>
                      <td>{modalInfo.artist || ("-")}</td>
                    </tr> 
                    <tr key={modalInfo.id + 1}>
                      <td>Number</td>
                      <td>{modalInfo.number || ("-")}</td>
                    </tr> 
                    <tr key={modalInfo.id + 1}>
                      <td>Power</td>
                      <td>{modalInfo.power || ("-")}</td>
                    </tr> 
                    <tr key={modalInfo.id + 1}>
                      <td>Toughness</td>
                      <td>{modalInfo.toughness || ("-")}</td>
                    </tr> 
                    <tr key={modalInfo.id + 1}>
                      <td>Layout</td>
                      <td>{modalInfo.layout || ("-")}</td>
                    </tr> 
                    <tr key={modalInfo.id + 1}>
                      <td>Multiverseid</td>
                      <td>{modalInfo.multiverseid || ("-")}</td>
                    </tr> 
                    <tr key={modalInfo.id + 1}>
                      <td>Power</td>
                      <td>{modalInfo.power || ("-")}</td>
                    </tr>
                    <tr key={modalInfo.id + 1}>
                      <td>Amazon Price:</td>
                      <td><a href="https://amzn.to/3tqMcmL">Check Price?</a></td>
                    </tr>
                    <tr key={modalInfo.id + 1}>
                      <td>Printings</td>
                      <td>{modalInfo.printings?.join(", ") || ("-")}</td>
                    </tr>                            
                  </tbody>
                </Table>
                <h3>Rulings</h3>
                <Table>
                <thead>
                        <tr></tr>
                      </thead>
                  {modalInfo.rulings?.map((rulings) => (
                    <>                 
                      <tbody>
                        <tr key={modalInfo.id}>
                          <td>Rulings Text</td>
                          <td>{rulings.text || "-"}</td>
                        </tr>
    
                        <tr key={modalInfo.id}>
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
                  {modalInfo.legalities?.map((legals) => (
                    <>                 
                      <tbody>
                        <tr key={modalInfo.id}>
                          <td>Format</td>
                          <td>{legals.format || "-"}</td>
                        </tr>
    
                        <tr key={modalInfo.id}>
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
                  {modalInfo.foreignNames?.map((rulings) => (
                    <>                 
                      <tbody>
                        <tr key={modalInfo.id}>
                          <td>Name</td>
                          <td>{rulings.name || "-"}</td>
                        </tr>
    
                        <tr key={modalInfo.id}>
                          <td>Language</td>
                          <td>{rulings.language || "-"}</td>
                        </tr> 
    
                        <tr key={modalInfo.id}>
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