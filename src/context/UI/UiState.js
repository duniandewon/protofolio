import React, { createContext, useState } from 'react';

export const uiContext = createContext();

export const UiState = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const toggleUI = (ui) => {
    if (ui === 'modal') return setModal(!modal);
    if (ui === 'mobile-nav') return setMobileNav(!mobileNav);
  };

  return (
    <uiContext.Provider value={{ modal, mobileNav, toggleUI }}>
      {children}
    </uiContext.Provider>
  );
};

export default UiState;
