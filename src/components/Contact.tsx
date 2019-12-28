import React, { ReactElement } from "react";
import {
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

import URLS from "../constants/urls.json";
import { IconType } from "react-icons";

const parent = {
  textAlign: "center",
  display: "table",
  width: "100%",
  height: "80vh"
} as React.CSSProperties;

const child = {
  verticalAlign: "middle",
  display: "table-cell"
};

const iconStyle = {
  fontSize: "8vw",
  margin: "0 5vw"
};

function contactIcon(link: string, Icon: IconType): ReactElement {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Icon className="contact-icon" style={iconStyle} />
    </a>
  );
}

export const Contact = (): ReactElement => {
  return (
    <div style={parent} className="mobile-container">
      <div style={child} className="contact-icons">
        {contactIcon(URLS.GITHUB, FaGithub)}
        {contactIcon(URLS.TWITTER, FaTwitter)}
        {contactIcon(URLS.INSTAGRAM, FaInstagram)}
        {contactIcon(URLS.LINKEDIN, FaLinkedin)}
        {contactIcon(URLS.EMAIL, FaEnvelope)}
      </div>
    </div>
  );
};
