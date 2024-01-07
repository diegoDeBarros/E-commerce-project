import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CarouselContainer,
  NextButton,
  PrevButton,
  SliderContainer,
} from "./styles";

export const CarouselMultiple = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    prevArrow: (
      <PrevButton className="custom-prev-btn" onClick={undefined}>
        {/* {"<"} */}
      </PrevButton>
    ),
    nextArrow: (
      <NextButton className="custom-next-btn" onClick={undefined}>
        {/* {">"} */}
      </NextButton>
    ),
    slidesToShow: 2,
    slidesToScroll: 1,
    mobileFirst: true,
  };

  // useEffect(()=>{
  //   let elementoFilho = document.querySelector('slick-slider.slick-initialized"');
  //   let elementoPai = elementoFilho.closest('div');
  // })
  
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CarouselContainer>
        <Slider {...settings}>
          <SliderContainer className="img-container">
            <img src="https://i.imgur.com/II3QgoS.jpg" alt="" />
          </SliderContainer>
          <SliderContainer>
            <img src="https://i.imgur.com/II3QgoS.jpg" alt="" />
          </SliderContainer>
          <SliderContainer>
            <img src="https://i.imgur.com/GBxFt3b.jpg" alt="" />
          </SliderContainer>
          <SliderContainer>
            <img src="https://i.imgur.com/GBxFt3b.jpg" alt="" />
          </SliderContainer>
        </Slider>
      </CarouselContainer>
    </div>
  );
};
