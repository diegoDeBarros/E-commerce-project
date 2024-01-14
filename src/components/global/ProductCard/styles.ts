import { styled } from "styled-components";

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background-color: white;
  height: 100%;
`;

export const TitleH1 = styled.h1`
  width: 100% !important;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  padding-top: 14px;
`;
export const PriceContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  /* Alinhar elementos da primeira coluna */
  & > :nth-child(odd) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const InitialPriceSpan = styled.span`
  color: grey;
  font-size: 12px;
  width: 100%;
  height: auto;
`;

export const FinalPriceSpan = styled.span`
  color: black;
  font-size: 14px;
  width: 100%;
  height: auto;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 400px;
`;
