import React, { Component, state } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import CardRender from './CardContainer';
import axios from 'axios';
import UrlBuilder from './urlBuilder';
import digimonColor from  './constants/digimonColors';
import digimonTypes from './constants/digimonTypes'
import digimonSets from './constants/digimonSets'

class DigimonPage extends Component {
  
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.card_name = React.createRef()
      this.card_attribute = React.createRef()
      this.card_type = React.createRef()
      this.card_color = React.createRef()
      this.set_select = React.createRef()

      this.state = { data: [] };
      this.fetchData = this.fetchData.bind(this);
      this.reloadData = this.reloadData.bind(this)
    }   
    

    reloadData() {
      this.fetchData(state);
    }
  
    fetchData(state, instance) {
      var self = this;

      const name = this.card_name.current.value
      const type = this.card_type.current.value
      const color = this.card_color.current.value
      const set = this.set_select.current.value
      const attribute = this.card_attribute.current.value

      const linkData = {
          "name": name,
          "type": type,
          "color": color,
          "set": set,
          "attribute": attribute}


      const url = UrlBuilder({linkData: linkData})

      console.log(this.state.data)
     
      axios.get(url)
        .then(response => {
          console.log(response.data);
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
  
    handleSubmit(event) {
        event.preventDefault();
        this.fetchData()     
    }
        
  
    render() {
      
      return (
        <div>
        <Form onSubmit={this.handleSubmit}>
        <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="formGridName">
          <Form.Label>Card Name</Form.Label>
          <Form.Control ref={this.card_name} placeholder="Card Name" name="card_name" />
        </Form.Group>      
          <Form.Group as={Col} controlId="formGridType">
            <Form.Label>Attribute</Form.Label>
            <Form.Control  ref={this.card_attribute} type="text" placeholder="Card Attribute" name="card_attribute"/>
          </Form.Group>                           
          <Form.Group className="mb-3" controlId="formGridCardColor">
          <Form.Label style={{marginTop: "20px"}}>Type</Form.Label>
          <Form.Control ref={this.card_type} as="select" name="card_type">
          <option>Select Card Type</option>
            {digimonTypes().map((opt, i) => (
            <option value={opt}>{opt}</option>
            ))}
          </Form.Control>
           </Form.Group> 
          <Form.Group className="mb-3" controlId="formGridCardColor">
          <Form.Label style={{marginTop: "20px"}}>Color</Form.Label>
          <Form.Control ref={this.card_color} as="select" name="card_color">
          <option>Select Card Color</option>
            {digimonColor().map((opt, i) => (
            <option value={opt}>{opt}</option>
            ))}
          </Form.Control>
           </Form.Group>  
          <Form.Group className="mb-3" controlId="formGridCardSet">
          <Form.Label style={{marginTop: "20px"}}>Card Set</Form.Label>
          <Form.Control ref={this.set_select} as="select" name="set_select">
          <option>Select Card Set</option>
          {digimonSets().map((opt, i) => (
            <option value={opt.name}>{opt.name}</option>
            ))}
          </Form.Control>
           </Form.Group>          
        </Row>
        <Button className="button_align_center" variant="outline-dark" type="submit" size="lg">
          Submit
        </Button>
      </Form>
      <p>{CardRender(this.state.data)}</p>
      <p style={{marginBottom: "100px"}}></p>      
      </div>
      );
    }
  }

export default DigimonPage
