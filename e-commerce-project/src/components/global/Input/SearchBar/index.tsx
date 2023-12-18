import { SearchLoupeIcon } from "../../../../icons/SearchLoupeIcon";
import { SearchInput, SearchInputContainer } from "./styles";

export const SearchBar: React.FC = () => {
  return (
    <SearchInputContainer>
      <SearchInput />
      <SearchLoupeIcon />
    </SearchInputContainer>
  );
};
