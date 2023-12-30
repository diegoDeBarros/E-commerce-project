import React, { createContext, useState, useContext } from "react";
import { hamburgerOpeningProps } from "./types";

// 1. Create context
export const OpenContext = createContext<hamburgerOpeningProps>(
  {} as hamburgerOpeningProps
);
//2. Create context provider
export const OpenHamburgerProvider = ({ children }: hamburgerOpeningProps) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburgerOpen = () => {
    setHamburgerOpen((prevOpen) => !prevOpen);
    console.log(hamburgerOpen);
  };

  return (
    <OpenContext.Provider value={{ hamburgerOpen, toggleHamburgerOpen }}>
      {children}
    </OpenContext.Provider>
  );
};
