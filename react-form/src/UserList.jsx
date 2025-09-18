import React from "react";
import { useUser } from "./UserContext";

export default function UsersList() {
  const { user, logout } = useUser();

  return (
    <div>
      {user ? (
        <>
          <p>Welcome back, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in to see user content.</p>
      )}
    </div>
  );
}
