import React, { Component } from 'react'
import state from 'react'
import { Row, Col, Container, Table } from 'react-bootstrap'
import axios from 'axios';
import HousewareModal from '../animalModals/modalHouseware';

export default class HousewarePage extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.fetchData = this.fetchData.bind(this);
    this.reloadData = this.reloadData.bind(this)
  }   
  

  reloadData() {
    this.fetchData(state);
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData(state, instance) {
    var self = this;
    const url = "https://acnhapi.com/v1/houseware"
   
    axios.get(url)
      .then(response => {  
      
        self.setState({          
          data: response.data
        });
      }).catch(error => {
        const errorData = {
          "name": "Not Found"
        }
          //error handling hereeeeee????
          console.log(error)
      })
      .finally(function() {
        // always executed
      });
  }

  render() {
    const data = this.state.data   

    return (   
        <div>
        <Container fluid>
        <Row className="g-4">      
        <Col>
        </Col>        
        <Col xs={7}> 
        <h1 className="title_heading_magic">Animal Crossing: New Horizons</h1>
        <small className="h2title_heading">Items: Houseware</small>
        <div>
              <Table hover responsive flexi>
                  <thead>
                  <tr>                      
                      <th className="table_heading">Name</th>                     
                      <th className="table_heading">More..</th>
                  </tr>
                  </thead>
                  <tbody>
                      {                            
                        Object.entries(data).map(([key,value]) =>
                              <tr>
                                  <td className="table_content">{key.replaceAll("_", " ")}</td>                                
                                  <td className="table_content">{<HousewareModal 
                                  cardKey={key.replaceAll("_", " ")}
                                  card={value}/>}</td>                                                                                              
                              </tr>
                          )
                      }                                         
                      
                  </tbody>
              </Table>
              </div>
        </Col>
        <Col>3</Col>
        </Row>
        </Container>
        <p style={{marginBottom: "100px"}}></p>
      </div>
    )
  }
}