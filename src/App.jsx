import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import GoldTracker from "./pages/GoldTracker";
import XpTracker from "./pages/XpTracker";
import Home from "./pages/Home";
import { loginWithDiscord, getUser, logout } from './api/api';

const App = () => {
  const [user, setUser] = useState(null);

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []); // Empty dependency array means this runs only once when the component mounts

  const handleLogout = async () => {
    await logout();
    setUser(null); // Clear user data after logout
  };

  return (
    <Router>
      <div className="app-container">
        <NavMenu />
        <main className="main-content">
          {/* Conditional rendering based on user authentication */}
          {user ? (
            <div>
              <h1>Welcome, {user.username}</h1>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div>
              <h1>Please log in</h1>
              <button onClick={loginWithDiscord}>Login with Discord</button>
            </div>
          )}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/goldtracker" element={<GoldTracker />} />
            <Route path="/xptracker" element={<XpTracker />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
