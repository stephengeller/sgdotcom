import React, { ReactElement } from "react";
import Container from "react-bootstrap/Container";
import CustomNavbar from "./Nav/Navbar";

const style = {
  textAlign: "center",
  backgroundColor: "transparent"
} as React.CSSProperties;

export const Izzi = (): ReactElement => {
  return (
    <Container className="mobile-container" style={style}>
      <h1>Happy birthday!</h1>
    </Container>
  );
};
