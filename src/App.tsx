import React, { ReactElement } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";

import CustomNavbar from "./components/Navbar";
import { Landing } from "./components/Landing";
import { Contact } from "./components/Contact";
import { About } from "./components/About";

import ROUTES from "./constants/routes.json";
import { Gallery } from "./components/Gallery";

const popover = (
  <Popover id="popover-basic">
    <Popover.Content>
      <strong>Oi</strong>
    </Popover.Content>
  </Popover>
);

const My404 = (): ReactElement => (
  <Container>
    <h1>Page not found!</h1>
    <p>
      <Link to={ROUTES.LANDING}>Go back.</Link>
    </p>
  </Container>
);

const Surprise = (): ReactElement => (
  <Container style={{ textAlign: "center" }}>
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant="success">Click me to see</Button>
    </OverlayTrigger>
  </Container>
);

const App = (): ReactElement => (
  <Router>
    <CustomNavbar />
    <Switch>
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route exact path={ROUTES.ABOUT} component={About} />
      <Route exact path={ROUTES.GALLERY} component={Gallery} />
      <Route exact path={ROUTES.CONTACT} component={Contact} />
      <Route exact path={ROUTES.SURPRISE} component={Surprise} />
      <Route component={My404} />
    </Switch>
  </Router>
);
export default App;
