import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";

import HomePage from "../Home";
import Landing from "../Landing";
import Contact from "../Contact";
import CustomNavbar from "../Navbar";
import { About } from "../About";

import * as ROUTES from "../../constants/routes";

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
    <CustomNavbar />
    <Route path={ROUTES.LANDING} component={Landing} />
    <Route path={ROUTES.ABOUT} component={About} />
    <Route exact path={"/"}>
      <Redirect to={"/index"} />
    </Route>
    <Route path={ROUTES.HOME} component={HomePage} />
    <Route path={ROUTES.CONTACT} component={Contact} />
    <Route path={ROUTES.SURPRISE} component={Surprise} />
  </Router>
);
export default App;
