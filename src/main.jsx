import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { GoldProvider } from './context/GoldContext.jsx'; // Import the provider
import { XpProvider } from './context/XpContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoldProvider>
      <XpProvider>
        <App />
      </XpProvider>
    </GoldProvider>
  </StrictMode>,
);
