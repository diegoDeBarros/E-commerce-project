import { CategoryBarContainer, CategoryName } from "./styles";
import { categoryMock } from "../../../mock/categoryMock";
import { useContext } from "react";
import { OpenContext } from "../../../contexts/hamburgerMenuOpening/hamburgerOpening";

export const CategoriesMobile: React.FC = () => {
  const { hamburgerOpen, toggleHamburgerOpen } = useContext(OpenContext);

  return (
    <>
      {hamburgerOpen ? (
        <CategoryBarContainer>
          {categoryMock.map((category) => (
            <CategoryName>{category.categoryName}</CategoryName>
          ))}
        </CategoryBarContainer>
      ) : null}
    </>
  );
};
