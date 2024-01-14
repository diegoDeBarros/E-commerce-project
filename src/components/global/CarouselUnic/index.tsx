import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ProductMock } from "../../../mock/ProductMock";
import { ProductCard } from "../ProductCard";
import {
  CarouselContainer,
  CarouselWrapper,
  NextButton,
  PrevButton,
} from "./styles";

export const CarouselUnique = () => {
  const settings = {
    dots: false,
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
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselWrapper>
      <CarouselContainer>
        <Slider {...settings}>
          {ProductMock.map((product, index) => {
            return (
              <ProductCard
                key={index}
                imageLink={product.imageLink}
                productDescription={product.productDescription}
                originalPrice={product.originalPrice}
                discoutPrice={product.discoutPrice}
                sizes={product.sizes}
                sex={product.sex}
              />
            );
          })}
        </Slider>
      </CarouselContainer>
    </CarouselWrapper>
  );
};

/**
 *  <img src="https://i.imgur.com/II3QgoS.jpg" alt="" />
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
 */
