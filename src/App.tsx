import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";

import CustomNavbar from "./components/Navbar";
// import HomePage from "../Home";
// import Landing from "../Landing";
// import Contact from "../Contact";
// import { About } from "../About";

import ROUTES from "./constants/routes.json";
// import { Gallery } from "../Gallery";

const popover = (
  <Popover id="popover-basic">
    <Popover.Content>
      <strong>Oi</strong>
    </Popover.Content>
  </Popover>
);

const My404 = () => (
  <Container>
    <h1>Page not found!</h1>
    <p>
      <Link to={ROUTES.LANDING}>Go back.</Link>
    </p>
  </Container>
);

const Surprise = () => (
  <Container style={{ textAlign: "center" }}>
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant="success">Click me to see</Button>
    </OverlayTrigger>
  </Container>
);

const App = () => (
  <Router>
    <CustomNavbar />
    <Switch>
      {/*<Route exact path={ROUTES.LANDING} component={Landing} />*/}
      {/*<Route exact path={ROUTES.ABOUT} component={About} />*/}
      {/*<Route exact path={ROUTES.GALLERY} component={Gallery} />*/}
      {/*<Route exact path={ROUTES.HOME} component={HomePage} />*/}
      {/*<Route exact path={ROUTES.CONTACT} component={Contact} />*/}
      <Route exact path={ROUTES.SURPRISE} component={Surprise} />
      <Route component={My404} />
    </Switch>
  </Router>
);
export default App;
