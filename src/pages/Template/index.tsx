import React, { useContext, useEffect, useState } from "react";
import { GridContainer } from "../../components/global/GridContainer/styles";
import { LoginScreen } from "../../components/global/LoginScreen";
import { CustomModal } from "../../components/global/Modal";
import { Header } from "../../components/global/Header";
import { Categories } from "../../components/global/Categories";
import { CategoriesMobile } from "../../components/global/CategoriesMobile";
import { VerifyUserDevice } from "../../contexts/verifyUserDevice";
import { HeaderContext } from "../../contexts/HeaderContext/HeaderContext";
import { TemplateMainContainer } from "./style";

export const TemplateMain: React.FC<TemplateMainProps> = ({
  children,
}): React.JSX.Element => {
  const { deviceType } = useContext(VerifyUserDevice);
  const { loginOpen, toggleLoginOpen } = useContext(HeaderContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    loginOpen && openModal();
  }, [loginOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    if (toggleLoginOpen) {
      toggleLoginOpen();
    }
  };

  return (
    <GridContainer>
      <TemplateMainContainer>
        {deviceType === "mobile" ? (
          loginOpen && <LoginScreen />
        ) : (
          <CustomModal modalOpen={isModalOpen} closeModal={closeModal}>
            <LoginScreen />
          </CustomModal>
        )}
        <Header />
        {deviceType === "desktop" ? <Categories /> : <CategoriesMobile />}
        {children}
      </TemplateMainContainer>
    </GridContainer>
  );
};
