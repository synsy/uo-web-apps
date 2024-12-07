import React from "react";
import { NavLink } from "react-router-dom";
import './NavMenu.css';

const NavMenu = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
          >
              <h2>UO Web Apps</h2>
          </NavLink>
        
      </div>
      <nav className="nav-links">
        <div className="nav-item" id="nav-gold">
          <NavLink 
            to="/goldtracker" 
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
          >
            <span className="logo">💰</span> Gold Tracker
          </NavLink>
        </div>
        <div className="nav-item" id="nav-xp">
          <NavLink 
            to="/xptracker" 
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
          >
            <span className="logo">⚡</span> XP Tracker
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavMenu;
