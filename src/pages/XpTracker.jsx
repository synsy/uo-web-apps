import React, { useContext, useState } from "react";
import { XpContext } from "../context/XpContext";
import "./XpTracker.css";

const XpTracker = () => {
  const {
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
  } = useContext(XpContext);

  const [startingAspectXp, setStartingAspectXp] = useState(aspectXp.start);
  const [endingAspectXp, setEndingAspectXp] = useState(aspectXp.end);
  const [startingChainXp, setStartingChainXp] = useState(chainXp.start);
  const [endingChainXp, setEndingChainXp] = useState(chainXp.end);

  const dropdownOptions = [
    "Air", "Arcane", "Artisan", "Blood", "Command", "Death", "Discipline", "Earth", "Eldritch", "Fire", "Fortune",
    "Frost", "Gadget", "Harvest", "Holy", "Lightning", "Lyric", "Madness", "Poison", "Shadow", "Void", "Water", "War"
  ];

  // const aspectColors = {
  //   Air: "white", Arcane: "purple", Artisan: "gold", Blood: "red", Command: "green", Death: "grey", Discipline: "gold", Earth: "brown", 
  //   Eldritch: "purple", Fire: "red", Fortune: "yellow", Frost: "blue", Gadget: "bronze", Harvest: "green", Holy: "yellow", Lightning: "yellow", 
  //   Lyric: "pink", Madness: "red", Poison: "green", Shadow: "grey", Void: "purple", War: "orange", Water: "blue",
  // };

  const xpTierAmounts = [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 15000, 25000, 40000, 120000, 250000];

  const formatNumber = (number) => new Intl.NumberFormat().format(number);

  const handleAspectChange = (type, value) => {
    const newValue = Math.max(0, parseInt(value) || 0);
    if (type === "start") {
      setStartingAspectXp(newValue);
      setAspectXp((prev) => ({ ...prev, start: newValue }));
    } else if (type === "end") {
      setEndingAspectXp(newValue);
      setAspectXp((prev) => ({ ...prev, end: newValue }));
    }
  };

  const handleChainChange = (type, value) => {
    const newValue = Math.max(0, parseInt(value) || 0);
    if (type === "start") {
      setStartingChainXp(newValue);
      setChainXp((prev) => ({ ...prev, start: newValue }));
    } else if (type === "end") {
      setEndingChainXp(newValue);
      setChainXp((prev) => ({ ...prev, end: newValue }));
    }
  };

  const aspectXpGained = Math.max(0, endingAspectXp - startingAspectXp);
  const chainXpGained = Math.max(0, endingChainXp - startingChainXp);
  const tierXpValue = xpTierAmounts[numberDropdown] || 0;
  const aspectXpPercentage = endingAspectXp > startingAspectXp 
    ? Math.min(100, Math.round((endingAspectXp / tierXpValue) * 100))
    : 0;

  return (
    <div className="xp-tracker-container">
      {/* New Elements */}
      <div className="new-elements">
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              checked={isCheckboxChecked}
              onChange={(e) => setIsCheckboxChecked(e.target.checked)}
            />
            Dual Aspect?
          </label>
        </div>

        <div className="dropdown-container">
          <label>
            Aspect:
            <select
              value={firstDropdown}
              onChange={(e) => setFirstDropdown(e.target.value)}
            >
              <option value="">Select an option</option>
              {dropdownOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <div className="number-dropdown">
            <label>
              Tier Level:
              <select
                value={numberDropdown}
                onChange={(e) => setNumberDropdown(e.target.value)}
              >
                {Array.from({ length: 15 }, (_, i) => i).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {isCheckboxChecked && (
            <>
              <label>
                Second Aspect:
                <select
                  value={secondDropdown}
                  onChange={(e) => setSecondDropdown(e.target.value)}
                >
                  <option value="">Select an option</option>
                  {dropdownOptions
                    .filter((option) => option !== firstDropdown)
                    .map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                </select>
              </label>

              <label>
                Second Tier Level:
                <select
                  value={secondTierDropdown}
                  onChange={(e) => setSecondTierDropdown(e.target.value)}
                >
                  {Array.from({ length: 15 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </label>
            </>
          )}
        </div>
      </div>

      {/* Existing Elements */}
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

          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${aspectXpPercentage}%` }}>
              {aspectXpPercentage}%
            </div>
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
          <p className="xp-gained-label">
            <strong>Aspect XP Gained:</strong> {formatNumber(aspectXpGained)}
          </p>
        </div>
        <div className="xp-column">
          <p className="xp-gained-label">
            <strong>Chain XP Gained:</strong> {formatNumber(chainXpGained)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default XpTracker;
