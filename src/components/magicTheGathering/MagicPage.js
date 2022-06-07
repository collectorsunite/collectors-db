import React, { Component, state } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import CardRender from './CardContainer';
import axios from 'axios';
import UrlBuilder from './urlBuilder';

import magicSets from './constants/magicSets';
import magicTypes from './constants/magicTypes';
import magicRarity from './constants/magicRarity';
import magicColors from './constants/magicColors';
import magicSupertypes from './constants/magicSuperTypes';

class MagicPage extends Component {
  
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.card_name = React.createRef()
      this.card_rarity = React.createRef()
      this.card_type = React.createRef()
      this.card_supertypes = React.createRef()
      this.card_set = React.createRef()
      this.card_colors = React.createRef()

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
      const rarity = this.card_rarity.current.value
      const setName = this.card_set.current.value
      const colors = this.card_colors.current.value
      const supertypes = this.card_supertypes.current.value

      const linkData = {
          "name": name,
          "type": type,
          "rarity": rarity,
          "setName": setName,
          "colors": colors,
          "supertypes": supertypes}


      const url = UrlBuilder({linkData: linkData})

      console.log(url)
     
      axios.get(url)
        .then(response => {
          console.log(response.data);
          self.setState({
            data: response.data.cards
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

          <Form.Group className="mb-3" controlId="formGridCardType">
          <Form.Label style={{marginTop: "20px"}}>Type</Form.Label>
          <Form.Control ref={this.card_type} as="select" name="card_type">
          <option>Select Card Type</option>
            {magicTypes().map((opt, i) => (
            <option value={opt}>{opt}</option>
            ))}
          </Form.Control>
           </Form.Group> 

           <Form.Group className="mb-3" controlId="formGridCardSet">
          <Form.Label style={{marginTop: "20px"}}>Card Set</Form.Label>
          <Form.Control ref={this.card_set} as="select" name="card_set">
          <option>Select Card Set</option>
            {magicSets().map((opt, i) => (
            <option value={opt}>{opt}</option>
            ))}
          </Form.Control>
           </Form.Group> 

           <Form.Group as={Col} className="mb-3" controlId="formGridCardRarity">
          <Form.Label style={{marginTop: "20px"}}>Rarity</Form.Label>
          <Form.Control ref={this.card_rarity} as="select" name="card_rarity">
          <option>Select Card Rarity</option>
            {magicRarity().map((opt, i) => (
            <option value={opt}>{opt}</option>
            ))}
          </Form.Control>
           </Form.Group> 

          
           <Form.Group as={Col} className="mb-3" controlId="formGridCardSubtypes">
          <Form.Label style={{marginTop: "20px"}}>Colors</Form.Label>
          <Form.Control ref={this.card_colors} as="select" name="card_colors">
          <option>Select Card Color</option>
            {magicColors().map((opt, i) => (
            <option value={opt}>{opt}</option>
            ))}
          </Form.Control>
           </Form.Group> 

           <Form.Group as={Col} className="mb-3" controlId="formGridCardSupertypes">
          <Form.Label style={{marginTop: "20px"}}>Super Types</Form.Label>
          <Form.Control ref={this.card_supertypes} as="select" name="card_supertypes">
          <option>Select Card Supertypes</option>
            {magicSupertypes().map((opt, i) => (
            <option value={opt}>{opt}</option>
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

export default MagicPage
