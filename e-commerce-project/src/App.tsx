import { Categories } from "./components/global/Categories";
import { CategoryBarContainer } from "./components/global/Categories/styles";
import { Header } from "./components/global/Header";
import {
  VerifyUserDevice,
  VerifyUserDeviceProvider,
} from "./contexts/verifyUserDevice";

function App() {
  return (
    <>
      <VerifyUserDeviceProvider>
        <Header />
      </VerifyUserDeviceProvider>
      <Categories />
    </>
  );
}

export default App;
