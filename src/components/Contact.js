import React from "react";
import {
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
import * as URLS from "../constants/urls";
import Container from "react-bootstrap/Container";

const parent = {
  textAlign: "center",
  height: "70%",
  display: "table",
  width: "100%"
};

const child = {
  verticalAlign: "middle",
  display: "table-cell"
};

const iconStyle = {};

function contactIcon(link, Icon) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Icon className="contact-icon" style={iconStyle} />
    </a>
  );
}

const Contact = () => {
  return (
    <Container style={parent} className="mobile-container">
      <div style={child} className="contact-icons">
        {contactIcon(URLS.GITHUB, FaGithub)}
        {contactIcon(URLS.TWITTER, FaTwitter)}
        {contactIcon(URLS.INSTAGRAM, FaInstagram)}
        {contactIcon(URLS.LINKEDIN, FaLinkedin)}
        {contactIcon(URLS.EMAIL, FaEnvelope)}
      </div>
    </Container>
  );
};

export default Contact;
