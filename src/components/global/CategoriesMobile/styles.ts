import styled, { css, keyframes } from "styled-components";

export const CategoryBarContainer = styled.nav<{ isOpen: boolean | undefined }>`
  position: absolute;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  top: 70px;
  background-color: white;
  max-width: 70%;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.1) 2px 4px 8px 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow-x: hidden;
  z-index: 8;
`;

export const CategoryName = styled.span`
  font-size: 14px;
  color: black;
  max-width: 100%;
  color: black;
  font-family: "Dosis", sans-serif;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  box-sizing: border-box;
  padding: 5px;
  padding-left: 1rem;
`;
