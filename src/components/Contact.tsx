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
  display: "table"
} as React.CSSProperties;

const child = {
  verticalAlign: "middle",
  display: "table-cell"
};

const iconStyle = {
  fontSize: "8vw",
  margin: "0 5vw",
  color: "black"
};

interface ContactIconProps {
  link: string;
  Icon: IconType;
}

function ContactIcon({ link, Icon }: ContactIconProps): ReactElement {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Icon className="contact-icon" style={iconStyle} />
    </a>
  );
}

export const Contact = (): ReactElement => {
  return (
    <div>
      <div style={parent}>
        <div style={child} className="contact-icons">
          <ContactIcon link={URLS.GITHUB} Icon={FaGithub} />
          <ContactIcon link={URLS.TWITTER} Icon={FaTwitter} />
          <ContactIcon link={URLS.INSTAGRAM} Icon={FaInstagram} />
          <ContactIcon link={URLS.LINKEDIN} Icon={FaLinkedin} />
          <ContactIcon link={URLS.EMAIL} Icon={FaEnvelope} />
        </div>
      </div>
    </div>
  );
};
