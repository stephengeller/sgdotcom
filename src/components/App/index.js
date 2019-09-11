import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import HomePage from "../Home";
import Landing from "../Landing";
import Contact from "../Contact";
import * as ROUTES from "../../constants/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route path={ROUTES.LANDING} component={Landing} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.CONTACT} component={Contact} />
    </div>
  </Router>
);
export default App;
