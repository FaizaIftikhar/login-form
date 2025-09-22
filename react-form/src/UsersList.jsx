import { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Users</h2>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "8px" }}>
            {user.name} <span style={{ color: "gray" }}>({user.email})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
