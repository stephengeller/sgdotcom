import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

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

function carouselItem(
  image: string,
  header: string,
  sub: any,
  alt = "carousel-image"
) {
  return (
    <Carousel.Item>
      <Image src={image} alt={alt} style={carouselImageStyle} />
      <Carousel.Caption>
        <h3>{header}</h3>
        <h5>{sub}</h5>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

export const Landing = () => {
  return (
    <div>
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
          <a
            href={"/contact"}
            className={"nav-link"}
            style={{ textDecoration: "" }}
          >
            Click here for my deets.
          </a>
        )}
      </Carousel>
    </div>
  );
};
