import React, { ReactElement } from "react";
import Div100vh from "react-div-100vh";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ROUTES from "./constants/routes.json";

import { Landing } from "./components/Landing";
import { Izzi } from "./components/Izzi";

const My404 = (): ReactElement => (
  <Div100vh>
    <div
      style={{
        height: "inherit",
        color: "white",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <h1>Page not found!</h1>
      <br />
      <p>
        <Link to={ROUTES.LANDING}>Go back.</Link>
      </p>
    </div>
  </Div100vh>
);
const App = (): ReactElement => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route exact path={ROUTES.IZZI} component={Izzi} />
      <Route component={My404} />
    </Switch>
  </Router>
);
export default App;
