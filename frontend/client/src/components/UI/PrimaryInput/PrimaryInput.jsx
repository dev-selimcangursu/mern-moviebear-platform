import React from "react";
import { Input } from "antd";

function PrimaryInput({ type, name, value, onChange, onBlur, placeholder }) {
  return (
    <Input
      size="large"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
}

export default PrimaryInput;
