import React, { Component } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

export default class ContactUs extends Component {
  render() {
    return (
      <div>
        <h1 className="title_heading_magic">
          Contact Us
          <h2 className="h2title_heading">“Always Looking to Improve”</h2>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfnF8q2-kfyjXRLNDDY5yvVUss_ohrFRRz5HqmonG0c9PJztg/viewform?embedded=true" width="640" height="844" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </h1> 
        <p style={{marginBottom: "100px"}}></p>      
      </div>
    );
  }
}
