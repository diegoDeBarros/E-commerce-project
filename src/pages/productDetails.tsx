import { useContext, useEffect, useState } from "react";
import { VerifyUserDevice } from "../contexts/verifyUserDevice";
import { HeaderContext } from "../contexts/HeaderContext/HeaderContext";
import { PageContainer } from "../styles";
import { LoginScreen } from "../components/global/LoginScreen";
import { CustomModal } from "../components/global/Modal";
import { Header } from "../components/global/Header";
import { Categories } from "../components/global/Categories";
import { CategoriesMobile } from "../components/global/CategoriesMobile";
import { ProductImages } from "../components/Product/ProductImages";
import { GridContainer } from "../components/global/GridContainer/styles";
import { ProductDetails } from "../components/Product/ProductDetails";

export const ProductDetailsPage: React.FC = (): React.JSX.Element => {
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
    <PageContainer>
      {deviceType === "mobile" ? (
        <LoginScreen />
      ) : (
        <CustomModal modalOpen={isModalOpen} closeModal={closeModal}>
          <LoginScreen />
        </CustomModal>
      )}

      <Header />
      {deviceType === "desktop" ? <Categories /> : <CategoriesMobile />}

      <GridContainer>
        <ProductImages />
        <ProductDetails />
      </GridContainer>
    </PageContainer>
  );
};
