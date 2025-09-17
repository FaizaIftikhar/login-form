import { useEffect, useState, useMemo } from "react";
import React from "react";
import axios from "axios";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import "./filter.css"; 

const UserItem = React.memo(({ user }) => (
  <li className="userlist-item">
    {user.name} <span className="userlist-email">({user.email})</span>
  </li>
));

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  if (loading) return <Loading message="Fetching users..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="userlist-container">
      <h2>Users Search</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="userlist-input"
      />

      {filteredUsers.length === 0 ? (
        <p className="userlist-empty">No users found</p>
      ) : (
        <ul className="userlist-list">
          {filteredUsers.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
