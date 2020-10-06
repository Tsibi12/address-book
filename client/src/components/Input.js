import React from "react";

const Input = ({name, placeholder, type, value, defaultValue, onChange}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        placeholder={placeholder}
        className="form-control"
        name={name}
        onChange={ onChange }
        value={ value }
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};

export default Input;