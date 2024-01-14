import React from "react";

export interface HeaderContextProps {
  children?: React.ReactNode;
  hamburgerOpen?: boolean;
  toggleHamburgerOpen?: () => void;
  loginOpen?: boolean;
  toggleLoginOpen?: () => void;
}
