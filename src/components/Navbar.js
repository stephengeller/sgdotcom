import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";

const styles = {
  color: "white"
};

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand={"sm"} bg="dark" variant="dark">
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
        <Nav.Link as={Link} to={ROUTES.ABOUT} style={styles}>
          About
        </Nav.Link>
        <Nav.Link as={Link} to={ROUTES.CONTACT} style={styles}>
          Contact
        </Nav.Link>
        <Nav.Link as={Link} to={ROUTES.SURPRISE} style={styles}>
          Surprise!
        </Nav.Link>
        <NavItem>
          <a className="nav-link" style={styles} href={ROUTES.GITHUB}>
            GitHub
          </a>
        </NavItem>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
