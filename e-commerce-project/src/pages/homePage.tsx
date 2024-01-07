import { useContext, useEffect, useState } from "react";
import { Carousel } from "../components/global/Carousel";
import { CarouselMultiple } from "../components/global/CarouselMultiple";
import { Categories } from "../components/global/Categories";
import { CategoriesMobile } from "../components/global/CategoriesMobile";
import { Header } from "../components/global/Header";
import { LoginScreen } from "../components/global/LoginScreen";
import { CustomModal } from "../components/global/Modal";
import { HeaderContext } from "../contexts/HeaderContext/HeaderContext";
import { VerifyUserDevice } from "../contexts/verifyUserDevice";
import { PageContainer } from "../styles";

export const HomePage: React.FC = (): React.JSX.Element => {
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
      <Carousel />
      <CarouselMultiple />
    </PageContainer>
  );
};
