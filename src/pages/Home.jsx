import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Useful Links</h1>
      <div className="links-container">
        <a
          href="https://portal.uooutlands.com/vendor-search"
          className="link-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="link-text">Outlands Vendor Malls</span>
        </a>
        <a
          href="https://www.exploreoutlands.com/"
          className="link-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="link-text">Explore Outlands</span>
        </a>
        <a
          href="https://wiki.uooutlands.com/Main_Page"
          className="link-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="link-text">Outlands Wiki</span>
        </a>
        <a
          href="https://www.outlandsbutler.com/"
          className="link-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="link-text">Outlands Butler</span>
        </a>
        <a
          href="https://outlandsdrip.com/"
          className="link-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="link-text">Outlands Drip</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
