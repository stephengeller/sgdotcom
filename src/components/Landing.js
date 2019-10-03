import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function carouselItem(image, header, sub, alt = "carousel-image") {
  return (
    <Carousel.Item>
      <Image src={image} alt={alt} className="carousel-image" />
      <Carousel.Caption className="carousel-caption">
        <h3>{header}</h3>
        <p>{sub}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

const Landing = () => {
  return (
    <div>
      <Carousel className="carousel">
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
    </div>
  );
};

export default Landing;
