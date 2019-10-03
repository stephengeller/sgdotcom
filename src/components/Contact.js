import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Container style={{ textAlign: "center" }}>
          <h1>Contact Details</h1>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Email
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>stephen.gb.geller+web@gmail.com</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>{"Hello! I'm another body"}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Row>
            <Col sm>Email</Col>
            <Col sm>GitHub</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
