import React from 'react'
import { Table } from 'react-bootstrap'
import InfoModal from './modalPokemon'
import { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Modal, Image, Button } from "react-bootstrap";
import NumberFormat from "react-number-format";


const CardRender = (props) =>  {
    const [modalInfo, setModalInfo] = useState([]);
    const [showModal, setShowModal] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cardItem = props.card;


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
          dataField: "data.supertype",
          text: "Super Type"
        },
        {
          dataField: "data.rarity",
          text: "Rarity"
        }
      ];
    
      const defaultSortedBy = [{
        dataField: "data.name",
        order: "asc"  // or desc
    }];

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


  var arrayTcgPlayer = []
  var arrayCardMarket = []


    if(typeof modalInfo.tcgplayer !== "undefined") {
      Object.entries(modalInfo.tcgplayer.prices).forEach(([key, val]) => {
        const objectCreateTCG = {
          name: key,
          low: val.low,
          mid: val.mid,
          high: val.high,
          market: val.market
        }
        arrayTcgPlayer.push(objectCreateTCG)
        })
      } 
      
      if(typeof modalInfo.cardmarket !== "undefined") {
          const objectCreate = {
            average: modalInfo.cardmarket.prices.averageSellPrice,        
            low: modalInfo.cardmarket.prices.lowPrice,
            trendPrice: modalInfo.cardmarket.prices.trendPrice,
            reverseHoloTrend: modalInfo.cardmarket.prices.reverseHoloTrend,
            updatedAt: modalInfo.cardmarket.updatedAt          
          }
          arrayCardMarket.push(objectCreate)
     }

     const ModalContent = () => {
         return(
        <Modal size="lg" show={show} onHide={handleClose} centered fluid>
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={mystyle}>
            <Image
              class="img-thumbnail rounded"
              src={modalInfo.images.small}
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
                  <td>Super Type</td>
                  <td>{modalInfo.supertype}</td>
                </tr>
                <tr key={modalInfo.id + 2}>
                  <td>Sub Types</td>
                  <td>{modalInfo.subtypes?.join(" ") || "-"}</td>
                </tr>
                <tr key={modalInfo.id}>
                  <td>Hp</td>
                  <td>{modalInfo.hp}</td>
                </tr>
                <tr key={modalInfo.id}>
                  <td>Types</td>
                  {modalInfo.types?.map((cardSubtype) => (
                    <td>{cardSubtype}</td>
                  ))}
                </tr>
                <tr key={modalInfo.id}>
                  <td>Evolves to</td>
                  {modalInfo.evolvesTo?.map((cardSubtype) => (
                    <td>{cardSubtype}</td>
                  ))}
                </tr>
                <tr key={modalInfo.id}>
                  <td>Rules</td>
                  {modalInfo.rules?.map((cardSubtype) => (
                    <td>{cardSubtype}</td>
                  ))}
                </tr>
                <tr key={modalInfo.id + 2}>
                  <td>Retreat Cost</td>
                  <td>{modalInfo.retreatCost?.join(" ") || "-"}</td>
                </tr>
                <tr key={modalInfo.id + 2}>
                  <td>Converted Retreat Cost</td>
                  <td>{modalInfo.convertedRetreatCost || "-"}</td>
                </tr>
                <tr key={modalInfo.id + 2}>
                  <td>Artist</td>
                  <td>{modalInfo.artist || "-"}</td>
                </tr>
                <tr key={modalInfo.id + 2}>
                  <td>Rarity</td>
                  <td>{modalInfo.rarity || "-"}</td>
                </tr>
              </tbody>
            </Table>
            <h3>Attacks</h3>
            <Table>
              {modalInfo.attacks?.map((attacks) => (
                <>
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>
                    <tr key={modalInfo.id}>
                      <td>Attack Name</td>
                      <td>{attacks.name || "-"}</td>
                    </tr>

                    <tr key={modalInfo.id}>
                      <td>Attack Cost</td>
                      <td>{attacks.cost?.join(" ") || "-"}</td>
                    </tr>

                    <tr key={modalInfo.id}>
                      <td>Converted Energy Cost</td>
                      <td>{attacks.convertedEnergyCost || "-"}</td>
                    </tr>
                    <tr key={modalInfo.id}>
                      <td>Damage</td>
                      <td>{attacks.damage || "-"}</td>
                    </tr>
                    <tr key={modalInfo.id}>
                      <td>Text</td>
                      <td>{attacks.text || "-"}</td>
                    </tr>
                  </tbody>
                </>
              ))}
            </Table>

            <h3>Weaknesses</h3>
            <Table>
              {modalInfo.weaknesses?.map((weakness) => (
                <>
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>
                    <tr key={modalInfo.id}>
                      <td>Weakness Type</td>
                      <td>{weakness.type || "-"}</td>
                    </tr>

                    <tr key={modalInfo.id}>
                      <td>Weakness value</td>
                      <td>{weakness.value || "-"}</td>
                    </tr>
                  </tbody>
                </>
              ))}
            </Table>

            <h3>Card Set </h3>
            <Table>
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr key={modalInfo.set.id}>
                  <td>Set Name</td>
                  <td>{modalInfo.set.name || "-"}</td>
                </tr>
                <tr key={modalInfo.set.id}>
                  <td>Set Series</td>
                  <td>{modalInfo.set.series || "-"}</td>
                </tr>
                <tr key={modalInfo.set.id}>
                  <td>Printed Total</td>
                  <td>{modalInfo.set.printedTotal || "-"}</td>
                </tr>
                <tr key={modalInfo.set.id}>
                  <td>Release Date</td>
                  <td>{modalInfo.set.releaseDate || "-"}</td>
                </tr>
                <tr key={modalInfo.id}>
                  <td>Set Image</td>
                  <td>
                    <Image
                      class="img-thumbnail"
                      src={modalInfo.set.images.symbol}
                      alt="id"
                    />
                  </td>
                </tr>
              </tbody>
            </Table>

            <h3>Current Card Price: TCG Player</h3>
            <Table>
            {arrayTcgPlayer?.map((item) => (
              <>            
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Card Rarity</td>
                      <td>{item.name}</td>
                    </tr>
                    <tr key={modalInfo.id}>
                  <td>TCG Player Low Price:</td>
                  <td>
                    <NumberFormat
                      value={item.low || "-"}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"£"}
                    />
                  </td>
                </tr>
                <tr key={modalInfo.id}>
                  <td>TCG Player Mid Price:</td>
                  <td>
                    <NumberFormat
                      value={item.mid || "-"}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"£"}
                    />
                  </td>
                </tr>
                <tr key={modalInfo.id}>
                  <td>TCG Player High Price:</td>
                  <td>
                    <NumberFormat
                      value={item.high || "-"}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"£"}
                    />
                  </td>
                </tr>
                <tr key={modalInfo.id}>
                  <td>TCG Player Market Price:</td>
                  <td>
                    <NumberFormat
                      value={item.market || "-"}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"£"}
                    />
                  </td>
                </tr>
                  </tbody>
               
              </>
            ))}
             </Table>            

            <h3>Current Card Price: Card Market</h3>

            <Table>
              {arrayCardMarket?.map((item) => (
                <>
              <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr key={modalInfo.id}>
                <td>Card Market Average Price:</td>
                <td>
                  <NumberFormat
                    value={item.average || "-"}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"£"}
                  />
                </td>
              </tr>
              <tr key={modalInfo.id}>
                <td>Card Market Low Price:</td>
                <td>
                  <NumberFormat
                    value={item.low || "-"}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"£"}
                  />
                </td>
              </tr>
              <tr key={modalInfo.id}>
                <td>Card Market Trend Price:</td>
                <td>
                  <NumberFormat
                    value={item.trendPrice || "-"}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"£"}
                  />
                </td>
              </tr>
              <tr key={modalInfo.id}>
                <td>Card Market Reverse Holo Trend Price:</td>
                <td>
                  <NumberFormat
                    value={item.reverseHoloTrend || "-"}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"£"}
                  />
                </td>
              </tr>
              <tr key={modalInfo.id}>
                <td>Updated at:</td>
                <td>{item.updatedAt || "-"}</td>
              </tr>
              <tr key={modalInfo.id}>
                <td>Amazon Link:</td>
                <td><a href="https://amzn.to/3HazwpN">Check Price?</a></td>
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