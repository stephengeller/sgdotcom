import React from "react";
import Container from "react-bootstrap/Container";
import * as URLS from "../constants/urls";
import ReactMarkdown from "react-markdown";

const style = {};

const markdown = `
# About

My name is Stephen Geller, and I am a London-based polyglot software engineer specialising in building tools and supporting infrastructure.

I am proficient in multiple languages and frameworks, and specialised in Javascript, Scala and Python.

As an Agile and XP advocate, I produce reliable, legible and tested code, ensuring to iterate quickly and deliver often.

You can find my full CV on my [Github](${URLS.GITHUB}/CV) page.`;

export const About = () => {
  return (
    <div className="mobile-container" style={style}>
      <Container>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </Container>
    </div>
  );
};
