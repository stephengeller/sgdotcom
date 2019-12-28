import React, { ReactElement } from "react";
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

const CarouselItem = ({
  image,
  header,
  subheader,
  alt
}: {
  image: string;
  header: string;
  subheader: string | JSX.Element;
  alt?: "carousel-image";
}): ReactElement => {
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
      <Carousel interval={10000} style={carouselStyle}>
        <CarouselItem
          image="img/StephenJapan2.jpg"
          header="Hi, I'm Stephen."
          subheader={"I write code for a living."}
        />
        <CarouselItem
          image="img/AfterlightImage.jpg"
          header="I like photography"
          subheader="For now, I take pictures with an iPhone."
        />
        <CarouselItem
          image="img/KyotoStreets.jpg"
          header="Get in touch with me."
          subheader={getInTouchSub}
        />
      </Carousel>
    </div>
  );
};
