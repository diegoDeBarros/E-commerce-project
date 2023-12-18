import { HamburgerMenuIcon } from "../../../icons/HamburgerMenuIcon";
import { SearchLoupeIcon } from "../../../icons/SearchLoupeIcon";
import {
  HeaderContainer,
  LogoWrapper,
  ShoppingCartIcon,
  ProfileIcon,
  SearchLoupeButton,
} from "./styles";
import ShoppingCartIconPng from "../../../icons/shopping-cart.png";
import ProfileIconPng from "../../../icons/profile-icon.png";
import { SearchBar } from "../Input/SearchBar";
import { useState } from "react";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <HamburgerMenuIcon />
        <SearchLoupeButton
          onClick={() => {
            setOpen(!open);
          }}
        >
          <SearchLoupeIcon />
        </SearchLoupeButton>

        <LogoWrapper />
        <ProfileIcon src={ProfileIconPng} />
        <ShoppingCartIcon src={ShoppingCartIconPng} />
      </HeaderContainer>
      {open ? <SearchBar /> : null}
    </>
  );
};
