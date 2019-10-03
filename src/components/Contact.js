import React from "react";
import Container from "react-bootstrap/Container";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import * as URLS from "../constants/urls";

const Contact = () => {
  return (
    <div>
      <Container
        style={{
          paddingTop: "20px",
          textAlign: "center"
        }}
      >
        <a href={URLS.GITHUB}>
          <FaGithub className="contact-icon" />
        </a>
        <a href={URLS.TWITTER}>
          <FaTwitter className="contact-icon" />
        </a>
        <a href={URLS.INSTAGRAM}>
          <FaInstagram className="contact-icon" />
        </a>
        <a href={URLS.LINKEDIN}>
          <FaLinkedin className="contact-icon" />
        </a>
      </Container>
    </div>
  );
};

export default Contact;
