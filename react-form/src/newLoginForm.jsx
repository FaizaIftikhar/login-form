// src/NewLoginForm.jsx
import React from "react";
import InputField from "./InputField";
import "./LoginForm.css"; // reuse same CSS

export default function NewLoginForm({
  formData,
  setFormData,
  errors,
  handleSubmit,
  handleReset,
  message,
  isFormValid,
}) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="login-container">
      <h2>Login Form</h2>

      <InputField
        label="Username:"
        name="username"
        type="text"
        value={formData.username}
        onChange={handleChange}
        placeholder="Enter username"
        error={errors.username}
      />

      <InputField
        label="Email:"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="you@example.com"
        error={errors.email}
      />

      <InputField
        label="Password:"
        name="password"
        type={formData.showPassword ? "text" : "password"}
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter password"
        error={errors.password}
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
        <button type="submit" disabled={!isFormValid}>
             Login
        </button>
        <button type="button" onClick={handleReset}>
             Reset
        </button>
      </div>

      {message && (
        <p className={message.startsWith("Welcome") ? "success" : "error"}>
          {message}
        </p>
      )}
    </form>
  );
}
