import { useContext, useEffect, useState } from "react";
import { Carousel } from "../../components/global/Carousel";
import { CarouselSlick } from "../../components/global/CarouselSlick";
import { GridContainer } from "../../components/global/GridContainer/styles";
import { ProductCard } from "../../components/global/ProductCard";
import { HeaderContext } from "../../contexts/HeaderContext/HeaderContext";
import { VerifyUserDevice } from "../../contexts/verifyUserDevice";
import { ProductMock } from "../../mock/ProductMock";
import { CarouselDivWrapper, MainCarouselContainer } from "./styles";
import { NextButton, PrevButton } from "../../components/global/CarouselSlick/styles";

export const HomePage: React.FC = (): React.JSX.Element => {
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
  };
  return (
    <GridContainer>
      <MainCarouselContainer>
        <Carousel />
      </MainCarouselContainer>
      <CarouselDivWrapper>
        <CarouselSlick settings={settings}>
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
        </CarouselSlick>
      </CarouselDivWrapper>
    </GridContainer>
  );
};
