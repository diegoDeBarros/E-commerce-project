import { styled } from "styled-components";

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background-color: white;
  font-family: dosis;
  height: 100%;
  position: relative;
  

`;
export const Overlay = styled.div<{ isOpen: boolean | undefined }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? '60%' : '0')};
  background-color: rgba(255, 255, 255, 0.7); /* Cor de fundo translúcido */
  color: orange; /* Cor do texto */
  overflow: hidden;
  transition: height 0.2s ease; /* Tempo e função de transição */

  display: flex;
  justify-content: center;
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

export const ProductSpecificationsWrapper = styled.div`

width:auto;
height: 100%;
background-color: transparent;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;


`
export const ProductSpecificationsList = styled.ul`

width:100%;
height: auto;
display: flex;
justify-content: space-evenly;

gap:4px;
`
export const ProductSpceficationName = styled.h2`

font-size: 24px;
color: black;
font-family: Dosis;

display: flex;
justify-content: center;

margin: 1rem 0 1rem 0;

`

export const ProductSpecificationLi = styled.li`



`
export const ProductSpecificationButton = styled.button`


background-color: lightgray;

height: 40px;
width: 40px;
min-width:40px;
width:auto;

font-weight: bold;

border:none;
border-radius: 8px;

&:hover{
  cursor: pointer;
}


`