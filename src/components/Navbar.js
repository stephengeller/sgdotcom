import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";

const styles = {
  color: "white"
};

const NavLink = (route, text) => {
  return (
    <Nav.Link as={Link} to={route} style={styles}>
      {text}
    </Nav.Link>
  );
};

const CustomNavbar = () => {
  return (
    <Navbar
      sticky={"top"}
      collapseOnSelect
      expand={"sm"}
      bg="dark"
      variant="dark"
      style={{ paddingTop: "0px", paddingBottom: "0" }}
    >
      <Navbar.Brand>
        <img
          alt=""
          src="img/stephenCartoonSmall.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />
        <Navbar.Text>
          <Link to={ROUTES.LANDING} style={{ marginLeft: "10px" }}>
            Stephen Geller
          </Link>
        </Navbar.Text>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        {NavLink(ROUTES.ABOUT, "About")}
        {NavLink(ROUTES.CONTACT, "Contact")}
        {NavLink(ROUTES.SURPRISE, "Surprise!")}
        <NavItem>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="nav-link"
            style={styles}
            href={ROUTES.GITHUB}
          >
            GitHub
          </a>
        </NavItem>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
