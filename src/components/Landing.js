import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

const rowStyle = {
  height: "100%",
  width: "100%",
  textAlign: "center",
  display: "flex",
  alignItems: "center"
};

const LandingCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="img/StephenJapan2.jpg"
          fluid
          alt="First slide"
          style={{}}
        />
        <Carousel.Caption>
          <h3>{"Hi, I'm Stephen."}</h3>
          <p>I write code for a living.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="img/AfterlightImage.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>I also take photos.</h3>
          <p>Mainly with my iPhone.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const Landing = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "0",
        padding: "80px",
        width: "100%"
      }}
    >
      <Container>
        <Row style={rowStyle}>
          <Col sm>Software Developer</Col>
          <Col sm>
            <img
              alt="testing"
              src="img/stephenCartoon.png"
              width="100%"
              height="100%"
              className="d-inline-block align-top"
            />
          </Col>
          <Col sm>Site under construction!</Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingCarousel;
