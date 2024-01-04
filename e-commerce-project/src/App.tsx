import AliceCarousel from "react-alice-carousel";
import { Carousel } from "./components/global/Carousel";
import Gallery from "./components/global/CarouselMultiple";
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
import { AppRoutes } from "./routes";
import CarouselMultiple from "./components/global/CarouselMultiple";

function App() {
  // return <AppRoutes />;
  return <CarouselMultiple />;
}

export default App;
