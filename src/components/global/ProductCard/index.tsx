import { useState } from "react";
import {
  FinalPriceSpan,
  ImageContainer,
  InfosContainer,
  InitialPriceSpan,
  Overlay,
  PriceContainer,
  ProductSpceficationName,
  ProductSpecificationButton,
  ProductSpecificationLi,
  ProductSpecificationsList,
  ProductSpecificationsWrapper,
  TitleH1,
} from "./styles";

export const ProductCard: React.FC<ProductCardProps> = ({
  imageLink,
  productDescription,
  originalPrice,
  discoutPrice,
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <InfosContainer
      onMouseOver={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <ImageContainer src={imageLink[0]} alt="" />
      <TitleH1>{productDescription}</TitleH1>
      <PriceContainer>
        <InitialPriceSpan>DE</InitialPriceSpan>
        <InitialPriceSpan>R${originalPrice}</InitialPriceSpan>
      </PriceContainer>
      <PriceContainer>
        <FinalPriceSpan>POR</FinalPriceSpan>
        <FinalPriceSpan>R${discoutPrice}</FinalPriceSpan>
      </PriceContainer>
      <Overlay isOpen={isOpen}>
        <ProductSpecificationsWrapper>
          <ProductSpceficationName>Tamanho</ProductSpceficationName>
          <ProductSpecificationsList>
            <ProductSpecificationButton>P</ProductSpecificationButton>
          </ProductSpecificationsList>
          <ProductSpceficationName>Sexo</ProductSpceficationName>
          <ProductSpecificationsList>
            <ProductSpecificationLi>
              <ProductSpecificationButton>Masculino</ProductSpecificationButton>
            </ProductSpecificationLi>
          </ProductSpecificationsList>
        </ProductSpecificationsWrapper>
      </Overlay>
    </InfosContainer>
  );
};
