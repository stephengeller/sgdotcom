import React, { ReactElement } from "react";
import CustomNavbar from "./Nav/Navbar";
import LazyHero from "react-lazy-hero";

type LandingItemProps = {
  text: string;
  sub: string | JSX.Element;
  image?: string;
  style?: React.CSSProperties;
};

const LandingItemStyle = {
  marginBottom: "10vh",
  color: "#9AC2C5"
} as React.CSSProperties;

function LandingItem({
  text,
  sub,
  image,
  style = {}
}: LandingItemProps): React.ReactElement<LandingItemProps> {
  console.log(image);
  return (
    <div style={{ ...LandingItemStyle, ...style }}>
      <h1 className={"landing-header"}>{text}</h1>
      <h2 className={"landing-subheader"}>{sub}</h2>
    </div>
  );
}

const getInTouchSub = (
  <a href={"/contact"} className={"nav-link"} style={{ textDecoration: "" }}>
    Click here for my deets.
  </a>
);

export const Landing = (): ReactElement => {
  return (
    <div>
      <CustomNavbar />
      <LazyHero
        imageSrc="https://unsplash.it/2000/1000"
        style={{ color: "red", height: "100vh" }}
      >
        <LandingItem
          style={{
            padding: "1vh",
            color: "#270722"
            // height: "100vh"
          }}
          text={"Hi, I'm Stephen."}
          sub={"I'm a software developer."}
          image={"img/StephenJapan2.jpg"}
        />
      </LazyHero>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          height: "80vh",
          paddingTop: "15vh"
        }}
      >
        <LandingItem
          text={"I like to write reliable and refined code."}
          sub={"I deliver clean and tested code quickly and consistently."}
          image={"img/AfterlightImage.jpg"}
        />
        <LandingItem
          text={"Get in touch with me."}
          sub={getInTouchSub}
          image={"img/KyotoStreets.jpg"}
        />
      </div>
    </div>
  );
};
