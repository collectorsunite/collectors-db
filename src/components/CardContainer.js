import React, { useState, Button, useEffect } from 'react'
import { Card, Modal, Table } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import InfoModal from './modalTest'
import { Route, Redirect } from 'react-router'



// function CardRender(cardDetail) {
 
//   const columns = [
//     {dataField: "name", text: "Card Name"},
//       {dataField: "type", text: "Card Type"},
//       {dataField: "race", text: "Card Race"},
//       {dataField: "attribute", text: "Card Attribute"},
//       {dataField: "archetype", text: "Card Archetype"}
//   ]

//   const rowEvents = {
//     onClick: (e, row) => {
        
//       }
//     }

//   return(
//     <div>
//       <BootstrapTable
//       keyField="name"
//       data={cardDetail}
//       columns ={columns}
//       pagination={paginationFactory()}
//       rowEvents = {rowEvents}
//       />
//     <InfoModal />
//     </div>
//   )
// }

// export default CardRender


function CardRender(cardDetail) {

  return(
    <Table hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Race</th>
                    <th>More Details</th>
                </tr>
                </thead>
                <tbody>
                    {
                        cardDetail.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td>{item.race}</td>
                                <td>
                                  <InfoModal
                                    card={item}
                                    /></td>
                                <td/>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
  )
}

export default CardRender