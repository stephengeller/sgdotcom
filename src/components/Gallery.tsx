import React, { ReactElement } from "react";
import Container from "react-bootstrap/Container";

const style = {
  textAlign: "center",
  backgroundColor: "transparent"
} as React.CSSProperties;

export const Gallery = (): ReactElement => {
  return (
    <div>
      <Container className="mobile-container" style={style}>
        <h1>Coming soon!</h1>
      </Container>
    </div>
  );
};
