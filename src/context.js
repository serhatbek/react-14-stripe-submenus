import sublinks from './data';

import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubMenu = () => {
    setIsSubMenuOpen(true);
  };
  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubMenuOpen,
        isSidebarOpen,
        openSubMenu,
        closeSubMenu,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useGlobalContext };
