import React, { createContext, useRef, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  // sidebar state
  const [ isOpen, setIsOpen ] = useState(false);
  // const sidebarRef = useRef(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

// export default SidebarProvider;

