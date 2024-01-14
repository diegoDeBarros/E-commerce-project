import { createContext, useState } from "react";
import { HeaderContextProps } from "./types";

export const HeaderContext: React.Context<HeaderContextProps> =
  createContext<HeaderContextProps>({} as HeaderContextProps);

export const HeaderContextProvider: React.FC<HeaderContextProps> = ({
  children,
}) => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);

  const toggleHamburgerOpen = (): void => {
    setHamburgerOpen((prevOpen: boolean) => !prevOpen);
  };
  const toggleLoginOpen = (): void => {
    setLoginOpen((prevOpen: boolean) => !prevOpen);
  };

  return (
    <HeaderContext.Provider
      value={{ hamburgerOpen, toggleHamburgerOpen, loginOpen, toggleLoginOpen }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
