// src/components/InputField.jsx
import React from "react";

export default function InputField({
  label,
  type,
  name,
  value,
  setValue,
  placeholder,
  error
}) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}
