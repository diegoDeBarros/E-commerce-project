import { CategoryBarContainer, CategoryName } from "./styles";
import { categoryMock } from "../../../mock/categoryMock";
import { useContext } from "react";
import { HeaderContext } from "../../../contexts/HeaderContext/HeaderContext";
import React from "react";

export const CategoriesMobile: React.FC = (): React.JSX.Element => {
  const { hamburgerOpen } = useContext(HeaderContext);

  return (
    <CategoryBarContainer isOpen={hamburgerOpen}>
      {categoryMock.map((category) => (
        <CategoryName>{category.categoryName}</CategoryName>
      ))}
    </CategoryBarContainer>
  );
};
