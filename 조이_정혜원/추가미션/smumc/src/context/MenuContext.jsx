import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return <MenuContext.Provider value={{ isOpen, handleOpen }}>{children}</MenuContext.Provider>;
};
