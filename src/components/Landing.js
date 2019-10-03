import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Landing extends Component {
  render() {
    return (
      <div
        style={{
          height: "90%",
          width: "100%",
          position: "absolute",
          left: "0",
          padding: "80px"
        }}
      >
        <Row
          style={{
            height: "100%",
            textAlign: "center",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Col sm>Software Developer</Col>
          <Col sm>
            <h1> Stephen Geller</h1>
          </Col>
          <Col sm>Polyglot Engineer</Col>
        </Row>
      </div>
    );
  }
}
