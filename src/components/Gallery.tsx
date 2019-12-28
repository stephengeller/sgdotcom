import React from "react";
import Container from "react-bootstrap/Container";

const style = {
  textAlign: "center",
  backgroundColor: "transparent"
} as React.CSSProperties;

export const Gallery = () => {
  return (
    <Container className="mobile-container" style={style}>
      <h1>Coming soon!</h1>
    </Container>
  );
};
