import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function carouselItem(image, header, sub, alt = "carousel-image") {
  return (
    <Carousel.Item>
      <Image
        className="d-block w-100"
        src={image}
        fluid
        alt={alt}
        style={{
          display: "block",
          width: "100%",
          height: "auto"
        }}
      />
      <Carousel.Caption>
        <h3>{header}</h3>
        <p>{sub}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

const Landing = () => {
  return (
    <Carousel>
      {carouselItem(
        "img/StephenJapan2.jpg",
        "Hi, I'm Stephen.",
        "I write code for a living."
      )}
      {carouselItem(
        "img/AfterlightImage.jpg",
        "I like photography",
        "I take pictures with an iPhone XS"
      )}
    </Carousel>
  );
};

export default Landing;
