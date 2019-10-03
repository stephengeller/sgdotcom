import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function carouselItem(image, header, sub, alt = "carousel-image") {
  return (
    <Carousel.Item>
      <Image src={image} alt={alt} className="carousel-image" />
      <Carousel.Caption className="carousel-caption">
        <h3>{header}</h3>
        <h5>{sub}</h5>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

const Landing = () => {
  return (
    <div>
      <Carousel interval="10000" className="carousel">
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
        {carouselItem("img/KyotoStreets.jpg", "Get in touch.", "Or don't.")}
      </Carousel>
    </div>
  );
};

export default Landing;
