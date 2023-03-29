import React from "react";

const Input = ({ name, placeholder, type, value, setValue, ...rest }) => {
  return (
    <div className="flex flex-wrap -mx-3 mb-4">
      <div className="w-full px-3">
        <label
          className="block text-gray-800 text-sm font-medium mb-1 capitalize"
          htmlFor={name}
        >
          {name}
        </label>

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id={name}
          type={type || "text"}
          className="form-input w-full text-gray-800"
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
