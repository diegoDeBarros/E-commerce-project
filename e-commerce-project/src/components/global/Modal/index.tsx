import React, { useRef } from "react";
import { ModalContainer, OverflowContainer } from "./styles";

interface CustomModalProps {
  modalOpen: boolean | undefined;
  closeModal: () => void | undefined;
  children?: React.ReactNode;
}

export const CustomModal: React.FC<CustomModalProps> = ({ modalOpen, closeModal, children }) => {
  const modalRef = useRef(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <OverflowContainer isOpen={modalOpen} onClick={handleOverlayClick}>
      <ModalContainer isOpen={modalOpen} ref={modalRef}>
        {children}
      </ModalContainer>
    </OverflowContainer>
  );
};
