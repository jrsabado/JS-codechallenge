import React from 'react';
import SettingsSelector from "./components/settings/SettingsSelector";
import Modal from "react-modal";
import './styles.css'; // Ensure your global styles are imported

Modal.setAppElement("#root");

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to the Settings Selector</h1>
        <p>Use the button below to adjust your settings.</p>
      </header>
      <main className="app-main">
        <SettingsSelector />
      </main>
    </div>
  );
}

export default App;
