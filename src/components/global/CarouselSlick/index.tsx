import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CarouselSlickProps } from "./types";
import { CarouselContainer, CarouselWrapper } from "./styles";

export const CarouselSlick: React.FC<CarouselSlickProps> = ({
  children,
  settings,
}) => {
  return (
    <CarouselWrapper>
      <CarouselContainer>
        <Slider {...settings}>{children}</Slider>
      </CarouselContainer>
    </CarouselWrapper>
  );
};
