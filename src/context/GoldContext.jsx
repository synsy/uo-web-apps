import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const GoldContext = createContext();

// Custom hook to use the context
export const useGold = () => useContext(GoldContext);

// Provider component to wrap the app
export const GoldProvider = ({ children }) => {
  const [totalGold, setTotalGold] = useState(0);
  const [players, setPlayers] = useState(1);

  // Calculate gold split dynamically
  const goldSplit = Math.round(totalGold / players);

  // Retrieve stored values from localStorage when component mounts
  useEffect(() => {
    const storedTotalGold = parseInt(localStorage.getItem("totalGold")) || 0;
    const storedPlayers = parseInt(localStorage.getItem("players")) || 1;

    setTotalGold(storedTotalGold);
    setPlayers(storedPlayers);
  }, []);

  // Save values to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("totalGold", totalGold);
    localStorage.setItem("players", players);
  }, [totalGold, players]);

  // Add gold
  const addGold = (amount) => setTotalGold((prev) => prev + amount);

  // Reset gold
  const resetGold = () => setTotalGold(0);

  // Change players count
  const changePlayers = (numPlayers) =>
    setPlayers(Math.max(1, parseInt(numPlayers) || 1));

  return (
    <GoldContext.Provider
      value={{
        totalGold,
        players,
        goldSplit,
        addGold,
        resetGold,
        changePlayers,
      }}
    >
      {children}
    </GoldContext.Provider>
  );
};
