import Navbar from "react-bootstrap/Navbar";
import React, { ReactElement } from "react";
import NavItem from "react-bootstrap/NavItem";
import { FaGithub } from "react-icons/fa";

import URLS from "../../constants/urls.json";
import { About } from "../About";
import { Gallery } from "../Gallery";
import { Contact } from "../Contact";
import { LandingGreeting } from "../Landing";

interface NavLinkProps {
  text?: string;
  children?: ReactElement;
  setSection: Function;
  component: ReactElement;
}

interface LandingNavbarProps {
  style?: React.CSSProperties;
  setSection: Function;
}

const imgSize = 50;

const navLinkStyle = {
  color: "black",
  padding: "0.5rem 1rem",
  display: "-webkit-block",
  border: "none",
  background: "none",
  fontSize: "20px"
};

const navBarStyle = {
  marginTop: "1vh",
  bottom: 0
};

const NavLink = ({
  text,
  children,
  setSection,
  component
}: NavLinkProps): ReactElement => {
  return (
    <div
      role={"button"}
      tabIndex={0}
      onKeyDown={(): void => setSection(component)}
      className={"nav-link"}
      onClick={(): void => setSection(component)}
      style={navLinkStyle}
    >
      <div>
        {text}
        {children}
      </div>
    </div>
  );
};

function LandingNavbar({
  style,
  setSection
}: LandingNavbarProps): ReactElement {
  return (
    <Navbar
      fixed={"bottom"}
      collapseOnSelect
      expand={"sm"}
      variant="light"
      style={{ ...navBarStyle, ...style }}
    >
      <Navbar.Brand>
        <NavLink setSection={setSection} component={<LandingGreeting />}>
          <img
            style={{ marginLeft: "0px", paddingLeft: "0" }}
            src={"img/stephenCartoonSmall.png"}
            width={imgSize}
            height={imgSize}
            className="d-inline-block align-top"
            alt={""}
          />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <NavLink setSection={setSection} component={<About />} text={"About"} />
        <NavLink
          setSection={setSection}
          component={<Gallery />}
          text={"Gallery"}
        />
        <NavLink
          setSection={setSection}
          component={<Contact />}
          text={"Contact"}
        />
        <NavItem className="github-nav">
          <a
            rel="noopener noreferrer"
            target="_blank"
            style={navLinkStyle}
            href={URLS.GITHUB}
          >
            <FaGithub style={{ fontSize: "150%" }} />
          </a>
        </NavItem>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default LandingNavbar;
