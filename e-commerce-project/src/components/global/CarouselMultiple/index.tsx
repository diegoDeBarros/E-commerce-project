import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"; //
import { CarouselContainer } from "./styles";
const CustomPrevArrow = (props: { onClick: any }) => {
  // Desestruture as props e ignore as props desconhecidas
  const { onClick } = props;

  return (
    <button className="custom-prev-btn" onClick={onClick}>
      {"<"}
    </button>
  );
};

const CustomNextArrow = (props: { onClick: any }) => {
  // Desestruture as props e ignore as props desconhecidas
  const { onClick } = props;

  return (
    <button className="custom-next-btn" onClick={onClick}>
      {">"}
    </button>
  );
};

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,

      arrows: true,
      prevArrow: <CustomPrevArrow onClick={undefined} />,
      nextArrow: <CustomNextArrow onClick={undefined} />,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div>
        <CarouselContainer>
          <Slider {...settings}>
            <div className="img-container">
              <img src="https://i.imgur.com/GBxFt3b.jpg" alt="" />
            </div>
            <div>
              <img src="https://i.imgur.com/GBxFt3b.jpg" alt="" />
            </div>
            <div>
              <img src="https://i.imgur.com/GBxFt3b.jpg" alt="" />
            </div>
            <div>
              <img src="https://i.imgur.com/GBxFt3b.jpg" alt="" />
            </div>
            {/* <div>
              <img src="../../../icons/profile-icon" alt="" />
            </div> */}
          </Slider>
        </CarouselContainer>
      </div>
    );
  }
}
