import React, { useContext } from "react";
import {
  ImageCarouselContainer,
  PreviewImage,
  PreviewImagesContainer,
  ProductImageContainer,
} from "./styles";
import { CarouselUnique } from "../../global/CarouselUnic";
import { ProductMock } from "../../../mock/ProductMock";
import { VerifyUserDevice } from "../../../contexts/verifyUserDevice";

export const ProductImages: React.FC = (): React.JSX.Element => {
  const { deviceType } = useContext(VerifyUserDevice);

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
        <CarouselUnique />
      </ImageCarouselContainer>
    </ProductImageContainer>
  );
};
