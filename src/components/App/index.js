import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import HomePage from "../Home";
import * as ROUTES from "../../constants/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      Welcome to my site.
      <Route path={ROUTES.HOME} component={HomePage} />
    </div>
  </Router>
);
export default App;
