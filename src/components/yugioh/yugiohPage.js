import React, { Component, state } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import CardRender from './CardContainer';
import axios from 'axios';
import returnYugiohFinalList from './constants/yugiohCardSetFinalList';
import UrlBuilder from './urlBuilder';

class YugiohPage extends Component {
  
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.card_name = React.createRef()
      this.card_race = React.createRef()
      this.card_type = React.createRef()
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
      const race = this.card_race.current.value
      const set = this.set_select.current.value

      const linkData = {
          "name": name,
          "type": type,
          "race": race,
          "set": set}

      const url = UrlBuilder({linkData: linkData})
     
      axios.get(url)
        .then(response => {
          self.setState({
            data: response.data.data
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
        <Form.Group className="mb-3" controlId="formGridName">
          <Form.Label>Card Name</Form.Label>
          <Form.Control ref={this.card_name} placeholder="Card Name" name="card_name" />
        </Form.Group>
          <Form.Group as={Col} controlId="formGridRace">
            <Form.Label>Race</Form.Label>
            <Form.Control ref={this.card_race} type="text" placeholder="Card Race" name="card_race" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridType">
            <Form.Label>Type</Form.Label>
            <Form.Control  ref={this.card_type} type="text" placeholder="Card Type" name="card_type"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridCardSet">
          <Form.Label style={{marginTop: "20px"}}>Card Set</Form.Label>
          <Form.Control ref={this.set_select} as="select" name="set_select">
          <option>Select Card Set</option>
            {returnYugiohFinalList().map((opt, i) => (
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
      </div>
      );
    }
  }

export default YugiohPage
