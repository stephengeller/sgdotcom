import React, { ReactElement } from "react";
import Container from "react-bootstrap/Container";
import URLS from "../constants/urls.json";

const style = {
  textAlign: "left",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  padding: "1vw"
} as React.CSSProperties;

const contents = (
  <div>
    <h1>About</h1>
    <p>
      My name is Stephen Geller, and I am a London-based polyglot software
      engineer specialising in building tools and supporting infrastructure.
    </p>
    <p>
      I am proficient in multiple languages and frameworks, and specialised in
      Javascript (including Node, Typescript and React), Ruby and Python.
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

export const About = (): ReactElement => {
  return (
    <div style={style}>
      <Container>
        <div className={"about-contents"}>{contents}</div>
      </Container>
    </div>
  );
};
