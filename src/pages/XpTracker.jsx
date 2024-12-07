import React, { useContext, useState } from "react";
import { XpContext } from "../context/XpContext";
import './XpTracker.css';

const XpTracker = () => {
  const { aspectXp, setAspectXp, chainXp, setChainXp } = useContext(XpContext);

  // Local states for input values
  const [startingAspectXp, setStartingAspectXp] = useState(aspectXp.start);
  const [endingAspectXp, setEndingAspectXp] = useState(aspectXp.end);
  const [startingChainXp, setStartingChainXp] = useState(chainXp.start);
  const [endingChainXp, setEndingChainXp] = useState(chainXp.end);

  // Format numbers with commas
  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  // Calculate XP gained
  const aspectXpGained = Math.max(0, endingAspectXp - startingAspectXp);
  const chainXpGained = Math.max(0, endingChainXp - startingChainXp);

  // Update global context when values change
  const handleAspectChange = (type, value) => {
    const newValue = Math.max(0, parseInt(value) || 0); // Ensure positive integers
    if (type === "start") {
      setStartingAspectXp(newValue);
      setAspectXp((prev) => ({ ...prev, start: newValue }));
    } else if (type === "end") {
      setEndingAspectXp(newValue);
      setAspectXp((prev) => ({ ...prev, end: newValue }));
    }
  };

  const handleChainChange = (type, value) => {
    const newValue = Math.max(0, parseInt(value) || 0); // Ensure positive integers
    if (type === "start") {
      setStartingChainXp(newValue);
      setChainXp((prev) => ({ ...prev, start: newValue }));
    } else if (type === "end") {
      setEndingChainXp(newValue);
      setChainXp((prev) => ({ ...prev, end: newValue }));
    }
  };

  return (
    <div className="xp-tracker-container">
      <div className="xp-inputs">
        <div className="input-group">
          <div>
            <label>Starting Aspect XP:</label>
            <input
              type="number"
              value={startingAspectXp}
              onChange={(e) => handleAspectChange("start", e.target.value)}
              min="0"
            />
          </div>

          <div>
            <label>Ending Aspect XP:</label>
            <input
              type="number"
              value={endingAspectXp}
              onChange={(e) => handleAspectChange("end", e.target.value)}
              min="0"
            />
          </div>
        </div>

        <div className="input-group">
          <div>
            <label>Starting Chain XP:</label>
            <input
              type="number"
              value={startingChainXp}
              onChange={(e) => handleChainChange("start", e.target.value)}
              min="0"
            />
          </div>

          <div>
            <label>Ending Chain XP:</label>
            <input
              type="number"
              value={endingChainXp}
              onChange={(e) => handleChainChange("end", e.target.value)}
              min="0"
            />
          </div>
        </div>
      </div>

      <div className="xp-results">
        <div className="xp-column">
          <p>
            <strong>Aspect XP Gained:</strong> {formatNumber(aspectXpGained)}
          </p>
        </div>
        <div className="xp-column">
          <p>
            <strong>Chain XP Gained:</strong> {formatNumber(chainXpGained)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default XpTracker;
