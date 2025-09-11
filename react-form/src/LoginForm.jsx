import React, { useState } from "react";
import "./LoginForm.css"; 

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setMessage("Please fill all the fields");
    } else {
      setMessage(`Welcome, ${email}`);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-container">
      <h2>Login</h2>

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
      />

      <label>Password:</label>
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
          />{" "}
          Show password
        </label>
      </div>

      <button type="submit">Login</button>

      {message && <p>{message}</p>}
    </form>
  );
}
