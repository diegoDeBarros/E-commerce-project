import styled from "styled-components";

export const ProductDetailsContainer = styled.div<{
  deviceType: string | undefined;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  grid-column: span ${({ deviceType }) => (deviceType === "desktop" ? 6 : 12)};
  padding: 10%;
`;

export const BreadcrumbText = styled.span`
  font-family: "Dosis";
  font-size: 12px;
`;
export const ProductDescriptionText = styled.h1`
  font-family: "Dosis";
  font-size: 32px;
  font-weight: 500;
`;
export const OriginalPriceText = styled.span`
  font-family: "Dosis";
  font-size: 14px;
`;
export const DiscoutPriceText = styled.span`
  font-family: "Dosis";
  font-size: 18px;
`;

export const InstallmentPaymentText = styled.span`
  font-family: "Dosis";
  font-size: 12px;
`;

export const AvailableSizes = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 2px;
  padding: 18px;
  gap: 8px;
`;

export const SizeText = styled.span`
  font-family: "Dosis";
  font-size: 12px;
`;

export const SizeOptionButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;
export const SizeOptionButton = styled.div`
  font-family: "Dosis";
  font-size: 11px;
  background-color: #e0e0e0;
  border-radius: 2px;
  padding: 4px 12px;
  transition: outline 0.1s ease;
  outline: 0px solid #00b081;

  &:hover {
    outline: 2px solid #00b081;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
export const AddToCartButton = styled.button`
  font-family: "Dosis";
  font-size: 14px;
  color: white;
  background-color: #00b081;
  border-radius: 4px;
  width: 100%;
  padding: 4px;
`;
