import { CategoryBarContainer, CategoryName } from "./styles";
import { categoryMock } from "../../../mock/categoryMock";
export const Categories: React.FC = () => {
  return (
    <CategoryBarContainer>
      {categoryMock.map((category) => (
        <CategoryName>{category.categoryName}</CategoryName>
      ))}
    </CategoryBarContainer>
  );
};
