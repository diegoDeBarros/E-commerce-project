import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { CarouselContainer } from "./styles";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const handleDragStart = (e: { preventDefault: () => any }) =>
  e.preventDefault();

const items = [
  <img
    src="https://i.imgur.com/GBxFt3b.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="https://i.imgur.com/GBxFt3b.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="https://i.imgur.com/GBxFt3b.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
];

const Gallery = () => {
  return (
    <CarouselContainer>
      <AliceCarousel mouseTracking items={items} />
    </CarouselContainer>
  );
};

export default Gallery;
