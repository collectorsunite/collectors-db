import React from 'react'
import { Table } from 'react-bootstrap'
import InfoModal from './modalPokemon'


function CardRender(cardDetail) {


  return(
  <div>
    <Table hover responsive flexi>
                <thead>
                <tr>
                    <th className="table_heading">Name</th>
                    <th className="table_heading">Super Type</th>
                    <th className="table_heading">Rarity</th>
                    <th className="table_heading">Card..</th>
                </tr>
                </thead>
                <tbody>
                    {
                        cardDetail?.map((item) => (
                            <tr>
                                <td className="table_content">{item.name}</td>
                                <td className="table_content">{item.supertype}</td>
                                <td className="table_content">{item.rarity}</td>                               
                                <td className="table_content">
                                  <InfoModal
                                    card={item}
                                    /></td>
                                <td/>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            </div>
  )
}

export default CardRender