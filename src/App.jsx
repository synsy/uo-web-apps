import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import GoldTracker from "./pages/GoldTracker";
import XpTracker from "./pages/XpTracker";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <NavMenu />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Set Home as the default route */}
            <Route path="/goldtracker" element={<GoldTracker />} />
            <Route path="/xptracker" element={<XpTracker />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
