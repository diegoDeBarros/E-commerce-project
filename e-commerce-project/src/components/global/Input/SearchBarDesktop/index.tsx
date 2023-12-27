import { SearchLoupeIcon } from "../../../../icons/SearchLoupeIcon";
import { SearchInput, SearchInputContainer, Button } from "./styles";

export const SearchBarDesktop: React.FC = () => {
  return (
    <SearchInputContainer>
      <SearchInput placeholder="Buscar..." />
      <Button>
        <SearchLoupeIcon />
      </Button>
    </SearchInputContainer>
  );
};
