// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from './components/App.jsx';  // Шлях до файлу правильно вказано


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
