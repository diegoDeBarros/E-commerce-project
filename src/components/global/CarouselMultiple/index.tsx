import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CarouselContainer,
  FinalPriceSpan,
  InfosContainer,
  InitialPriceSpan,
  NextButton,
  PrevButton,
  PriceContainer,
  SliderContainer,
  TitleH1,
} from "./styles";

export const CarouselMultiple = () => {
  const settings = {
    dots: true,
    infinite: false,
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
  // https://i.imgur.com/GBxFt3b.jpg
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CarouselContainer>
        <Slider {...settings}>
          <SliderContainer className="img-container">
            <img src="https://i.imgur.com/II3QgoS.jpg" alt="" />
            <InfosContainer>
              <TitleH1>CAMISETA PRETA - MARCA TAL</TitleH1>
              <PriceContainer>
                <InitialPriceSpan>DE</InitialPriceSpan>
                <InitialPriceSpan>R$ 89,90</InitialPriceSpan>
              </PriceContainer>
              <PriceContainer>
                <FinalPriceSpan>POR</FinalPriceSpan>
                <FinalPriceSpan>R$ 70,00</FinalPriceSpan>
              </PriceContainer>
            </InfosContainer>
          </SliderContainer>
          <SliderContainer className="img-container">
            <img src="https://i.imgur.com/II3QgoS.jpg" alt="" />
            <InfosContainer>
              <TitleH1>CAMISETA PRETA - MARCA TAL</TitleH1>
              <PriceContainer>
                <InitialPriceSpan>DE</InitialPriceSpan>
                <InitialPriceSpan>R$ 89,90</InitialPriceSpan>
              </PriceContainer>
              <PriceContainer>
                <FinalPriceSpan>POR</FinalPriceSpan>
                <FinalPriceSpan>R$ 70,00</FinalPriceSpan>
              </PriceContainer>
            </InfosContainer>
          </SliderContainer>
          <SliderContainer className="img-container">
            <img src="https://i.imgur.com/GBxFt3b.jpg" alt="" />
            <InfosContainer>
              <TitleH1>CAMISETA PRETA - MARCA TAL</TitleH1>
              <PriceContainer>
                <InitialPriceSpan>DE</InitialPriceSpan>
                <InitialPriceSpan>R$ 89,90</InitialPriceSpan>
              </PriceContainer>
              <PriceContainer>
                <FinalPriceSpan>POR</FinalPriceSpan>
                <FinalPriceSpan>R$ 70,00</FinalPriceSpan>
              </PriceContainer>
            </InfosContainer>
          </SliderContainer>
          <SliderContainer className="img-container">
            <img src="https://i.imgur.com/II3QgoS.jpg" alt="" />
            <InfosContainer>
              <TitleH1>CAMISETA PRETA - MARCA TAL</TitleH1>
              <PriceContainer>
                <InitialPriceSpan>DE</InitialPriceSpan>
                <InitialPriceSpan>R$ 89,90</InitialPriceSpan>
              </PriceContainer>
              <PriceContainer>
                <FinalPriceSpan>POR</FinalPriceSpan>
                <FinalPriceSpan>R$ 70,00</FinalPriceSpan>
              </PriceContainer>
            </InfosContainer>
          </SliderContainer>
        </Slider>
      </CarouselContainer>
    </div>
  );
};
