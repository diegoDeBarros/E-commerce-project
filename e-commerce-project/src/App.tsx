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

function App() {
  return (
    <>
      <OpenHamburgerProvider>
        <VerifyUserDeviceProvider>
          <Header />
          <CategoriesMobile />
        </VerifyUserDeviceProvider>
      </OpenHamburgerProvider>
      {/* <Categories /> */}
    </>
  );
}

export default App;
