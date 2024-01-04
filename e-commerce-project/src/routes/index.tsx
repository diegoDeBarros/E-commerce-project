import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { SearchBar } from "../components/global/Input/SearchBar";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/amãedediegoéboa" element={<HomePage/>}></Route>
        <Route path="/about" element={<div><h1>Diego é gay</h1></div>}></Route>
        <Route path="/teste/:qualquercoisa" element={<SearchBar/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
