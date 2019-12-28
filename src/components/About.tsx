import React from "react";
import Container from "react-bootstrap/Container";
import URLS from "../constants/urls.json";

const style = {};

const contents = (
  <div>
    <h1>About</h1>
    <p>
      My name is Stephen Geller, and I am a London-based polyglot software
      engineer specialising in building tools and supporting infrastructure.
    </p>
    <p>
      I am proficient in multiple languages and frameworks, and specialised in
      Javascript, Scala and Python.
    </p>
    <p>
      As an Agile and XP advocate, I produce reliable, legible and tested code,
      ensuring to iterate quickly and deliver often.
    </p>
    <p>
      {" "}
      You can find my full CV on my{" "}
      <a target="_blank" rel="noopener noreferrer" href={`${URLS.GITHUB}/CV`}>
        Github
      </a>{" "}
      page.
    </p>
  </div>
);

export const About = () => {
  return (
    <div className="mobile-container" style={style}>
      <Container>
        <div>{contents}</div>
      </Container>
    </div>
  );
};
