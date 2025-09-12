import React, { useState } from "react";
import "./Login.css";

// ✅ Reusable InputField Component
function InputField({ label, type, name, value, onChange, placeholder, error }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    showPassword: false,
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  //Validation Logic
  const validate = () => {
    let newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Email must include '@'";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setFormData((prev) => ({
        ...prev,
        message: `Welcome, ${formData.username}`,
        username: "",
        email: "",
        password: "",
        showPassword: false,
      }));
      setErrors({});
    } else {
      setFormData((prev) => ({ ...prev, message: "" }));
    }
  };

  const handleReset = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      showPassword: false,
      message: "",
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="login-container">
      <h2>Login</h2>

     
    </form>
  );
}
