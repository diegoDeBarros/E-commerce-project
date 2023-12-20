import { Header } from "./components/global/Header";
import { VerifyUserDeviceProvider } from "./contexts/verifyUserDevice";

function App() {
  return (
    <VerifyUserDeviceProvider>
      <Header />
    </VerifyUserDeviceProvider>
  );
}

export default App;
