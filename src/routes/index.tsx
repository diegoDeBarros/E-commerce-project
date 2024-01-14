import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchBar } from "../components/global/Input/SearchBar";
import { VerifyUserDeviceProvider } from "../contexts/verifyUserDevice";
import { HomePage } from "../pages/homePage";
import { HeaderContextProvider } from "../contexts/HeaderContext/HeaderContext";
import { ProductDetailsPage } from "../pages/productDetails";

export const AppRoutes: React.FC = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <VerifyUserDeviceProvider>
        <HeaderContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/produto" element={<ProductDetailsPage />}></Route>

          </Routes>
        </HeaderContextProvider>
      </VerifyUserDeviceProvider>
    </BrowserRouter>
  );
};
