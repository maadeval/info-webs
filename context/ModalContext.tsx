import { createContext, useState } from "react";
import { ModalContextType, ModalProviderProps } from "./types";



export const ModalContext = createContext<ModalContextType>({} as ModalContextType)

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  return <ModalContext.Provider value={{ showModal, setShowModal }}>
    {children}
  </ModalContext.Provider>
}