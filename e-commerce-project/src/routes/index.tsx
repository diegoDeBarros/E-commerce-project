import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchBar } from "../components/global/Input/SearchBar";
import { VerifyUserDeviceProvider } from "../contexts/verifyUserDevice";
import { HomePage } from "../pages/homePage";
import { HeaderContextProvider } from "../contexts/HeaderContext/HeaderContext";

export const AppRoutes: React.FC = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <VerifyUserDeviceProvider>
        <HeaderContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </HeaderContextProvider>
      </VerifyUserDeviceProvider>
    </BrowserRouter>
  );
};
