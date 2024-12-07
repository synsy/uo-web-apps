import React, { createContext, useState } from "react";

export const XpContext = createContext();

export const XpProvider = ({ children }) => {
  const [aspectXp, setAspectXp] = useState({ start: 0, end: 0 });
  const [chainXp, setChainXp] = useState({ start: 0, end: 0 });

  return (
    <XpContext.Provider value={{ aspectXp, setAspectXp, chainXp, setChainXp }}>
      {children}
    </XpContext.Provider>
  );
};
