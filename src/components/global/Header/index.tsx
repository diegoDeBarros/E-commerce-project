import React, { useContext, useState } from "react";
import { HeaderContext } from "../../../contexts/HeaderContext/HeaderContext";
import { VerifyUserDeviceProps } from "../../../contexts/types";
import { VerifyUserDevice } from "../../../contexts/verifyUserDevice";
import { HamburgerMenuIcon } from "../../../icons/HamburgerMenuIcon";
import { SearchLoupeIcon } from "../../../icons/SearchLoupeIcon";
import ProfileIconPng from "../../../icons/profile-icon.png";
import ShoppingCartIconPng from "../../../icons/shopping-cart.png";
import { SearchBar } from "../Input/SearchBar";
import { SearchBarDesktop } from "../Input/SearchBarDesktop";
import {
  HeaderContainer,
  LogoWrapper,
  ProfileIcon,
  SearchLoupeButton,
  ShoppingCartIcon,
} from "./styles";

export const Header: React.FC<
  VerifyUserDeviceProps
> = (): React.JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const { deviceType } = useContext(VerifyUserDevice);
  const { toggleHamburgerOpen, toggleLoginOpen } = useContext(HeaderContext);

  const SearchLoupeVisibleControll = () => {
    setOpen(!open);
  };

  return (
    <>
      <HeaderContainer>
        {deviceType == "desktop" ? (
          <SearchBarDesktop />
        ) : (
          <>
            <SearchLoupeButton onClick={toggleHamburgerOpen}>
              <HamburgerMenuIcon />
            </SearchLoupeButton>
            <SearchLoupeButton onClick={SearchLoupeVisibleControll}>
              <SearchLoupeIcon />
            </SearchLoupeButton>
          </>
        )}

        <LogoWrapper />
        <SearchLoupeButton onClick={toggleLoginOpen}>
          <ProfileIcon src={ProfileIconPng} />
        </SearchLoupeButton>

        <ShoppingCartIcon src={ShoppingCartIconPng} />
      </HeaderContainer>

      {open ? <SearchBar /> : null}
    </>
  );
};
