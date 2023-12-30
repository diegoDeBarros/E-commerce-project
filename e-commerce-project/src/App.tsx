import { Carousel } from "./components/global/Carousel";
import { Categories } from "./components/global/Categories";
import { CategoryBarContainer } from "./components/global/Categories/styles";
import { CategoriesMobile } from "./components/global/CategoriesMobile";
import { Header } from "./components/global/Header";
import {
  OpenContext,
  OpenHamburgerProvider,
} from "./contexts/hamburgerMenuOpening/hamburgerOpening";
import {
  VerifyUserDevice,
  VerifyUserDeviceProvider,
} from "./contexts/verifyUserDevice";
import { PageContainer } from "./styles";

function App() {
  return (
    <PageContainer>
      <OpenHamburgerProvider>
        <VerifyUserDeviceProvider>
          <Header />
          <CategoriesMobile />
          <Categories />
          <Carousel />
        </VerifyUserDeviceProvider>
      </OpenHamburgerProvider>
    </PageContainer>
  );
}

export default App;
