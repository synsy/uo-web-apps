import React, { createContext, useState } from "react";

export const XpContext = createContext();

export const XpProvider = ({ children }) => {
  const [aspectXp, setAspectXp] = useState({ start: 0, end: 0 });
  const [chainXp, setChainXp] = useState({ start: 0, end: 0 });

  const [firstDropdown, setFirstDropdown] = useState("");
  const [secondDropdown, setSecondDropdown] = useState("");
  const [numberDropdown, setNumberDropdown] = useState(0);
  const [secondTierDropdown, setSecondTierDropdown] = useState(0);

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  return (
    <XpContext.Provider
      value={{
        aspectXp,
        setAspectXp,
        chainXp,
        setChainXp,
        firstDropdown,
        setFirstDropdown,
        secondDropdown,
        setSecondDropdown,
        numberDropdown,
        setNumberDropdown,
        secondTierDropdown,
        setSecondTierDropdown,
        isCheckboxChecked,
        setIsCheckboxChecked,
      }}
    >
      {children}
    </XpContext.Provider>
  );
};
