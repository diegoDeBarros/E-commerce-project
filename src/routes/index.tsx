import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchBar } from "../components/global/Input/SearchBar";
import { VerifyUserDeviceProvider } from "../contexts/verifyUserDevice";
import { HomePage } from "../pages/homePage";
import { HeaderContextProvider } from "../contexts/HeaderContext/HeaderContext";
import { ProductDetailsPage } from "../pages/ProductDetails/productDetails";
import { TemplateMain } from "../pages/Template";
import { GridContainer } from "../components/global/GridContainer/styles";

export const AppRoutes: React.FC = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <VerifyUserDeviceProvider>
        <HeaderContextProvider>
          <GridContainer>
          <TemplateMain>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/produto" element={<ProductDetailsPage />}></Route>
            </Routes>
          </TemplateMain>
          </GridContainer>
        </HeaderContextProvider>
      </VerifyUserDeviceProvider>
    </BrowserRouter>
  );
};
