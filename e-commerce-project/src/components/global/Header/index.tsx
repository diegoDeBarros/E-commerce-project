import React from "react";
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
import { useContext, useState } from "react";
import { VerifyUserDevice } from "../../../contexts/verifyUserDevice";
import { SearchBarDesktop } from "../Input/SearchBarDesktop";
import { verifyUserDeviceProps } from "../../../contexts/types";
import { CategoryBarContainer } from "../Categories/styles";
import {
  OpenContext,
  OpenHamburgerProvider,
} from "../../../contexts/hamburgerMenuOpening/hamburgerOpening";

export const Header: React.FC<verifyUserDeviceProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { deviceType } = useContext(VerifyUserDevice);
  const { hamburgerOpen, toggleHamburgerOpen } = useContext(OpenContext);

  return (
    <>
      <HeaderContainer>
        {/* hamburger menu icon */}
        <SearchLoupeButton onClick={toggleHamburgerOpen}>
          <HamburgerMenuIcon />
        </SearchLoupeButton>

        {/* botão lupa*/}
        {deviceType == "mobile" || deviceType == "tablet" ? (
          <SearchLoupeButton
            onClick={() => {
              setOpen(!open);
            }}
          >
            <SearchLoupeIcon />
          </SearchLoupeButton>
        ) : (
          <SearchBarDesktop />
        )}
        <LogoWrapper />
        <ProfileIcon src={ProfileIconPng} />
        <ShoppingCartIcon src={ShoppingCartIconPng} />
      </HeaderContainer>

      {open ? <SearchBar /> : null}
    </>
  );
};
