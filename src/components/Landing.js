import React, { Component } from "react";
import Parralax from "./Parallax";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default class Landing extends Component {
  render() {
    return (
      <div
        style={{
          height: "90%",
          width: "100%",
          position: "absolute",
          left: "0"
        }}
      >
        <Row
          style={{
            height: "100%",
            width: "100%",
            textAlign: "center",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Col>Software Developer</Col>
          <Col xs={6}>
            {" "}
            <h1> Stephen Geller</h1>
          </Col>
          <Col>Polyglot Engineer</Col>
        </Row>
      </div>
    );
  }
}
