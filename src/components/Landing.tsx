import React, { ReactElement } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import CustomNavbar from "./Nav/Navbar";

const carouselImageStyle = {
  height: "-webkit-fill-available",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
} as React.CSSProperties;

const carouselStyle = {
  width: "100%",
  height: "100%",
  position: "fixed",
  top: "0",
  left: "0",
  alignItems: "center"
} as React.CSSProperties;

const carouselItem = (
  image: string,
  header: string,
  subheader: string | JSX.Element,
  alt?: "carousel-image"
): ReactElement => {
  return (
    <Carousel.Item>
      <Image src={image} alt={alt} style={carouselImageStyle} />
      <Carousel.Caption>
        <h3>{header}</h3>
        <h5>{subheader}</h5>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

const getInTouchSub = (
  <a href={"/contact"} className={"nav-link"} style={{ textDecoration: "" }}>
    Click here for my deets.
  </a>
);

export const Landing = (): ReactElement => {
  return (
    <div>
      <CustomNavbar />
      <Carousel interval={10000} style={carouselStyle}>
        {carouselItem(
          "img/StephenJapan2.jpg",
          "Hi, I'm Stephen.",
          "I write code for a living."
        )}
        {carouselItem(
          "img/AfterlightImage.jpg",
          "I like photography",
          "For now, I take pictures with an iPhone."
        )}
        {carouselItem(
          "img/KyotoStreets.jpg",
          "Get in touch with me.",
          getInTouchSub
        )}
      </Carousel>
    </div>
  );
};
