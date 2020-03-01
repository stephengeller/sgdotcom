import React, { ReactElement, useState } from "react";
import LazyHero from "react-lazy-hero";
import Div100vh from "react-div-100vh";
import LandingNavbar from "./Nav/LandingNavbar";

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

export const LandingGreeting = () => {
  return (
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
  );
};

export const Landing = (): ReactElement => {
  const [section, setSection] = useState(<LandingGreeting />);

  return (
    <Div100vh>
      <LazyHero
        imageSrc="https://unsplash.it/2000/1000"
        style={{ height: "100vh" }}
      >
        {section}
      </LazyHero>
      <LandingNavbar setSection={setSection} />
    </Div100vh>
  );
};
