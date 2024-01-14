import { createContext, useEffect, useState } from "react";
import { VerifyUserDeviceProps } from "./types";

export const VerifyUserDevice: React.Context<VerifyUserDeviceProps> =
  createContext<VerifyUserDeviceProps>({} as VerifyUserDeviceProps);

export const VerifyUserDeviceProvider: React.FC<VerifyUserDeviceProps> = ({
  children,
}) => {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  const verificarTamanhoTela = () => {
    const larguraTela = window.innerWidth;

    if (larguraTela <= 430) {
      setDeviceType("mobile");
    } else if (larguraTela <= 1024) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }
  };

  useEffect(() => {
    verificarTamanhoTela();

    window.addEventListener("resize", verificarTamanhoTela);

    return () => {
      window.removeEventListener("resize", verificarTamanhoTela);
    };
  }, []);
  return (
    <VerifyUserDevice.Provider value={{ deviceType }}>
      {children}
    </VerifyUserDevice.Provider>
  );
};
