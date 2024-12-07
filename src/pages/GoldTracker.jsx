import React from "react";
import { useGold } from "../context/GoldContext";
import "./GoldTracker.css";

const GoldTracker = () => {
  const { totalGold, players, goldSplit, addGold, resetGold, changePlayers } =
    useGold();

  // Format numbers with commas
  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  const handlePlayersChange = (event) => {
    const numPlayers = event.target.value;
    changePlayers(numPlayers);
  };

  return (
    <div className="gold-tracker-container">
      <div className="gold-section">
        <p><strong>Total Gold:</strong> {formatNumber(totalGold)}</p>

        <div className="buttons-container">
          <button onClick={() => addGold(5000)} className="gold-button">
            Add 5k
          </button>
          <button onClick={() => addGold(10000)} className="gold-button">
            Add 10k
          </button>
          <button onClick={resetGold} className="gold-button" id="gold-button-reset">
            Reset
          </button>
        </div>
      </div>

      <div className="players-section">
        <p id="players-label">Players:</p>
        <input
          type="number"
          value={players}
          onChange={handlePlayersChange}
          min="1"
          className="players-input"
        />
      </div>

      <div className="split-section">
        <p><strong>Gold Split:</strong> {formatNumber(goldSplit)}</p>
      </div>
    </div>
  );
};

export default GoldTracker;
