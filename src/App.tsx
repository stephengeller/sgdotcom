import React, { ReactElement } from "react";
import Div100vh from "react-div-100vh";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ROUTES from "./constants/routes.json";

import { Landing } from "./components/Landing";
import { Izzi } from "./components/Izzi/Izzi";
import { Quizzi } from "./components/Izzi/Quizzi";
import { CountdownComp } from "./components/Izzi/CountdownComp";

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
      <Route exact path={ROUTES.IZZI.ROOT} component={Izzi} />
      <Route exact path={ROUTES.IZZI.QUIZ} component={Quizzi} />
      <Route exact path={ROUTES.IZZI.COUNTDOWN} component={CountdownComp} />
      <Route component={My404} />
    </Switch>
  </Router>
);
export default App;
