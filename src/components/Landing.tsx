import React, { ReactElement } from "react";
import CustomNavbar from "./Nav/Navbar";

type LandingItemProps = {
  text: string;
  sub: string | JSX.Element;
  image?: string;
};

const LandingItemStyle = {
  marginBottom: "10vh"
} as React.CSSProperties;

function LandingItem({
  text,
  sub,
  image
}: LandingItemProps): React.ReactElement<LandingItemProps> {
  console.log(image);
  return (
    <div style={LandingItemStyle}>
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
          text={"Hi, I'm Stephen."}
          sub={"I write code for a living."}
          image={"img/StephenJapan2.jpg"}
        />
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

      {/*<Carousel interval={10000} style={carouselStyle}>*/}
      {/*  {carouselItem(*/}
      {/*    "img/StephenJapan2.jpg",*/}
      {/*    "Hi, I'm Stephen.",*/}
      {/*    "I write code for a living."*/}
      {/*  )}*/}
      {/*  {carouselItem(*/}
      {/*    "img/AfterlightImage.jpg",*/}
      {/*    "I like photography",*/}
      {/*    "For now, I take pictures with an iPhone."*/}
      {/*  )}*/}
      {/*  {carouselItem(*/}
      {/*    "img/KyotoStreets.jpg",*/}
      {/*    "Get in touch with me.",*/}
      {/*    getInTouchSub*/}
      {/*  )}*/}
      {/*</Carousel>*/}
    </div>
  );
};
