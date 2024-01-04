import { Categories } from "../components/global/Categories";
import { Header } from "../components/global/Header";
import { OpenHamburgerProvider } from "../contexts/hamburgerMenuOpening/hamburgerOpening";
import { VerifyUserDeviceProvider } from "../contexts/verifyUserDevice";
import { PageContainer } from "../styles";
import { CategoriesMobile } from "../components/global/CategoriesMobile";
import Gallery from "../components/global/CarouselMultiple";
import { Carousel } from "../components/global/Carousel";


export const HomePage = () => {
  return (
    <PageContainer>
      <OpenHamburgerProvider>
        <VerifyUserDeviceProvider>
          <Header />
          <CategoriesMobile />
          <Categories />
          <Carousel />
          <Gallery />
        </VerifyUserDeviceProvider>
      </OpenHamburgerProvider>
    </PageContainer>
  );
};
