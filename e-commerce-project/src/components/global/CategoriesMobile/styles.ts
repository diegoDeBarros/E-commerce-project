import styled from "styled-components";

export const CategoryBarContainer = styled.nav`
  position: absolute;
  left: 0;
  top: 70px;
  background-color: yellow;
  width: 80vw !important;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const CategoryName = styled.span`
  font-size: 14px;
  color: black;
  max-width: 100%;
  /* padding: 5px; */
  color: black;
  font-family: "Dosis", sans-serif;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  box-sizing: border-box;
  padding: 5px;
  padding-left: 1rem;
`;
