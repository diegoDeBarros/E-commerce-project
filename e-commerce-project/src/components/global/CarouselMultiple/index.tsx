import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselImg, CarouselMultipleContainer } from "./styles";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <CarouselMultipleContainer>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <CarouselImg
              src="https://i.imgur.com/GBxFt3b.jpg"
              alt=""
            ></CarouselImg>
          </div>
          <div>
            <CarouselImg
              src="https://i.imgur.com/GBxFt3b.jpg"
              alt=""
            ></CarouselImg>
          </div>
          <div>
            <CarouselImg
              src="https://i.imgur.com/GBxFt3b.jpg"
              alt=""
            ></CarouselImg>
          </div>
          <div>
            <h3>
              <CarouselImg
                src="https://i.imgur.com/GBxFt3b.jpg"
                alt=""
              ></CarouselImg>
            </h3>
          </div>
        </Slider>
      </CarouselMultipleContainer>
    );
  }
}
