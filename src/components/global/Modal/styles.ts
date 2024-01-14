import styled from "styled-components";

export const OverflowContainer = styled.div<{ isOpen: boolean | undefined }>`
  width: ${({ isOpen }) => (isOpen ? '100vw' : '0')};
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 11;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

export const ModalContainer = styled.div<{ isOpen: boolean | undefined }>`
  height: 80%;
  width: 80%;
  background-color: white;
  overflow: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, ${({ isOpen }) => (isOpen ? '-50%' : '-150%')});
  transition: all 0.3s ease-in-out;
  z-index: 12;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }

`;


