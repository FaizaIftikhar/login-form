//crrating reusable input field components
import React from "react";
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