import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 50%;
  z-index: 999;
  font-family: dosis;

  &.slick-list {
    background-color: black;
    z-index: 999 !important;
  }

  .slick-track img {
    width: 100% !important;
    min-height: 100% !important;
    display: block;
  }

  .slick-track {
    display: flex !important;
    gap: 8px;
  }
`;

export const PrevButton = styled.button`
  z-index: 999 !important;

  &.slick-prev {
    background-color: transparent !important;
    right: 25px !important;
  }

  &.slick-prev::before {
    content: "";
    background-image: url("https://cdn.icon-icons.com/icons2/1132/PNG/512/1486348532-music-play-pause-control-go-arrow_80458.png") !important;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover; /* ou 'contain' dependendo do comportamento desejado */
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    transform: rotateY(180deg);
    opacity: 1;
  }
`;

export const NextButton = styled.button`
  z-index: 999 !important;

  &.slick-next {
    background-color: transparent !important;
    right: -20px;
  }

  &.slick-track {
  }

  &.slick-next::before {
    content: "";
    background-image: url("https://cdn.icon-icons.com/icons2/1132/PNG/512/1486348532-music-play-pause-control-go-arrow_80458.png") !important;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover; /* ou 'contain' dependendo do comportamento desejado */
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 1;
  }

  &.slick-list {
    display: flex !important;
    gap: 2px;
  }

  .slick-slide {
    display: flex;
  }
  .slick-initialized .slick-slide {
    display: flex;
  }
`;
