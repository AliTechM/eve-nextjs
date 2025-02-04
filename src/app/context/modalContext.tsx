"use client";
import { createContext, useContext, useState, ReactNode } from "react";

//   initial context state interface
interface ModalContextProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}

//  initial context state
const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  toggleModal: () => {},
});

//   provider props interface
interface ModalProviderProps {
  children: ReactNode;
}

//   provider component
export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen((prev) => !prev);

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

//   hook for using  modal  
export const useModal = (): ModalContextProps => {
  return useContext(ModalContext);
};
