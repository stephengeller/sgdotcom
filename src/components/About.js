import React from "react";
import Container from "react-bootstrap/Container";

const info = "I like killing dreams and making memes. More info to come.";

export const About = () => {
  return (
    <div>
      <Container>
        <h1>About</h1>
        <div>{info}</div>
      </Container>
    </div>
  );
};
