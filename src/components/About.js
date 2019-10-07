import React from "react";
import Container from "react-bootstrap/Container";
import * as URLS from "../constants/urls";

const style = {
  paddingTop: "10vh",
  height: "100vh"
};

export const About = () => {
  return (
    <div style={style}>
      <Container>
        <h1>About</h1>
        <div>
          I am a London-based software developer, proficient in web-development
          languages and frameworks such as Ruby on Rails, Javascript and Node.
          <br />
          <br />
          Through my time at <a href="https://makers.tech"> Makers Academy</a>,
          I have learnt to write my code using Test-Driven Development
          techniques ensuring that I produce clean, efficient code for any
          project.
          <br />
          <br />
          You can see my full CV on my <a href={`${URLS.GITHUB}/CV`}>
            GitHub{" "}
          </a>{" "}
          page.
        </div>
      </Container>
    </div>
  );
};
