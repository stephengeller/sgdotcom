import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import HomePage from "../Home";
import Landing from "../Landing";
import Contact from "../Contact";
import * as ROUTES from "../../constants/routes";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";

const popover = (
  <Popover id="popover-basic">
    <Popover.Content>
      <strong>Oi</strong>
    </Popover.Content>
  </Popover>
);

const Surprise = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>
);

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route path={ROUTES.LANDING} component={Landing} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.CONTACT} component={Contact} />
      <Route path={ROUTES.SURPRISE} component={Surprise} />
    </div>
  </Router>
);
export default App;
