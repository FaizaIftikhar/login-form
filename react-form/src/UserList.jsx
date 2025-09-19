// src/UsersList.js
import React from "react";
import { useUser } from "./UserContext";
import { useTheme } from "./ThemeContext";
import "./UserList.css";

export default function UsersList() {
  const { user, logout } = useUser();
  const { theme } = useTheme();

  return (
    <div className={`users-list ${theme}`}>
      {user ? (
        <>
          <p>👉 Welcome back, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in to see user content.</p>
      )}
    </div>
  );
}
