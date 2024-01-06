import { Categories } from "../components/global/Categories";
import { Header } from "../components/global/Header";
import { OpenHamburgerProvider } from "../contexts/hamburgerMenuOpening/hamburgerOpening";
import { VerifyUserDeviceProvider } from "../contexts/verifyUserDevice";
import { PageContainer } from "../styles";
import { CategoriesMobile } from "../components/global/CategoriesMobile";
import { Carousel } from "../components/global/Carousel";
import { CarouselMultiple } from "../components/global/CarouselMultiple";
import { Modal } from "../components/global/Modal";
import { LoginScreen } from "../components/global/LoginScreen";

export const HomePage = () => {
  return (
    <OpenHamburgerProvider>
      <VerifyUserDeviceProvider>
        <PageContainer>
          {/* <Modal /> */}
          <Header />
          <CategoriesMobile />
          <Categories />
          <Carousel />
          <CarouselMultiple />
        </PageContainer>
        <LoginScreen />
      </VerifyUserDeviceProvider>
    </OpenHamburgerProvider>
  );
};
