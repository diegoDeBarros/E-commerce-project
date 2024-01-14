import React, { useContext } from "react";
import {
  AddToCartButton,
  AvailableSizes,
  BreadcrumbText,
  CartWrapper,
  DiscoutPriceText,
  InstallmentPaymentText,
  OriginalPriceText,
  ProductDescriptionText,
  ProductDetailsContainer,
  SizeOptionButton,
  SizeOptionButtonContainer,
  SizeText,
} from "./styles";
import { VerifyUserDevice } from "../../../contexts/verifyUserDevice";
import { NumberInput } from "../../global/InputButton";

export const ProductDetails: React.FC = (): React.JSX.Element => {
  const { deviceType } = useContext(VerifyUserDevice);

  return (
    <ProductDetailsContainer deviceType={deviceType}>
      <BreadcrumbText>HOME / INUTILISMO</BreadcrumbText>
      <ProductDescriptionText>
        CAMISETA OVERSIZED OFF WHITE - UM ANO EM UMA MÚSICA
      </ProductDescriptionText>
      <OriginalPriceText>DE:R$ 149,90</OriginalPriceText>
      <DiscoutPriceText>POR: R$ 99,90</DiscoutPriceText>
      <InstallmentPaymentText>6x de R$ 16,65 sem juros</InstallmentPaymentText>

      <AvailableSizes>
        <SizeText>Tamanho</SizeText>
        <SizeOptionButtonContainer>
          <SizeOptionButton>P</SizeOptionButton>
          <SizeOptionButton>M</SizeOptionButton>
          <SizeOptionButton>G</SizeOptionButton>
          <SizeOptionButton>2G</SizeOptionButton>
        </SizeOptionButtonContainer>
      </AvailableSizes>

      <CartWrapper>
        <NumberInput />
        <AddToCartButton>Adicionar</AddToCartButton>
      </CartWrapper>
    </ProductDetailsContainer>
  );
};
