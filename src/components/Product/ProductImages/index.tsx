import React, { useContext } from "react";
import { Settings } from "react-slick";
import { VerifyUserDevice } from "../../../contexts/verifyUserDevice";
import { ProductMock } from "../../../mock/ProductMock";
import { CarouselSlick } from "../../global/CarouselSlick";
import { ProductCard } from "../../global/ProductCard";
import {
  ImageCarouselContainer,
  PreviewImage,
  PreviewImagesContainer,
  ProductImageContainer,
} from "./styles";
import { NextButton, PrevButton } from "../../global/CarouselSlick/styles";

export const ProductImages: React.FC = (): React.JSX.Element => {
  const { deviceType } = useContext(VerifyUserDevice);

  const settings: Settings = {
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
    <ProductImageContainer deviceType={deviceType}>
      {deviceType === "desktop" && (
        <PreviewImagesContainer>
          {ProductMock[0].imageLink.map((image, index) => (
            <PreviewImage key={index} src={image} />
          ))}
        </PreviewImagesContainer>
      )}

      <ImageCarouselContainer>
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
      </ImageCarouselContainer>
    </ProductImageContainer>
  );
};
