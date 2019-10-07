import React from "react";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
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

const Contact = () => {
  return (
    <div style={parent}>
      <div style={child}>
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
      </div>
    </div>
  );
};

export default Contact;
