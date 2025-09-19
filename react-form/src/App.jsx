// src/App.js
import React, { useEffect } from "react";
import { UserProvider } from "./UserContext";
import { ThemeProvider, useTheme } from "./ThemeContext";
import LoginForm from "./LoginForm";
import UsersList from "./UserList";
import "./App.css";

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  // Apply theme class to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <button className="theme-toggle" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <LoginForm />
      <UsersList />
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </UserProvider>
  );
}
