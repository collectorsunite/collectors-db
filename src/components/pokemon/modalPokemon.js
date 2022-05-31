import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Modal, Table, Image } from "react-bootstrap";
import NumberFormat from "react-number-format";

function InfoModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cardItem = props.card;

  const mystyle = {
    display: "flex",
    justifyContent: "center",
  };

  var arrayTcgPlayer = []
  var arrayCardMarket = []


    if(typeof cardItem.tcgplayer !== "undefined") {
      Object.entries(cardItem.tcgplayer.prices).forEach(([key, val]) => {
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
      
      if(typeof cardItem.cardmarket !== "undefined") {
          const objectCreate = {
            average: cardItem.cardmarket.prices.averageSellPrice,        
            low: cardItem.cardmarket.prices.lowPrice,
            trendPrice: cardItem.cardmarket.prices.trendPrice,
            reverseHoloTrend: cardItem.cardmarket.prices.reverseHoloTrend,
            updatedAt: cardItem.cardmarket.updatedAt          
          }
          arrayCardMarket.push(objectCreate)
     }

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
          <div style={mystyle}>
            <Image
              class="img-thumbnail rounded"
              src={cardItem.images.small}
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
                <tr key={cardItem.id + 1}>
                  <td>Super Type</td>
                  <td>{cardItem.supertype}</td>
                </tr>
                <tr key={cardItem.id + 2}>
                  <td>Sub Types</td>
                  <td>{cardItem.subtypes?.join(" ") || "-"}</td>
                </tr>
                <tr key={cardItem.id}>
                  <td>Hp</td>
                  <td>{cardItem.hp}</td>
                </tr>
                <tr key={cardItem.id}>
                  <td>Types</td>
                  {cardItem.types?.map((cardSubtype) => (
                    <td>{cardSubtype}</td>
                  ))}
                </tr>
                <tr key={cardItem.id}>
                  <td>Evolves to</td>
                  {cardItem.evolvesTo?.map((cardSubtype) => (
                    <td>{cardSubtype}</td>
                  ))}
                </tr>
                <tr key={cardItem.id}>
                  <td>Rules</td>
                  {cardItem.rules?.map((cardSubtype) => (
                    <td>{cardSubtype}</td>
                  ))}
                </tr>
                <tr key={cardItem.id + 2}>
                  <td>Retreat Cost</td>
                  <td>{cardItem.retreatCost?.join(" ") || "-"}</td>
                </tr>
                <tr key={cardItem.id + 2}>
                  <td>Converted Retreat Cost</td>
                  <td>{cardItem.convertedRetreatCost || "-"}</td>
                </tr>
                <tr key={cardItem.id + 2}>
                  <td>Artist</td>
                  <td>{cardItem.artist || "-"}</td>
                </tr>
                <tr key={cardItem.id + 2}>
                  <td>Rarity</td>
                  <td>{cardItem.rarity || "-"}</td>
                </tr>
              </tbody>
            </Table>
            <h3>Attacks</h3>
            <Table>
              {cardItem.attacks?.map((attacks) => (
                <>
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>
                    <tr key={cardItem.id}>
                      <td>Attack Name</td>
                      <td>{attacks.name || "-"}</td>
                    </tr>

                    <tr key={cardItem.id}>
                      <td>Attack Cost</td>
                      <td>{attacks.cost?.join(" ") || "-"}</td>
                    </tr>

                    <tr key={cardItem.id}>
                      <td>Converted Energy Cost</td>
                      <td>{attacks.convertedEnergyCost || "-"}</td>
                    </tr>
                    <tr key={cardItem.id}>
                      <td>Damage</td>
                      <td>{attacks.damage || "-"}</td>
                    </tr>
                    <tr key={cardItem.id}>
                      <td>Text</td>
                      <td>{attacks.text || "-"}</td>
                    </tr>
                  </tbody>
                </>
              ))}
            </Table>

            <h3>Weaknesses</h3>
            <Table>
              {cardItem.weaknesses?.map((weakness) => (
                <>
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>
                    <tr key={cardItem.id}>
                      <td>Weakness Type</td>
                      <td>{weakness.type || "-"}</td>
                    </tr>

                    <tr key={cardItem.id}>
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
                <tr key={cardItem.set.id}>
                  <td>Set Name</td>
                  <td>{cardItem.set.name || "-"}</td>
                </tr>
                <tr key={cardItem.set.id}>
                  <td>Set Series</td>
                  <td>{cardItem.set.series || "-"}</td>
                </tr>
                <tr key={cardItem.set.id}>
                  <td>Printed Total</td>
                  <td>{cardItem.set.printedTotal || "-"}</td>
                </tr>
                <tr key={cardItem.set.id}>
                  <td>Release Date</td>
                  <td>{cardItem.set.releaseDate || "-"}</td>
                </tr>
                <tr key={cardItem.id}>
                  <td>Set Image</td>
                  <td>
                    <Image
                      class="img-thumbnail"
                      src={cardItem.set.images.symbol}
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
                    <tr key={cardItem.id}>
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
                <tr key={cardItem.id}>
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
                <tr key={cardItem.id}>
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
                <tr key={cardItem.id}>
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
              <tr key={cardItem.id}>
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
              <tr key={cardItem.id}>
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
              <tr key={cardItem.id}>
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
              <tr key={cardItem.id}>
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
              <tr key={cardItem.id}>
                <td>Updated at:</td>
                <td>{item.updatedAt || "-"}</td>
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
    </>
  );
}

export default InfoModal;
