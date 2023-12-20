import { createContext, useEffect, useState } from "react";
import { verifyUserDeviceProps } from "./types";

export const VerifyUserDevice = createContext<verifyUserDeviceProps>(
  {} as verifyUserDeviceProps
);

export const VerifyUserDeviceProvider = ({
  children,
}: verifyUserDeviceProps) => {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  const verifyChange = () => {
    if (window?.innerWidth >= 0 && window?.innerWidth <= 430) {
      setDeviceType("mobile");
    }
    if (window?.innerWidth > 430 && window?.innerWidth <= 1024) {
      setDeviceType("tablet");
    }
    if (window?.innerWidth > 1025) {
      setDeviceType("desktop");
    }
  };

  window.addEventListener("resize", () => {
    verifyChange();
  });

  return (
    <VerifyUserDevice.Provider value={{ deviceType }}>
      {children}
    </VerifyUserDevice.Provider>
  );
};
