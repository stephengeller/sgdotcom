import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand={"sm"} bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          alt=""
          src="img/stephenCartoon.png"
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
      <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>
            <Navbar.Text>
              <Link to={ROUTES.ABOUT}>About</Link>
            </Navbar.Text>
          </Nav.Link>
          <Nav.Link>
            <Navbar.Text>
              <Link to={ROUTES.CONTACT} className={""}>
                Contact
              </Link>
            </Navbar.Text>
          </Nav.Link>
          <Nav.Link>
            <Navbar.Text>
              <Link to={ROUTES.SURPRISE}>Surprise!</Link>
            </Navbar.Text>
          </Nav.Link>
          <Nav.Link href={ROUTES.GITHUB}>GitHub</Nav.Link>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
