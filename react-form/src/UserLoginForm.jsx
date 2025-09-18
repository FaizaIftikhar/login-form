// src/LoginForm.js (updated)
import React, { useState } from "react";
import "./Login.css";
import { useUser } from "./UserContext";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
    message: ""
  });

  const { login } = useUser();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const getUsernameFromEmail = (email) => {
    if (!email) return "";
    const namePart = email.split("@")[0];
    const pretty = namePart.replace(/[._\-]/g, " ");
    return pretty.charAt(0).toUpperCase() + pretty.slice(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.password) {
      setFormData((prev) => ({
        ...prev,
        message: "Please fill all the fields"
      }));
    } else {
      const username = getUsernameFromEmail(formData.email);
      login({ email: formData.email, username });

      setFormData((prev) => ({
        ...prev,
        message: `Welcome, ${username || formData.email}`,
        email: "",
        password: ""
      }));
    }
  };

  const handleReset = () => {
    setFormData({
      email: "",
      password: "",
      showPassword: false,
      message: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="login-container">
      <h2>Login</h2>

      <label>Email:</label>
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="you@example.com"
      />

      <label>Password:</label>
      <input
        name="password"
        type={formData.showPassword ? "text" : "password"}
        value={formData.password}
        onChange={handleChange}
        placeholder="password"
      />

      <div className="checkbox">
        <label>
          <input
            name="showPassword"
            type="checkbox"
            checked={formData.showPassword}
            onChange={handleChange}
          />{" "}
          Show password
        </label>
      </div>

      <div className="buttons">
        <button type="submit">Login</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>

      {formData.message && <p>{formData.message}</p>}
    </form>
  );
}
