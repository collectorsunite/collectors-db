import React from 'react'
import { Table } from 'react-bootstrap'
import InfoModal from './modalTest'


function CardRender(cardDetail) {

  return(
  <div>
    <Table hover responsive flexi>
                <thead>
                <tr>
                    <th className="table_heading">Name</th>
                    <th className="table_heading">Type</th>
                    <th className="table_heading">Race</th>
                    <th className="table_heading">Card..</th>
                </tr>
                </thead>
                <tbody>
                    {
                        cardDetail?.map((item) => (
                            <tr key={item.id}>
                                <td className="table_content">{item.name}</td>
                                <td className="table_content">{item.type}</td>
                                <td className="table_content">{item.race}</td>
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