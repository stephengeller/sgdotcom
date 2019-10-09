import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import * as URLS from "../constants/urls";
import { FaGithub } from "react-icons/fa";

const styles = {
  color: "white",
  padding: ".5rem 1rem",
  display: "-webkit-block"
};

const NavLink = (route, text) => {
  return (
    <Nav.Link as={Link} to={route} style={styles}>
      {text}
    </Nav.Link>
  );
};

const navBarStyle = {
  padding: "0rem 0.5rem"
};

const CustomNavbar = () => {
  return (
    <Navbar
      fixed={"top"}
      collapseOnSelect
      expand={"sm"}
      variant="dark"
      style={navBarStyle}
    >
      <Navbar.Brand>
        <Link to={ROUTES.LANDING} style={{ marginLeft: "0px" }}>
          <img
            alt=""
            src="img/stephenCartoonSmall.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        {NavLink(ROUTES.ABOUT, "About")}
        {NavLink(ROUTES.GALLERY, "Gallery")}
        {NavLink(ROUTES.CONTACT, "Contact")}
        <NavItem className="github-nav">
          <a
            rel="noopener noreferrer"
            target="_blank"
            style={styles}
            href={URLS.GITHUB}
          >
            <FaGithub style={{ fontSize: "150%" }} />
          </a>
        </NavItem>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
