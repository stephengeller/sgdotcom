import React from "react";
import {
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
import * as URLS from "../constants/urls";

const parent = {
  textAlign: "center",
  height: "100vh",
  display: "table",
  width: "100%"
};

const child = {
  verticalAlign: "middle",
  display: "table-cell"
};

function contactIcon(link, Icon) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Icon className="contact-icon" />
    </a>
  );
}

const Contact = () => {
  return (
    <div style={parent}>
      <div style={child}>
        {contactIcon(URLS.GITHUB, FaGithub)}
        {contactIcon(URLS.TWITTER, FaTwitter)}
        {contactIcon(URLS.INSTAGRAM, FaInstagram)}
        {contactIcon(URLS.LINKEDIN, FaLinkedin)}
        {contactIcon(URLS.EMAIL, FaEnvelope)}
      </div>
    </div>
  );
};

export default Contact;
