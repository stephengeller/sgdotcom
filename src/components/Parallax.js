import React from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";

const App = () => (
  <div style={styles}>
    <Parallax speedDivider="5" bgImage={image1} blur={{ min: -10, max: 5 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Stephen Geller</div>
      </div>
    </Parallax>
    <Parallax bgImage={image2} speedDivider="5" blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
          {" "}
          <Link to={ROUTES.CONTACT}>Contact</Link>
        </div>
      </div>
    </Parallax>
    <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
          {" "}
          <Link to={ROUTES.SURPRISE}>Surprise</Link>
        </div>
      </div>
    </Parallax>
  </div>
);

export default App;
