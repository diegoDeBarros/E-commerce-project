import {
  FinalPriceSpan,
  ImageContainer,
  InfosContainer,
  InitialPriceSpan,
  PriceContainer,
  TitleH1,
} from "./styles";

export const ProductCard: React.FC<ProductCardProps> = ({
  imageLink,
  productDescription,
  originalPrice,
  discoutPrice,
}): JSX.Element => {
  return (
    <InfosContainer>
      <ImageContainer src={imageLink} alt="" />
      <TitleH1>{productDescription}</TitleH1>
      <PriceContainer>
        <InitialPriceSpan>DE</InitialPriceSpan>
        <InitialPriceSpan>R${originalPrice}</InitialPriceSpan>
      </PriceContainer>
      <PriceContainer>
        <FinalPriceSpan>POR</FinalPriceSpan>
        <FinalPriceSpan>R${discoutPrice}</FinalPriceSpan>
      </PriceContainer>
    </InfosContainer>
  );
};
